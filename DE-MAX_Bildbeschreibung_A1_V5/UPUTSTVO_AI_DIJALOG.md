# DE-MAX Tutin — ÖSD A1 dijalog prema 40 slika

## Šta je već spremno
- Mobilna aplikacija 9:16, bez skrolovanja cele stranice
- Istih 40 fotografija kao DE-MAX Opis slike A1 (scenes.js)
- Učenik i AI biraju uloge sa slike; dugme ⇄ menja uloge
- Mikrofon u pregledaču: SpeechRecognition / webkitSpeechRecognition (de-DE), pregled pre slanja
- AI nemački glas: browser speechSynthesis, automatsko čitanje i pojedinačno slušanje
- AI razgovor i procena svakog odgovora (0, 1 ili 2 boda), A1 ispravka i objašnjenje na srpskom
- Rezultat iz proseka odgovora; izgovor i akcenat se NE boduju
- Nova stranica, bez izmene postojeće aplikacije

## Javni link aplikacije
https://nemackidemax13-oss.github.io/Biografije-A1/DE-MAX_Bildbeschreibung_A1_V5/dijalog-ai.html

## POVEZIVANJE OPENAI — OBAVEZNO
1. Otvorite https://dash.cloudflare.com/ → **Workers & Pages** → **Create** → **Worker**.
2. Napravite **novi** Worker, predlog naziva: `demax-a1-dijalog`. Ne menjajte postojeći Worker za mejlove.
3. U Editor Workera kopirajte ceo sadržaj fajla:
   https://github.com/nemackidemax13-oss/Biografije-A1/blob/main/DE-MAX_Bildbeschreibung_A1_V5/openai-dijalog-worker.js
4. Kliknite **Deploy**.
5. U podešavanjima novog Workera pronađite **Variables and Secrets** (nekad Settings → Variables and Secrets), dodajte tajnu (Secret) sa imenom **`nivoA1`** i kao vrednost unesite svoj pravi OpenAI API ključ (počinje obično sa `sk-`). Podržano je i rezervno ime `OPENAI_API_KEY`. Ponovo aktivirajte izmene ako to Cloudflare traži.
6. Kopirajte HTTPS URL novog Workera, npr. `https://demax-a1-dijalog.NALOG.workers.dev` (primer; vaš URL je drugačiji).
7. U A1 aplikaciji kliknite **⚙** → nalepite URL → **Sačuvaj i proveri**.
8. Izaberite sliku → **Počni dijalog** → odgovarajte mikrofonom ili tastaturom.

Važno: Nikada ne upisujte API ključ u HTML, u GitHub repo ili u polje URL u aplikaciji.
OpenAI troškovi nastaju pri svakom razgovoru. Worker ima jednostavno ograničenje po IP adresi od 75 zahteva na sat **po aktivnoj instanci**. Za stvarnu produkciju uključite i Cloudflare WAF / global rate-limiting.
Zbog ograničenja browser prepoznavanja govora mikrofon radi u podržanim pregledačima i sa dozvolom za mikrofon; na drugim uređajima učenik može da piše odgovore.

## iframe kod
```html
<iframe
  src="https://nemackidemax13-oss.github.io/Biografije-A1/DE-MAX_Bildbeschreibung_A1_V5/dijalog-ai.html"
  title="DE-MAX ÖSD A1 dijalog"
  allow="microphone; autoplay"
  style="width:100%;height:100dvh;border:0;display:block"
></iframe>
```

U nekim iframe okruženjima za mikrofon je potrebno eksplicitno odobrenje roditeljskog sajta (Permissions-Policy) i HTTPS, a lokalno čuvanje Worker URL-a može zavisiti od dozvola za kolačiće/smeštaj podataka.

## Izvorne slike
`scenes.js` pokazuje na `https://nemackidemax13-oss.github.io/A1-nivo/assets/v88/mobile-02.webp` do `mobile-41.webp`. OpenAI prima URL fotografije zajedno s opisom situacije. Aplikacija ne šalje korisnikov zvučni zapis direktno OpenAI: šalje prepoznati tekst, slike i sadržaj dijaloga.
