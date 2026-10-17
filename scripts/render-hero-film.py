"""Render a photo-film from the AI-prepared, four-panel editorial image.

Python orchestrates FFmpeg only. The source image is prepared with imagegen;
this script adds camera motion, dissolves and video encoding, without image synthesis.
Run from the repository root with FFmpeg installed.
"""
from pathlib import Path
import json
import subprocess

root = Path(__file__).resolve().parents[1]
master = root / 'assets/work/hair-editorial-master.png'
out = root / 'public/media'
out.mkdir(exist_ok=True, parents=True)
probe = json.loads(subprocess.check_output([
    'ffprobe', '-v', 'error', '-show_entries', 'stream=width,height', '-of', 'json', str(master)
]))['streams'][0]
# The prepared image's actual horizontal seam is at y=705, not half-height.
# Inset 2px from each contact-sheet edge so adjacent panels never enter the film.
assert (probe['width'], probe['height']) == (1086, 1448), 'Reinspect panel bounds for a new master.'
seam_x, seam_y, inset = 543, 705, 2
panels = [
    (inset, inset, seam_x - 2*inset, seam_y - 2*inset),
    (seam_x + inset, inset, probe['width'] - seam_x - 2*inset, seam_y - 2*inset),
    (inset, seam_y + inset, seam_x - 2*inset, probe['height'] - seam_y - 2*inset),
    (seam_x + inset, seam_y + inset, probe['width'] - seam_x - 2*inset, probe['height'] - seam_y - 2*inset),
]
filters = ['[0:v]split=5[a][b][c][d][loop]']
for i, label in enumerate('abcd'):
    x, y, w, h = panels[i]
    zoom = '1+0.035*on/149' if i % 2 == 0 else '1.035-0.035*on/149'
    filters.append(
        f'[{label}]crop={w}:{h}:{x}:{y},scale=1440:1920:force_original_aspect_ratio=increase,crop=1440:1920,'
        f"zoompan=z='{zoom}':x='iw/2-iw/zoom/2':y='ih/2-ih/zoom/2':"
        f'd=150:s=720x960:fps=30,trim=duration=5,setpts=PTS-STARTPTS,'
        f'format=yuv420p,fps=30,settb=1/30[{label}0]'
    )
x, y, w, h = panels[0]
filters.append(
    f'[loop]crop={w}:{h}:{x}:{y},scale=720:960:force_original_aspect_ratio=increase,crop=720:960,trim=duration=0.65,'
    'setpts=PTS-STARTPTS,format=yuv420p,fps=30,settb=1/30[still]'
)
filters.extend([
    '[a0][b0]xfade=transition=fade:duration=0.65:offset=4.35,fps=30,settb=1/30[ab]',
    '[ab][c0]xfade=transition=fade:duration=0.65:offset=8.7,fps=30,settb=1/30[abc]',
    '[abc][d0]xfade=transition=fade:duration=0.65:offset=13.05,fps=30,settb=1/30[abcd]',
    '[abcd][still]xfade=transition=fade:duration=0.65:offset=17.4,fps=30[film]',
])
subprocess.run([
    'ffmpeg', '-hide_banner', '-loglevel', 'error', '-y', '-loop', '1', '-framerate', '30',
    '-i', str(master), '-filter_complex_threads', '1', '-filter_complex', ';'.join(filters),
    '-map', '[film]', '-t', '18.05', '-an', '-c:v', 'libx264', '-threads', '2',
    '-preset', 'medium', '-crf', '22', '-pix_fmt', 'yuv420p', '-movflags', '+faststart',
    str(out / 'merveilleux-looks.mp4'),
], check=True)
subprocess.run([
    'ffmpeg', '-hide_banner', '-loglevel', 'error', '-y', '-i', str(out / 'merveilleux-looks.mp4'),
    '-frames:v', '1', '-q:v', '2', str(out / 'merveilleux-looks-poster.jpg'),
], check=True)
print('Rendered 720×960 photo-film, 18.05 s, muted H.264, with first-frame poster.')
