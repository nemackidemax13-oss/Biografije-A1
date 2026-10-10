# DE-MAX TUTIN — 35 A1 MEJLOVA (GitHub Pages + Replit + Groq)

**GitHub link za polaznike:**
https://nemackidemax13-oss.github.io/Biografije-A1/OSD-A1-Schreiben-AI/

U aplikaciji je 35 vezbi. Nemacka postavka i crveni prevod stoje jedan ispod drugog, naslovi u meniju su na srpskom, desno je mesto za odgovor, a ispod dugmeta Proveri mejl rezultati i bodovi.

## Replit povezivanje

1. Na https://replit.com izaberi import sa GitHub naloga i repo:
   https://github.com/nemackidemax13-oss/Biografije-A1
2. U Replit-u kao start komandu podesi:
   cd OSD-A1-Schreiben-AI && npm start
3. Otvori Secrets i napravi stavku GROQ_API_KEY sa novim tajnim Groq kljucem iz https://console.groq.com/keys
4. Pokreni Replit aplikaciju. U Replit Preview-u aplikacija i AI endpoint koriste isti domen.
5. Da ucenici koriste GitHub Pages, mora postojati stalno dostupan javni Replit HTTPS server (ne samo privremeni Preview). Kada ga dobijes, otvori njegov /health. Ocekivani odgovor je {"status":"ok","groqConfigured":true,"tasks":35}.
6. Izmeni ovaj fajl na GitHub-u: OSD-A1-Schreiben-AI/config.js
   window.DEMAX_API_URL = "https://TACNA-ADRESA-TVOJE-REPLIT-APLIKACIJE.replit.app";
   Ovde IDE JAVNA REPLIT URL, NIKADA Groq API kljuc.

Umesto izmene config.js mozes podeliti ovaj link kada dobijes svoj Replit URL:
https://nemackidemax13-oss.github.io/Biografije-A1/OSD-A1-Schreiben-AI/?server=https%3A%2F%2FTVOJ-REPLIT.replit.app

## Kod projekta
- index.html = mobilni i desktop prikaz sa 35 mejlova.
- config.js = samo JAVNA adresa AI servera.
- tasks.json = svi izvorni tekstovi i pitanja.
- server.js = Node 20+ server koji salje tekst Groq-u i prima ispravku.
- package.json = start komanda.

**Bezbednost:** Ključ cuvati SAMO kao Replit Secret. Ne stavljati ga u config.js, index.html, repozitorijum ili javne poruke. Promeni ranije podeljeni kljuc.

**Status:** GitHub aplikacija je postavljena. AI ispravka ne moze poceti bez Replit servera i novog Groq kljuca. Pitanja se boduju okvirno i ovo nisu zvanicne ÖSD ocene. Replit hosting moze biti naplacivan, zavisno od izabranog nacina objavljivanja. Groq Free ima limite.
