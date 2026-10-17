const video=document.querySelector('#hero-film');
const frame=document.querySelector('.hero-film');
const toggle=document.querySelector('#film-toggle');
const status=document.querySelector('#film-status');
const choices=[...document.querySelectorAll('[data-film-look]')];
const motion=matchMedia('(prefers-reduced-motion: reduce)');
const connection=navigator.connection;
let inView=false;
let userPaused=false;
let manualPlayback=false;
let failed=false;
let pendingSeek=null;
const labels=['Bordeaux','Eisblond','Braun','Balayage'];
const seekTimes=[0,5.1,9.45,13.8];

document.querySelectorAll('[data-film-ui]').forEach(el=>el.hidden=false);
video.muted=true;

function markLook(index){choices.forEach((button,i)=>button.setAttribute('aria-pressed',String(i===index)));}
function updateControl(){
 if(failed){
  toggle.disabled=true;toggle.querySelector('span').textContent='Standbild';
  toggle.setAttribute('aria-label','Fotofilm nicht verfügbar; Standbild wird angezeigt');
  frame.classList.remove('film-playing');return;
 }
 const playing=!video.paused&&!video.ended;
 toggle.querySelector('span').textContent=playing?'Film pausieren':'Film starten';
 toggle.setAttribute('aria-label',playing?'Fotofilm pausieren':'Fotofilm starten');
 toggle.querySelector('path').setAttribute('d',playing?'M8 5v14M16 5v14':'m8 5 11 7-11 7Z');
 frame.classList.toggle('film-playing',playing);
}
function ensureSource(){
 if(!video.hasAttribute('src')){
  // Called only for permitted autoplay or an explicit visitor action.
  // Load enough media to allow still selection even when play() is not requested.
  video.preload='auto';
  video.src=new URL(video.dataset.filmSrc,document.baseURI).href;
  video.load();
 }
}
function canRun(){return !failed&&inView&&!document.hidden&&!userPaused&&(manualPlayback||(!motion.matches&&!connection?.saveData));}
async function reconcile(){
 if(!canRun()){video.pause();updateControl();return;}
 ensureSource();
 try{await video.play();}
 catch{
  // Browser autoplay restrictions leave a working manual play button and poster.
  if(canRun())status.textContent='Die automatische Wiedergabe ist blockiert. Starte den Film mit der Taste.';
 }
 // Visibility or preferences may have changed while play() was pending.
 if(!canRun())video.pause();
 updateControl();
}
function seekToChoice(){
 if(pendingSeek===null||video.readyState<1)return;
 video.currentTime=seekTimes[pendingSeek];
 markLook(pendingSeek);
 pendingSeek=null;
}

toggle.addEventListener('click',()=>{
 if(failed)return;
 if(!video.paused){userPaused=true;video.pause();status.textContent='Fotofilm pausiert.';}
 else{userPaused=false;manualPlayback=true;status.textContent='Fotofilm gestartet.';void reconcile();}
 updateControl();
});
choices.forEach((button,index)=>button.addEventListener('click',()=>{
 if(failed)return;
 userPaused=true;video.pause();pendingSeek=index;
 ensureSource();seekToChoice();
 status.textContent=`${labels[index]} als Standbild ausgewählt. Mit «Film starten» setzt du die Sequenz fort.`;
 updateControl();
}));
video.addEventListener('loadedmetadata',seekToChoice);
video.addEventListener('loadeddata',()=>frame.classList.add('film-ready'));
video.addEventListener('play',updateControl);
video.addEventListener('pause',updateControl);
video.addEventListener('timeupdate',()=>{
 const t=video.currentTime;
 markLook(t<4.675||t>=17.725?0:t<9.025?1:t<13.375?2:3);
});
video.addEventListener('error',()=>{
 failed=true;video.pause();video.hidden=true;
 toggle.disabled=true;toggle.querySelector('span').textContent='Standbild';
 toggle.setAttribute('aria-label','Fotofilm nicht verfügbar; Standbild wird angezeigt');
 choices.forEach(button=>button.disabled=true);
 status.textContent='Der Fotofilm ist gerade nicht verfügbar. Das Standbild bleibt sichtbar.';
 frame.classList.remove('film-ready','film-playing');
});
document.addEventListener('visibilitychange',()=>void reconcile());
motion.addEventListener('change',()=>{manualPlayback=false;void reconcile();});
connection?.addEventListener?.('change',()=>{manualPlayback=false;void reconcile();});
if('IntersectionObserver' in window){
 const visibility=new IntersectionObserver(entries=>{
  inView=entries[0].isIntersecting;void reconcile();
 },{threshold:0.12});
 visibility.observe(document.querySelector('.film-stage'));
}else{
 // Browsers without an observer keep manual playback; do not autoplay offscreen.
 inView=true;userPaused=true;
}
updateControl();
