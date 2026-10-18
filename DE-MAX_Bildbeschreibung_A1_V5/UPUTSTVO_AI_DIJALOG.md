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

## POSEBAN CLOUDFLARE WORKER SAMO ZA A1 USMENI

**Mejlovi ostaju na postojećem a1nivo Workeru.** Za ovaj usmeni ispit napravi potpuno novi Cloudflare Worker sa imenom `a1usmeni`. Ne menjaj a1nivo.

1. Otvori [gotovu stranicu sa kodom i uputstvom](https://nemackidemax13-oss.github.io/Biografije-A1/DE-MAX_Bildbeschreibung_A1_V5/OBJAVI_POSEBAN_WORKER_A1_USMENI.html).
2. Cloudflare → Workers & Pages → Create Worker → naziv `a1usmeni` → Deploy.
3. U novom Workeru otvori Edit code → klik unutar koda → Ctrl+A → nalepi kod kopiran s gornje stranice → Deploy.
4. U **Settings → Variables and Secrets** dodaj novu tajnu po imenu `nivoA1` (ili `OPENAI_API_KEY`) čija je vrednost pravi OpenAI API ključ. **Cloudflare tajne su vezane za pojedinačni Worker; ne prenose se automatski sa a1nivo.** Stari ključ može biti iskorišćen ako poznaješ njegovu vrednost; ako ne, potrebno je generisati novi OpenAI API ključ (ne slati ga u chat i ne zapisivati na GitHub).
5. Otvori https://a1usmeni.nemackidemax13.workers.dev/health — nakon objavljivanja treba da vrati `"configured":true`.
6. Otvori https://nemackidemax13-oss.github.io/Biografije-A1/DE-MAX_Bildbeschreibung_A1_V5/dijalog-ai.html i izaberi sliku. Klikni **Počni razgovor**, dozvoli mikrofon.

Kod posebnog Workera: https://github.com/nemackidemax13-oss/Biografije-A1/blob/main/DE-MAX_Bildbeschreibung_A1_V5/openai-dijalog-worker.js

Aplikacija podrazumevano zove `https://a1usmeni.nemackidemax13.workers.dev/api/a1-dialog` (POST). Ako je Worker drugačije nazvan, adresu promeni preko ⚙ u aplikaciji. Worker ne hostuje sliku i HTML; statička aplikacija i 40 fotografija ostaju na GitHub Pages.

Postojeći email Worker `a1nivo` ostaje neizmenjen.

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
