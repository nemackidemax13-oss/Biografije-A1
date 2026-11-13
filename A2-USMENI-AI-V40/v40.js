
/* DE-MAX V40 independent extension of V30. Original link is untouched. */
(function(){
"use strict";
const q=id=>document.getElementById(id);
const esc=v=>String(v??"").replace(/[&<>"']/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const norm=v=>String(v||"").replace(/\s+/g," ").trim();
const scenarios=[
["Ausflug planen","Planirajte izlet sa kursom nemačkog.",["📍 Wohin?","📅 Wann?","🚆 Wie fahren?","🎒 Was mitnehmen?"],["Wir möchten einen Ausflug machen. Wohin möchten Sie fahren?","Wann möchten Sie fahren?","Wie fahren wir dorthin?","Was sollen wir mitnehmen?"]],
["Geburtstag organisieren","Zajedno pripremate rođendansku proslavu.",["📅 Wann?","🏠 Wo?","🎁 Geschenk?","🍰 Essen?"],["Wann sollen wir die Geburtstagsfeier machen?","Wo möchten wir feiern?","Welches Geschenk sollen wir kaufen?","Was brauchen wir zu essen?"]],
["Kinoabend","Dogovarate zajednički odlazak u bioskop.",["🎬 Film?","📅 Wann?","🎟️ Tickets?","📍 Treffpunkt?"],["Welchen Film möchten Sie sehen?","Wann haben Sie Zeit?","Wer kauft die Tickets?","Wo treffen wir uns?"]],
["Gemeinsam einkaufen","Dogovarate zajedničku kupovinu.",["🛒 Was?","🏬 Wo?","📅 Wann?","💶 Wie viel?"],["Was müssen wir einkaufen?","In welches Geschäft gehen wir?","Wann treffen wir uns?","Wie viel Geld möchten wir ausgeben?"]],
["Deutsch lernen","Dogovarate zajedničko vežbanje nemačkog.",["📚 Was?","🏠 Wo?","📅 Wann?","⏰ Wie lange?"],["Was möchten Sie zuerst üben?","Wo können wir zusammen lernen?","Wann haben Sie Zeit?","Wie lange wollen wir lernen?"]],
["Sport am Wochenende","Organizujete sportsku aktivnost.",["⚽ Sport?","📍 Wo?","📅 Wann?","👥 Wer?"],["Welchen Sport möchten Sie machen?","Wo möchten wir Sport machen?","Wann treffen wir uns?","Wen möchten wir einladen?"]],
["Im Restaurant","Dogovarate zajednički odlazak u restoran.",["🍽️ Wo?","⏰ Wann?","👥 Wer?","📞 Reservierung?"],["In welches Restaurant gehen wir?","Wann möchten Sie essen gehen?","Wen wollen wir einladen?","Wer reserviert den Tisch?"]],
["Ein Geschenk kaufen","Kupujete poklon za nastavnicu nemačkog.",["🎁 Was?","💶 Preis?","🏬 Wo?","📅 Wann?"],["Was können wir als Geschenk kaufen?","Wie viel möchten wir ausgeben?","Wo bekommen wir das Geschenk?","Wann wollen wir einkaufen?"]]
];
const V={serial:0,ready:new Set(),part:null,stream:null,rec:null,ctx:null,interval:0,chunks:[],working:false,transcribing:false};
const originalSpeak=showSpeak,originalResults=showResults;
const V40_DIRECT_URL=location.origin+location.pathname+"?v=20261113-v44-replit-ios-android";
function micPolicyAllowed(){
 try{const p=document.permissionsPolicy||document.featurePolicy;return p?.allowsFeature?.("microphone")??null}catch(e){return null}
}
function sendMicStatus(state){
 if(window.parent!==window)try{window.parent.postMessage({source:"DEMAX_A2_V40",kind:"microphone",state},"*")}catch(e){}
}
function micBlockedMessage(){
 return 'Mikrofon je blokiran unutar Replit iframe-a. U Replitu dodajte allow="microphone; autoplay; fullscreen" na iframe ili otvorite direktni HTTPS link.';
}
// Recovery link is ONLY for a failure in the second part, not on the intro screen.
function micFallbackLink(afterEl){
 const a=document.createElement("a");
 a.href=V40_DIRECT_URL;a.target="_blank";a.rel="noopener noreferrer";
 a.className="v40-mic-direct";
 a.textContent="Otvori A2 u pregledaču (Safari / Chrome)";
 afterEl?.insertAdjacentElement("afterend",a);
 return a;
}
/* The first screen has only the start button. On that tap, request the mic
   using the same getUserMedia permission flow as the working A1 version.
   The browser controls its native permission dialog. */
const intro=document.querySelector("#intro .intro-sub");
if(intro)intro.innerHTML="ÖSD A2 · AI simulacija V40<br>Predstavljanje · 5 tema · 10 pitanja · Drugi deo";
const introBtn=q("begin");
if(introBtn){
 introBtn.addEventListener("click",()=>{
  // V30 has its own capture-phase listener; reuse its pending stream instead
  // of requiring the student to click a second test/permission button.
  const request=DM_MIC.pending||(dmTrackLive()?Promise.resolve(true):dmPermit(true));
  Promise.resolve(request).then(ok=>sendMicStatus(ok?"allowed":"blocked")).catch(()=>sendMicStatus("blocked"));
 },{capture:true});
}
function fallbackTopicQuestion(topic,context,number){
 const low=norm(context).toLowerCase(),n=topic.title.split(" · ")[0];
 const list={
  Familie:/kind|kinder|sohn|tochter/.test(low)?["Wie alt sind Ihre Kinder?","Was machen Sie gern mit Ihren Kindern?"]:["Haben Sie Geschwister?","Was machen Sie mit Ihrer Familie?"],
  Beruf:["Wo arbeiten Sie?","Was machen Sie bei der Arbeit?"],
  Arbeit:["Wo arbeiten Sie?","Was machen Sie bei der Arbeit?"],
  Musik:["Wann hören Sie Musik?","Wer ist Ihr Lieblingssänger?"],
  Sport:["Wie oft machen Sie Sport?","Machen Sie lieber allein oder mit Freunden Sport?"],
  Deutsch:["Warum lernen Sie Deutsch?","Wie oft üben Sie Deutsch?"],
  Sprachen:["Warum lernen Sie Deutsch?","Wie oft üben Sie Deutsch?"],
  Wohnort:["Was gefällt Ihnen an Ihrer Stadt?","Was kann man in Ihrer Stadt machen?"],
  Reisen:["Mit wem reisen Sie gern?","Wohin möchten Sie nächstes Jahr reisen?"],
  Urlaub:["Mit wem machen Sie Urlaub?","Wohin möchten Sie nächstes Jahr fahren?"]
 };
 const arr=list[n];return arr?.[number]||null;
}
async function contextual(ti,qi){
 const id=app.chosen[ti],topic=TOPICS[id];
 const speech=norm(app.originalTranscripts?.["theme-"+id+"-q--1"]||app.responses["theme-"+id+"-q--1"]);
 const prevQ=qi===1?app.questions[ti]?.[0]?.q:"";
 const prevA=qi===1?norm(app.responses["theme-"+id+"-q-0"]):"";
 const preset=app.questions[ti]?.[qi]||{q:"Was machen Sie gern?",qt:"Šta rado radite?",a:"Ich mache gern Sport."};
 const local=fallbackTopicQuestion(topic,speech+" "+prevA,qi);
 const backup=local?{q:local,qt:"",a:""}:preset;
 if(!app.aiEndpoint||(!speech&&!prevA))return backup;
 try{
  const data=await Promise.race([
   requestWorker({type:"generate_questions",topic:topic.title,count:1,
    candidateTranscript:speech,previousQuestion:prevQ,previousAnswer:prevA,level:"A2",
    instructions:"Generiši samo JEDNO jednostavno A2 potpitanje na nemačkom koje se nadovezuje na stvarno izgovoreni govor kandidata. Ne izmišljaj činjenice niti ponavljaj prethodno pitanje. JSON: {questions:[{q,qt,a,at}]}. Pitanje do 22 reči."}),
   new Promise(resolve=>setTimeout(()=>resolve(null),6500))
  ]);
  const item=Array.isArray(data?.questions)?data.questions[0]:null;
  if(item&&typeof item.q==="string"&&item.q.length<175&&item.q.endsWith("?")&&item.q!==prevQ)
   return {q:norm(item.q),qt:norm(item.qt),a:norm(item.a),at:norm(item.at)};
 }catch(e){}
 return backup;
}
showSpeak=function(){
 if(app.question<0)return originalSpeak();
 const ti=app.topic,qi=app.question,key=app.chosen[ti]+":"+qi;
 if(V.ready.has(key))return originalSpeak();
 const serial=++V.serial;
 stage("speaking","4 / 5 · PITANJA");
 q("speakHeading").textContent="Pripremam AI pitanje";
 q("speakDe").textContent="Bitte warten …";
 q("speakSr").textContent="Pitanje se prilagođava odgovoru.";
 q("speakStatus").textContent="Priprema kratkog pitanja na nemačkom…";
 q("speakNext").disabled=true;
 contextual(ti,qi).then(data=>{
  if(serial!==V.serial||app.screen!=="speaking"||app.topic!==ti||app.question!==qi)return;
  app.questions[ti][qi]=data;V.ready.add(key);originalSpeak();
 }).catch(()=>{if(serial===V.serial&&app.screen==="speaking"){V.ready.add(key);originalSpeak()}})
 .finally(()=>{q("speakNext").disabled=false});
};
const part=document.createElement("section");part.id="v40part2";part.className="screen";
part.innerHTML='<div class="v40-head"><div><h2>Teil 2 · Gemeinsam planen</h2><small>DE-MAX A2 · AI razgovor V40</small></div><span class="pill" id="v40step">0 / 4</span></div>'+
'<div class="v40-inner"><div class="v40-task"><strong id="v40scenario"></strong><p id="v40scenarioSr"></p><div class="v40-points" id="v40points"></div></div>'+
'<div id="v40chat" class="v40-chat"></div><div class="v40-part2-prompt"><small>PRÜFERIN / PRÜFER</small><strong id="v40prompt"></strong></div>'+
'<div class="v40-part2-response"><label for="v40answer">VAŠ NEMAČKI ODGOVOR · MIKROFON ILI RUČNI UNOS</label><textarea id="v40answer" lang="de" placeholder="Govor će biti transkribovan ovde, a možete i sami uneti odgovor."></textarea></div>'+
'<div class="v40-toolbar"><button id="v40mic" class="btn soft">🎙 Govori</button><button id="v40stop" class="btn red">■ Završi govor</button><button id="v40repeat" class="btn soft">🔊 Ponovi pitanje</button></div>'+
'<div class="v40-status" id="v40status">Spremno za drugi deo.</div><p class="v40-mini">Automatski završetak nakon 5 sekundi tišine; ako mikrofon nije dostupan, unesite tekst. Nema automatskog prelaska dalje.</p></div>'+
'<div class="v40-actions"><button id="v40change" class="btn soft">↻ Nova tema</button><button id="v40next" class="btn green">Pokreni razgovor ›</button><button id="v40done" class="btn red full">Završi drugi deo i prikaži rezultate ✓</button></div>';
document.querySelector("#app main").append(part);
const directPart2=micFallbackLink(q("v40status"));
directPart2.id="v40direct";directPart2.hidden=true;
function status(x){q("v40status").textContent=x}
function scenario(){return scenarios[V.part.index]}
function vStop(){
 if(V.interval)clearInterval(V.interval);V.interval=0;
 if(V.ctx){try{V.ctx.close()}catch(e){}V.ctx=null}
 if(V.rec){try{if(V.rec.state!=="inactive")V.rec.stop()}catch(e){}V.rec=null}
 if(V.stream){if(V.stream!==DM_MIC.stream)try{V.stream.getTracks().forEach(t=>t.stop())}catch(e){}V.stream=null}
}
function vRender(){
 const p=V.part;if(!p)return;const s=scenario();
 q("v40scenario").textContent=s[0];q("v40scenarioSr").textContent=s[1];
 q("v40points").innerHTML=s[2].map(x=>'<div class="v40-point">'+esc(x)+'</div>').join("");
 q("v40step").textContent=(p.started?Math.min(p.step+1,4):0)+" / 4";
 q("v40prompt").textContent=p.question||'Pritisnite „Pokreni razgovor”.';
 q("v40chat").innerHTML=p.history.slice(-6).map(x=>'<div class="v40-chat-row'+(x.role==="student"?" student":"")+'"><b>'+(x.role==="student"?"UČENIK":"AI ISPITIVAČ")+'</b>'+esc(x.text)+'</div>').join("");
 q("v40answer").value=p.draft||"";
 q("v40next").textContent=!p.started?"Pokreni razgovor ›":p.step>=3?"Završi zadatak ✓":"Sledeća replika ›";
 q("v40mic").disabled=!p.started||p.finished;q("v40stop").disabled=!p.started||p.finished;
}
function vOpen(){
 vStop();V.serial++;V.part={index:Math.floor(Math.random()*scenarios.length),step:0,started:false,finished:false,history:[],draft:"",question:""};
 stage("v40part2","5 / 5 · PLANIRANJE");
 // Keep the same permitted mic stream from Part 1 on mobile, including Replit.
 if(dmTrackLive())V.stream=DM_MIC.stream;
 vRender();status("Odaberite „Pokreni razgovor”.");
}
showResults=function(){vOpen()};
function say(de,then){
 if(!window.speechSynthesis||!window.SpeechSynthesisUtterance){then?.();return}
 try{
  speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(de);u.lang="de-DE";u.rate=.86;
  let done=false;const finish=()=>{if(!done){done=true;then?.()}};
  u.onend=finish;u.onerror=finish;
  speechSynthesis.speak(u);
  setTimeout(finish,Math.max(6500,de.length*150));
 }catch(e){then?.()}
}
async function permit(){
 if(V.stream?.getAudioTracks().some(x=>x.readyState==="live"))return true;
 // Request permission with the exact V30 getUserMedia function on the user's tap.
 // This intentionally bypasses all custom V40 permission-policy prechecks.
 const ok=await dmPermit(true);
 if(ok&&dmTrackLive()){
  V.stream=DM_MIC.stream;
  q("v40direct").hidden=true;
  sendMicStatus("allowed");
  return true;
 }
 status(micBlockedMessage()+" Možete i upisati odgovor.");
 q("v40direct").hidden=false;
 sendMicStatus("blocked");
 return false;
}
function listen(){
 if(!V.part?.started||V.part.finished||V.rec?.state==="recording")return;
 if(!V.stream?.getAudioTracks().some(t=>t.readyState==="live")){status("Mikrofon još nije aktivan. Pritisnite „Govori” za ponovno uključivanje.");return}
 if(!window.MediaRecorder){status("Snimanje nije podržano; upišite odgovor.");return}
 try{
  const mime=["audio/webm;codecs=opus","audio/mp4","audio/webm"].find(x=>MediaRecorder.isTypeSupported(x))||"";
  V.rec=mime?new MediaRecorder(V.stream,{mimeType:mime}):new MediaRecorder(V.stream);
  V.chunks=[];
  V.rec.ondataavailable=e=>{if(e.data?.size)V.chunks.push(e.data)};
  V.rec.start(1200);
  status("🔴 Slušam odgovor. Odbrojavanje 5 sekundi počinje nakon prestanka govora.");
  try{
   const C=window.AudioContext||window.webkitAudioContext;if(!C)return;
   V.ctx=new C();V.ctx.resume?.().catch(()=>{});
   const source=V.ctx.createMediaStreamSource(V.stream),an=V.ctx.createAnalyser();an.fftSize=1024;source.connect(an);
   const buf=new Uint8Array(1024);let heard=false,last=Date.now(),noiseFloor=.004,strongFrames=0;
   V.interval=setInterval(()=>{
    if(!V.rec||V.rec.state!=="recording"||V.ctx?.state!=="running"||V.transcribing)return;
    an.getByteTimeDomainData(buf);let power=0;for(const v of buf){const x=(v-128)/128;power+=x*x}
    const rms=Math.sqrt(power/1024),threshold=Math.min(.035,Math.max(.0065,noiseFloor*2));
    if(rms>threshold){strongFrames++;if(strongFrames>=2){heard=true;last=Date.now()}}
    else{strongFrames=0;if(!heard)noiseFloor=noiseFloor*.94+rms*.06}
    if(heard){const remaining=Math.max(0,5000-(Date.now()-last));
      if(remaining<5000)status("Tišina: "+Math.ceil(remaining/1000)+" s · Odgovor se završava, bez prelaska dalje.");
      if(remaining===0)finishAudio();}
   },130);
  }catch(e){status("🔴 Snimam odgovor. Pritisnite „Završi govor” kada završite.")}
 }catch(e){status("Mikrofon ne može da snima. Upišite odgovor.")}
}
async function finishAudio(){
 if(!V.rec||V.rec.state==="inactive"||V.transcribing)return;
 V.transcribing=true;
 if(V.interval)clearInterval(V.interval);V.interval=0;
 if(V.ctx){try{V.ctx.close()}catch(e){}V.ctx=null}
 const rec=V.rec,chunks=V.chunks;
 const stopped=new Promise(resolve=>{rec.addEventListener("stop",resolve,{once:true});setTimeout(resolve,1700)});
 try{rec.stop()}catch(e){}
 status("Prepoznajem nemački govor…");await stopped;V.rec=null;
 try{
  const blob=new Blob(chunks,{type:rec.mimeType||"audio/webm"});
  if(blob.size<600)throw Error("empty");
  const form=new FormData();form.append("language","de");
  form.append("context","ÖSD A2 Gemeinsam eine Aufgabe lösen: "+scenario()[0]);
  const ext=rec.mimeType.includes("mp4")?"mp4":"webm";
  form.append("file",blob,"a2-teil2."+ext);
  const c=new AbortController(),timer=setTimeout(()=>c.abort(),27000);
  let res;try{res=await fetch(DM_MIC.transcribeURL,{method:"POST",body:form,signal:c.signal,mode:"cors"})}finally{clearTimeout(timer)}
  const data=await res.json();
  if(!res.ok)throw Error("http");
  const spoken=norm(data.text||data.transcript);
  if(!spoken)throw Error("no text");
  q("v40answer").value=spoken;V.part.draft=spoken;
  status("✓ Odgovor je prepoznat. Pritisnite „Sledeća replika” kada završite.");
 }catch(e){status("Transkripcija nije dostupna. Unesite odgovor ručno i nastavite.")}
 finally{V.transcribing=false}
}
async function nextPrompt(step,previous,answer){
 const backup=scenario()[3][Math.min(step,3)];
 if(!app.aiEndpoint)return backup;
 try{
  const data=await Promise.race([
   requestWorker({type:"planning_dialogue_turn",scenario:scenario()[0],level:"A2",
    previousQuestion:previous,studentAnswer:answer,history:V.part.history.slice(-6),
    instructions:"Ti si partner u jednostavnom A2 dogovoru na nemačkom. Kratko reaguj na poslednji odgovor učenika i postavi jedno povezano pitanje. Ne izmišljaj podatke. JSON {replyDe,replySr}."}),
   new Promise(resolve=>setTimeout(()=>resolve(null),6500))
  ]);
  const de=norm(data?.replyDe||data?.questionDe);
  if(de.endsWith("?")&&de.length<170)return de;
 }catch(e){}
 return backup;
}
async function next(){
 if(V.working||V.transcribing)return;
 const p=V.part;if(!p||p.finished)return;
 V.working=true;q("v40next").disabled=true;
 try{
  if(!p.started){
   const permitPromise=permit();
   p.started=true;p.question=scenario()[3][0];p.history.push({role:"examiner",text:p.question});
   vRender();status("Ispitivač čita pitanje…");
   await permitPromise;
   say(p.question,()=>{if(V.part===p)listen()});return;
  }
  if(V.rec?.state==="recording")await finishAudio();
  const answer=norm(q("v40answer").value);
  if(!answer){status("Izgovorite ili upišite odgovor pre nastavka.");return}
  p.history.push({role:"student",text:answer});p.draft="";
  if(p.step>=3){p.finished=true;vRender();status("✓ Zadatak je završen. Otvorite rezultate.");return}
  status("Pripremam sledeću repliku…");
  const reply=await nextPrompt(p.step+1,p.question,answer);
  if(V.part!==p)return;
  p.step++;p.question=reply;p.history.push({role:"examiner",text:reply});
  vRender();status("AI čita sledeće pitanje.");
  say(reply,()=>{if(V.part===p&&!p.finished)listen()});
 }finally{V.working=false;q("v40next").disabled=false}
}
q("v40mic").onclick=async()=>{await permit();listen()};
q("v40stop").onclick=finishAudio;
q("v40repeat").onclick=()=>{if(V.rec?.state==="recording"){status("Prvo završite govor.");return}if(V.part?.question)say(V.part.question)};
q("v40next").onclick=next;
q("v40answer").oninput=()=>{if(V.part)V.part.draft=q("v40answer").value};
q("v40change").onclick=()=>{
 if(V.working||V.transcribing)return;
 const idx=(V.part?.index??0)+1;vStop();
 V.part={index:idx%scenarios.length,step:0,started:false,finished:false,history:[],draft:"",question:""};
 vRender();status("Novi zadatak je spreman.");
};
q("v40done").onclick=()=>{
 if(V.working||V.transcribing)return;
 if(!V.part?.started){status("Prvo pokrenite razgovor.");return}
 if(V.rec?.state==="recording"){status("Prvo završite snimanje govora.");return}
 const a=norm(q("v40answer").value);
 if(a&&!V.part.history.some(x=>x.role==="student"&&x.text===a))V.part.history.push({role:"student",text:a});
 V.part.finished=true;vStop();try{speechSynthesis.cancel()}catch(e){}
 originalResults();showV40Summary();
};
const resultScroll=document.querySelector("#results .scroll");
const scorePanel=document.createElement("div");
scorePanel.id="v40score";
const originalScore=q("resultScore")?.closest(".glass");
if(originalScore)resultScroll.insertBefore(scorePanel,originalScore);
const pdf=document.createElement("button");pdf.className="v40-pdf-btn";pdf.textContent="↓ Preuzmi HD PDF izveštaj";
if(originalScore)originalScore.insertAdjacentElement("beforebegin",pdf);
function textAnswers(){
 const a=[app.originalTranscripts?.["intro-0"]||app.responses["intro-0"]||""];
 app.chosen.forEach(id=>[-1,0,1].forEach(n=>a.push(app.originalTranscripts?.["theme-"+id+"-q-"+n]||app.responses["theme-"+id+"-q-"+n]||"")));
 (V.part?.history||[]).filter(x=>x.role==="student").forEach(x=>a.push(x.text));
 return a.map(norm).filter(Boolean);
}
function rubric(){
 const completeTopics=app.chosen.filter(id=>norm(app.responses["theme-"+id+"-q--1"])).length;
 const answers=app.chosen.flatMap(id=>[0,1].map(i=>norm(app.responses["theme-"+id+"-q-"+i])));
 const answered=answers.filter(Boolean).length;
 const participation=(V.part?.history||[]).filter(x=>x.role==="student"&&x.text.split(/\s+/).length>=3).length;
 const unique=new Set((textAnswers().join(" ").toLowerCase().match(/[a-zäöüß]{3,}/g)||[])).size;
 const grammarEntries=Object.values(app.grammarReviews||{}).filter(x=>x?.state==="checked");
 const grammar=grammarEntries.length>=5?Math.round((5-grammarEntries.filter(x=>x.hasError).length/grammarEntries.length*3.5)*2)/2:null;
 const first=Math.round((completeTopics/5*.55+answered/10*.45)*6)/2;
 const second=Math.round(Math.min(1,participation/4)*6)/2;
 const vocabulary=Math.round(Math.min(1,unique/75)*10)/2;
 return {rows:[["Prvi deo",first,3],["Drugi deo",second,3],["Rečnik",vocabulary,5],["Izgovor i tečnost",null,4],["Gramatika",grammar,5]],total:first+second+vocabulary+(grammar||0),max:11+(grammar===null?0:5),answered};
}
function showV40Summary(){
 const r=rubric();
 scorePanel.className="v40-score-card";
 scorePanel.innerHTML='<h3>DE-MAX A2 AI V40 · Oba dela ispita</h3>'+
 '<p class="v40-note">Orijentaciono bodovanje na osnovu transkripta. Izgovor se ne može pouzdano oceniti bez audio analize. Ovo nije zvanična ÖSD ocena.</p>'+
 '<table class="v40-score-table">'+r.rows.map(x=>'<tr><td>'+esc(x[0])+'</td><td>'+(x[1]===null?"Nije ocenjeno":esc(x[1]+" / "+x[2]))+'</td></tr>').join("")+'</table>'+
 '<p><b>Procenjene kategorije: '+esc(r.total+" / "+r.max)+'</b> · '+r.answered+' / 10 odgovorenih pitanja</p>'+
 '<label class="fieldlabel" for="v40name">IME I PREZIME (ZA PDF)</label><input id="v40name" maxlength="90" placeholder="Ime i prezime kandidata" style="width:100%;padding:10px;border:1px solid #cddaf0;border-radius:10px;margin-top:7px">';
 const caption=q("scoreCaption");if(caption)caption.textContent="V30 bodovanje 10 pitanja (informativno)";
}
function reportElement(){
 const r=rubric(),name=norm(q("v40name")?.value)||"Kandidat";
 const div=document.createElement("article");div.className="v40-report-layout";
 let html='<header><div><h1>DE-MAX TUTIN</h1><p>A2 USMENI · AI V40 · Od 2013 sa Vama</p></div><b>NEZVANIČNA SIMULACIJA</b></header>'+
 '<h2>Završni pregled</h2><div class="v40-report-info"><p><b>Kandidat:</b> '+esc(name)+'</p><p><b>Datum:</b> '+esc(new Date().toLocaleString("sr-RS"))+'</p></div>'+
 '<h2>Orijentacioni rezultat</h2><table><tr><th>Kriterijum</th><th>Bodovi</th></tr>'+
 r.rows.map(x=>'<tr><td>'+esc(x[0])+'</td><td>'+(x[1]===null?"Nije ocenjeno":esc(x[1]+" / "+x[2]))+'</td></tr>').join("")+'</table>'+
 '<p><b>Delimična procena:</b> '+esc(r.total+" / "+r.max)+' ocenjenih kategorija. Ukupni mogući maksimum je 20.</p>'+
 '<h2>Prvi deo · Predstavljanje i 5 tema</h2>';
 const blocks=[{title:"Predstavljanje",question:"Können Sie sich vorstellen?",key:"intro-0"}];
 app.chosen.forEach((id,i)=>blocks.push({title:"Tema "+(i+1)+" · "+TOPICS[id].title,question:"Sprechen Sie bitte über das Thema "+TOPICS[id].title.split(" · ")[0],key:"theme-"+id+"-q--1"}));
 app.chosen.forEach((id,i)=>[0,1].forEach(n=>blocks.push({title:"Tema "+(i+1)+" · Pitanje "+(n+1),question:app.questions[i]?.[n]?.q||"",key:"theme-"+id+"-q-"+n})));
 blocks.forEach(b=>{
  const original=app.originalTranscripts?.[b.key]||app.responses[b.key]||"(nema odgovora)";
  const review=app.grammarReviews?.[b.key];
  html+='<div class="v40-report-answer"><h3>'+esc(b.title)+'</h3><p><b>Pitanje:</b> '+esc(b.question)+'</p><p class="de"><b>Rekli ste:</b> '+esc(original)+'</p>';
  if(review?.state==="checked"){
   if(review.hasError&&review.corrected)html+='<p><b>Ispravka:</b> '+esc(review.corrected)+'</p>';
   if(review.explanation)html+='<p><b>Objašnjenje:</b> '+esc(review.explanation)+'</p>';
  }else html+='<p class="sr">AI gramatička provera nije dostupna ili nije završena.</p>';
  html+='</div>';
 });
 html+='<h2>Drugi deo · Gemeinsam eine Aufgabe lösen</h2><p><b>'+esc(scenario()[0])+'</b> · '+esc(scenario()[1])+'</p>';
 (V.part?.history||[]).forEach(d=>html+='<div class="v40-report-answer"><p><b>'+(d.role==="student"?"Učenik":"Ispitivač")+':</b> '+esc(d.text)+'</p></div>');
 html+='<h2>Preporuke</h2><p>Vežbajte pune nemačke rečenice, postavljanje pitanja, razgovor i zajedničko dogovaranje. Pogledajte gramatičke ispravke nakon završetka provere.</p>'+
 '<p class="v40-report-footer">DE-MAX TUTIN · Samo za vežbu. Ovaj dokument nije zvanični ÖSD sertifikat ili službena ocena. Audio obrađuje povezani servis za transkripciju.</p>';
 div.innerHTML=html;return div;
}
pdf.onclick=async()=>{
 const report=reportElement(),host=document.createElement("div");host.className="v40-pdf-host";host.append(report);document.body.append(host);
 pdf.disabled=true;pdf.textContent="Pripremam PDF…";
 try{
  if(typeof window.html2pdf==="function"){
   await window.html2pdf().set({margin:[10,9,10,9],filename:"DE-MAX-A2-USMENI-V40.pdf",image:{type:"jpeg",quality:.98},html2canvas:{scale:2,backgroundColor:"#fff",windowWidth:820},jsPDF:{unit:"mm",format:"a4",orientation:"portrait"},pagebreak:{mode:["css","legacy"]}}).from(report).save();
  }else window.print();
 }catch(e){window.print()}
 finally{host.remove();pdf.disabled=false;pdf.textContent="↓ Preuzmi HD PDF izveštaj"}
};
const oldRestart=q("restart")?.onclick;
if(q("restart"))q("restart").onclick=()=>{vStop();V.part=null;V.ready.clear();V.serial++;oldRestart?.();scorePanel.replaceChildren()};
/* Keep the MediaRecorder active when a mobile permission prompt briefly hides the page.
   Do not pause its monitor permanently or switch to another question. */
window.addEventListener("pagehide",vStop);
})();
