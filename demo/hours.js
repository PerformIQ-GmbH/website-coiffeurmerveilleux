export const schedule = Object.freeze({ 1: null, 2: [600, 1110], 3: [600, 1110], 4: [600, 1110], 5: [600, 1110], 6: [540, 960], 0: null });
const weekdays = ['Sonntag', 'Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag', 'Samstag'];
const time = minutes => `${Math.floor(minutes / 60).toString().padStart(2, '0')}:${(minutes % 60).toString().padStart(2, '0')}`;
export function openingState(date = new Date()) {
  const p = Object.fromEntries(new Intl.DateTimeFormat('en-GB', {timeZone:'Europe/Zurich', year:'numeric', month:'2-digit', day:'2-digit', weekday:'short', hour:'2-digit', minute:'2-digit', hourCycle:'h23'}).formatToParts(date).map(x=>[x.type,x.value]));
  const day = ({Sun:0,Mon:1,Tue:2,Wed:3,Thu:4,Fri:5,Sat:6})[p.weekday];
  const now = Number(p.hour)*60+Number(p.minute);
  const today = schedule[day];
  const open = Boolean(today && now >= today[0] && now < today[1]);
  let text = open ? `Jetzt geöffnet bis ${time(today[1])}` : 'Jetzt geschlossen';
  if (!open) {
    if (today && now < today[0]) text += ` · heute ab ${time(today[0])}`;
    else for(let offset=1;offset<=7;offset++){const next=(day+offset)%7;if(schedule[next]){text+=` · ${weekdays[next]} ab ${time(schedule[next][0])}`;break;}}
  }
  return {open, day, text, date:`${p.year}-${p.month}-${p.day}`};
}
