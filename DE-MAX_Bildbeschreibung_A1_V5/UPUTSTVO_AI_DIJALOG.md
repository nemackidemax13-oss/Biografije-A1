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

## POVEZIVANJE SA POSTOJEĆIM CLOUDFLARE a1nivo WORKEROM

Javna adresa postojećeg Workera: https://a1nivo.nemackidemax13.workers.dev

U GitHub aplikaciji **dijalog-ai.html** ta adresa je već podrazumevano podešena. Novi endpoint je `POST /api/a1-dialog`. **Nije moguće aktivirati endpoint samo GitHub izmenom**: vlasnik mora objaviti ažurirani kod Workera u Cloudflareu.

1. Otvori jednostavnu stranicu s dugmetom **KOPIRAJ GOTOV KOD**:
   https://nemackidemax13-oss.github.io/Biografije-A1/CLOUDFLARE_A1NIVO_OBJAVI.html
2. U Cloudflare -> **Workers & Pages** -> izaberi postojeći **a1nivo** -> **Edit code**.
3. Sačuvaj kopiju trenutno objavljenog koda pre zamene, naročito ako Worker koristi druge funkcije koje nisu u GitHub kopiji.
4. U editoru zameni kod kopiranim i klikni **Deploy**.
5. Ne menjaj OpenAI tajnu ako već radi. Kod očekuje `OPENAI_API_KEY` za postojeće mejlove i koristi `OPENAI_API_KEY` ili `nivoA1` za dijalog. Vrednost API ključa se NE objavljuje na GitHubu.
6. Otvori https://a1nivo.nemackidemax13.workers.dev/health . Provera uspelog objavljivanja: `"dialogEnabled": true`.
7. Otvori https://nemackidemax13-oss.github.io/Biografije-A1/DE-MAX_Bildbeschreibung_A1_V5/dijalog-ai.html , izaberi sliku i klikni **Počni dijalog**.

Objedinjeni izvorni kod za direktno kopiranje: https://github.com/nemackidemax13-oss/Biografije-A1/blob/main/A1NIVO_CLOUDFLARE_MEJLOVI_I_USMENI.js

**Očuvano u pripremljenom kodu:** 35 mejlova, najmanje 15 reči, Rafaela review endpoint i iframe rute; dodaje se `/api/a1-dialog` sa postojećom OpenAI tajnom. Nije izvršeno objavljivanje na Cloudflareu iz ovog GitHub uređivanja.

OpenAI naplaćuje pozive u skladu sa API potrošnjom. Za produkciju koristi Cloudflare WAF/global rate limiting.

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
