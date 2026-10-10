# DE-MAX TUTIN — 35 A1 MEJLOVA, GITHUB + REPLIT + OPENAI

**Javni GitHub link za učenike:**  
https://nemackidemax13-oss.github.io/Biografije-A1/OSD-A1-Schreiben-AI/

Učenici pišu mejlove na GitHub Pages, a javno objavljeni Replit Node server proverava preko OpenAI API-ja i vraća ispravljen mejl, srpski komentar i bodove od 0 do 10. Postojeći 35 zadataka, mobilni izgled i prevodi se ne menjaju.

## 1. Replit projekat

GitHub repozitorijum: https://github.com/nemackidemax13-oss/Biografije-A1

Ako si projekat vec uvezao u Replit, **preuzmi (pull/sync) najnovije izmene sa GitHuba**, ili zameni Replit fajl `OSD-A1-Schreiben-AI/server.js` novom GitHub verzijom. GitHub promene se ne kopiraju automatski u postojeci Replit projekat.

Kada otvoriš Shell u korenu repozitorijuma:

```bash
cd OSD-A1-Schreiben-AI && npm start
```

Ako si vec u tom folderu, komanda je samo `npm start`. Koristi Node.js 20+.

## 2. OpenAI API ključ

Otvori https://platform.openai.com/api-keys, kreiraj nov API ključ, uključi potrebni API billing i postavi budžet za potrošnju. **ChatGPT Plus i Replit pretplata ne uključuju OpenAI API kredite.**

Na Replit otvori **Secrets** i dodaj:

- Name: `OPENAI_API_KEY`
- Value: tvoj **tajni** OpenAI API ključ (NE stavljati u GitHub, HTML ili poruke).

Opcionalno: `OPENAI_MODEL` = `gpt-4.1-mini` (vec je podrazumevano).

Ako postoji samo `GROQ_API_KEY`, program ce koristiti Groq; ako postoje oba, OpenAI ima prioritet.

## 3. Proveri server PRE objavljivanja

U Replit Preview-u poseti putanju `/health`. Ocekivani rezultat uz OpenAI ključ:

```json
{"status":"ok","openaiConfigured":true,"groqConfigured":false,"provider":"OpenAI","tasks":35}
```

Ako i Groq kljuc postoji, `groqConfigured` ce biti `true`. Zatim u Preview-u uradi **stvarnu proveru jednog mejla** (sam /health ne dokazuje da je API naplata ili poziv uspesan).

## 4. Replit Publishing

U **Publishing** izaberi serverski **Autoscale** Deployment (ne Static/Scheduled), podesi Run command `cd OSD-A1-Schreiben-AI && npm start` ako koren projekta sadrzi navedeni folder, i proveri **Deployment Secrets**. Odaberi Public.

Autoscale pokrece javni server na zahtev; ne moras drzati Replit editor otvoren niti rucno klikati Run. Replit moze trositi kvotu i dodatna sredstva zavisno od pretplate i konfiguracije.

Nakon objavljivanja kopiraj javni URL koji ti Replit dodeli, npr.:
`https://tvoj-projekat.replit.app`

Dodaj `/health` tom URL-u. Ocekuje se `"provider":"OpenAI"`.

## 5. Povezi sa istim GitHub linkom

Izmeni fajl:
https://github.com/nemackidemax13-oss/Biografije-A1/blob/main/OSD-A1-Schreiben-AI/config.js

Unesi samo **javni URL Replit servera**, npr.:

```js
window.DEMAX_API_URL = "https://tvoj-projekat.replit.app";
```

Nemoj dodavati `/health`, `/api/check-email` ili tajni API ključ. Sačuvaj Commit changes.

Ako mi pošalješ **samo javnu** `replit.app` adresu, mogu da povežem GitHub config.js za tebe.

## Važno

- Nije moguce zadrzati tajni API kljuc bez servera; GitHub Pages je statički.
- Program prihvata najvise 20 zahteva po IP adresi/satu i okvirno do 400 po instanci/danu. To nije globalna zaštita od troškova; prati OpenAI potrošnju i Replit račune, po potrebi dodaj jača ograničenja.
- AI ocene sluze za vezbu, nisu zvanicne ÖSD ocene.
- Učenički tekst se šalje OpenAI API-ju. Ne koristiti nepotrebne licne podatke.
