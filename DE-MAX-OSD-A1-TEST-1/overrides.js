read1 = (function improvedRead1(){
 const x=s.sub.r1,item=r1[x],selected=num('r1',String(x));
 const completed=Object.keys(s.answers.r1).filter(k=>s.answers.r1[k]!=='').length;
 const steps=r1.map(([l],i)=>{const v=num('r1',String(i)),done=v!=='';return `<button type="button" class="r1Step ${i===x?'current':done?'done':''}" onclick="sub('r1',${i})" aria-label="Situacija ${l}" aria-pressed="${i===x}"><strong>${l}</strong><small>${done?'✓ Oglas '+v:'Izaberi'}</small></button>`}).join('');
 const tiles=ads.map(([title,desc],i)=>{const n=i+1,other=r1.map(([l],j)=>num('r1',String(j))===String(n)?l:null).filter(Boolean),active=selected===String(n);return `<article class="r1Ad ${active?'selected':other.length?'assigned':''}"><button class="r1Pick" type="button" onclick="selectR1(${n})" aria-label="Izaberi oglas ${n}: ${esc(title)}"><span class="r1AdTop"><span class="r1AdNum">${String(n).padStart(2,'0')}</span><span class="r1Used">${active?'✓ POVEZANO':other.length?'Veza: '+other.join(', '):'OGLAS'}</span></span><span class="r1AdTitle">${esc(title)}</span><span class="r1AdText">${esc(desc)}</span></button><div class="r1AdFoot"><span class="r1Choose">${active?'✓ Izabrano':'Dodirni za izbor'}</span><button class="r1More" type="button" onclick="modal('r1ad-${i}')">Detalji ↗</button></div></article>`}).join('');
 return `<section class="screen r1Page"><div class="r1IntroLine"><div class="kicker">LESEVERSTEHEN · AUFGABE 1 · 10 PUNKTE</div><span class="r1Count">${completed}/5 povezano</span></div><h2 class="r1Heading">Poveži rečenice i oglase</h2><p class="r1Hint">Dodirni situaciju A–E, zatim odgovarajući oglas 1–6. Jedan oglas je višak.</p><div class="r1Steps" role="group" aria-label="Situacije A do E">${steps}</div><div class="r1Sticky"><div class="r1Situation"><span class="r1SituationLetter">${item[0]}</span><div class="r1SituationMain"><small>SITUACIJA ${item[0]} · ${x+1} OD 5</small><p>${esc(item[1])}</p>${selected!==''?`<span class="r1SituationMatch">✓ Povezano sa oglasom ${esc(selected)}</span>`:''}</div></div></div><div class="r1SectionBar"><strong>Odaberi odgovarajući oglas</strong><span>6 oglasa · 1 višak</span></div><div class="r1AdsGrid">${tiles}</div><p class="r1BottomHint">Dodirni oglas da ga povežeš. Za kompletan tekst odaberi „Detalji“. Odgovori se čuvaju.</p></section>`;
});
function selectR1(n){return (function improvedSelectR1(n){
 const active=String(s.sub.r1);
 for(const key in s.answers.r1)if(key!==active&&String(s.answers.r1[key])===String(n))delete s.answers.r1[key];
 s.answers.r1[active]=String(n);if(s.sub.r1<r1.length-1)s.sub.r1+=1;s.modal=null;save();render(false);
})(n);}
const oldR1Modal=modal;modal = (function improvedModal(name){
 if(!name.startsWith('r1ad-'))return oldR1Modal(name);
 const i=Number(name.slice(5)),a=ads[i];if(!a)return;
 s.modal=name;
 const title=`Oglas ${i+1} · ${a[0]}`;
 const body=`<div class="r1ModalCard"><span class="r1ModalNumber">${i+1}</span><h4>${esc(a[0])}</h4><p>${esc(a[1])}</p><button class="r1ModalPick" type="button" onclick="selectR1(${i+1})">✓ Poveži sa situacijom ${r1[s.sub.r1][0]}</button></div>`;
 $('overlay').innerHTML=`<div class="modalWrap" onclick="closeModal(event)"><div class="modal" role="dialog" aria-modal="true" aria-label="${esc(title)}" onclick="event.stopPropagation()"><div class="modalHead"><h3>${esc(title)}</h3><button class="close" onclick="closeModal()" aria-label="Zatvori">×</button></div><div class="modalBody">${body}</div></div></div>`;
});
render();setInterval(timer,1000);