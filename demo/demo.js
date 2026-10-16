import { openingState } from './hours.js';
const photoItems = [
 {file:'salon-reception.jpg',name:'Unser Salon',alt:'Empfang und Spiegel bei Coiffeur Merveilleux'},
 {file:'salon-detail.jpg',name:'Dein Platz bei uns',alt:'Frisierplatz im Salon Coiffeur Merveilleux'},
 {file:'merve.jpeg',name:'Merve',alt:'Merve, Inhaberin von Coiffeur Merveilleux'},
 {file:'ayse.jpg',name:'Ayse',alt:'Ayse vom Team Coiffeur Merveilleux'},
 {file:'zilly.jpeg',name:'Zilly',alt:'Zilly, der Salonhund'},
 {file:'maske.jpg',name:'Merveilleux Maske',alt:'Merveilleux Haarmaske'},
 {file:'conditioner.jpg',name:'Merveilleux Conditioner',alt:'Merveilleux Conditioner'},
 {file:'shampoo.jpg',name:'Merveilleux Shampoo',alt:'Merveilleux Shampoo'}
];
const offers = [
 {file:'promo-foehn-abo.jpg',name:'5er-Föhn-Abo · CHF 130',alt:'Originalgrafik: Waschen und Föhnen im 5er-Abo für CHF 130'},
 {file:'promo-hair-botox.jpg',name:'Hair Botox · CHF 160',alt:'Originalgrafik: Hair Botox nach dem Sommer für CHF 160'}
];
const asset = file => new URL(`../assets/salon/${file}`, import.meta.url).href;
const menu = document.querySelector('#hauptnavigation');
const menuToggle = document.querySelector('.menu-toggle');
function closeMenu(){menu.classList.remove('is-open');menuToggle.setAttribute('aria-expanded','false');menuToggle.querySelector('span').textContent='+';}
menuToggle.addEventListener('click',()=>{const open=menuToggle.getAttribute('aria-expanded')!=='true';menuToggle.setAttribute('aria-expanded',String(open));menu.classList.toggle('is-open',open);menuToggle.querySelector('span').textContent=open?'×':'+';});
menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',closeMenu));
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&menu.classList.contains('is-open')){closeMenu();menuToggle.focus();}});
document.documentElement.classList.add('enhanced');
const reduce = matchMedia('(prefers-reduced-motion: reduce)');
let revealObserver;
if ('IntersectionObserver' in window && !reduce.matches){
 const items=[...document.querySelectorAll('[data-reveal]')];
 revealObserver = new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');revealObserver.unobserve(e.target);}}),{threshold:.06,rootMargin:'0px 0px -15px 0px'});
 items.forEach((el,i)=>{el.style.setProperty('--delay',`${i%3*70}ms`);revealObserver.observe(el);});
 document.documentElement.classList.add('motion-ready');
}
reduce.addEventListener('change',()=>{if(reduce.matches){document.querySelectorAll('[data-reveal]').forEach(el=>el.classList.add('visible'));revealObserver?.disconnect();}});
function updateHours(){const state=openingState();document.querySelectorAll('[data-opening-status]').forEach(el=>el.textContent=state.text);document.querySelectorAll('[data-day]').forEach(row=>{const today=Number(row.dataset.day)===state.day;row.classList.toggle('today',today);const th=row.querySelector('th');if(today&&!th.querySelector('.today-label')){const span=document.createElement('span');span.className='today-label';span.textContent=' · heute';th.append(span);}if(!today)th.querySelector('.today-label')?.remove();});document.querySelector('#visit-date').min=state.date;}
updateHours();setInterval(updateHours,60000);
const filterButtons=[...document.querySelectorAll('[data-filter]')];const galleryItems=[...document.querySelectorAll('.gallery-item')];
filterButtons.forEach(b=>b.addEventListener('click',()=>{const category=b.dataset.filter;filterButtons.forEach(x=>x.setAttribute('aria-pressed',String(x===b)));document.querySelector('.gallery-grid').classList.toggle('filtered',category!=='all');let count=0;galleryItems.forEach(item=>{const show=category==='all'||item.dataset.category===category;item.hidden=!show;if(show){count++;item.classList.remove('just-shown');void item.offsetWidth;item.classList.add('just-shown');item.querySelector('[data-reveal]')?.classList.add('visible');}});document.querySelector('#gallery-status').textContent=`${count} Bilder angezeigt`; }));
const tabs=[...document.querySelectorAll('[data-tab]')];const panels=[...document.querySelectorAll('.price-panel')];
const tablist=document.querySelector('.price-tabs');tablist.setAttribute('role','tablist');
function showPriceTab(tab,focus=false){tabs.forEach(b=>{const selected=b===tab;b.setAttribute('aria-selected',String(selected));b.tabIndex=selected?0:-1;});panels.forEach(panel=>{panel.hidden=panel.id!==`preise-${tab.dataset.tab}`;if(!panel.hidden)panel.querySelectorAll('[data-reveal]').forEach(el=>el.classList.add('visible'));});if(focus)tab.focus();}
tabs.forEach((tab,index)=>{tab.setAttribute('role','tab');tab.setAttribute('aria-controls',`preise-${tab.dataset.tab}`);document.querySelector(`#preise-${tab.dataset.tab}`).setAttribute('role','tabpanel');tab.addEventListener('click',()=>showPriceTab(tab));tab.addEventListener('keydown',e=>{let next;if(e.key==='ArrowRight')next=(index+1)%tabs.length;if(e.key==='ArrowLeft')next=(index-1+tabs.length)%tabs.length;if(e.key==='Home')next=0;if(e.key==='End')next=tabs.length-1;if(next!==undefined){e.preventDefault();showPriceTab(tabs[next],true);}});});showPriceTab(tabs[0]);
let lastTrigger=null;const photoDialog=document.querySelector('#photo-dialog');const bookingDialog=document.querySelector('#booking-dialog');let photoIndex=0;let photoMode='gallery';
function modalOpen(dialog,trigger){lastTrigger=trigger||document.activeElement;dialog.showModal();document.body.classList.add('dialog-open');}
for(const dialog of [photoDialog,bookingDialog]){dialog.querySelector('[data-close]').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog){const r=dialog.getBoundingClientRect();if(e.clientX<r.left||e.clientX>r.right||e.clientY<r.top||e.clientY>r.bottom)dialog.close();}});dialog.addEventListener('close',()=>{if(!document.querySelector('dialog[open]'))document.body.classList.remove('dialog-open');lastTrigger?.focus({preventScroll:true});});}
function renderPhoto(){const list=photoMode==='offer'?offers:photoItems;const p=list[photoIndex];const image=document.querySelector('#lightbox-image');image.src=asset(p.file);image.alt=p.alt;document.querySelector('#photo-title').textContent=p.name;document.querySelector('#photo-source').textContent=photoMode==='offer'?'Originalangebot von coiffeurmerveilleux.ch. Aktuelle Gültigkeit und Bedingungen bitte im Salon bestätigen.':'Originalfoto von coiffeurmerveilleux.ch';}
galleryItems.forEach(button=>button.addEventListener('click',()=>{photoMode='gallery';photoIndex=Number(button.dataset.photo);renderPhoto();modalOpen(photoDialog,button);}));
document.querySelectorAll('[data-offer]').forEach(button=>button.addEventListener('click',()=>{photoMode='offer';photoIndex=Number(button.dataset.offer);renderPhoto();modalOpen(photoDialog,button);}));
function cyclePhoto(delta){if(photoMode==='offer'){photoIndex=(photoIndex+delta+offers.length)%offers.length;}else{const indices=galleryItems.filter(item=>!item.hidden).map(item=>Number(item.dataset.photo));const at=indices.indexOf(photoIndex);photoIndex=indices[(at+delta+indices.length)%indices.length];}renderPhoto();}
photoDialog.querySelector('[data-prev]').addEventListener('click',()=>cyclePhoto(-1));photoDialog.querySelector('[data-next]').addEventListener('click',()=>cyclePhoto(1));photoDialog.addEventListener('keydown',e=>{if(e.key==='ArrowLeft'){e.preventDefault();cyclePhoto(-1);}if(e.key==='ArrowRight'){e.preventDefault();cyclePhoto(1);}});
const form=document.querySelector('#booking-form');const result=document.querySelector('#request-result');
document.querySelectorAll('[data-book]').forEach(a=>a.addEventListener('click',e=>{e.preventDefault();closeMenu();form.reset();result.hidden=true;document.querySelector('#copy-status').textContent='';const service=document.querySelector('#service');service.value=[...service.options].some(o=>o.value===a.dataset.book)?a.dataset.book:'Beratung';modalOpen(bookingDialog,a);}));
form.addEventListener('submit',e=>{e.preventDefault();if(!form.reportValidity())return;const selected=document.querySelector('#service').value;const day=document.querySelector('#visit-date').value;const text=document.querySelector('#message').value.trim();let summary=`Guten Tag liebes Merveilleux-Team, ich möchte einen Termin für ${selected} anfragen.`;if(day){const date=new Date(`${day}T12:00:00+01:00`);summary+=` Mein Wunschtag ist der ${new Intl.DateTimeFormat('de-CH',{dateStyle:'long',timeZone:'Europe/Zurich'}).format(date)}.`;}if(text)summary+=`\n${text}`;summary+='\nBitte teilt mir mit, was möglich ist.';document.querySelector('#request-summary').value=summary;result.hidden=false;result.scrollIntoView({behavior:reduce.matches?'instant':'smooth',block:'nearest'});document.querySelector('#request-summary').focus({preventScroll:true});});
document.querySelector('#copy-request').addEventListener('click',async()=>{const summary=document.querySelector('#request-summary');try{await navigator.clipboard.writeText(summary.value);document.querySelector('#copy-status').textContent='Notiz kopiert. Dein Termin ist noch nicht gebucht.';}catch{summary.focus();summary.select();document.querySelector('#copy-status').textContent='Bitte kopiere die markierte Notiz. Dein Termin ist noch nicht gebucht.';}});
