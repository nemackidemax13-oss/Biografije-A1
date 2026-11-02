
"use strict";
const BANK=[{"cat":"start","de":"Auf dem Bild sehe ich zwei Personen.","sr":"Na ovoj slici vidim dve osobe."},{"cat":"start","de":"Auf dem Bild sehe ich drei Personen.","sr":"Na ovoj slici vidim tri osobe."},{"cat":"start","de":"Auf dem Bild sehe ich einen Mann und eine Frau.","sr":"Na ovoj slici vidim jednog čoveka i jednu ženu."},{"cat":"start","de":"Auf dem Bild sehe ich zwei Männer.","sr":"Na ovoj slici vidim dva muškarca."},{"cat":"start","de":"Auf dem Bild sehe ich zwei Frauen.","sr":"Na ovoj slici vidim dve žene."},{"cat":"start","de":"Auf dem Bild sehe ich zwei Kinder.","sr":"Na ovoj slici vidim dvoje dece."},{"cat":"start","de":"Die Personen sprechen über etwas.","sr":"Osobe o nečemu pričaju."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über die Natur.","sr":"Osobe razgovaraju o nečemu, možda o prirodi."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über das Brot.","sr":"Osobe razgovaraju o nečemu, možda o hlebu."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über das Auto.","sr":"Osobe razgovaraju o nečemu, možda o automobilu."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über das Fahrrad.","sr":"Osobe razgovaraju o nečemu, možda o biciklu."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über das Motorrad.","sr":"Osobe razgovaraju o nečemu, možda o motociklu."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über das Aufräumen.","sr":"Osobe razgovaraju o nečemu, možda o pospremanju."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über die Wohnung.","sr":"Osobe razgovaraju o nečemu, možda o stanu."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über die Küche.","sr":"Osobe razgovaraju o nečemu, možda o kuhinji."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über das Essen.","sr":"Osobe razgovaraju o nečemu, možda o hrani."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über das Trinken.","sr":"Osobe razgovaraju o nečemu, možda o piću."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über das Essen und Trinken.","sr":"Osobe razgovaraju o nečemu, možda o hrani i piću."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über das Obst.","sr":"Osobe razgovaraju o nečemu, možda o voću."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über das Gemüse.","sr":"Osobe razgovaraju o nečemu, možda o povrću."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über das Obst und Gemüse.","sr":"Osobe razgovaraju o nečemu, možda o voću i povrću."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über die Kleidung.","sr":"Osobe razgovaraju o nečemu, možda o odeći."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über die Medikamente.","sr":"Osobe razgovaraju o nečemu, možda o lekovima."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über die Tabletten.","sr":"Osobe razgovaraju o nečemu, možda o tabletama."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über die Krankheit.","sr":"Osobe razgovaraju o nečemu, možda o bolesti."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über das Fleisch.","sr":"Osobe razgovaraju o nečemu, možda o mesu."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über die Lebensmittel.","sr":"Osobe razgovaraju o nečemu, možda o namirnicama."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über die Bücher.","sr":"Osobe razgovaraju o nečemu, možda o knjigama."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über die Prüfung.","sr":"Osobe razgovaraju o nečemu, možda o ispitu."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über das Dokument.","sr":"Osobe razgovaraju o nečemu, možda o dokumentu."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über die Dokumente.","sr":"Osobe razgovaraju o nečemu, možda o dokumentima."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über das Lernen.","sr":"Osobe razgovaraju o nečemu, možda o učenju."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über Kaffee.","sr":"Osobe razgovaraju o nečemu, možda o kafi."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über Tee.","sr":"Osobe razgovaraju o nečemu, možda o čaju."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über das Training.","sr":"Osobe razgovaraju o nečemu, možda o treningu."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über die Arbeit.","sr":"Osobe pričaju o nečemu, možda o poslu."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über die Hausaufgaben.","sr":"Osobe razgovaraju o nečemu, možda o domaćim zadacima."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über das Schwimmen.","sr":"Osobe razgovaraju o nečemu, možda o plivanju."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über die Reise.","sr":"Osobe razgovaraju o nečemu, možda o putovanju."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über das Fahrradfahren.","sr":"Osobe razgovaraju o nečemu, možda o vožnji bicikla."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über die Schwangerschaft.","sr":"Osobe razgovaraju o nečemu, možda o trudnoći."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über den Weg.","sr":"Osobe razgovaraju o nečemu, možda o putu."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über die Karte.","sr":"Osobe razgovaraju o nečemu, možda o mapi."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über die Straße.","sr":"Osobe razgovaraju o nečemu, možda o ulici."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über die Reservierung.","sr":"Osobe razgovaraju o nečemu, možda o rezervaciji."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über den Hund.","sr":"Osobe razgovaraju o nečemu, možda o psu."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über die Katze.","sr":"Osobe razgovaraju o nečemu, možda o mački."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über die Tiere.","sr":"Osobe razgovaraju o nečemu, možda o životinjama."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über das Wetter.","sr":"Osobe razgovaraju o nečemu, možda o vremenu."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über die Pflanzen.","sr":"Osobe razgovaraju o nečemu, možda o biljkama."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über die Blumen.","sr":"Osobe razgovaraju o nečemu, možda o cveću."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über die Bäume.","sr":"Osobe razgovaraju o nečemu, možda o drveću."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über das Gras.","sr":"Osobe razgovaraju o nečemu, možda o travi."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über den Einkauf.","sr":"Osobe razgovaraju o nečemu, možda o kupovini."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über die Bezahlung.","sr":"Osobe razgovaraju o nečemu, možda o plaćanju."},{"cat":"extra","de":"Ich denke, die Personen sind ein Ehemann und eine Ehefrau.","sr":"Mislim da su ove osobe muž i žena."},{"cat":"extra","de":"Ich denke, die Frau ist Kundin.","sr":"Mislim da je žena mušterija."},{"cat":"extra","de":"Ich denke, die Frau ist die Verkäuferin.","sr":"Mislim da je žena prodavačica."},{"cat":"places","de":"Die Personen sind in der Natur.","sr":"Osobe su u prirodi."},{"cat":"places","de":"Die Personen sind in der Bäckerei.","sr":"Osobe su u pekari."},{"cat":"places","de":"Die Personen sind in der Werkstatt.","sr":"Osobe su u radionici."},{"cat":"places","de":"Die Personen sind in der Wohnung.","sr":"Osobe su u stanu."},{"cat":"places","de":"Die Personen sind in der Küche.","sr":"Osobe su u kuhinji."},{"cat":"places","de":"Die Personen sind in der Boutique.","sr":"Osobe su u butiku."},{"cat":"places","de":"Die Personen sind in der Apotheke.","sr":"Osobe su u apoteci."},{"cat":"places","de":"Die Personen sind in der Metzgerei.","sr":"Osobe su u mesari."},{"cat":"places","de":"Die Personen sind in der Bibliothek.","sr":"Osobe su u biblioteci."},{"cat":"places","de":"Die Personen sind in der Schule.","sr":"Osobe su u školi."},{"cat":"places","de":"Die Personen sind im Café.","sr":"Osobe su u kafiću."},{"cat":"places","de":"Die Personen sind im Garten.","sr":"Osobe su u bašti."},{"cat":"places","de":"Die Personen sind im Supermarkt.","sr":"Osobe su u supermarketu."},{"cat":"places","de":"Die Personen sind im Wald.","sr":"Osobe su u šumi."},{"cat":"places","de":"Die Personen sind im Hotel.","sr":"Osobe su u hotelu."},{"cat":"places","de":"Die Personen sind im Buchladen.","sr":"Osobe su u knjižari."},{"cat":"places","de":"Die Personen sind im Blumenladen.","sr":"Osobe su u cvećari."},{"cat":"places","de":"Die Personen sind im Zug.","sr":"Osobe su u vozu."},{"cat":"places","de":"Die Personen sind im Wartezimmer.","sr":"Osobe su u čekaonici."},{"cat":"places","de":"Die Personen sind im Zimmer.","sr":"Osobe su u sobi."},{"cat":"places","de":"Die Personen sind im Fitnessstudio.","sr":"Osobe su u teretani."},{"cat":"places","de":"Die Personen sind im Büro.","sr":"Osobe su u kancelariji."},{"cat":"places","de":"Die Personen sind im Krankenhaus.","sr":"Osobe su u bolnici."},{"cat":"places","de":"Die Personen sind im Schwimmbad.","sr":"Osobe su na bazenu."},{"cat":"places","de":"Die Personen sind im Park.","sr":"Osobe su u parku."},{"cat":"places","de":"Die Personen sind im Schuhladen.","sr":"Osobe su u prodavnici obuće."},{"cat":"places","de":"Die Personen sind im Auto.","sr":"Osobe su u automobilu."},{"cat":"places","de":"Die Personen sind im Bus.","sr":"Osobe su u autobusu."},{"cat":"places","de":"Die Personen sind im Kino.","sr":"Osobe su u bioskopu."},{"cat":"places","de":"Die Personen sind zu Hause.","sr":"Osobe su kod kuće."},{"cat":"places","de":"Die Personen sind neben dem Fluss.","sr":"Osobe su pored reke."},{"cat":"places","de":"Die Personen sind am Bahnhof.","sr":"Osobe su na železničkoj stanici."},{"cat":"places","de":"Die Personen sind am Strand.","sr":"Osobe su na plaži."},{"cat":"places","de":"Die Personen sind am Flughafen.","sr":"Osobe su na aerodromu."},{"cat":"places","de":"Die Personen sind am Meer.","sr":"Osobe su na moru."},{"cat":"places","de":"Die Personen sind am See.","sr":"Osobe su na jezeru."},{"cat":"places","de":"Die Personen sind auf dem Markt.","sr":"Osobe su na pijaci."},{"cat":"places","de":"Die Personen sind auf der Straße.","sr":"Osobe su na ulici."},{"cat":"places","de":"Die Personen sind an der Rezeption.","sr":"Osobe su na recepciji."},{"cat":"places","de":"Die Personen sind an der Kasse.","sr":"Osobe su na kasi."},{"cat":"mann","de":"Der Mann links ist groß.","sr":"Muškarac levo je visok."},{"cat":"mann","de":"Der Mann rechts ist klein.","sr":"Muškarac desno je nizak."},{"cat":"mann","de":"Der Mann sieht glücklich aus.","sr":"Muškarac izgleda srećan."},{"cat":"mann","de":"Der Mann sieht besorgt aus.","sr":"Muškarac izgleda zabrinut."},{"cat":"mann","de":"Er hat kurze braune Haare.","sr":"On ima kratku smeđu kosu."},{"cat":"mann","de":"Er hat lange schwarze Haare.","sr":"On ima dugu crnu kosu."},{"cat":"mann","de":"Er hat lockige graue Haare.","sr":"On ima kovrdžavu sedu kosu."},{"cat":"mann","de":"Er hat kurze blonde Haare.","sr":"On ima kratku plavu kosu."},{"cat":"mann","de":"Er ist haarlos.","sr":"On nema kosu."},{"cat":"mann","de":"Er hat eine blonde Haarsträhne.","sr":"On ima jedan plavi pramen."},{"cat":"mann","de":"Der Mann hat schöne weiße Zähne.","sr":"Muškarac ima lepe bele zube."},{"cat":"mann","de":"Der Mann lacht.","sr":"Muškarac se smeje."},{"cat":"mann","de":"Der Mann hat ein schönes Gesicht.","sr":"Muškarac ima lepo lice."},{"cat":"mann","de":"Der Mann trägt eine Armbanduhr.","sr":"Muškarac nosi ručni sat."},{"cat":"mann","de":"Der Mann trägt ein Armband.","sr":"Muškarac nosi narukvicu."},{"cat":"mann","de":"Der Mann hält eine Tüte.","sr":"Muškarac drži kesu."},{"cat":"mann","de":"Der Mann sieht freundlich aus.","sr":"Muškarac izgleda ljubazno."},{"cat":"mann","de":"Der Mann sieht wunderschön aus.","sr":"Muškarac izgleda prelepo."},{"cat":"mann","de":"Der Mann hat einen Bart.","sr":"Muškarac ima bradu."},{"cat":"mann","de":"Der Mann hat einen Schnurrbart.","sr":"Muškarac ima brkove."},{"cat":"mann","de":"Der Mann trägt eine Kette.","sr":"Muškarac nosi lančić."},{"cat":"frau","de":"Die Frau links ist groß.","sr":"Žena levo je visoka."},{"cat":"frau","de":"Die Frau rechts ist klein.","sr":"Žena desno je niska."},{"cat":"frau","de":"Die Frau sieht glücklich aus.","sr":"Žena izgleda srećna."},{"cat":"frau","de":"Die Frau sieht besorgt aus.","sr":"Žena izgleda zabrinuta."},{"cat":"frau","de":"Sie hat kurze braune Haare.","sr":"Ona ima kratku smeđu kosu."},{"cat":"frau","de":"Sie hat lange schwarze Haare.","sr":"Ona ima dugu crnu kosu."},{"cat":"frau","de":"Sie hat lockige graue Haare.","sr":"Ona ima kovrdžavu sedu kosu."},{"cat":"frau","de":"Sie hat kurze blonde Haare.","sr":"Ona ima kratku plavu kosu."},{"cat":"frau","de":"Sie ist haarlos.","sr":"Ona nema kosu."},{"cat":"frau","de":"Sie hat eine blonde Haarsträhne.","sr":"Ona ima jedan plavi pramen."},{"cat":"frau","de":"Die Frau hat schöne weiße Zähne.","sr":"Žena ima lepe bele zube."},{"cat":"frau","de":"Die Frau lacht.","sr":"Žena se smeje."},{"cat":"frau","de":"Die Frau hat ein schönes Gesicht.","sr":"Žena ima lepo lice."},{"cat":"frau","de":"Die Frau trägt eine Armbanduhr.","sr":"Žena nosi ručni sat."},{"cat":"frau","de":"Die Frau trägt ein Armband.","sr":"Žena nosi narukvicu."},{"cat":"frau","de":"Die Frau hält eine Tüte.","sr":"Žena drži kesu."},{"cat":"frau","de":"Die Frau sieht freundlich aus.","sr":"Žena izgleda ljubazno."},{"cat":"frau","de":"Die Frau sieht wunderschön aus.","sr":"Žena izgleda prelepo."},{"cat":"frau","de":"Die Frau trägt Ohrringe.","sr":"Žena nosi minđuše."},{"cat":"frau","de":"Die Frau trägt einen Ring.","sr":"Žena nosi prsten."},{"cat":"frau","de":"Die Frau trägt eine Halskette.","sr":"Žena nosi ogrlicu."},{"cat":"kind","de":"Das Kind links ist groß.","sr":"Dete levo je visoko."},{"cat":"kind","de":"Das Kind rechts ist klein.","sr":"Dete desno je nisko."},{"cat":"kind","de":"Das Kind sieht glücklich aus.","sr":"Dete izgleda srećno."},{"cat":"kind","de":"Das Kind sieht besorgt aus.","sr":"Dete izgleda zabrinuto."},{"cat":"kind","de":"Es hat kurze braune Haare.","sr":"Ono ima kratku smeđu kosu."},{"cat":"kind","de":"Es hat lange schwarze Haare.","sr":"Ono ima dugu crnu kosu."},{"cat":"kind","de":"Es hat lockige graue Haare.","sr":"Ono ima kovrdžavu sedu kosu."},{"cat":"kind","de":"Es hat kurze blonde Haare.","sr":"Ono ima kratku plavu kosu."},{"cat":"kind","de":"Es ist haarlos.","sr":"Ono nema kosu."},{"cat":"kind","de":"Es hat eine blonde Haarsträhne.","sr":"Ono ima jedan plavi pramen."},{"cat":"kind","de":"Das Kind hat schöne weiße Zähne.","sr":"Dete ima lepe bele zube."},{"cat":"kind","de":"Das Kind lacht.","sr":"Dete se smeje."},{"cat":"kind","de":"Das Kind hat ein schönes Gesicht.","sr":"Dete ima lepo lice."},{"cat":"kind","de":"Das Kind trägt eine Armbanduhr.","sr":"Dete nosi ručni sat."},{"cat":"kind","de":"Das Kind trägt ein Armband.","sr":"Dete nosi narukvicu."},{"cat":"kind","de":"Das Kind hält eine Tüte.","sr":"Dete drži kesu."},{"cat":"kind","de":"Das Kind sieht freundlich aus.","sr":"Dete izgleda ljubazno."},{"cat":"kind","de":"Das Kind sieht wunderschön aus.","sr":"Dete izgleda prelepo."},{"cat":"kind","de":"Das Kind trägt eine Brille.","sr":"Dete nosi naočare."},{"cat":"kind","de":"Das Kind trägt eine Sonnenbrille.","sr":"Dete nosi sunčane naočare."},{"cat":"kind","de":"Das Kind hat ein schönes Lachen.","sr":"Dete ima lep osmeh."},{"cat":"extra","de":"Auf dem Bild sehe ich noch einen Tisch.","sr":"Na slici vidim još jedan sto."},{"cat":"extra","de":"Im Hintergrund sehe ich noch ein Fenster.","sr":"U pozadini vidim još jedan prozor."},{"cat":"extra","de":"Der Raum ist groß.","sr":"Prostorija je velika."},{"cat":"extra","de":"Der Garten ist klein.","sr":"Bašta je mala."},{"cat":"extra","de":"Es ist Sommer.","sr":"Leto je."},{"cat":"extra","de":"Es ist Winter.","sr":"Zima je."},{"cat":"extra","de":"Es ist Herbst.","sr":"Jesen je."},{"cat":"extra","de":"Draußen ist es schön.","sr":"Napolju je lepo."},{"cat":"extra","de":"Draußen ist es kalt.","sr":"Napolju je hladno."},{"cat":"extra","de":"Der Mann sitzt.","sr":"Muškarac sedi."},{"cat":"extra","de":"Die Frau steht.","sr":"Žena stoji."},{"cat":"extra","de":"Das war meine Bildbeschreibung.","sr":"To je bio moj opis slike."},{"cat":"extra","de":"Ich denke, der Mann ist der Verkäufer und die Frau ist die Kundin.","sr":"Mislim da je muškarac prodavac, a žena mušterija."},{"cat":"extra","de":"Ich denke, der Mann ist der Bäcker und die Frau ist die Kundin.","sr":"Mislim da je muškarac pekar, a žena mušterija."},{"cat":"extra","de":"Ich denke, die Frau ist die Ärztin und der Mann ist der Patient.","sr":"Mislim da je žena lekarka, a muškarac pacijent."},{"cat":"extra","de":"Ich denke, die Frau ist die Verkäuferin und der Mann ist der Kunde.","sr":"Mislim da je žena prodavačica, a muškarac mušterija."},{"cat":"extra","de":"Ich denke, der Mann ist der Arzt und die Frau ist die Patientin.","sr":"Mislim da je muškarac lekar, a žena pacijentkinja."},{"cat":"extra","de":"Ich denke, die Frau ist die Apothekerin und der Mann ist der Kunde.","sr":"Mislim da je žena apotekarka, a muškarac mušterija."},{"cat":"extra","de":"Ich denke, der Mann ist der Apotheker und die Frau ist die Kundin.","sr":"Mislim da je muškarac apotekar, a žena mušterija."},{"cat":"extra","de":"Ich denke, der Mann ist der Mechaniker und die Frau ist die Kundin.","sr":"Mislim da je muškarac mehaničar, a žena mušterija."},{"cat":"extra","de":"Ich denke, die Frau ist die Mechanikerin und der Mann ist der Kunde.","sr":"Mislim da je žena mehaničarka, a muškarac mušterija."},{"cat":"extra","de":"Ich denke, der Mann ist der Kellner und die Frau ist ein Gast.","sr":"Mislim da je muškarac konobar, a žena gošća."},{"cat":"extra","de":"Ich denke, die Frau ist die Kellnerin und der Mann ist der Gast.","sr":"Mislim da je žena konobarica, a muškarac gost."},{"cat":"extra","de":"Ich denke, der Mann ist der Metzger und der andere Mann ist der Kunde.","sr":"Mislim da je jedan muškarac mesar, a drugi mušterija."},{"cat":"extra","de":"Ich denke, die Frau ist die Friseurin und der Mann ist der Kunde.","sr":"Mislim da je žena frizerka, a muškarac mušterija."},{"cat":"extra","de":"Ich denke, der Mann ist der Friseur und die Frau ist die Kundin.","sr":"Mislim da je muškarac frizer, a žena mušterija."},{"cat":"extra","de":"Ich denke, die Frau ist die Lehrerin und das Mädchen ist die Schülerin.","sr":"Mislim da je žena učiteljica, a devojčica učenica."},{"cat":"extra","de":"Ich denke, der Mann ist der Lehrer und der Junge ist der Schüler.","sr":"Mislim da je muškarac učitelj, a dečak učenik."},{"cat":"extra","de":"Ich denke, die Frau ist die Kassiererin und der Mann ist der Kunde.","sr":"Mislim da je žena kasirka, a muškarac mušterija."},{"cat":"extra","de":"Ich denke, der Mann ist der Kassierer und die Frau ist die Kundin.","sr":"Mislim da je muškarac kasir, a žena mušterija."},{"cat":"extra","de":"Ich denke, die Frau ist die Floristin und der Mann ist der Kunde.","sr":"Mislim da je žena cvećarka, a muškarac mušterija."},{"cat":"extra","de":"Ich denke, der Mann ist der Trainer und die Frau ist die Sportlerin.","sr":"Mislim da je muškarac trener, a žena sportistkinja."},{"cat":"extra","de":"Ich denke, die Frau ist die Trainerin und der Mann ist der Sportler.","sr":"Mislim da je žena trenerka, a muškarac sportista."},{"cat":"extra","de":"Ich denke, die Frau ist die Rezeptionistin und der Mann ist der Hotelgast.","sr":"Mislim da je žena recepcionerka, a muškarac gost hotela."},{"cat":"extra","de":"Ich denke, der Mann ist der Busfahrer und die Frau ist ein Fahrgast.","sr":"Mislim da je muškarac vozač autobusa, a žena putnica."},{"cat":"extra","de":"Ich denke, die Frau ist die Polizistin und der Mann ist der Autofahrer.","sr":"Mislim da je žena policajka, a muškarac vozač automobila."},{"cat":"extra","de":"Ich denke, der Mann ist der Vater und das Kind ist sein Sohn.","sr":"Mislim da je muškarac otac, a dete njegov sin."},{"cat":"extra","de":"Ich denke, die Frau ist die Mutter und das Kind ist ihre Tochter.","sr":"Mislim da je žena majka, a dete njena ćerka."},{"cat":"extra","de":"Ich denke, die Personen sitzen.","sr":"Mislim da osobe sede."},{"cat":"extra","de":"Ich denke, die Personen stehen.","sr":"Mislim da osobe stoje."},{"cat":"extra","de":"Der Mann sitzt und die Frau steht.","sr":"Muškarac sedi, a žena stoji."},{"cat":"extra","de":"Die Frau sitzt und der Mann steht.","sr":"Žena sedi, a muškarac stoji."},{"cat":"extra","de":"Der Raum ist groß und schön.","sr":"Prostorija je velika i lepa."},{"cat":"extra","de":"Der Raum ist hell.","sr":"Prostorija je svetla."},{"cat":"extra","de":"Der Raum ist klein.","sr":"Prostorija je mala."},{"cat":"extra","de":"Im Hintergrund sehe ich viele Brote und Brötchen.","sr":"U pozadini vidim mnogo hlebova i zemički."},{"cat":"start","de":"Im Hintergrund sehe ich noch viele Personen.","sr":"U pozadini vidim još mnogo osoba.","personExample":true},{"cat":"extra","de":"Im Hintergrund sehe ich viele Stühle und Tische.","sr":"U pozadini vidim mnogo stolica i stolova."},{"cat":"start","personExample":true,"de":"Auf dem Bild sehe ich einen Mann.","sr":"Na slici vidim jednog muškarca."},{"cat":"start","personExample":true,"de":"Auf dem Bild sehe ich eine Frau.","sr":"Na slici vidim jednu ženu."},{"cat":"start","personExample":true,"de":"Auf dem Bild sehe ich ein Kind.","sr":"Na slici vidim jedno dete."},{"cat":"start","personExample":true,"de":"Auf dem Bild sehe ich einen Mann und zwei Frauen.","sr":"Na slici vidim jednog muškarca i dve žene."},{"cat":"start","personExample":true,"de":"Auf dem Bild sehe ich zwei Männer und eine Frau.","sr":"Na slici vidim dva muškarca i jednu ženu."},{"cat":"start","personExample":true,"de":"Auf dem Bild sehe ich einen Mann und zwei Kinder.","sr":"Na slici vidim jednog muškarca i dvoje dece."},{"cat":"start","personExample":true,"de":"Auf dem Bild sehe ich zwei Frauen und ein Kind.","sr":"Na slici vidim dve žene i jedno dete."},{"cat":"start","personExample":true,"de":"Auf dem Bild sehe ich zwei Männer und ein Kind.","sr":"Na slici vidim dva muškarca i jedno dete."},{"cat":"start","personExample":true,"de":"Auf dem Bild sehe ich drei Kinder.","sr":"Na slici vidim troje dece."},{"cat":"start","personExample":true,"de":"Auf dem Bild sehe ich vier Personen.","sr":"Na slici vidim četiri osobe."},{"cat":"start","personExample":true,"de":"Im Vordergrund sehe ich einen Mann.","sr":"U prvom planu vidim muškarca."},{"cat":"start","personExample":true,"de":"Im Hintergrund sehe ich eine Frau.","sr":"U pozadini vidim ženu."},{"cat":"start","personExample":true,"de":"Auf dem Bild sehe ich eine Frau und ein Kind.","sr":"Na ovoj slici vidim jednu ženu i jedno dete."},{"cat":"start","personExample":true,"de":"Auf dem Bild sehe ich eine Frau und zwei Kinder.","sr":"Na ovoj slici vidim jednu ženu i dvoje dece."},{"cat":"start","personExample":true,"de":"Auf dem Bild sehe ich einen Mann und ein Kind.","sr":"Na ovoj slici vidim jednog muškarca i jedno dete."},{"cat":"extra","de":"Das ist alles, was ich sehe.","sr":"To je sve što vidim."},{"cat":"extra","de":"Sie suchen einen schönen Platz.","sr":"Traže lepo mesto."},{"cat":"extra","de":"Die Verkäuferin zeigt frisches Brot.","sr":"Prodavačica pokazuje svež hleb."},{"cat":"extra","de":"Sie sprechen vielleicht über den Preis.","sr":"Možda razgovaraju o ceni."},{"cat":"extra","de":"Die Kundin kauft zwei Brötchen.","sr":"Mušterija kupuje dve zemičke."},{"cat":"extra","de":"Der Mechaniker repariert ein Auto.","sr":"Mehaničar popravlja automobil."},{"cat":"extra","de":"Sie sprechen vielleicht über das Problem.","sr":"Možda razgovaraju o problemu."},{"cat":"extra","de":"Der Kunde braucht einen neuen Reifen.","sr":"Mušteriji je potrebna nova guma."},{"cat":"extra","de":"Die Personen sitzen im Wohnzimmer.","sr":"Osobe sede u dnevnoj sobi."},{"cat":"extra","de":"Sie sprechen vielleicht über die Möbel.","sr":"Možda razgovaraju o nameštaju."},{"cat":"extra","de":"Die Frau sucht eine neue Wohnung.","sr":"Žena traži novi stan."},{"cat":"extra","de":"Die Frau schneidet Gemüse.","sr":"Žena seče povrće."},{"cat":"extra","de":"Sie sprechen vielleicht über das Mittagessen.","sr":"Možda razgovaraju o ručku."},{"cat":"extra","de":"Sie braucht Tomaten und Kartoffeln.","sr":"Potrebni su joj paradajz i krompir."},{"cat":"extra","de":"Die Frau probiert ein Kleid an.","sr":"Žena isprobava haljinu."},{"cat":"extra","de":"Sie sprechen vielleicht über die Größe.","sr":"Možda razgovaraju o veličini."},{"cat":"extra","de":"Die Kundin sucht eine blaue Jacke.","sr":"Mušterija traži plavu jaknu."},{"cat":"extra","de":"Die Apothekerin hilft dem Kunden.","sr":"Apotekarka pomaže mušteriji."},{"cat":"extra","de":"Sie sprechen vielleicht über Medikamente.","sr":"Možda razgovaraju o lekovima."},{"cat":"extra","de":"Der Kunde kauft Tabletten.","sr":"Mušterija kupuje tablete."},{"cat":"extra","de":"Der Metzger schneidet Fleisch.","sr":"Mesar seče meso."},{"cat":"extra","de":"Sie sprechen vielleicht über das Fleisch.","sr":"Možda razgovaraju o mesu."},{"cat":"extra","de":"Der Kunde kauft ein Kilo Fleisch.","sr":"Mušterija kupuje kilogram mesa."},{"cat":"extra","de":"Die Frau liest ein Buch.","sr":"Žena čita knjigu."},{"cat":"extra","de":"Sie sprechen vielleicht über Bücher.","sr":"Možda razgovaraju o knjigama."},{"cat":"extra","de":"Die Frau sucht ein Buch über Tiere.","sr":"Žena traži knjigu o životinjama."},{"cat":"extra","de":"Der Lehrer schreibt an die Tafel.","sr":"Nastavnik piše na tabli."},{"cat":"extra","de":"Sie sprechen vielleicht über die Hausaufgaben.","sr":"Možda razgovaraju o domaćim zadacima."},{"cat":"extra","de":"Der Schüler sucht sein Heft.","sr":"Učenik traži svoju svesku."},{"cat":"extra","de":"Der Kellner bringt zwei Tassen Kaffee.","sr":"Konobar donosi dve šoljice kafe."},{"cat":"extra","de":"Sie sprechen vielleicht über die Getränke.","sr":"Možda razgovaraju o piću."},{"cat":"extra","de":"Die Frau bestellt einen Tee.","sr":"Žena naručuje čaj."},{"cat":"extra","de":"Die Frau gießt die Blumen.","sr":"Žena zaliva cveće."},{"cat":"extra","de":"Sie sprechen vielleicht über den Garten.","sr":"Možda razgovaraju o bašti."},{"cat":"extra","de":"Der Mann sucht eine Schaufel.","sr":"Muškarac traži lopatu."},{"cat":"extra","de":"Die Frau legt Äpfel in den Einkaufswagen.","sr":"Žena stavlja jabuke u kolica."},{"cat":"extra","de":"Sie sprechen vielleicht über die Einkaufsliste.","sr":"Možda razgovaraju o spisku za kupovinu."},{"cat":"extra","de":"Sie kauft Milch und Brot.","sr":"Ona kupuje mleko i hleb."},{"cat":"extra","de":"Die Personen wandern im Wald.","sr":"Osobe pešače kroz šumu."},{"cat":"extra","de":"Sie sprechen vielleicht über die Bäume.","sr":"Možda razgovaraju o drveću."},{"cat":"extra","de":"Sie suchen den richtigen Weg.","sr":"Traže pravi put."},{"cat":"extra","de":"Der Gast kommt ins Hotel.","sr":"Gost dolazi u hotel."},{"cat":"extra","de":"Sie sprechen vielleicht über das Zimmer.","sr":"Možda razgovaraju o sobi."},{"cat":"extra","de":"Der Gast fragt nach einem freien Zimmer.","sr":"Gost pita za slobodnu sobu."},{"cat":"extra","de":"Der Verkäufer zeigt ein Buch.","sr":"Prodavac pokazuje knjigu."},{"cat":"extra","de":"Sie sprechen vielleicht über den Autor.","sr":"Možda razgovaraju o autoru."},{"cat":"extra","de":"Die Frau sucht ein Wörterbuch.","sr":"Žena traži rečnik."},{"cat":"extra","de":"Die Floristin macht einen Blumenstrauß.","sr":"Cvećarka pravi buket."},{"cat":"extra","de":"Sie sprechen vielleicht über die Blumen.","sr":"Možda razgovaraju o cveću."},{"cat":"extra","de":"Die Kundin kauft rote Rosen.","sr":"Mušterija kupuje crvene ruže."},{"cat":"extra","de":"Die Personen sitzen im Zug.","sr":"Osobe sede u vozu."},{"cat":"extra","de":"Sie sprechen vielleicht über die Reise.","sr":"Možda razgovaraju o putovanju."},{"cat":"extra","de":"Der Mann sucht seinen Sitzplatz.","sr":"Muškarac traži svoje sedište."},{"cat":"extra","de":"Die Personen warten auf den Arzt.","sr":"Osobe čekaju lekara."},{"cat":"extra","de":"Sie sprechen vielleicht über den Arzttermin.","sr":"Možda razgovaraju o terminu kod lekara."},{"cat":"extra","de":"Die Frau sucht ihre Karte.","sr":"Žena traži svoju karticu."},{"cat":"extra","de":"Die Frau macht das Bett.","sr":"Žena namešta krevet."},{"cat":"extra","de":"Im Zimmer sprechen sie vielleicht über die Möbel.","sr":"Možda razgovaraju o nameštaju."},{"cat":"extra","de":"Der Mann sucht seine Schlüssel.","sr":"Muškarac traži svoje ključeve."},{"cat":"extra","de":"Die Frau läuft auf dem Laufband.","sr":"Žena trči na traci."},{"cat":"extra","de":"Sie sprechen vielleicht über das Training.","sr":"Možda razgovaraju o treningu."},{"cat":"extra","de":"Der Mann sucht eine Hantel.","sr":"Muškarac traži teg."},{"cat":"extra","de":"Die Personen arbeiten am Computer.","sr":"Osobe rade za računarom."},{"cat":"extra","de":"Sie sprechen vielleicht über einen Termin.","sr":"Možda razgovaraju o jednom terminu."},{"cat":"extra","de":"Die Frau sucht einen Stift.","sr":"Žena traži olovku."},{"cat":"extra","de":"Der Arzt untersucht einen Patienten.","sr":"Lekar pregleda pacijenta."},{"cat":"extra","de":"Sie sprechen vielleicht über die Gesundheit.","sr":"Možda razgovaraju o zdravlju."},{"cat":"extra","de":"Der Patient sucht sein Zimmer.","sr":"Pacijent traži svoju sobu."},{"cat":"extra","de":"Die Kinder schwimmen im Wasser.","sr":"Deca plivaju u vodi."},{"cat":"extra","de":"Sie sprechen vielleicht über das Schwimmen.","sr":"Možda razgovaraju o plivanju."},{"cat":"extra","de":"Die Frau sucht ein Handtuch.","sr":"Žena traži peškir."},{"cat":"extra","de":"Die Personen sitzen auf einer Bank.","sr":"Osobe sede na klupi."},{"cat":"extra","de":"Im Park sprechen sie vielleicht über das Wetter.","sr":"Možda razgovaraju o vremenu."},{"cat":"extra","de":"Der Mann sucht einen freien Platz.","sr":"Muškarac traži slobodno mesto."},{"cat":"extra","de":"Die Frau probiert Schuhe an.","sr":"Žena isprobava cipele."},{"cat":"extra","de":"Sie sprechen vielleicht über die Schuhgröße.","sr":"Možda razgovaraju o broju obuće."},{"cat":"extra","de":"Die Frau kauft schwarze Schuhe.","sr":"Žena kupuje crne cipele."},{"cat":"extra","de":"Der Mann fährt das Auto.","sr":"Muškarac vozi automobil."},{"cat":"extra","de":"Sie sprechen vielleicht über den Weg.","sr":"Možda razgovaraju o putu."},{"cat":"extra","de":"Die Frau sucht die Adresse auf dem Handy.","sr":"Žena traži adresu na telefonu."},{"cat":"extra","de":"Die Personen steigen in den Bus ein.","sr":"Osobe ulaze u autobus."},{"cat":"extra","de":"Sie sprechen vielleicht über die nächste Haltestelle.","sr":"Možda razgovaraju o sledećoj stanici."},{"cat":"extra","de":"Die Frau sucht ihre Fahrkarte.","sr":"Žena traži svoju kartu."},{"cat":"extra","de":"Die Personen sehen einen Film.","sr":"Osobe gledaju film."},{"cat":"extra","de":"Sie sprechen vielleicht über den Film.","sr":"Možda razgovaraju o filmu."},{"cat":"extra","de":"Der Mann kauft zwei Kinokarten.","sr":"Muškarac kupuje dve bioskopske karte."},{"cat":"extra","de":"Die Frau räumt die Küche auf.","sr":"Žena sređuje kuhinju."},{"cat":"extra","de":"Sie sprechen vielleicht über die Hausarbeit.","sr":"Možda razgovaraju o kućnim poslovima."},{"cat":"extra","de":"Der Mann sucht den Staubsauger.","sr":"Muškarac traži usisivač."},{"cat":"extra","de":"Die Personen sitzen am Fluss.","sr":"Osobe sede pored reke."},{"cat":"extra","de":"Sie sprechen vielleicht über die Natur.","sr":"Možda razgovaraju o prirodi."},{"cat":"extra","de":"Sie suchen einen ruhigen Platz.","sr":"Traže mirno mesto."},{"cat":"extra","de":"Die Frau steht am Gleis.","sr":"Žena stoji na peronu."},{"cat":"extra","de":"Sie sprechen vielleicht über den Zug.","sr":"Možda razgovaraju o vozu."},{"cat":"extra","de":"Der Mann kauft eine Fahrkarte.","sr":"Muškarac kupuje kartu."},{"cat":"extra","de":"Die Kinder spielen im Sand.","sr":"Deca se igraju u pesku."},{"cat":"extra","de":"Sie sprechen vielleicht über das Meer.","sr":"Možda razgovaraju o moru."},{"cat":"extra","de":"Die Mutter sucht die Sonnencreme.","sr":"Majka traži kremu za sunčanje."},{"cat":"extra","de":"Die Personen warten am Flughafen.","sr":"Osobe čekaju na aerodromu."},{"cat":"extra","de":"Sie sprechen vielleicht über den Flug.","sr":"Možda razgovaraju o letu."},{"cat":"extra","de":"Der Mann sucht seinen Koffer.","sr":"Muškarac traži svoj kofer."},{"cat":"extra","de":"Die Personen schwimmen im Meer.","sr":"Osobe plivaju u moru."},{"cat":"extra","de":"Sie sprechen vielleicht über den Urlaub.","sr":"Možda razgovaraju o odmoru."},{"cat":"extra","de":"Die Frau sucht ihre Sonnenbrille.","sr":"Žena traži svoje sunčane naočare."},{"cat":"extra","de":"Die Personen grillen am See.","sr":"Osobe roštiljaju pored jezera."},{"cat":"extra","de":"Sie sprechen vielleicht über das Essen.","sr":"Možda razgovaraju o hrani."},{"cat":"extra","de":"Sie brauchen mehr Brot.","sr":"Potrebno im je još hleba."},{"cat":"extra","de":"Die Frau schaut sich das Obst an.","sr":"Žena razgleda voće."},{"cat":"extra","de":"Sie sprechen vielleicht über die Preise.","sr":"Možda razgovaraju o cenama."},{"cat":"extra","de":"Sie kauft Äpfel und Tomaten.","sr":"Ona kupuje jabuke i paradajz."},{"cat":"extra","de":"Die Personen schauen in ein Schaufenster.","sr":"Osobe gledaju u izlog."},{"cat":"extra","de":"Sie sprechen vielleicht über die Kleidung.","sr":"Možda razgovaraju o odeći."},{"cat":"extra","de":"Die Frau sucht ein Geschäft.","sr":"Žena traži prodavnicu."},{"cat":"extra","de":"Die Frau zeigt ihren Pass.","sr":"Žena pokazuje svoj pasoš."},{"cat":"extra","de":"Sie sprechen vielleicht über die Reservierung.","sr":"Možda razgovaraju o rezervaciji."},{"cat":"extra","de":"Der Gast fragt nach seinem Zimmerschlüssel.","sr":"Gost pita za ključ svoje sobe."},{"cat":"extra","de":"Die Kassiererin kassiert.","sr":"Kasirka naplaćuje."},{"cat":"extra","de":"An der Kasse sprechen sie vielleicht über den Preis.","sr":"Možda razgovaraju o ceni."},{"cat":"extra","de":"Der Kunde bezahlt mit Karte.","sr":"Mušterija plaća karticom."},{"cat":"start","personExample":true,"de":"Auf dem Bild sehe ich drei Personen: zwei Erwachsene und ein Kind.","sr":"Na ovoj slici vidim tri osobe: dve odrasle osobe i dete."},{"cat":"start","personExample":true,"de":"Auf dem Bild sehe ich vier Personen: zwei Erwachsene und zwei Kinder.","sr":"Na ovoj slici vidim četiri osobe: dve odrasle osobe i dvoje dece."},{"cat":"start","personExample":true,"de":"Links sehe ich einen Mann.","sr":"Levo vidim muškarca."},{"cat":"start","personExample":true,"de":"Rechts sehe ich eine Frau.","sr":"Desno vidim ženu."},{"cat":"start","personExample":true,"de":"In der Mitte sehe ich ein Kind.","sr":"U sredini vidim dete."},{"cat":"start","personExample":true,"de":"Die Personen stehen nebeneinander.","sr":"Osobe stoje jedna pored druge."},{"cat":"start","personExample":true,"de":"Die Personen sitzen nebeneinander.","sr":"Osobe sede jedna pored druge."},{"cat":"start","personExample":true,"de":"Die Personen stehen sich gegenüber.","sr":"Osobe stoje jedna naspram druge."},{"cat":"start","personExample":true,"de":"Die Personen sitzen sich gegenüber.","sr":"Osobe sede jedna naspram druge."},{"cat":"start","personExample":true,"de":"Eine Person steht und die andere sitzt.","sr":"Jedna osoba stoji, a druga sedi."},{"cat":"start","personExample":true,"de":"Ich sehe eine Familie.","sr":"Vidim porodicu."},{"cat":"start","personExample":true,"de":"Ich sehe eine Mutter mit ihrem Kind.","sr":"Vidim majku sa njenim detetom."},{"cat":"start","personExample":true,"de":"Ich sehe einen Vater mit seinem Kind.","sr":"Vidim oca sa njegovim detetom."},{"cat":"start","personExample":true,"de":"Die Personen sind zusammen.","sr":"Osobe su zajedno."},{"cat":"start","personExample":true,"de":"Ich sehe zwei Erwachsene.","sr":"Vidim dve odrasle osobe."},{"cat":"start","personExample":true,"de":"Im Vordergrund sehe ich eine Frau.","sr":"U prvom planu vidim ženu."},{"cat":"start","personExample":true,"de":"Im Hintergrund sehe ich einen Mann.","sr":"U pozadini vidim muškarca."},{"cat":"start","personExample":true,"de":"Im Hintergrund sehe ich viele Personen.","sr":"U pozadini vidim mnogo osoba."},{"cat":"start","de":"Die Personen sprechen über die E-Mail.","sr":"Osobe razgovaraju o imejlu."},{"cat":"places","de":"Die Personen sind beim Tierarzt.","sr":"Osobe su kod veterinara."},{"cat":"places","de":"Ich denke, die Personen sind in der Natur.","sr":"Mislim da su osobe u prirodi."},{"cat":"places","de":"Ich denke, die Personen sind in der Bäckerei.","sr":"Mislim da su osobe u pekari."},{"cat":"places","de":"Ich denke, die Personen sind in der Werkstatt.","sr":"Mislim da su osobe u radionici."},{"cat":"places","de":"Ich denke, die Personen sind in der Wohnung.","sr":"Mislim da su osobe u stanu."},{"cat":"places","de":"Ich denke, die Personen sind in der Küche.","sr":"Mislim da su osobe u kuhinji."},{"cat":"places","de":"Ich denke, die Personen sind in der Boutique.","sr":"Mislim da su osobe u butiku."},{"cat":"places","de":"Ich denke, die Personen sind in der Apotheke.","sr":"Mislim da su osobe u apoteci."},{"cat":"places","de":"Ich denke, die Personen sind in der Metzgerei.","sr":"Mislim da su osobe u mesari."},{"cat":"places","de":"Ich denke, die Personen sind in der Bibliothek.","sr":"Mislim da su osobe u biblioteci."},{"cat":"places","de":"Ich denke, die Personen sind in der Schule.","sr":"Mislim da su osobe u školi."},{"cat":"places","de":"Ich denke, die Personen sind im Café.","sr":"Mislim da su osobe u kafiću."},{"cat":"places","de":"Ich denke, die Personen sind im Garten.","sr":"Mislim da su osobe u bašti."},{"cat":"places","de":"Ich denke, die Personen sind im Supermarkt.","sr":"Mislim da su osobe u supermarketu."},{"cat":"places","de":"Ich denke, die Personen sind im Wald.","sr":"Mislim da su osobe u šumi."},{"cat":"places","de":"Ich denke, die Personen sind im Hotel.","sr":"Mislim da su osobe u hotelu."},{"cat":"places","de":"Ich denke, die Personen sind im Buchladen.","sr":"Mislim da su osobe u knjižari."},{"cat":"places","de":"Ich denke, die Personen sind im Blumenladen.","sr":"Mislim da su osobe u cvećari."},{"cat":"places","de":"Ich denke, die Personen sind im Zug.","sr":"Mislim da su osobe u vozu."},{"cat":"places","de":"Ich denke, die Personen sind im Wartezimmer.","sr":"Mislim da su osobe u čekaonici."},{"cat":"places","de":"Ich denke, die Personen sind im Zimmer.","sr":"Mislim da su osobe u sobi."},{"cat":"places","de":"Ich denke, die Personen sind im Fitnessstudio.","sr":"Mislim da su osobe u teretani."},{"cat":"places","de":"Ich denke, die Personen sind im Büro.","sr":"Mislim da su osobe u kancelariji."},{"cat":"places","de":"Ich denke, die Personen sind im Krankenhaus.","sr":"Mislim da su osobe u bolnici."},{"cat":"places","de":"Ich denke, die Personen sind im Schwimmbad.","sr":"Mislim da su osobe na bazenu."},{"cat":"places","de":"Ich denke, die Personen sind im Park.","sr":"Mislim da su osobe u parku."},{"cat":"places","de":"Ich denke, die Personen sind im Schuhladen.","sr":"Mislim da su osobe u prodavnici obuće."},{"cat":"places","de":"Ich denke, die Personen sind im Auto.","sr":"Mislim da su osobe u automobilu."},{"cat":"places","de":"Ich denke, die Personen sind im Bus.","sr":"Mislim da su osobe u autobusu."},{"cat":"places","de":"Ich denke, die Personen sind im Kino.","sr":"Mislim da su osobe u bioskopu."},{"cat":"places","de":"Ich denke, die Personen sind zu Hause.","sr":"Mislim da su osobe kod kuće."},{"cat":"places","de":"Ich denke, die Personen sind neben dem Fluss.","sr":"Mislim da su osobe pored reke."},{"cat":"places","de":"Ich denke, die Personen sind am Bahnhof.","sr":"Mislim da su osobe na železničkoj stanici."},{"cat":"places","de":"Ich denke, die Personen sind am Strand.","sr":"Mislim da su osobe na plaži."},{"cat":"places","de":"Ich denke, die Personen sind am Flughafen.","sr":"Mislim da su osobe na aerodromu."},{"cat":"places","de":"Ich denke, die Personen sind am Meer.","sr":"Mislim da su osobe na moru."},{"cat":"places","de":"Ich denke, die Personen sind am See.","sr":"Mislim da su osobe na jezeru."},{"cat":"places","de":"Ich denke, die Personen sind auf dem Markt.","sr":"Mislim da su osobe na pijaci."},{"cat":"places","de":"Ich denke, die Personen sind auf der Straße.","sr":"Mislim da su osobe na ulici."},{"cat":"places","de":"Ich denke, die Personen sind an der Rezeption.","sr":"Mislim da su osobe na recepciji."},{"cat":"places","de":"Ich denke, die Personen sind an der Kasse.","sr":"Mislim da su osobe na kasi."},{"cat":"places","de":"Ich denke, die Personen sind beim Tierarzt.","sr":"Mislim da su osobe kod veterinara."},{"cat":"places","de":"Die Person ist beim Arzt.","sr":"Osoba je kod lekara."},{"cat":"places","de":"Ich denke, die Person ist beim Arzt.","sr":"Mislim da je osoba kod lekara."},{"cat":"places","de":"Die Person ist in der Apotheke.","sr":"Osoba je u apoteci."},{"cat":"places","de":"Ich denke, die Person ist in der Apotheke.","sr":"Mislim da je osoba u apoteci."},{"cat":"start","personExample":true,"personGroup":"man_woman","de":"Auf dem Foto sind ein Mann und eine Frau.","sr":"Na fotografiji su muškarac i žena."},{"cat":"start","personExample":true,"personGroup":"two_men","de":"Auf dem Foto sind zwei Männer.","sr":"Na fotografiji su dva muškarca."},{"cat":"start","personExample":true,"personGroup":"two_women","de":"Auf dem Foto sind zwei Frauen.","sr":"Na fotografiji su dve žene."},{"cat":"start","personExample":true,"personGroup":"two_children","de":"Auf dem Foto sind zwei Kinder.","sr":"Na fotografiji su dvoje dece."},{"cat":"start","personExample":true,"personGroup":"woman_child","de":"Auf dem Foto sind eine Mutter und ihre Tochter.","sr":"Na fotografiji su majka i njena ćerka."},{"cat":"start","personExample":true,"personGroup":"man_child","de":"Auf dem Foto sind ein Vater und seine Tochter.","sr":"Na fotografiji su otac i njegova ćerka."},{"cat":"start","personExample":true,"personGroup":"man_child","de":"Auf dem Foto sind ein Vater und sein Sohn.","sr":"Na fotografiji su otac i njegov sin."},{"cat":"start","personExample":true,"personGroup":"woman_child","de":"Auf dem Foto sind eine Mutter und ihr Sohn.","sr":"Na fotografiji su majka i njen sin."},{"cat":"start","personExample":true,"personGroup":"man_woman","de":"Das Bild zeigt einen Mann und eine Frau.","sr":"Slika prikazuje muškarca i ženu."},{"cat":"start","personExample":true,"personGroup":"two_men","de":"Das Bild zeigt zwei Männer.","sr":"Slika prikazuje dva muškarca."},{"cat":"start","personExample":true,"personGroup":"two_women","de":"Das Bild zeigt zwei Frauen.","sr":"Slika prikazuje dve žene."},{"cat":"start","personExample":true,"personGroup":"two_children","de":"Das Bild zeigt zwei Kinder.","sr":"Slika prikazuje dvoje dece."},{"cat":"start","personExample":true,"personGroup":"woman_child","de":"Das Bild zeigt eine Mutter und ihre Tochter.","sr":"Slika prikazuje majku i njenu ćerku."},{"cat":"start","personExample":true,"personGroup":"man_child","de":"Das Bild zeigt einen Vater und seine Tochter.","sr":"Slika prikazuje oca i njegovu ćerku."},{"cat":"start","personExample":true,"personGroup":"man_child","de":"Das Bild zeigt einen Vater und seinen Sohn.","sr":"Slika prikazuje oca i njegovog sina."},{"cat":"start","personExample":true,"personGroup":"woman_child","de":"Das Bild zeigt eine Mutter und ihren Sohn.","sr":"Slika prikazuje majku i njenog sina."},{"cat":"start","personExample":true,"personGroup":"man_woman","de":"Hier sehe ich einen Mann und eine Frau.","sr":"Ovde vidim muškarca i ženu."},{"cat":"start","personExample":true,"personGroup":"two_men","de":"Hier sehe ich zwei Männer.","sr":"Ovde vidim dva muškarca."},{"cat":"start","personExample":true,"personGroup":"two_women","de":"Hier sehe ich zwei Frauen.","sr":"Ovde vidim dve žene."},{"cat":"start","personExample":true,"personGroup":"two_children","de":"Hier sehe ich zwei Kinder.","sr":"Ovde vidim dvoje dece."},{"cat":"start","personExample":true,"personGroup":"woman_child","de":"Hier sehe ich eine Mutter und ihre Tochter.","sr":"Ovde vidim majku i njenu ćerku."},{"cat":"start","personExample":true,"personGroup":"man_child","de":"Hier sehe ich einen Vater und seine Tochter.","sr":"Ovde vidim oca i njegovu ćerku."},{"cat":"start","personExample":true,"personGroup":"man_child","de":"Hier sehe ich einen Vater und seinen Sohn.","sr":"Ovde vidim oca i njegovog sina."},{"cat":"start","personExample":true,"personGroup":"woman_child","de":"Hier sehe ich eine Mutter und ihren Sohn.","sr":"Ovde vidim majku i njenog sina."},{"cat":"start","personExample":true,"personGroup":"man_woman","de":"Auf dem Bild gibt es einen Mann und eine Frau.","sr":"Na slici se nalaze muškarac i žena."},{"cat":"start","personExample":true,"personGroup":"two_men","de":"Auf dem Bild gibt es zwei Männer.","sr":"Na slici se nalaze dva muškarca."},{"cat":"start","personExample":true,"personGroup":"two_women","de":"Auf dem Bild gibt es zwei Frauen.","sr":"Na slici se nalaze dve žene."},{"cat":"start","personExample":true,"personGroup":"two_children","de":"Auf dem Bild gibt es zwei Kinder.","sr":"Na slici se nalaze dvoje dece."},{"cat":"start","personExample":true,"personGroup":"woman_child","de":"Auf dem Bild gibt es eine Mutter und ihre Tochter.","sr":"Na slici se nalaze majka i njena ćerka."},{"cat":"start","personExample":true,"personGroup":"man_child","de":"Auf dem Bild gibt es einen Vater und seine Tochter.","sr":"Na slici se nalaze otac i njegova ćerka."},{"cat":"start","personExample":true,"personGroup":"man_child","de":"Auf dem Bild gibt es einen Vater und seinen Sohn.","sr":"Na slici se nalaze otac i njegov sin."},{"cat":"start","personExample":true,"personGroup":"woman_child","de":"Auf dem Bild gibt es eine Mutter und ihren Sohn.","sr":"Na slici se nalaze majka i njen sin."},{"cat":"start","personExample":true,"personGroup":"man_woman","de":"Ich kann einen Mann und eine Frau sehen.","sr":"Mogu da vidim muškarca i ženu."},{"cat":"start","personExample":true,"personGroup":"two_men","de":"Ich kann zwei Männer sehen.","sr":"Mogu da vidim dva muškarca."},{"cat":"start","personExample":true,"personGroup":"two_women","de":"Ich kann zwei Frauen sehen.","sr":"Mogu da vidim dve žene."},{"cat":"start","personExample":true,"personGroup":"two_children","de":"Ich kann zwei Kinder sehen.","sr":"Mogu da vidim dvoje dece."},{"cat":"start","personExample":true,"personGroup":"woman_child","de":"Ich kann eine Mutter und ihre Tochter sehen.","sr":"Mogu da vidim majku i njenu ćerku."},{"cat":"start","personExample":true,"personGroup":"man_child","de":"Ich kann einen Vater und seine Tochter sehen.","sr":"Mogu da vidim oca i njegovu ćerku."},{"cat":"start","personExample":true,"personGroup":"man_child","de":"Ich kann einen Vater und seinen Sohn sehen.","sr":"Mogu da vidim oca i njegovog sina."},{"cat":"start","personExample":true,"personGroup":"woman_child","de":"Ich kann eine Mutter und ihren Sohn sehen.","sr":"Mogu da vidim majku i njenog sina."},{"cat":"start","personExample":true,"personGroup":"man_woman","de":"Auf dem Foto sehe ich einen Mann und eine Frau.","sr":"Na fotografiji vidim muškarca i ženu."},{"cat":"start","personExample":true,"personGroup":"two_men","de":"Auf dem Foto sehe ich zwei Männer.","sr":"Na fotografiji vidim dva muškarca."},{"cat":"start","personExample":true,"personGroup":"two_women","de":"Auf dem Foto sehe ich zwei Frauen.","sr":"Na fotografiji vidim dve žene."},{"cat":"start","personExample":true,"personGroup":"two_children","de":"Auf dem Foto sehe ich zwei Kinder.","sr":"Na fotografiji vidim dvoje dece."},{"cat":"start","personExample":true,"personGroup":"woman_child","de":"Auf dem Foto sehe ich eine Mutter und ihre Tochter.","sr":"Na fotografiji vidim majku i njenu ćerku."},{"cat":"start","personExample":true,"personGroup":"man_child","de":"Auf dem Foto sehe ich einen Vater und seine Tochter.","sr":"Na fotografiji vidim oca i njegovu ćerku."},{"cat":"start","personExample":true,"personGroup":"man_child","de":"Auf dem Foto sehe ich einen Vater und seinen Sohn.","sr":"Na fotografiji vidim oca i njegovog sina."},{"cat":"start","personExample":true,"personGroup":"woman_child","de":"Auf dem Foto sehe ich eine Mutter und ihren Sohn.","sr":"Na fotografiji vidim majku i njenog sina."},{"cat":"start","personExample":true,"personGroup":"man_woman","de":"Hier sind ein Mann und eine Frau.","sr":"Ovde su muškarac i žena."},{"cat":"start","personExample":true,"personGroup":"two_men","de":"Hier sind zwei Männer.","sr":"Ovde su dva muškarca."},{"cat":"start","personExample":true,"personGroup":"two_women","de":"Hier sind zwei Frauen.","sr":"Ovde su dve žene."},{"cat":"start","personExample":true,"personGroup":"two_children","de":"Hier sind zwei Kinder.","sr":"Ovde su dvoje dece."},{"cat":"start","personExample":true,"personGroup":"woman_child","de":"Hier sind eine Mutter und ihre Tochter.","sr":"Ovde su majka i njena ćerka."},{"cat":"start","personExample":true,"personGroup":"man_child","de":"Hier sind ein Vater und seine Tochter.","sr":"Ovde su otac i njegova ćerka."},{"cat":"start","personExample":true,"personGroup":"man_child","de":"Hier sind ein Vater und sein Sohn.","sr":"Ovde su otac i njegov sin."},{"cat":"start","personExample":true,"personGroup":"woman_child","de":"Hier sind eine Mutter und ihr Sohn.","sr":"Ovde su majka i njen sin."},{"cat":"mann","de":"Der Mann ist groß.","sr":"Muškarac je visok."},{"cat":"mann","de":"Der Mann ist klein.","sr":"Muškarac je nizak."},{"cat":"mann","de":"Der Mann ist schön und groß.","sr":"Muškarac je lep i visok."},{"cat":"mann","de":"Der Mann ist sympathisch und groß.","sr":"Muškarac je simpatičan i visok."},{"cat":"frau","de":"Die Frau ist groß.","sr":"Žena je visoka."},{"cat":"frau","de":"Die Frau ist klein.","sr":"Žena je niska."},{"cat":"frau","de":"Die Frau ist schön und groß.","sr":"Žena je lepa i visoka."},{"cat":"frau","de":"Die Frau ist sympathisch und groß.","sr":"Žena je simpatična i visoka."},{"cat":"kind","de":"Das Kind ist groß.","sr":"Dete je visoko."},{"cat":"kind","de":"Das Kind ist klein.","sr":"Dete je nisko."},{"cat":"kind","de":"Das Kind ist schön und groß.","sr":"Dete je lepo i visoko."},{"cat":"kind","de":"Das Kind ist sympathisch und groß.","sr":"Dete je simpatično i visoko."},{"cat":"mann","de":"Der Mann ist groß und schön.","sr":"Muškarac je visok i lep."},{"cat":"mann","de":"Der Mann ist klein und schön.","sr":"Muškarac je nizak i lep."},{"cat":"mann","de":"Der Mann ist groß und sportlich.","sr":"Muškarac je visok i sportski građen."},{"cat":"mann","de":"Der Mann ist klein und freundlich.","sr":"Muškarac je nizak i ljubazan."},{"cat":"mann","de":"Der Mann ist groß und freundlich.","sr":"Muškarac je visok i ljubazan."},{"cat":"mann","de":"Der Mann ist klein und sympathisch.","sr":"Muškarac je nizak i simpatičan."},{"cat":"mann","de":"Der Mann ist jung.","sr":"Muškarac je mlad."},{"cat":"mann","de":"Der Mann ist schön.","sr":"Muškarac je lep."},{"cat":"mann","de":"Der Mann ist sportlich.","sr":"Muškarac je sportski građen."},{"cat":"mann","de":"Der Mann ist schlank.","sr":"Muškarac je vitak."},{"cat":"mann","de":"Der Mann ist stark.","sr":"Muškarac je snažan."},{"cat":"mann","de":"Der Mann ist nett.","sr":"Muškarac je fin."},{"cat":"mann","de":"Der Mann ist ruhig.","sr":"Muškarac je miran."},{"cat":"mann","de":"Der Mann ist lustig.","sr":"Muškarac je zabavan."},{"cat":"mann","de":"Der Mann ist traurig.","sr":"Muškarac je tužan."},{"cat":"mann","de":"Der Mann ist müde.","sr":"Muškarac je umoran."},{"cat":"mann","de":"Der Mann ist fröhlich.","sr":"Muškarac je veseo."},{"cat":"mann","de":"Der Mann ist sympathisch.","sr":"Muškarac je simpatičan."},{"cat":"mann","de":"Der Mann ist freundlich.","sr":"Muškarac je ljubazan."},{"cat":"frau","de":"Die Frau ist groß und schön.","sr":"Žena je visoka i lepa."},{"cat":"frau","de":"Die Frau ist klein und schön.","sr":"Žena je niska i lepa."},{"cat":"frau","de":"Die Frau ist groß und sportlich.","sr":"Žena je visoka i sportski građena."},{"cat":"frau","de":"Die Frau ist klein und freundlich.","sr":"Žena je niska i ljubazna."},{"cat":"frau","de":"Die Frau ist groß und freundlich.","sr":"Žena je visoka i ljubazna."},{"cat":"frau","de":"Die Frau ist klein und sympathisch.","sr":"Žena je niska i simpatična."},{"cat":"frau","de":"Die Frau ist jung.","sr":"Žena je mlada."},{"cat":"frau","de":"Die Frau ist schön.","sr":"Žena je lepa."},{"cat":"frau","de":"Die Frau ist sportlich.","sr":"Žena je sportski građena."},{"cat":"frau","de":"Die Frau ist schlank.","sr":"Žena je vitka."},{"cat":"frau","de":"Die Frau ist stark.","sr":"Žena je snažna."},{"cat":"frau","de":"Die Frau ist nett.","sr":"Žena je fina."},{"cat":"frau","de":"Die Frau ist ruhig.","sr":"Žena je mirna."},{"cat":"frau","de":"Die Frau ist lustig.","sr":"Žena je zabavna."},{"cat":"frau","de":"Die Frau ist traurig.","sr":"Žena je tužna."},{"cat":"frau","de":"Die Frau ist müde.","sr":"Žena je umorna."},{"cat":"frau","de":"Die Frau ist fröhlich.","sr":"Žena je vesela."},{"cat":"frau","de":"Die Frau ist sympathisch.","sr":"Žena je simpatična."},{"cat":"frau","de":"Die Frau ist freundlich.","sr":"Žena je ljubazna."},{"cat":"kind","de":"Das Kind ist groß und schön.","sr":"Dete je visoko i lepo."},{"cat":"kind","de":"Das Kind ist klein und schön.","sr":"Dete je nisko i lepo."},{"cat":"kind","de":"Das Kind ist groß und sportlich.","sr":"Dete je visoko i sportski građeno."},{"cat":"kind","de":"Das Kind ist klein und freundlich.","sr":"Dete je nisko i ljubazno."},{"cat":"kind","de":"Das Kind ist groß und freundlich.","sr":"Dete je visoko i ljubazno."},{"cat":"kind","de":"Das Kind ist klein und sympathisch.","sr":"Dete je nisko i simpatično."},{"cat":"kind","de":"Das Kind ist jung.","sr":"Dete je mlado."},{"cat":"kind","de":"Das Kind ist schön.","sr":"Dete je lepo."},{"cat":"kind","de":"Das Kind ist sportlich.","sr":"Dete je sportski građeno."},{"cat":"kind","de":"Das Kind ist schlank.","sr":"Dete je vitko."},{"cat":"kind","de":"Das Kind ist stark.","sr":"Dete je snažno."},{"cat":"kind","de":"Das Kind ist nett.","sr":"Dete je fino."},{"cat":"kind","de":"Das Kind ist ruhig.","sr":"Dete je mirno."},{"cat":"kind","de":"Das Kind ist lustig.","sr":"Dete je zabavno."},{"cat":"kind","de":"Das Kind ist traurig.","sr":"Dete je tužno."},{"cat":"kind","de":"Das Kind ist müde.","sr":"Dete je umorno."},{"cat":"kind","de":"Das Kind ist fröhlich.","sr":"Dete je veselo."},{"cat":"kind","de":"Das Kind ist sympathisch.","sr":"Dete je simpatično."},{"cat":"kind","de":"Das Kind ist freundlich.","sr":"Dete je ljubazno."},{"cat":"mann","de":"Der Mann links ist klein.","sr":"Muškarac levo je nizak."},{"cat":"mann","de":"Der Mann rechts ist groß.","sr":"Muškarac desno je visok."},{"cat":"mann","de":"Der andere Mann ist groß.","sr":"Drugi muškarac je visok."},{"cat":"mann","de":"Der andere Mann ist klein.","sr":"Drugi muškarac je nizak."},{"cat":"mann","de":"Der andere Mann ist freundlich.","sr":"Drugi muškarac je ljubazan."},{"cat":"frau","de":"Die Frau links ist klein.","sr":"Žena levo je niska."},{"cat":"frau","de":"Die Frau rechts ist groß.","sr":"Žena desno je visoka."},{"cat":"frau","de":"Die andere Frau ist groß.","sr":"Druga žena je visoka."},{"cat":"frau","de":"Die andere Frau ist klein.","sr":"Druga žena je niska."},{"cat":"frau","de":"Die andere Frau ist freundlich.","sr":"Druga žena je ljubazna."},{"cat":"kind","de":"Das Kind links ist klein.","sr":"Dete levo je nisko."},{"cat":"kind","de":"Das Kind rechts ist groß.","sr":"Dete desno je visoko."},{"cat":"kind","de":"Das andere Kind ist groß.","sr":"Drugo dete je visoko."},{"cat":"kind","de":"Das andere Kind ist klein.","sr":"Drugo dete je nisko."},{"cat":"kind","de":"Das andere Kind ist freundlich.","sr":"Drugo dete je ljubazno."},{"cat":"extra","de":"Im Hintergrund sehe ich viele Bäume.","sr":"U pozadini vidim mnogo drveća.","sceneDetailIds":["priroda","reka"]},{"cat":"extra","de":"Der Himmel ist blau.","sr":"Nebo je plavo.","sceneDetailIds":["priroda"]},{"cat":"extra","de":"Auf dem Boden wächst grünes Gras.","sr":"Na zemlji raste zelena trava.","sceneDetailIds":["priroda"]},{"cat":"extra","de":"Ich sehe einen kleinen Weg.","sr":"Vidim malu stazu.","sceneDetailIds":["priroda"]},{"cat":"extra","de":"Auf dem Weg liegen Steine.","sr":"Na stazi leži kamenje.","sceneDetailIds":["priroda"]},{"cat":"extra","de":"Neben dem Weg stehen Blumen.","sr":"Pored staze raste cveće.","sceneDetailIds":["priroda"]},{"cat":"extra","de":"Die Sonne scheint.","sr":"Sunce sija.","sceneDetailIds":["priroda"]},{"cat":"extra","de":"In der Ferne sehe ich Berge.","sr":"U daljini vidim planine.","sceneDetailIds":["priroda"]},{"cat":"extra","de":"Ein Vogel sitzt auf einem Baum.","sr":"Jedna ptica sedi na drvetu.","sceneDetailIds":["priroda"]},{"cat":"extra","de":"Hier gibt es viel Grün.","sr":"Ovde ima mnogo zelenila.","sceneDetailIds":["priroda"]},{"cat":"extra","de":"Im Regal liegen viele Brote.","sr":"Na polici leži mnogo hlebova.","sceneDetailIds":["pekara"]},{"cat":"extra","de":"Auf der Theke liegen frische Brötchen.","sr":"Na pultu leže sveže zemičke.","sceneDetailIds":["pekara"]},{"cat":"extra","de":"Hinter der Theke stehen viele Körbe.","sr":"Iza pulta stoji mnogo korpi.","sceneDetailIds":["pekara"]},{"cat":"extra","de":"Die Verkäuferin hält eine Zange.","sr":"Prodavačica drži hvataljku.","sceneDetailIds":["pekara"]},{"cat":"extra","de":"Neben dem Brot liegen Kuchen.","sr":"Pored hleba stoje kolači.","sceneDetailIds":["pekara"]},{"cat":"extra","de":"Auf dem Tisch liegen Brezeln.","sr":"Na stolu su perece.","sceneDetailIds":["pekara"]},{"cat":"extra","de":"Im Schaufenster sehe ich Torten.","sr":"U izlogu vidim torte.","sceneDetailIds":["pekara"]},{"cat":"extra","de":"Die Brote sind groß und braun.","sr":"Hlebovi su veliki i smeđi.","sceneDetailIds":["pekara"]},{"cat":"extra","de":"Der Kunde hält eine Papiertüte.","sr":"Mušterija drži papirnu kesu.","sceneDetailIds":["pekara"]},{"cat":"extra","de":"Auf einem Schild stehen die Preise.","sr":"Na tabli su napisane cene.","sceneDetailIds":["pekara"]},{"cat":"extra","de":"Im Hintergrund stehen viele Reifen.","sr":"U pozadini stoji mnogo guma.","sceneDetailIds":["radionica"]},{"cat":"extra","de":"Die Motorhaube ist offen.","sr":"Hauba automobila je otvorena.","sceneDetailIds":["radionica"]},{"cat":"extra","de":"Neben dem Auto liegt Werkzeug.","sr":"Pored automobila leži alat.","sceneDetailIds":["radionica"]},{"cat":"extra","de":"Der Mechaniker trägt Handschuhe.","sr":"Mehaničar nosi rukavice.","sceneDetailIds":["radionica"]},{"cat":"extra","de":"Auf dem Boden steht ein Werkzeugkasten.","sr":"Na podu stoji kutija sa alatom.","sceneDetailIds":["radionica"]},{"cat":"extra","de":"Das Auto steht in der Werkstatt.","sr":"Automobil stoji u radionici.","sceneDetailIds":["radionica"]},{"cat":"extra","de":"Der Mechaniker hält einen Schraubenschlüssel.","sr":"Mehaničar drži ključ za šrafove.","sceneDetailIds":["radionica"]},{"cat":"extra","de":"An der Wand hängen Werkzeuge.","sr":"Na zidu visi alat.","sceneDetailIds":["radionica"]},{"cat":"extra","de":"Neben dem Auto steht ein Wagenheber.","sr":"Pored automobila stoji dizalica.","sceneDetailIds":["radionica"]},{"cat":"extra","de":"Der Reifen ist schwarz.","sr":"Guma je crna.","sceneDetailIds":["radionica"]},{"cat":"extra","de":"Im Wohnzimmer steht ein Sofa.","sr":"U dnevnoj sobi stoji kauč.","sceneDetailIds":["stan"]},{"cat":"extra","de":"Neben dem Sofa steht eine Lampe.","sr":"Pored kauča stoji lampa.","sceneDetailIds":["stan"]},{"cat":"extra","de":"An der Wand hängt ein Bild.","sr":"Na zidu visi slika.","sceneDetailIds":["stan","soba"]},{"cat":"extra","de":"Vor dem Sofa steht ein kleiner Tisch.","sr":"Ispred kauča stoji mali sto.","sceneDetailIds":["stan"]},{"cat":"extra","de":"Auf dem Tisch steht eine Vase.","sr":"Na stolu stoji vaza.","sceneDetailIds":["stan"]},{"cat":"extra","de":"Auf dem Sofa liegen Kissen.","sr":"Na kauču leže jastuci.","sceneDetailIds":["stan"]},{"cat":"extra","de":"Im Wohnzimmer liegt ein Teppich.","sr":"U dnevnoj sobi je tepih.","sceneDetailIds":["stan"]},{"cat":"extra","de":"Das Fenster ist groß.","sr":"Prozor je veliki.","sceneDetailIds":["stan"]},{"cat":"extra","de":"Im Regal stehen Bücher.","sr":"Na polici stoje knjige.","sceneDetailIds":["stan"]},{"cat":"extra","de":"Neben der Tür steht eine Pflanze.","sr":"Pored vrata stoji biljka.","sceneDetailIds":["stan","cekaonica"]},{"cat":"extra","de":"Auf dem Tisch liegen Tomaten.","sr":"Na stolu leži paradajz.","sceneDetailIds":["kuhinja"]},{"cat":"extra","de":"In der Küche steht ein Kühlschrank.","sr":"U kuhinji stoji frižider.","sceneDetailIds":["kuhinja"]},{"cat":"extra","de":"Die Frau hält ein Messer.","sr":"Žena drži nož.","sceneDetailIds":["kuhinja"]},{"cat":"extra","de":"Auf dem Herd steht ein Topf.","sr":"Na šporetu stoji lonac.","sceneDetailIds":["kuhinja"]},{"cat":"extra","de":"Neben dem Herd steht ein Mülleimer.","sr":"Pored šporeta stoji kanta za smeće.","sceneDetailIds":["kuhinja"]},{"cat":"extra","de":"Auf dem Tisch liegt ein Schneidebrett.","sr":"Na stolu leži daska za sečenje.","sceneDetailIds":["kuhinja","mesara"]},{"cat":"extra","de":"Neben dem Spülbecken stehen Teller.","sr":"Pored sudopere stoje tanjiri.","sceneDetailIds":["kuhinja"]},{"cat":"extra","de":"An der Wand hängen Küchenschränke.","sr":"Na zidu vise kuhinjski ormarići.","sceneDetailIds":["kuhinja"]},{"cat":"extra","de":"Der Mann wäscht Gemüse.","sr":"Muškarac pere povrće.","sceneDetailIds":["kuhinja"]},{"cat":"extra","de":"Auf der Arbeitsplatte steht eine Schüssel.","sr":"Na radnoj površini stoji činija.","sceneDetailIds":["kuhinja"]},{"cat":"extra","de":"An der Wand hängen viele Jacken.","sr":"Na zidu visi mnogo jakni.","sceneDetailIds":["butik"]},{"cat":"extra","de":"Auf dem Tisch liegen Kleidungsstücke.","sr":"Na stolu leže odevni predmeti.","sceneDetailIds":["butik"]},{"cat":"extra","de":"Die Frau hält ein schönes Kleid.","sr":"Žena drži lepu haljinu.","sceneDetailIds":["butik"]},{"cat":"extra","de":"Im Regal liegen bunte Pullover.","sr":"Na polici leže šareni džemperi.","sceneDetailIds":["butik"]},{"cat":"extra","de":"Auf dem Boden stehen Schuhe.","sr":"Na podu stoje cipele.","sceneDetailIds":["butik"]},{"cat":"extra","de":"Im Geschäft steht eine Kleiderstange.","sr":"U prodavnici stoji stalak za odeću.","sceneDetailIds":["butik"]},{"cat":"extra","de":"Neben der Tür ist ein Spiegel.","sr":"Pored vrata je ogledalo.","sceneDetailIds":["butik"]},{"cat":"extra","de":"An den Jacken hängen Preisschilder.","sr":"Na jaknama vise etikete sa cenama.","sceneDetailIds":["butik"]},{"cat":"extra","de":"Die Verkäuferin faltet ein T-Shirt.","sr":"Prodavačica slaže majicu.","sceneDetailIds":["butik"]},{"cat":"extra","de":"Die Kundin hält eine Einkaufstasche.","sr":"Mušterija drži torbu za kupovinu.","sceneDetailIds":["butik"]},{"cat":"extra","de":"Im Regal stehen viele Medikamente.","sr":"Na polici stoji mnogo lekova.","sceneDetailIds":["apoteka"]},{"cat":"extra","de":"Auf der Theke liegt eine kleine Schachtel.","sr":"Na pultu leži mala kutija.","sceneDetailIds":["apoteka"]},{"cat":"extra","de":"Hinter der Theke steht eine Frau.","sr":"Iza pulta stoji žena.","sceneDetailIds":["apoteka"]},{"cat":"extra","de":"Die Kundin hält ein Rezept.","sr":"Mušterija drži recept.","sceneDetailIds":["apoteka"]},{"cat":"extra","de":"Über der Theke hängt ein Schild.","sr":"Iznad pulta visi tabla.","sceneDetailIds":["apoteka"]},{"cat":"extra","de":"Auf dem Tisch steht eine Flasche.","sr":"Na stolu stoji bočica.","sceneDetailIds":["apoteka"]},{"cat":"extra","de":"Die Apothekerin trägt einen weißen Kittel.","sr":"Apotekarka nosi beli mantil.","sceneDetailIds":["apoteka"]},{"cat":"extra","de":"Im Regal stehen viele Packungen.","sr":"Na polici stoji mnogo pakovanja.","sceneDetailIds":["apoteka"]},{"cat":"extra","de":"Der Kunde hält eine Einkaufstüte.","sr":"Mušterija drži kesu za kupovinu.","sceneDetailIds":["apoteka"]},{"cat":"extra","de":"Neben der Kasse steht ein Computer.","sr":"Pored kase stoji računar.","sceneDetailIds":["apoteka"]},{"cat":"extra","de":"Auf dem Tisch liegt ein Stethoskop.","sr":"Na stolu leži stetoskop.","sceneDetailIds":["doktor","veterinar"]},{"cat":"extra","de":"Im Zimmer steht eine Liege.","sr":"U prostoriji stoji ležaj za pregled.","sceneDetailIds":["doktor"]},{"cat":"extra","de":"Der Arzt trägt einen weißen Kittel.","sr":"Lekar nosi beli mantil.","sceneDetailIds":["doktor"]},{"cat":"extra","de":"Der Patient sitzt auf einem Stuhl.","sr":"Pacijent sedi na stolici.","sceneDetailIds":["doktor"]},{"cat":"extra","de":"Auf dem Tisch liegt ein Rezept.","sr":"Na stolu leži recept.","sceneDetailIds":["doktor"]},{"cat":"extra","de":"Die Ärztin hält eine Patientenkarte.","sr":"Lekarka drži karton pacijenta.","sceneDetailIds":["doktor"]},{"cat":"extra","de":"An der Wand hängt ein medizinisches Bild.","sr":"Na zidu visi medicinska slika.","sceneDetailIds":["doktor"]},{"cat":"extra","de":"Neben der Liege steht ein kleiner Tisch.","sr":"Pored ležaja stoji mali sto.","sceneDetailIds":["doktor"]},{"cat":"extra","de":"Der Arzt hört das Herz ab.","sr":"Lekar sluša srce.","sceneDetailIds":["doktor"]},{"cat":"extra","de":"Auf dem Tisch steht ein Blutdruckmessgerät.","sr":"Na stolu stoji aparat za merenje pritiska.","sceneDetailIds":["doktor"]},{"cat":"extra","de":"In der Theke liegt frisches Fleisch.","sr":"U vitrini leži sveže meso.","sceneDetailIds":["mesara"]},{"cat":"extra","de":"An der Wand hängt eine Preisliste.","sr":"Na zidu visi cenovnik.","sceneDetailIds":["mesara","posta"]},{"cat":"extra","de":"Auf dem Tisch liegt ein Messer.","sr":"Na stolu leži nož.","sceneDetailIds":["mesara"]},{"cat":"extra","de":"Hinter der Theke steht eine Waage.","sr":"Iza pulta stoji vaga.","sceneDetailIds":["mesara"]},{"cat":"extra","de":"Der Metzger trägt eine weiße Schürze.","sr":"Mesar nosi belu kecelju.","sceneDetailIds":["mesara"]},{"cat":"extra","de":"Im Schaufenster liegt Wurst.","sr":"U izlogu stoji kobasica.","sceneDetailIds":["mesara"]},{"cat":"extra","de":"Der Kunde hält eine Tüte.","sr":"Mušterija drži kesu.","sceneDetailIds":["mesara"]},{"cat":"extra","de":"Der Metzger trägt Handschuhe.","sr":"Mesar nosi rukavice.","sceneDetailIds":["mesara"]},{"cat":"extra","de":"Neben dem Fleisch steht ein Preisschild.","sr":"Pored mesa stoji oznaka sa cenom.","sceneDetailIds":["mesara"]},{"cat":"extra","de":"Im Regal stehen viele Bücher.","sr":"Na polici stoji mnogo knjiga.","sceneDetailIds":["biblioteka","knjizara"]},{"cat":"extra","de":"Auf dem Tisch liegt ein Buch.","sr":"Na stolu leži knjiga.","sceneDetailIds":["biblioteka"]},{"cat":"extra","de":"Im Raum stehen viele Stühle.","sr":"U prostoriji stoji mnogo stolica.","sceneDetailIds":["biblioteka"]},{"cat":"extra","de":"Am Fenster sitzt eine Person.","sr":"Pored prozora sedi jedna osoba.","sceneDetailIds":["biblioteka"]},{"cat":"extra","de":"Auf dem Tisch steht eine Lampe.","sr":"Na stolu stoji lampa.","sceneDetailIds":["biblioteka"]},{"cat":"extra","de":"Eine Frau liest eine Zeitung.","sr":"Žena čita novine.","sceneDetailIds":["biblioteka"]},{"cat":"extra","de":"Ein Mann sucht ein Buch.","sr":"Muškarac traži knjigu.","sceneDetailIds":["biblioteka"]},{"cat":"extra","de":"Im Raum ist es ruhig.","sr":"U prostoriji je mirno.","sceneDetailIds":["biblioteka"]},{"cat":"extra","de":"Neben dem Regal steht ein Tisch.","sr":"Pored police stoji sto.","sceneDetailIds":["biblioteka"]},{"cat":"extra","de":"Auf dem Tisch liegen Hefte.","sr":"Na stolu leže sveske.","sceneDetailIds":["biblioteka"]},{"cat":"extra","de":"An der Wand hängt eine Tafel.","sr":"Na zidu visi tabla.","sceneDetailIds":["skola"]},{"cat":"extra","de":"Auf den Tischen liegen Hefte.","sr":"Na stolovima leže sveske.","sceneDetailIds":["skola"]},{"cat":"extra","de":"Im Klassenzimmer stehen viele Stühle.","sr":"U učionici stoji mnogo stolica.","sceneDetailIds":["skola"]},{"cat":"extra","de":"Die Lehrerin hält ein Buch.","sr":"Učiteljica drži knjigu.","sceneDetailIds":["skola"]},{"cat":"extra","de":"Neben der Tafel hängt eine Uhr.","sr":"Pored table visi sat.","sceneDetailIds":["skola"]},{"cat":"extra","de":"Die Schüler sitzen an den Tischen.","sr":"Učenici sede za stolovima.","sceneDetailIds":["skola"]},{"cat":"extra","de":"Auf der Tafel stehen Wörter.","sr":"Na tabli su napisane reči.","sceneDetailIds":["skola"]},{"cat":"extra","de":"Ein Schüler hebt die Hand.","sr":"Jedan učenik podiže ruku.","sceneDetailIds":["skola"]},{"cat":"extra","de":"Auf dem Lehrertisch steht ein Computer.","sr":"Na nastavnikovom stolu stoji računar.","sceneDetailIds":["skola"]},{"cat":"extra","de":"An der Wand hängt eine Landkarte.","sr":"Na zidu visi geografska karta.","sceneDetailIds":["skola"]},{"cat":"extra","de":"Auf dem Tisch stehen zwei Tassen.","sr":"Na stolu stoje dve šoljice.","sceneDetailIds":["kafic"]},{"cat":"extra","de":"Im Hintergrund sehe ich eine Kaffeemaschine.","sr":"U pozadini vidim aparat za kafu.","sceneDetailIds":["kafic"]},{"cat":"extra","de":"Neben dem Tisch stehen Stühle.","sr":"Pored stola stoje stolice.","sceneDetailIds":["kafic"]},{"cat":"extra","de":"Auf dem Tisch liegt eine Speisekarte.","sr":"Na stolu leži jelovnik.","sceneDetailIds":["kafic"]},{"cat":"extra","de":"An der Wand hängen Bilder.","sr":"Na zidu vise slike.","sceneDetailIds":["kafic"]},{"cat":"extra","de":"Der Kellner trägt ein Tablett.","sr":"Konobar nosi poslužavnik.","sceneDetailIds":["kafic"]},{"cat":"extra","de":"Auf dem Teller liegt ein Stück Kuchen.","sr":"Na tanjiru leži parče kolača.","sceneDetailIds":["kafic"]},{"cat":"extra","de":"Am Fenster sitzt ein Gast.","sr":"Pored prozora sedi gost.","sceneDetailIds":["kafic"]},{"cat":"extra","de":"Auf dem Tisch steht ein Glas Wasser.","sr":"Na stolu stoji čaša vode.","sceneDetailIds":["kafic"]},{"cat":"extra","de":"Hinter der Theke steht eine Kaffeemaschine.","sr":"Iza pulta stoji aparat za kafu.","sceneDetailIds":["kafic"]},{"cat":"extra","de":"Im Garten wachsen viele Blumen.","sr":"U bašti raste mnogo cveća.","sceneDetailIds":["basta"]},{"cat":"extra","de":"Auf dem Boden steht eine Gießkanne.","sr":"Na zemlji stoji kantica za zalivanje.","sceneDetailIds":["basta"]},{"cat":"extra","de":"Hinter dem Haus steht ein großer Baum.","sr":"Iza kuće stoji veliko drvo.","sceneDetailIds":["basta"]},{"cat":"extra","de":"Neben den Blumen steht ein Eimer.","sr":"Pored cveća stoji kofa.","sceneDetailIds":["basta"]},{"cat":"extra","de":"Auf dem Boden liegt ein Gartenschlauch.","sr":"Na zemlji leži baštensko crevo.","sceneDetailIds":["basta"]},{"cat":"extra","de":"Der Mann hält eine Schaufel.","sr":"Muškarac drži lopatu.","sceneDetailIds":["basta"]},{"cat":"extra","de":"Eine Frau pflanzt Blumen.","sr":"Žena sadi cveće.","sceneDetailIds":["basta"]},{"cat":"extra","de":"Im Garten steht eine Holzbank.","sr":"U bašti stoji drvena klupa.","sceneDetailIds":["basta"]},{"cat":"extra","de":"Neben der Bank stehen Blumentöpfe.","sr":"Pored klupe stoje saksije.","sceneDetailIds":["basta"]},{"cat":"extra","de":"Der Garten hat einen kleinen Zaun.","sr":"Bašta ima malu ogradu.","sceneDetailIds":["basta"]},{"cat":"extra","de":"In den Regalen liegen viele Lebensmittel.","sr":"Na policama leži mnogo namirnica.","sceneDetailIds":["supermarket"]},{"cat":"extra","de":"Im Einkaufswagen liegen Äpfel.","sr":"U kolicima leže jabuke.","sceneDetailIds":["supermarket"]},{"cat":"extra","de":"Auf dem Boden steht ein Einkaufskorb.","sr":"Na podu stoji korpa za kupovinu.","sceneDetailIds":["supermarket"]},{"cat":"extra","de":"An den Regalen hängen Preisschilder.","sr":"Na policama vise oznake sa cenama.","sceneDetailIds":["supermarket"]},{"cat":"extra","de":"Eine Frau schiebt einen Einkaufswagen.","sr":"Žena gura kolica za kupovinu.","sceneDetailIds":["supermarket"]},{"cat":"extra","de":"Im Regal stehen Milchpackungen.","sr":"Na polici stoje pakovanja mleka.","sceneDetailIds":["supermarket"]},{"cat":"extra","de":"Auf einem Tisch liegt frisches Gemüse.","sr":"Na jednom stolu leži sveže povrće.","sceneDetailIds":["supermarket"]},{"cat":"extra","de":"Ein Mann nimmt Brot aus dem Regal.","sr":"Muškarac uzima hleb sa police.","sceneDetailIds":["supermarket"]},{"cat":"extra","de":"Neben der Kasse stehen Einkaufskörbe.","sr":"Pored kase stoje korpe za kupovinu.","sceneDetailIds":["supermarket"]},{"cat":"extra","de":"Die Frau hält eine Einkaufsliste.","sr":"Žena drži spisak za kupovinu.","sceneDetailIds":["supermarket"]},{"cat":"extra","de":"Im Hintergrund stehen hohe Bäume.","sr":"U pozadini stoje visoka stabla.","sceneDetailIds":["suma"]},{"cat":"extra","de":"Auf dem Boden liegen viele Blätter.","sr":"Na zemlji leži mnogo lišća.","sceneDetailIds":["suma"]},{"cat":"extra","de":"Zwischen den Bäumen ist ein Weg.","sr":"Između stabala je staza.","sceneDetailIds":["suma"]},{"cat":"extra","de":"Auf dem Weg liegen kleine Steine.","sr":"Na stazi leži sitno kamenje.","sceneDetailIds":["suma"]},{"cat":"extra","de":"Zwischen den Bäumen steht eine Bank.","sr":"Između stabala stoji klupa.","sceneDetailIds":["suma"]},{"cat":"extra","de":"Der Weg ist schmal.","sr":"Staza je uska.","sceneDetailIds":["suma"]},{"cat":"extra","de":"Auf dem Boden wachsen Pilze.","sr":"Na zemlji rastu pečurke.","sceneDetailIds":["suma"]},{"cat":"extra","de":"Die Bäume haben grüne Blätter.","sr":"Drveće ima zeleno lišće.","sceneDetailIds":["suma"]},{"cat":"extra","de":"Im Wald sehe ich einen kleinen Bach.","sr":"U šumi vidim mali potok.","sceneDetailIds":["suma"]},{"cat":"extra","de":"Neben dem Weg wächst hohes Gras.","sr":"Pored staze raste visoka trava.","sceneDetailIds":["suma"]},{"cat":"extra","de":"Auf der Theke steht ein Computer.","sr":"Na pultu stoji računar.","sceneDetailIds":["hotel"]},{"cat":"extra","de":"Hinter der Rezeption hängt eine Uhr.","sr":"Iza recepcije visi sat.","sceneDetailIds":["hotel"]},{"cat":"extra","de":"Auf dem Tisch liegt ein Schlüssel.","sr":"Na stolu leži ključ.","sceneDetailIds":["hotel"]},{"cat":"extra","de":"Vor der Rezeption steht ein Koffer.","sr":"Ispred recepcije stoji kofer.","sceneDetailIds":["hotel"]},{"cat":"extra","de":"Die Rezeptionistin hält eine Karte.","sr":"Recepcionerka drži karticu.","sceneDetailIds":["hotel"]},{"cat":"extra","de":"Im Eingang stehen große Pflanzen.","sr":"Na ulazu stoje velike biljke.","sceneDetailIds":["hotel"]},{"cat":"extra","de":"An der Wand hängt ein Hotelbild.","sr":"Na zidu visi slika hotela.","sceneDetailIds":["hotel"]},{"cat":"extra","de":"Auf dem Boden liegt ein Teppich.","sr":"Na podu leži tepih.","sceneDetailIds":["hotel"]},{"cat":"extra","de":"Der Gast hält seinen Reisepass.","sr":"Gost drži pasoš.","sceneDetailIds":["hotel"]},{"cat":"extra","de":"Hinter dem Gast steht eine Reisetasche.","sr":"Iza gosta stoji putna torba.","sceneDetailIds":["hotel"]},{"cat":"extra","de":"Auf dem Tisch liegt ein Wörterbuch.","sr":"Na stolu leži rečnik.","sceneDetailIds":["knjizara"]},{"cat":"extra","de":"An der Wand hängt ein Plakat.","sr":"Na zidu visi plakat.","sceneDetailIds":["knjizara"]},{"cat":"extra","de":"Auf dem Tisch liegen neue Bücher.","sr":"Na stolu leže nove knjige.","sceneDetailIds":["knjizara"]},{"cat":"extra","de":"Neben der Tür steht ein Regal.","sr":"Pored vrata stoji polica.","sceneDetailIds":["knjizara"]},{"cat":"extra","de":"Die Verkäuferin hält ein Buch.","sr":"Prodavačica drži knjigu.","sceneDetailIds":["knjizara"]},{"cat":"extra","de":"Im Schaufenster sehe ich Kinderbücher.","sr":"U izlogu vidim dečje knjige.","sceneDetailIds":["knjizara"]},{"cat":"extra","de":"Auf den Büchern stehen Preise.","sr":"Na knjigama pišu cene.","sceneDetailIds":["knjizara"]},{"cat":"extra","de":"Der Kunde liest einen Buchtitel.","sr":"Mušterija čita naslov knjige.","sceneDetailIds":["knjizara"]},{"cat":"extra","de":"Im Laden gibt es viele Regale.","sr":"U prodavnici ima mnogo polica.","sceneDetailIds":["knjizara"]},{"cat":"extra","de":"Im Laden stehen viele Blumen.","sr":"U prodavnici stoji mnogo cveća.","sceneDetailIds":["cvecara"]},{"cat":"extra","de":"Auf dem Tisch liegt ein Blumenstrauß.","sr":"Na stolu leži buket cveća.","sceneDetailIds":["cvecara"]},{"cat":"extra","de":"In den Eimern stehen rote Rosen.","sr":"U kofama stoje crvene ruže.","sceneDetailIds":["cvecara"]},{"cat":"extra","de":"Auf dem Tisch liegt eine Schere.","sr":"Na stolu leže makaze.","sceneDetailIds":["cvecara"]},{"cat":"extra","de":"Neben dem Blumenstrauß steht eine Vase.","sr":"Pored buketa stoji vaza.","sceneDetailIds":["cvecara"]},{"cat":"extra","de":"Die Floristin hält gelbe Blumen.","sr":"Cvećarka drži žuto cveće.","sceneDetailIds":["cvecara"]},{"cat":"extra","de":"Neben der Tür stehen grüne Pflanzen.","sr":"Pored vrata stoje zelene biljke.","sceneDetailIds":["cvecara"]},{"cat":"extra","de":"Auf dem Boden stehen Blumentöpfe.","sr":"Na podu stoje saksije.","sceneDetailIds":["cvecara"]},{"cat":"extra","de":"Die Kundin riecht an einer Rose.","sr":"Mušterija miriše jednu ružu.","sceneDetailIds":["cvecara"]},{"cat":"extra","de":"Im Hintergrund sehe ich weiße Blumen.","sr":"U pozadini vidim belo cveće.","sceneDetailIds":["cvecara"]},{"cat":"extra","de":"Am Fenster sitzt eine Frau.","sr":"Pored prozora sedi žena.","sceneDetailIds":["voz"]},{"cat":"extra","de":"Neben dem Fenster ist ein Sitzplatz.","sr":"Pored prozora je sedište.","sceneDetailIds":["voz"]},{"cat":"extra","de":"Auf dem Boden steht ein Koffer.","sr":"Na podu stoji kofer.","sceneDetailIds":["voz"]},{"cat":"extra","de":"Über den Sitzen liegen Taschen.","sr":"Iznad sedišta leže torbe.","sceneDetailIds":["voz"]},{"cat":"extra","de":"Durch das Fenster sehe ich Bäume.","sr":"Kroz prozor vidim drveće.","sceneDetailIds":["voz"]},{"cat":"extra","de":"Die Sitze sind blau.","sr":"Sedišta su plava.","sceneDetailIds":["voz"]},{"cat":"extra","de":"Ein Mann liest ein Buch.","sr":"Muškarac čita knjigu.","sceneDetailIds":["voz"]},{"cat":"extra","de":"Im Zug gibt es viele Fenster.","sr":"U vozu ima mnogo prozora.","sceneDetailIds":["voz"]},{"cat":"extra","de":"Der Fahrgast hält seine Fahrkarte.","sr":"Putnik drži svoju kartu.","sceneDetailIds":["voz"]},{"cat":"extra","de":"Neben dem Sitz steht ein Rucksack.","sr":"Pored sedišta stoji ranac.","sceneDetailIds":["voz"]},{"cat":"extra","de":"Im Wartezimmer stehen viele Stühle.","sr":"U čekaonici stoji mnogo stolica.","sceneDetailIds":["cekaonica"]},{"cat":"extra","de":"An der Wand hängt eine Uhr.","sr":"Na zidu visi sat.","sceneDetailIds":["cekaonica","stanica","posta"]},{"cat":"extra","de":"Auf dem Tisch liegen Zeitschriften.","sr":"Na stolu leže časopisi.","sceneDetailIds":["cekaonica"]},{"cat":"extra","de":"Ein Mann liest eine Zeitschrift.","sr":"Muškarac čita časopis.","sceneDetailIds":["cekaonica"]},{"cat":"extra","de":"Eine Frau hält ihre Versichertenkarte.","sr":"Žena drži zdravstvenu karticu.","sceneDetailIds":["cekaonica"]},{"cat":"extra","de":"Auf dem Tisch steht eine Wasserflasche.","sr":"Na stolu stoji flaša vode.","sceneDetailIds":["cekaonica"]},{"cat":"extra","de":"Im Wartezimmer ist es ruhig.","sr":"U čekaonici je mirno.","sceneDetailIds":["cekaonica"]},{"cat":"extra","de":"Neben dem Fenster sitzen zwei Personen.","sr":"Pored prozora sede dve osobe.","sceneDetailIds":["cekaonica"]},{"cat":"extra","de":"Die Tür zum Arztzimmer ist geschlossen.","sr":"Vrata ordinacije su zatvorena.","sceneDetailIds":["cekaonica"]},{"cat":"extra","de":"Im Zimmer steht ein Bett.","sr":"U sobi stoji krevet.","sceneDetailIds":["soba"]},{"cat":"extra","de":"Auf dem Bett liegt eine Decke.","sr":"Na krevetu leži ćebe.","sceneDetailIds":["soba"]},{"cat":"extra","de":"Neben dem Bett steht eine Lampe.","sr":"Pored kreveta stoji lampa.","sceneDetailIds":["soba"]},{"cat":"extra","de":"Vor dem Bett liegt ein Teppich.","sr":"Ispred kreveta je tepih.","sceneDetailIds":["soba"]},{"cat":"extra","de":"Das Fenster ist offen.","sr":"Prozor je otvoren.","sceneDetailIds":["soba"]},{"cat":"extra","de":"Neben dem Fenster steht ein Schrank.","sr":"Pored prozora stoji ormar.","sceneDetailIds":["soba"]},{"cat":"extra","de":"Auf dem Bett liegen zwei Kissen.","sr":"Na krevetu leže dva jastuka.","sceneDetailIds":["soba"]},{"cat":"extra","de":"Auf dem Schreibtisch steht eine Lampe.","sr":"Na radnom stolu stoji lampa.","sceneDetailIds":["soba"]},{"cat":"extra","de":"Die Vorhänge sind weiß.","sr":"Zavese su bele.","sceneDetailIds":["soba"]},{"cat":"extra","de":"Im Raum stehen viele Sportgeräte.","sr":"U prostoriji stoji mnogo sprava za vežbanje.","sceneDetailIds":["fitnes"]},{"cat":"extra","de":"Auf dem Boden liegt eine Hantel.","sr":"Na podu leži teg.","sceneDetailIds":["fitnes"]},{"cat":"extra","de":"An der Wand hängt ein großer Spiegel.","sr":"Na zidu visi veliko ogledalo.","sceneDetailIds":["fitnes","frizer"]},{"cat":"extra","de":"Ein Mann hebt eine Hantel.","sr":"Muškarac podiže teg.","sceneDetailIds":["fitnes"]},{"cat":"extra","de":"Neben dem Laufband liegt eine Wasserflasche.","sr":"Pored trake za trčanje leži flašica vode.","sceneDetailIds":["fitnes"]},{"cat":"extra","de":"Eine Frau fährt auf einem Heimtrainer.","sr":"Žena vežba na sobnom biciklu.","sceneDetailIds":["fitnes"]},{"cat":"extra","de":"Auf dem Boden liegt eine Sportmatte.","sr":"Na podu leži podloga za vežbanje.","sceneDetailIds":["fitnes"]},{"cat":"extra","de":"Der Trainer hält ein Handtuch.","sr":"Trener drži peškir.","sceneDetailIds":["fitnes"]},{"cat":"extra","de":"Im Hintergrund sehe ich ein Laufband.","sr":"U pozadini vidim traku za trčanje.","sceneDetailIds":["fitnes"]},{"cat":"extra","de":"Neben dem Spiegel steht eine Bank.","sr":"Pored ogledala stoji klupa.","sceneDetailIds":["fitnes"]},{"cat":"extra","de":"Auf dem Schreibtisch steht ein Computer.","sr":"Na radnom stolu stoji računar.","sceneDetailIds":["biro"]},{"cat":"extra","de":"Neben dem Computer liegt ein Stift.","sr":"Pored računara leži olovka.","sceneDetailIds":["biro"]},{"cat":"extra","de":"Im Regal stehen viele Ordner.","sr":"Na polici stoji mnogo registratora.","sceneDetailIds":["biro"]},{"cat":"extra","de":"Auf dem Tisch liegen Dokumente.","sr":"Na stolu leže dokumenta.","sceneDetailIds":["biro"]},{"cat":"extra","de":"Neben dem Schreibtisch steht ein Papierkorb.","sr":"Pored radnog stola stoji korpa za papir.","sceneDetailIds":["biro"]},{"cat":"extra","de":"Die Frau schreibt in ein Heft.","sr":"Žena piše u svesku.","sceneDetailIds":["biro"]},{"cat":"extra","de":"Hinter dem Schreibtisch steht ein Bürostuhl.","sr":"Iza radnog stola stoji kancelarijska stolica.","sceneDetailIds":["biro"]},{"cat":"extra","de":"Auf dem Schreibtisch steht ein Telefon.","sr":"Na radnom stolu stoji telefon.","sceneDetailIds":["biro"]},{"cat":"extra","de":"An der Wand hängt ein Kalender.","sr":"Na zidu visi kalendar.","sceneDetailIds":["biro"]},{"cat":"extra","de":"Der Mann schaut auf den Bildschirm.","sr":"Muškarac gleda u ekran.","sceneDetailIds":["biro"]},{"cat":"extra","de":"Im Saal stehen viele Sitze.","sr":"U sali stoji mnogo sedišta.","sceneDetailIds":["bioskop"]},{"cat":"extra","de":"Vorne sehe ich eine große Leinwand.","sr":"Napred vidim veliko filmsko platno.","sceneDetailIds":["bioskop"]},{"cat":"extra","de":"Im Kinosaal ist es dunkel.","sr":"U bioskopskoj sali je mračno.","sceneDetailIds":["bioskop"]},{"cat":"extra","de":"Einige Personen essen Popcorn.","sr":"Neke osobe jedu kokice.","sceneDetailIds":["bioskop"]},{"cat":"extra","de":"Eine Person hält ein Getränk.","sr":"Jedna osoba drži piće.","sceneDetailIds":["bioskop"]},{"cat":"extra","de":"Die Sitze sind rot.","sr":"Sedišta su crvena.","sceneDetailIds":["bioskop"]},{"cat":"extra","de":"Im Hintergrund sitzen viele Menschen.","sr":"U pozadini sedi mnogo ljudi.","sceneDetailIds":["bioskop"]},{"cat":"extra","de":"Eine Frau hält eine Kinokarte.","sr":"Žena drži bioskopsku kartu.","sceneDetailIds":["bioskop"]},{"cat":"extra","de":"Neben dem Sitz steht eine Tasche.","sr":"Pored sedišta stoji torba.","sceneDetailIds":["bioskop"]},{"cat":"extra","de":"Auf der Leinwand sehe ich einen Film.","sr":"Na platnu vidim film.","sceneDetailIds":["bioskop"]},{"cat":"extra","de":"Das Wasser ist ruhig.","sr":"Voda je mirna.","sceneDetailIds":["reka"]},{"cat":"extra","de":"Am Fluss liegt ein kleines Boot.","sr":"Pored reke je mali čamac.","sceneDetailIds":["reka"]},{"cat":"extra","de":"Am Ufer wachsen viele Pflanzen.","sr":"Na obali raste mnogo biljaka.","sceneDetailIds":["reka"]},{"cat":"extra","de":"Über den Fluss führt eine Brücke.","sr":"Preko reke vodi most.","sceneDetailIds":["reka"]},{"cat":"extra","de":"Neben der Brücke stehen Bäume.","sr":"Pored mosta stoji drveće.","sceneDetailIds":["reka"]},{"cat":"extra","de":"Ein Mann sitzt am Ufer.","sr":"Muškarac sedi na obali.","sceneDetailIds":["reka"]},{"cat":"extra","de":"Auf dem Wasser schwimmt eine Ente.","sr":"Na vodi pliva patka.","sceneDetailIds":["reka"]},{"cat":"extra","de":"In der Ferne sehe ich ein Haus.","sr":"U daljini vidim kuću.","sceneDetailIds":["reka"]},{"cat":"extra","de":"Der Fluss ist breit.","sr":"Reka je široka.","sceneDetailIds":["reka"]},{"cat":"extra","de":"Auf dem Bahnsteig stehen viele Menschen.","sr":"Na peronu stoji mnogo ljudi.","sceneDetailIds":["stanica"]},{"cat":"extra","de":"Im Hintergrund sehe ich einen Zug.","sr":"U pozadini vidim voz.","sceneDetailIds":["stanica"]},{"cat":"extra","de":"Ein Mann trägt einen Rucksack.","sr":"Muškarac nosi ranac.","sceneDetailIds":["stanica"]},{"cat":"extra","de":"Neben dem Gleis steht eine Bank.","sr":"Pored koloseka stoji klupa.","sceneDetailIds":["stanica"]},{"cat":"extra","de":"Eine Frau hält eine Fahrkarte.","sr":"Žena drži kartu za voz.","sceneDetailIds":["stanica"]},{"cat":"extra","de":"Auf dem Bahnsteig stehen Koffer.","sr":"Na peronu stoje koferi.","sceneDetailIds":["stanica"]},{"cat":"extra","de":"Über dem Gleis hängt eine Anzeige.","sr":"Iznad koloseka visi informativna tabla.","sceneDetailIds":["stanica"]},{"cat":"extra","de":"Der Zug steht am Bahnsteig.","sr":"Voz stoji na peronu.","sceneDetailIds":["stanica"]},{"cat":"extra","de":"Neben der Bank steht ein Papierkorb.","sr":"Pored klupe stoji korpa za smeće.","sceneDetailIds":["stanica"]},{"cat":"extra","de":"Auf dem Sand liegt ein Handtuch.","sr":"Na pesku leži peškir.","sceneDetailIds":["plaza"]},{"cat":"extra","de":"Neben dem Handtuch steht eine Tasche.","sr":"Pored peškira stoji torba.","sceneDetailIds":["plaza"]},{"cat":"extra","de":"Im Hintergrund sehe ich das Meer.","sr":"U pozadini vidim more.","sceneDetailIds":["plaza"]},{"cat":"extra","de":"Ein Kind baut eine Sandburg.","sr":"Dete pravi zamak od peska.","sceneDetailIds":["plaza"]},{"cat":"extra","de":"Neben der Tasche liegen Sandalen.","sr":"Pored torbe leže sandale.","sceneDetailIds":["plaza"]},{"cat":"extra","de":"Auf dem Strand steht ein Sonnenschirm.","sr":"Na plaži stoji suncobran.","sceneDetailIds":["plaza"]},{"cat":"extra","de":"Ein Mann liegt auf einer Liege.","sr":"Muškarac leži na ležaljci.","sceneDetailIds":["plaza"]},{"cat":"extra","de":"Auf dem Sand liegt ein Ball.","sr":"Na pesku leži lopta.","sceneDetailIds":["plaza"]},{"cat":"extra","de":"Die Kinder spielen mit Wasser.","sr":"Deca se igraju vodom.","sceneDetailIds":["plaza"]},{"cat":"extra","de":"Am Strand stehen bunte Liegen.","sr":"Na plaži stoje šarene ležaljke.","sceneDetailIds":["plaza"]},{"cat":"extra","de":"Das Meer ist blau.","sr":"More je plavo.","sceneDetailIds":["more"]},{"cat":"extra","de":"Auf dem Wasser sehe ich ein Boot.","sr":"Na vodi vidim čamac.","sceneDetailIds":["more","jezero"]},{"cat":"extra","de":"Am Strand stehen viele Sonnenschirme.","sr":"Na plaži stoji mnogo suncobrana.","sceneDetailIds":["more"]},{"cat":"extra","de":"Am Ufer spielen Kinder.","sr":"Na obali se igraju deca.","sceneDetailIds":["more"]},{"cat":"extra","de":"In der Ferne sehe ich ein Schiff.","sr":"U daljini vidim brod.","sceneDetailIds":["more"]},{"cat":"extra","de":"Die Wellen sind klein.","sr":"Talasi su mali.","sceneDetailIds":["more"]},{"cat":"extra","de":"Über dem Meer fliegen Vögel.","sr":"Iznad mora lete ptice.","sceneDetailIds":["more"]},{"cat":"extra","de":"Am Strand liegen Muscheln.","sr":"Na plaži leže školjke.","sceneDetailIds":["more"]},{"cat":"extra","de":"Eine Frau steht im Wasser.","sr":"Žena stoji u vodi.","sceneDetailIds":["more"]},{"cat":"extra","de":"Das Wasser ist klar.","sr":"Voda je bistra.","sceneDetailIds":["more"]},{"cat":"extra","de":"Neben dem See stehen viele Bäume.","sr":"Pored jezera stoji mnogo drveća.","sceneDetailIds":["jezero"]},{"cat":"extra","de":"Am Ufer liegt eine Decke.","sr":"Na obali leži ćebe.","sceneDetailIds":["jezero"]},{"cat":"extra","de":"Eine Familie sitzt auf einer Bank.","sr":"Porodica sedi na klupi.","sceneDetailIds":["jezero"]},{"cat":"extra","de":"Am Ufer wachsen Blumen.","sr":"Na obali raste cveće.","sceneDetailIds":["jezero"]},{"cat":"extra","de":"Ein Kind wirft Steine ins Wasser.","sr":"Dete baca kamenčiće u vodu.","sceneDetailIds":["jezero"]},{"cat":"extra","de":"Neben der Decke steht ein Picknickkorb.","sr":"Pored ćebeta stoji korpa za piknik.","sceneDetailIds":["jezero"]},{"cat":"extra","de":"Auf dem See schwimmen Enten.","sr":"Na jezeru plivaju patke.","sceneDetailIds":["jezero"]},{"cat":"extra","de":"Im Hintergrund sehe ich Berge.","sr":"U pozadini vidim planine.","sceneDetailIds":["jezero"]},{"cat":"extra","de":"Das Wasser ist grün.","sr":"Voda je zelena.","sceneDetailIds":["jezero"]},{"cat":"extra","de":"Auf dem Tisch liegen Äpfel und Tomaten.","sr":"Na stolu leže jabuke i paradajz.","sceneDetailIds":["pijaca"]},{"cat":"extra","de":"In den Kisten liegt frisches Obst.","sr":"U sanducima leži sveže voće.","sceneDetailIds":["pijaca"]},{"cat":"extra","de":"Über dem Stand hängt ein Preisschild.","sr":"Iznad tezge visi oznaka sa cenom.","sceneDetailIds":["pijaca"]},{"cat":"extra","de":"Auf dem Stand liegen Orangen und Bananen.","sr":"Na tezgi leže pomorandže i banane.","sceneDetailIds":["pijaca"]},{"cat":"extra","de":"Die Verkäuferin hält eine Waage.","sr":"Prodavačica drži vagu.","sceneDetailIds":["pijaca"]},{"cat":"extra","de":"Die Frau trägt eine Einkaufstasche.","sr":"Žena nosi torbu za kupovinu.","sceneDetailIds":["pijaca"]},{"cat":"extra","de":"Neben den Äpfeln liegen Birnen.","sr":"Pored jabuka leže kruške.","sceneDetailIds":["pijaca"]},{"cat":"extra","de":"Der Verkäufer zeigt frisches Gemüse.","sr":"Prodavac pokazuje sveže povrće.","sceneDetailIds":["pijaca"]},{"cat":"extra","de":"In einer Kiste liegen Kartoffeln.","sr":"U sanduku leži krompir.","sceneDetailIds":["pijaca"]},{"cat":"extra","de":"Auf dem Markt stehen viele Stände.","sr":"Na pijaci stoji mnogo tezgi.","sceneDetailIds":["pijaca"]},{"cat":"extra","de":"Auf der Straße stehen viele Autos.","sr":"Na ulici stoji mnogo automobila.","sceneDetailIds":["ulica"]},{"cat":"extra","de":"Neben der Straße stehen Häuser.","sr":"Pored ulice stoje kuće.","sceneDetailIds":["ulica"]},{"cat":"extra","de":"Am Straßenrand steht ein Fahrrad.","sr":"Pored ulice stoji bicikl.","sceneDetailIds":["ulica"]},{"cat":"extra","de":"Ein Mann geht über die Straße.","sr":"Muškarac prelazi ulicu.","sceneDetailIds":["ulica"]},{"cat":"extra","de":"Auf dem Gehweg stehen zwei Personen.","sr":"Na trotoaru stoje dve osobe.","sceneDetailIds":["ulica"]},{"cat":"extra","de":"An der Kreuzung steht eine Ampel.","sr":"Na raskrsnici stoji semafor.","sceneDetailIds":["ulica"]},{"cat":"extra","de":"Neben dem Gehweg steht ein Baum.","sr":"Pored trotoara stoji drvo.","sceneDetailIds":["ulica"]},{"cat":"extra","de":"Ein Bus fährt durch die Straße.","sr":"Autobus se kreće ulicom.","sceneDetailIds":["ulica"]},{"cat":"extra","de":"Auf dem Gehweg steht ein Kinderwagen.","sr":"Na trotoaru stoje dečja kolica.","sceneDetailIds":["ulica"]},{"cat":"extra","de":"Vor dem Geschäft steht ein Schild.","sr":"Ispred prodavnice stoji natpis.","sceneDetailIds":["ulica"]},{"cat":"extra","de":"Auf dem Band liegen Lebensmittel.","sr":"Na pokretnoj traci leže namirnice.","sceneDetailIds":["kasa"]},{"cat":"extra","de":"Neben der Kasse steht ein Einkaufswagen.","sr":"Pored kase stoje kolica za kupovinu.","sceneDetailIds":["kasa"]},{"cat":"extra","de":"Neben der Kasse ist ein Kartengerät.","sr":"Pored kase je aparat za kartično plaćanje.","sceneDetailIds":["kasa"]},{"cat":"extra","de":"Die Kassiererin hält einen Scanner.","sr":"Kasirka drži skener.","sceneDetailIds":["kasa"]},{"cat":"extra","de":"Die Frau legt Brot auf das Band.","sr":"Žena stavlja hleb na traku.","sceneDetailIds":["kasa"]},{"cat":"extra","de":"Auf dem Bildschirm steht ein Preis.","sr":"Na ekranu piše cena.","sceneDetailIds":["kasa"]},{"cat":"extra","de":"Der Kunde hält seine Bankkarte.","sr":"Mušterija drži svoju bankovnu karticu.","sceneDetailIds":["kasa"]},{"cat":"extra","de":"Neben dem Band stehen Einkaufstüten.","sr":"Pored trake stoje kese za kupovinu.","sceneDetailIds":["kasa"]},{"cat":"extra","de":"Die Kassiererin gibt einen Kassenbon.","sr":"Kasirka daje račun.","sceneDetailIds":["kasa"]},{"cat":"extra","de":"Hinter der Kasse stehen Regale.","sr":"Iza kase stoje police.","sceneDetailIds":["kasa"]},{"cat":"extra","de":"Auf dem Tisch liegt ein kleiner Hund.","sr":"Na stolu leži mali pas.","sceneDetailIds":["veterinar"]},{"cat":"extra","de":"Neben dem Tisch steht eine Frau.","sr":"Pored stola stoji žena.","sceneDetailIds":["veterinar"]},{"cat":"extra","de":"Der Tierarzt trägt einen weißen Kittel.","sr":"Veterinar nosi beli mantil.","sceneDetailIds":["veterinar"]},{"cat":"extra","de":"Der Hund sitzt ruhig auf dem Tisch.","sr":"Pas mirno sedi na stolu.","sceneDetailIds":["veterinar"]},{"cat":"extra","de":"Neben dem Hund steht eine Transportbox.","sr":"Pored psa stoji transporter.","sceneDetailIds":["veterinar"]},{"cat":"extra","de":"Die Frau hält die Leine.","sr":"Žena drži povodac.","sceneDetailIds":["veterinar"]},{"cat":"extra","de":"Der Tierarzt untersucht den Hund.","sr":"Veterinar pregleda psa.","sceneDetailIds":["veterinar"]},{"cat":"extra","de":"In der Ecke steht eine Waage für Tiere.","sr":"U uglu stoji vaga za životinje.","sceneDetailIds":["veterinar"]},{"cat":"extra","de":"Der Hund hat ein rotes Halsband.","sr":"Pas ima crvenu ogrlicu.","sceneDetailIds":["veterinar"]},{"cat":"extra","de":"Vor dem Spiegel sitzt eine Frau.","sr":"Ispred ogledala sedi žena.","sceneDetailIds":["frizer"]},{"cat":"extra","de":"Auf dem Tisch liegen Scheren und Kämme.","sr":"Na stolu leže makaze i češljevi.","sceneDetailIds":["frizer"]},{"cat":"extra","de":"Die Friseurin hält einen Kamm.","sr":"Frizerka drži češalj.","sceneDetailIds":["frizer"]},{"cat":"extra","de":"Neben dem Spiegel steht ein Föhn.","sr":"Pored ogledala stoji fen.","sceneDetailIds":["frizer"]},{"cat":"extra","de":"Die Kundin trägt einen Umhang.","sr":"Mušterija nosi ogrtač.","sceneDetailIds":["frizer"]},{"cat":"extra","de":"Auf dem Regal stehen Haarpflegeprodukte.","sr":"Na polici stoje proizvodi za negu kose.","sceneDetailIds":["frizer"]},{"cat":"extra","de":"Die Friseurin schneidet die Haare.","sr":"Frizerka šiša kosu.","sceneDetailIds":["frizer"]},{"cat":"extra","de":"Neben dem Stuhl steht ein Wagen.","sr":"Pored stolice stoje kolica.","sceneDetailIds":["frizer"]},{"cat":"extra","de":"Auf dem Boden liegen abgeschnittene Haare.","sr":"Na podu leži ošišana kosa.","sceneDetailIds":["frizer"]},{"cat":"extra","de":"Auf dem Tisch liegen Teller und Besteck.","sr":"Na stolu stoje tanjiri i pribor za jelo.","sceneDetailIds":["restoran"]},{"cat":"extra","de":"Neben dem Tisch stehen zwei Stühle.","sr":"Pored stola stoje dve stolice.","sceneDetailIds":["restoran"]},{"cat":"extra","de":"Im Hintergrund sehe ich einen Kellner.","sr":"U pozadini vidim konobara.","sceneDetailIds":["restoran"]},{"cat":"extra","de":"Auf dem Tisch stehen Gläser.","sr":"Na stolu stoje čaše.","sceneDetailIds":["restoran"]},{"cat":"extra","de":"Ein Kellner bringt das Essen.","sr":"Konobar donosi hranu.","sceneDetailIds":["restoran"]},{"cat":"extra","de":"Die Frau hält eine Speisekarte.","sr":"Žena drži jelovnik.","sceneDetailIds":["restoran"]},{"cat":"extra","de":"Auf dem Teller liegt ein Stück Fleisch.","sr":"Na tanjiru leži komad mesa.","sceneDetailIds":["restoran"]},{"cat":"extra","de":"Der Tisch hat eine weiße Tischdecke.","sr":"Sto ima beli stolnjak.","sceneDetailIds":["restoran"]},{"cat":"extra","de":"Neben dem Teller liegt eine Gabel.","sr":"Pored tanjira leži viljuška.","sceneDetailIds":["restoran"]},{"cat":"extra","de":"Im Restaurant stehen viele Tische.","sr":"U restoranu stoji mnogo stolova.","sceneDetailIds":["restoran"]},{"cat":"extra","de":"Im Bus sitzen viele Personen.","sr":"U autobusu sedi mnogo ljudi.","sceneDetailIds":["autobus"]},{"cat":"extra","de":"Neben dem Fahrer ist eine Tür.","sr":"Pored vozača su vrata.","sceneDetailIds":["autobus"]},{"cat":"extra","de":"Durch das Fenster sehe ich die Straße.","sr":"Kroz prozor vidim ulicu.","sceneDetailIds":["autobus"]},{"cat":"extra","de":"Ein Mann hält sich an einer Stange fest.","sr":"Muškarac se drži za šipku.","sceneDetailIds":["autobus"]},{"cat":"extra","de":"Auf dem Sitz liegt eine Tasche.","sr":"Na sedištu leži torba.","sceneDetailIds":["autobus"]},{"cat":"extra","de":"Die Sitze sind grau.","sr":"Sedišta su siva.","sceneDetailIds":["autobus"]},{"cat":"extra","de":"Eine Frau hält ihre Fahrkarte.","sr":"Žena drži svoju kartu.","sceneDetailIds":["autobus"]},{"cat":"extra","de":"Vor dem Bus steht ein Fahrgast.","sr":"Ispred autobusa stoji putnik.","sceneDetailIds":["autobus"]},{"cat":"extra","de":"Im Bus gibt es große Fenster.","sr":"U autobusu postoje veliki prozori.","sceneDetailIds":["autobus"]},{"cat":"extra","de":"Der Fahrer sitzt am Steuer.","sr":"Vozač sedi za volanom.","sceneDetailIds":["autobus"]},{"cat":"extra","de":"Der Mann sitzt am Steuer.","sr":"Muškarac sedi za volanom.","sceneDetailIds":["auto"]},{"cat":"extra","de":"Die Frau hält eine Karte.","sr":"Žena drži kartu.","sceneDetailIds":["auto"]},{"cat":"extra","de":"Durch das Fenster sehe ich eine Straße.","sr":"Kroz prozor vidim ulicu.","sceneDetailIds":["auto"]},{"cat":"extra","de":"Die Frau zeigt mit dem Finger auf die Karte.","sr":"Žena prstom pokazuje na kartu.","sceneDetailIds":["auto"]},{"cat":"extra","de":"Der Mann schaut auf die Straße.","sr":"Muškarac gleda na put.","sceneDetailIds":["auto"]},{"cat":"extra","de":"Auf dem Armaturenbrett liegt ein Handy.","sr":"Na kontrolnoj tabli leži mobilni telefon.","sceneDetailIds":["auto"]},{"cat":"extra","de":"Der Mann hält das Lenkrad.","sr":"Muškarac drži volan.","sceneDetailIds":["auto"]},{"cat":"extra","de":"Die Frau sitzt auf dem Beifahrersitz.","sr":"Žena sedi na suvozačevom sedištu.","sceneDetailIds":["auto"]},{"cat":"extra","de":"Im Rückspiegel sehe ich ein Auto.","sr":"U retrovizoru vidim automobil.","sceneDetailIds":["auto"]},{"cat":"extra","de":"Beide Personen tragen einen Sicherheitsgurt.","sr":"Obe osobe nose sigurnosni pojas.","sceneDetailIds":["auto"]},{"cat":"extra","de":"Im Park stehen viele Bäume.","sr":"U parku stoji mnogo drveća.","sceneDetailIds":["park"]},{"cat":"extra","de":"Auf der Bank sitzen zwei Frauen.","sr":"Na klupi sede dve žene.","sceneDetailIds":["park"]},{"cat":"extra","de":"Neben der Bank steht ein Fahrrad.","sr":"Pored klupe stoji bicikl.","sceneDetailIds":["park"]},{"cat":"extra","de":"Auf der Wiese spielen Kinder.","sr":"Na travnjaku se igraju deca.","sceneDetailIds":["park"]},{"cat":"extra","de":"Neben dem Weg steht ein Mülleimer.","sr":"Pored staze stoji kanta za smeće.","sceneDetailIds":["park"]},{"cat":"extra","de":"Auf der Bank liegt eine Tasche.","sr":"Na klupi leži torba.","sceneDetailIds":["park"]},{"cat":"extra","de":"Im Park gibt es einen Spielplatz.","sr":"U parku ima igralište.","sceneDetailIds":["park"]},{"cat":"extra","de":"Auf dem Weg geht ein Mann spazieren.","sr":"Stazom šeta muškarac.","sceneDetailIds":["park"]},{"cat":"extra","de":"Neben der Bank wachsen Blumen.","sr":"Pored klupe raste cveće.","sceneDetailIds":["park"]},{"cat":"extra","de":"Ein Hund läuft über die Wiese.","sr":"Pas trči po travnjaku.","sceneDetailIds":["park"]},{"cat":"extra","de":"Auf dem Schalter liegen Briefe.","sr":"Na šalteru leže pisma.","sceneDetailIds":["posta"]},{"cat":"extra","de":"Eine Person hält ein Paket.","sr":"Jedna osoba drži paket.","sceneDetailIds":["posta"]},{"cat":"extra","de":"Hinter dem Schalter sitzt eine Frau.","sr":"Iza šaltera sedi žena.","sceneDetailIds":["posta"]},{"cat":"extra","de":"Neben dem Schalter steht eine Waage.","sr":"Pored šaltera stoji vaga.","sceneDetailIds":["posta"]},{"cat":"extra","de":"Auf dem Tisch liegen Briefumschläge.","sr":"Na stolu leže koverte.","sceneDetailIds":["posta"]},{"cat":"extra","de":"Der Mann hält eine Postkarte.","sr":"Muškarac drži razglednicu.","sceneDetailIds":["posta"]},{"cat":"extra","de":"Eine Frau schreibt eine Adresse.","sr":"Žena piše adresu.","sceneDetailIds":["posta"]},{"cat":"extra","de":"Neben der Tür steht ein Briefkasten.","sr":"Pored vrata stoji poštansko sanduče.","sceneDetailIds":["posta"]},{"cat":"extra","de":"Im Hintergrund sehe ich viele Koffer.","sr":"U pozadini vidim mnogo kofera.","sceneDetailIds":["aerodrom"]},{"cat":"extra","de":"Über dem Schalter hängt eine große Anzeige.","sr":"Iznad šaltera visi velika informativna tabla.","sceneDetailIds":["aerodrom"]},{"cat":"extra","de":"Durch das Fenster sehe ich ein Flugzeug.","sr":"Kroz prozor vidim avion.","sceneDetailIds":["aerodrom"]},{"cat":"extra","de":"Ein Mann zieht einen Koffer.","sr":"Muškarac vuče kofer.","sceneDetailIds":["aerodrom"]},{"cat":"extra","de":"Auf dem Boden stehen mehrere Taschen.","sr":"Na podu stoji nekoliko torbi.","sceneDetailIds":["aerodrom"]},{"cat":"extra","de":"Eine Frau hält einen Reisepass.","sr":"Žena drži pasoš.","sceneDetailIds":["aerodrom"]},{"cat":"extra","de":"Auf dem Bildschirm stehen Flugnummern.","sr":"Na ekranu pišu brojevi letova.","sceneDetailIds":["aerodrom"]},{"cat":"extra","de":"Die Personen stehen in einer Schlange.","sr":"Osobe stoje u redu.","sceneDetailIds":["aerodrom"]},{"cat":"extra","de":"Neben dem Schalter steht ein Gepäckwagen.","sr":"Pored šaltera stoje kolica za prtljag.","sceneDetailIds":["aerodrom"]},{"cat":"extra","de":"Im Hintergrund sehe ich einen Check-in-Schalter.","sr":"U pozadini vidim šalter za prijavu na let.","sceneDetailIds":["aerodrom"]},{"de":"Die Personen sind im Friseursalon.","sr":"Osobe su u frizerskom salonu.","cat":"places"},{"de":"Ich denke, die Personen sind im Friseursalon.","sr":"Mislim da osobe su u frizerskom salonu.","cat":"places"},{"de":"Die Personen sprechen über etwas, vielleicht über die Frisur.","sr":"Osobe razgovaraju o nečemu, možda o frizuri.","cat":"start"},{"de":"Die Personen sind im Restaurant.","sr":"Osobe su u restoranu.","cat":"places"},{"de":"Ich denke, die Personen sind im Restaurant.","sr":"Mislim da osobe su u restoranu.","cat":"places"},{"de":"Die Personen sprechen über etwas, vielleicht über den Bus.","sr":"Osobe razgovaraju o nečemu, možda o autobusu.","cat":"start"},{"de":"Die Personen sprechen über etwas, vielleicht über den Park.","sr":"Osobe razgovaraju o nečemu, možda o parku.","cat":"start"},{"de":"Die Personen sind in der Postfiliale.","sr":"Osobe su u pošti.","cat":"places"},{"de":"Ich denke, die Personen sind in der Postfiliale.","sr":"Mislim da osobe su u pošti.","cat":"places"},{"de":"Die Personen sprechen über etwas, vielleicht über das Paket.","sr":"Osobe razgovaraju o nečemu, možda o paketu.","cat":"start"},{"de":"Die Personen sprechen über etwas, vielleicht über den Flug.","sr":"Osobe razgovaraju o nečemu, možda o letu.","cat":"start"}];
const SAMPLE_HEADS=["1. Was sehen Sie auf dem Bild?","2. Worüber sprechen die Personen?","3. Wo sind diese Personen?","4. Wie sehen die Personen aus?","5. Was tragen die Personen?","6. Was sehen Sie noch?","7. Was können Sie noch über die Personen sagen?"];
const SAMPLE_TRANSLATIONS=["Šta vidiš na slici?","O čemu razgovaraju osobe?","Gde su ove osobe?","Kako izgledaju ove osobe?","Šta nose ove osobe?","Šta još vidite?","Šta još možeš reći o osobama?"];
const STEP_CATS=["start","start","places","mann","clothing","extra","closing"];
const $=(q)=>document.querySelector(q);
let PAGE_SIZE=6;
let category="start",page=0,step=0,chosen=[],chosenIndex=0,runId=0,activeRole="mann",appearanceMode="age",speakingChosenPosition=-1;
const AGES={mann:30,frau:30,kind:8};
const AGE_ROLES={mann:{label:"Der Mann",de:"Er",sr:"On"},frau:{label:"Die Frau",de:"Sie",sr:"Ona"},kind:{label:"Das Kind",de:"Es",sr:"Ono"}};
const AGE_INDEX={};
function srYears(n){const last=n%10,lastTwo=n%100;return last===1&&lastTwo!==11?"godinu":last>=2&&last<=4&&(lastTwo<12||lastTwo>14)?"godine":"godina"}
function createAge(role){const n=AGES[role],r=AGE_ROLES[role];return {cat:"age",role,de:r.de+" ist ungefähr "+n+(n===1?" Jahr":" Jahre")+" alt.",sr:r.sr+" ima otprilike "+n+" "+srYears(n)+"."}}
for(const role of ["mann","frau","kind"]){AGE_INDEX[role]=BANK.length;BANK.push(createAge(role))}
function renderAge(){const shown=step===3&&appearanceMode==="age";$("#agebar").hidden=!shown;if(!shown)return;
 const role=AGE_ROLES[category],n=AGES[category],i=AGE_INDEX[category],selected=chosen.includes(i),item=BANK[i];
 $("#agePerson").textContent=role.label;$("#ageCount").textContent=n;
 $("#ageSentence").textContent=item.de;$("#ageTranslation").textContent=item.sr;
 $("#ageMinus").disabled=n<=1;$("#agePlus").disabled=n>=100;
 $("#agebar").classList.toggle("age-selected",selected);
 $("#ageAdd").textContent=selected?"✓ Izabrano":"❯ Dodaj";
 $("#ageAdd").setAttribute("aria-pressed",String(selected));
}
function adjustAge(delta){if(step!==3)return;const current=AGES[category],updated=Math.max(1,Math.min(100,current+delta));if(updated===current)return;
 stop();AGES[category]=updated;Object.assign(BANK[AGE_INDEX[category]],createAge(category));
 renderAge();renderSample();renderChosen();
}

const HAIR_STYLE=[
 {de:"kurze",sr:"kratku",label:"kratka"},
 {de:"lange",sr:"dugu",label:"duga"},
 {de:"lockige",sr:"kovrdžavu",label:"kovrdžava"},
 {de:"glatte",sr:"ravnu",label:"ravna"},
 {de:"wellige",sr:"talasastu",label:"talasasta"},
 {de:"sehr kurze",sr:"veoma kratku",label:"veoma kratka"},
 {de:"schulterlange",sr:"do ramena",label:"do ramena"},
 {de:"",sr:"",label:"bez kose",bald:true}
];
const HAIR_COLORS=[
 {de:"braune",sr:"smeđu",label:"smeđa"},
 {de:"schwarze",sr:"crnu",label:"crna"},
 {de:"blonde",sr:"plavu",label:"plava"},
 {de:"graue",sr:"sedu",label:"seda"},
 {de:"rote",sr:"crvenu",label:"crvena"},
 {de:"weiße",sr:"belu",label:"bela"},
 {de:"hellbraune",sr:"svetlosmeđu",label:"svetlosmeđa"},
 {de:"dunkelbraune",sr:"tamnosmeđu",label:"tamnosmeđa"}
];
const HAIR_STATES={mann:{style:0,color:0},frau:{style:1,color:1},kind:{style:0,color:2}};
const HAIR_INDEX={};
function makeHair(role){
 const roleData=AGE_ROLES[role],state=HAIR_STATES[role],style=HAIR_STYLE[state.style],color=HAIR_COLORS[state.color];
 if(style.bald)return {cat:"custom-hair",role,de:roleData.de+" hat keine Haare.",sr:roleData.sr+" nema kosu."};
 const german=roleData.de+" hat "+style.de+" "+color.de+" Haare.";
 const serbian=roleData.sr+" ima "+(state.style===6?color.sr+" kosu do ramena":style.sr+" "+color.sr+" kosu")+".";
 return {cat:"custom-hair",role,de:german,sr:serbian};
}
for(const role of ["mann","frau","kind"]){HAIR_INDEX[role]=BANK.length;BANK.push(makeHair(role))}
const CLOTH_ITEMS=[
 {
  "de": "Pullover",
  "article": "m",
  "sr": "džemper",
  "srType": "m",
  "label": "džemper"
 },
 {
  "de": "Jacke",
  "article": "f",
  "sr": "jaknu",
  "srType": "f",
  "label": "jakna"
 },
 {
  "de": "T-Shirt",
  "article": "n",
  "sr": "majicu",
  "srType": "f",
  "label": "majica"
 },
 {
  "de": "Hemd",
  "article": "n",
  "sr": "košulju",
  "srType": "f",
  "label": "košulja"
 },
 {
  "de": "Hose",
  "article": "f",
  "sr": "pantalone",
  "srType": "p",
  "label": "pantalone"
 },
 {
  "de": "Jeans",
  "article": "f",
  "sr": "farmerke",
  "srType": "p",
  "label": "farmerke"
 },
 {
  "de": "Schuhe",
  "article": "p",
  "sr": "cipele",
  "srType": "p",
  "label": "cipele"
 },
 {
  "de": "Kleid",
  "article": "n",
  "sr": "haljinu",
  "srType": "f",
  "label": "haljina"
 },
 {
  "de": "Bluse",
  "article": "f",
  "sr": "bluzu",
  "srType": "f",
  "label": "bluza"
 },
 {
  "de": "Mantel",
  "article": "m",
  "sr": "kaput",
  "srType": "m",
  "label": "kaput"
 },
 {
  "de": "Mütze",
  "article": "f",
  "sr": "kapu",
  "srType": "f",
  "label": "kapa"
 },
 {
  "de": "Rock",
  "article": "m",
  "sr": "suknju",
  "srType": "f",
  "label": "suknja"
 },
 {
  "de": "Anzug",
  "article": "m",
  "sr": "odelo",
  "srType": "n",
  "label": "odelo"
 },
 {
  "de": "Schal",
  "article": "m",
  "sr": "šal",
  "srType": "m",
  "label": "šal"
 },
 {
  "de": "Hut",
  "article": "m",
  "sr": "šešir",
  "srType": "m",
  "label": "šešir"
 },
 {
  "de": "Weste",
  "article": "f",
  "sr": "prsluk",
  "srType": "m",
  "label": "prsluk"
 },
 {
  "de": "Shorts",
  "article": "p",
  "sr": "šorc",
  "srType": "m",
  "label": "šorc"
 },
 {
  "de": "Stiefel",
  "article": "p",
  "sr": "čizme",
  "srType": "p",
  "label": "čizme"
 },
 {
  "de": "Socken",
  "article": "p",
  "sr": "čarape",
  "srType": "p",
  "label": "čarape"
 },
 {
  "de": "Handschuhe",
  "article": "p",
  "sr": "rukavice",
  "srType": "p",
  "label": "rukavice"
 },
 {
  "de": "Schlafanzug",
  "article": "m",
  "sr": "pidžamu",
  "srType": "f",
  "label": "pidžama"
 },
 {
  "de": "Sakko",
  "article": "n",
  "sr": "sako",
  "srType": "m",
  "label": "sako"
 },
 {
  "de": "Sweatshirt",
  "article": "n",
  "sr": "duksericu",
  "srType": "f",
  "label": "dukserica"
 },
 {
  "de": "Trikot",
  "article": "n",
  "sr": "dres",
  "srType": "m",
  "label": "dres"
 },
 {
  "de": "Krawatte",
  "article": "f",
  "sr": "kravatu",
  "srType": "f",
  "label": "kravata"
 },
 {
  "de": "Tasche",
  "article": "f",
  "sr": "torbu",
  "srType": "f",
  "label": "torba"
 },
 {
  "de": "Badehose",
  "article": "f",
  "sr": "kupaće gaće",
  "srType": "p",
  "label": "kupaći"
 },
 {
  "de": "Turnschuhe",
  "article": "p",
  "sr": "patike",
  "srType": "p",
  "label": "patike"
 },
 {
  "de": "Sandalen",
  "article": "p",
  "sr": "sandale",
  "srType": "p",
  "label": "sandale"
 },
 {
  "de": "Hausschuhe",
  "article": "p",
  "sr": "papuče",
  "srType": "p",
  "label": "papuče"
 },
 {
  "de": "Flipflops",
  "article": "p",
  "sr": "japanke",
  "srType": "p",
  "label": "japanke"
 },
 {
  "de": "Stiefeletten",
  "article": "p",
  "sr": "čizmice",
  "srType": "p",
  "label": "čizmice"
 },
 {
  "de": "Gummistiefel",
  "article": "p",
  "sr": "gumene čizme",
  "srType": "p",
  "label": "gumene čizme"
 },
 {
  "de": "Strumpfhose",
  "article": "f",
  "sr": "hulahopke",
  "srType": "p",
  "label": "hulahopke"
 },
 {
  "de": "Leggings",
  "article": "p",
  "sr": "helanke",
  "srType": "p",
  "label": "helanke"
 },
 {
  "de": "Jogginghose",
  "article": "f",
  "sr": "donji deo trenerke",
  "srType": "m",
  "label": "donji deo trenerke"
 },
 {
  "de": "Trainingsanzug",
  "article": "m",
  "sr": "trenerku",
  "srType": "f",
  "label": "trenerka"
 },
 {
  "de": "Regenjacke",
  "article": "f",
  "sr": "kabanicu",
  "srType": "f",
  "label": "kabanica"
 },
 {
  "de": "Winterjacke",
  "article": "f",
  "sr": "zimsku jaknu",
  "srType": "f",
  "label": "zimska jakna"
 },
 {
  "de": "Lederjacke",
  "article": "f",
  "sr": "kožnu jaknu",
  "srType": "f",
  "label": "kožna jakna"
 },
 {
  "de": "Strickjacke",
  "article": "f",
  "sr": "kardigan",
  "srType": "m",
  "label": "kardigan"
 },
 {
  "de": "Kapuzenpullover",
  "article": "m",
  "sr": "duks sa kapuljačom",
  "srType": "m",
  "label": "duks sa kapuljačom"
 },
 {
  "de": "Poloshirt",
  "article": "n",
  "sr": "polo-majicu",
  "srType": "f",
  "label": "polo-majica"
 },
 {
  "de": "Top",
  "article": "n",
  "sr": "top",
  "srType": "m",
  "label": "top"
 },
 {
  "de": "Unterhemd",
  "article": "n",
  "sr": "potkošulju",
  "srType": "f",
  "label": "potkošulja"
 },
 {
  "de": "Unterhose",
  "article": "f",
  "sr": "donji veš",
  "srType": "m",
  "label": "donji veš"
 },
 {
  "de": "Badeanzug",
  "article": "m",
  "sr": "kupaći kostim",
  "srType": "m",
  "label": "kupaći kostim"
 },
 {
  "de": "Bikini",
  "article": "m",
  "sr": "bikini",
  "srType": "m",
  "label": "bikini"
 },
 {
  "de": "Bademantel",
  "article": "m",
  "sr": "bade-mantil",
  "srType": "m",
  "label": "bade-mantil"
 },
 {
  "de": "Gürtel",
  "article": "m",
  "sr": "kaiš",
  "srType": "m",
  "label": "kaiš"
 },
 {
  "de": "Sonnenbrille",
  "article": "f",
  "sr": "sunčane naočare",
  "srType": "p",
  "label": "sunčane naočare"
 },
 {
  "de": "Brille",
  "article": "f",
  "sr": "naočare",
  "srType": "p",
  "label": "naočare"
 },
 {
  "de": "Kappe",
  "article": "f",
  "sr": "kačket",
  "srType": "m",
  "label": "kačket"
 },
 {
  "de": "Abendkleid",
  "article": "n",
  "sr": "svečanu haljinu",
  "srType": "f",
  "label": "svečana haljina"
 },
 {
  "de": "Regenmantel",
  "article": "m",
  "sr": "kišni mantil",
  "srType": "m",
  "label": "kišni mantil"
 },
 {
  "de": "Rucksack",
  "article": "m",
  "sr": "ranac",
  "srType": "m",
  "label": "ranac"
 }
];
const CLOTH_COLORS=[
 {de:"schwarz",sr:["crni","crnu","crno","crne"],label:"crna"},
 {de:"blau",sr:["plavi","plavu","plavo","plave"],label:"plava"},
 {de:"weiß",sr:["beli","belu","belo","bele"],label:"bela"},
 {de:"rot",sr:["crveni","crvenu","crveno","crvene"],label:"crvena"},
 {de:"grün",sr:["zeleni","zelenu","zeleno","zelene"],label:"zelena"},
 {de:"grau",sr:["sivi","sivu","sivo","sive"],label:"siva"},
 {de:"gelb",sr:["žuti","žutu","žuto","žute"],label:"žuta"},
 {de:"braun",sr:["braon","braon","braon","braon"],label:"braon"},
 {de:"beig",sr:["bež","bež","bež","bež"],label:"bež"},
 {de:"rosa",sr:["roze","roze","roze","roze"],label:"roze",fixed:true},
 {de:"lila",sr:["lila","lila","lila","lila"],label:"lila",fixed:true},
 {de:"orangefarben",sr:["narandžasti","narandžastu","narandžasto","narandžaste"],label:"narandžasta"},
 {de:"bunt",sr:["šareni","šarenu","šareno","šarene"],label:"šarena"}
];
const CLOTH_STATES={mann:{item:0,color:0},frau:{item:1,color:1},kind:{item:2,color:2}};
const CLOTH_INDEX={};
function makeClothing(role){
 const item=CLOTH_ITEMS[CLOTH_STATES[role].item],color=CLOTH_COLORS[CLOTH_STATES[role].color];
 const suffix=item.article==="m"?"en":item.article==="f"?"e":item.article==="n"?"es":"e";
 const adjective=color.de+(color.fixed?"":suffix);
 const article=item.article==="m"?"einen ":item.article==="f"?"eine ":item.article==="n"?"ein ":"";
 const noun=(item.article==="p"?"":"")+article+adjective+" "+item.de;
 const who={mann:["Der Mann trägt ","Muškarac nosi "],frau:["Die Frau trägt ","Žena nosi "],kind:["Das Kind trägt ","Dete nosi "]}[role];
 const idx={m:0,f:1,n:2,p:3}[item.srType];
 return {cat:"custom-clothing",role,de:who[0]+noun+".",sr:who[1]+color.sr[idx]+" "+item.sr+"."};
}
for(const role of ["mann","frau","kind"]){CLOTH_INDEX[role]=BANK.length;BANK.push(makeClothing(role))}
function renderModes(){
 const show=step===3;$("#modebar").hidden=!show;
 document.querySelectorAll("[data-mode]").forEach(b=>b.classList.toggle("active",b.dataset.mode===appearanceMode));
}
function renderHair(){
 const show=step===3&&appearanceMode==="hair";$("#hairbar").hidden=!show;if(!show)return;
 const state=HAIR_STATES[category],row=BANK[HAIR_INDEX[category]],active=chosen.includes(HAIR_INDEX[category]);
 $("#hairStyle").textContent=HAIR_STYLE[state.style].label;
 $("#hairColor").textContent=HAIR_STYLE[state.style].bald?"nije važno":HAIR_COLORS[state.color].label;
 document.querySelectorAll('[data-hair-turn="color"]').forEach(b=>b.disabled=!!HAIR_STYLE[state.style].bald);
 $("#hairSentence").textContent=row.de;$("#hairTranslation").textContent=row.sr;
 $("#hairbar").classList.toggle("is-selected",active);
 $("#hairAdd").textContent=active?"✓ Izabrano":"❯ Dodaj";
 $("#hairAdd").setAttribute("aria-pressed",String(active));
}
function renderClothing(){
 const show=step===4;$("#clothingbar").hidden=!show;if(!show)return;
 const state=CLOTH_STATES[activeRole],row=BANK[CLOTH_INDEX[activeRole]],active=chosen.some(i=>BANK[i].cat==="custom-clothing"&&BANK[i].role===activeRole&&BANK[i].de===row.de);
 $("#clothingItem").textContent=CLOTH_ITEMS[state.item].label;
 $("#clothingColor").textContent=CLOTH_COLORS[state.color].label;
 $("#clothingSentence").textContent=row.de;$("#clothingTranslation").textContent=row.sr;
 $("#clothingbar").classList.toggle("is-selected",active);
 $("#clothingAdd").textContent=active?"✓ Izabrano":"❯ Dodaj";
 $("#clothingAdd").setAttribute("aria-pressed",String(active));
}
function toggleClothing(){
 const item=makeClothing(activeRole);
 const existing=chosen.find(i=>BANK[i].cat==="custom-clothing"&&BANK[i].role===activeRole&&BANK[i].de===item.de);
 if(existing!==undefined){addOrRemove(existing)}else{
  const i=BANK.length;BANK.push(item);addOrRemove(i);
 }
 renderClothing();
}
function turnHair(type,delta){
 const state=HAIR_STATES[category],options=type==="style"?HAIR_STYLE:HAIR_COLORS;
 if(type==="color"&&HAIR_STYLE[state.style].bald)return;
 state[type]=(state[type]+delta+options.length)%options.length;
 stop();Object.assign(BANK[HAIR_INDEX[category]],makeHair(category));
 renderHair();renderSample();renderChosen();
}
function turnClothing(type,delta){
 const state=CLOTH_STATES[activeRole],options=type==="item"?CLOTH_ITEMS:CLOTH_COLORS;
 state[type]=(state[type]+delta+options.length)%options.length;
 stop();Object.assign(BANK[CLOTH_INDEX[activeRole]],makeClothing(activeRole));
 renderClothing();renderSample();renderChosen();
}
function escapeHTML(t){return String(t).replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"','&quot;')}
function voice(){if(!("speechSynthesis" in window))return null;const list=speechSynthesis.getVoices();return list.find(v=>/^de/i.test(v.lang)&&/google/i.test(v.name))||list.find(v=>/^de-DE/i.test(v.lang))||list.find(v=>/^de/i.test(v.lang))||null}
function stop(){
 runId++;
 if("speechSynthesis" in window)speechSynthesis.cancel();
 if(speakingChosenPosition!==-1){
  speakingChosenPosition=-1;
  updateSpeakingFrame();
 }
}
function utter(text,callback){if(!("speechSynthesis" in window)){alert("Nemački govor nije podržan u ovom pregledaču.");return}let u=new SpeechSynthesisUtterance(text);u.lang="de-DE";u.rate=.87;u.pitch=1;const v=voice();if(v)u.voice=v;u.onend=()=>{if(callback)callback()};u.onerror=()=>{if(callback)callback()};speechSynthesis.speak(u)}
function listen(i){
 stop();
 const currentRun=runId;
 const position=chosen.indexOf(i);
 if(position>=0){
  chosenIndex=position;
  speakingChosenPosition=position;
  updateSpeakingFrame();
 }
 utter(BANK[i].de,()=>{
  if(runId!==currentRun)return;
  if(speakingChosenPosition!==-1){
   speakingChosenPosition=-1;
   updateSpeakingFrame();
  }
 });
}
/* 31 situacija: povezane rečenice iz postojeće baze, bez dupliranja. */
const SCENE_DATA=[{"id":"priroda","label":"Priroda","sentences":["Die Personen sind in der Natur.","Es ist Sommer.","Es ist Winter.","Es ist Herbst.","Draußen ist es schön.","Draußen ist es kalt.","Sie sprechen vielleicht über die Natur.","Die Personen sprechen über etwas, vielleicht über die Natur."]},{"id":"pekara","label":"Pekara","sentences":["Die Personen sind in der Bäckerei.","Die Verkäuferin zeigt frisches Brot.","Sie sprechen vielleicht über den Preis.","Die Kundin kauft zwei Brötchen.","Ich denke, der Mann ist der Bäcker und die Frau ist die Kundin.","Im Hintergrund sehe ich viele Brote und Brötchen.","Die Personen sprechen über etwas, vielleicht über das Brot."]},{"id":"radionica","label":"Radionica","sentences":["Die Personen sind in der Werkstatt.","Der Mechaniker repariert ein Auto.","Sie sprechen vielleicht über das Problem.","Der Kunde braucht einen neuen Reifen.","Ich denke, der Mann ist der Mechaniker und die Frau ist die Kundin.","Ich denke, die Frau ist die Mechanikerin und der Mann ist der Kunde.","Die Personen sprechen über etwas, vielleicht über das Auto."]},{"id":"stan","label":"Stan/kuća","sentences":["Die Personen sind in der Wohnung.","Die Personen sind zu Hause.","Die Personen sitzen im Wohnzimmer.","Sie sprechen vielleicht über die Möbel.","Die Frau sucht eine neue Wohnung.","Die Frau räumt die Küche auf.","Sie sprechen vielleicht über die Hausarbeit.","Der Mann sucht den Staubsauger.","Der Raum ist groß und schön.","Die Personen sprechen über etwas, vielleicht über die Wohnung."]},{"id":"kuhinja","label":"Kuhinja","sentences":["Die Personen sind in der Küche.","Die Frau schneidet Gemüse.","Sie sprechen vielleicht über das Mittagessen.","Sie braucht Tomaten und Kartoffeln.","Die Frau räumt die Küche auf.","Sie sprechen vielleicht über die Hausarbeit.","Der Mann sucht den Staubsauger.","Die Personen sprechen über etwas, vielleicht über das Essen."]},{"id":"butik","label":"Butik","sentences":["Die Personen sind in der Boutique.","Die Frau probiert ein Kleid an.","Sie sprechen vielleicht über die Größe.","Die Kundin sucht eine blaue Jacke.","Ich denke, die Frau ist die Verkäuferin und der Mann ist der Kunde.","Die Personen sprechen über etwas, vielleicht über die Kleidung."]},{"id":"apoteka","label":"Apoteka","sentences":["Die Personen sind in der Apotheke.","Die Apothekerin hilft dem Kunden.","Sie sprechen vielleicht über Medikamente.","Der Kunde kauft Tabletten.","Ich denke, die Frau ist die Apothekerin und der Mann ist der Kunde.","Ich denke, der Mann ist der Apotheker und die Frau ist die Kundin.","Die Personen sprechen über etwas, vielleicht über die Medikamente.","Die Person ist in der Apotheke."]},{"id":"doktor","label":"Doktor","sentences":["Die Person ist beim Arzt.","Der Arzt untersucht einen Patienten.","Ich denke, die Frau ist die Ärztin und der Mann ist der Patient.","Ich denke, der Mann ist der Arzt und die Frau ist die Patientin.","Die Personen warten auf den Arzt.","Sie sprechen vielleicht über den Arzttermin.","Die Personen sprechen über etwas, vielleicht über die Krankheit."]},{"id":"mesara","label":"Mesara","sentences":["Die Personen sind in der Metzgerei.","Der Metzger schneidet Fleisch.","Sie sprechen vielleicht über das Fleisch.","Der Kunde kauft ein Kilo Fleisch.","Ich denke, der Mann ist der Metzger und der andere Mann ist der Kunde.","Die Personen sprechen über etwas, vielleicht über das Fleisch."]},{"id":"biblioteka","label":"Biblioteka","sentences":["Die Personen sind in der Bibliothek.","Die Frau liest ein Buch.","Sie sprechen vielleicht über Bücher.","Die Frau sucht ein Buch über Tiere.","Die Personen sprechen über etwas, vielleicht über die Bücher."]},{"id":"skola","label":"Škola","sentences":["Die Personen sind in der Schule.","Der Lehrer schreibt an die Tafel.","Sie sprechen vielleicht über die Hausaufgaben.","Der Schüler sucht sein Heft.","Ich denke, die Frau ist die Lehrerin und das Mädchen ist die Schülerin.","Ich denke, der Mann ist der Lehrer und der Junge ist der Schüler.","Die Personen sprechen über etwas, vielleicht über die Hausaufgaben."]},{"id":"kafic","label":"Kafić","sentences":["Die Personen sind im Café.","Der Kellner bringt zwei Tassen Kaffee.","Sie sprechen vielleicht über die Getränke.","Die Frau bestellt einen Tee.","Ich denke, der Mann ist der Kellner und die Frau ist ein Gast.","Ich denke, die Frau ist die Kellnerin und der Mann ist der Gast.","Die Personen sprechen über etwas, vielleicht über Kaffee."]},{"id":"basta","label":"Bašta","sentences":["Die Personen sind im Garten.","Die Frau gießt die Blumen.","Sie sprechen vielleicht über den Garten.","Der Mann sucht eine Schaufel.","Der Garten ist klein.","Die Personen sprechen über etwas, vielleicht über die Blumen."]},{"id":"supermarket","label":"Supermarket","sentences":["Die Personen sind im Supermarkt.","Die Frau legt Äpfel in den Einkaufswagen.","Sie sprechen vielleicht über die Einkaufsliste.","Sie kauft Milch und Brot.","Die Personen sprechen über etwas, vielleicht über die Lebensmittel."]},{"id":"suma","label":"Šuma","sentences":["Die Personen sind im Wald.","Die Personen wandern im Wald.","Sie sprechen vielleicht über die Bäume.","Sie suchen den richtigen Weg.","Es ist Sommer.","Es ist Winter.","Es ist Herbst.","Draußen ist es schön.","Die Personen sprechen über etwas, vielleicht über die Bäume."]},{"id":"hotel","label":"Hotel","sentences":["Die Personen sind im Hotel.","Die Personen sind an der Rezeption.","Der Gast kommt ins Hotel.","Sie sprechen vielleicht über das Zimmer.","Der Gast fragt nach einem freien Zimmer.","Die Frau zeigt ihren Pass.","Sie sprechen vielleicht über die Reservierung.","Der Gast fragt nach seinem Zimmerschlüssel.","Ich denke, die Frau ist die Rezeptionistin und der Mann ist der Hotelgast.","Die Personen sprechen über etwas, vielleicht über die Reservierung."]},{"id":"knjizara","label":"Knjižara","sentences":["Die Personen sind im Buchladen.","Der Verkäufer zeigt ein Buch.","Sie sprechen vielleicht über den Autor.","Die Frau sucht ein Wörterbuch.","Die Personen sprechen über etwas, vielleicht über die Bücher."]},{"id":"cvecara","label":"Cvećara","sentences":["Die Personen sind im Blumenladen.","Die Floristin macht einen Blumenstrauß.","Sie sprechen vielleicht über die Blumen.","Die Kundin kauft rote Rosen.","Ich denke, die Frau ist die Floristin und der Mann ist der Kunde.","Die Personen sprechen über etwas, vielleicht über die Blumen."]},{"id":"voz","label":"Voz","sentences":["Die Personen sind im Zug.","Die Personen sitzen im Zug.","Sie sprechen vielleicht über die Reise.","Der Mann sucht seinen Sitzplatz.","Die Personen sprechen über etwas, vielleicht über die Reise."]},{"id":"cekaonica","label":"Čekaonica","sentences":["Die Personen sind im Wartezimmer.","Die Personen warten auf den Arzt.","Sie sprechen vielleicht über den Arzttermin.","Die Frau sucht ihre Karte.","Ich denke, die Frau ist die Ärztin und der Mann ist der Patient.","Ich denke, der Mann ist der Arzt und die Frau ist die Patientin.","Die Personen sprechen über etwas, vielleicht über die Krankheit."]},{"id":"soba","label":"Soba","sentences":["Die Personen sind im Zimmer.","Die Frau macht das Bett.","Im Zimmer sprechen sie vielleicht über die Möbel.","Der Mann sucht seine Schlüssel.","Der Raum ist groß und schön.","Der Raum ist hell.","Der Raum ist klein.","Die Personen sprechen über etwas, vielleicht über die Wohnung."]},{"id":"fitnes","label":"Fitnes","sentences":["Die Personen sind im Fitnessstudio.","Die Frau läuft auf dem Laufband.","Sie sprechen vielleicht über das Training.","Der Mann sucht eine Hantel.","Ich denke, der Mann ist der Trainer und die Frau ist die Sportlerin.","Ich denke, die Frau ist die Trainerin und der Mann ist der Sportler.","Die Personen sprechen über etwas, vielleicht über das Training."]},{"id":"biro","label":"Biro","sentences":["Die Personen sind im Büro.","Die Personen arbeiten am Computer.","Sie sprechen vielleicht über einen Termin.","Die Frau sucht einen Stift.","Die Personen sprechen über etwas, vielleicht über die Arbeit."]},{"id":"bioskop","label":"Bioskop","sentences":["Die Personen sind im Kino.","Die Personen sehen einen Film.","Sie sprechen vielleicht über den Film.","Der Mann kauft zwei Kinokarten."]},{"id":"reka","label":"Reka","sentences":["Die Personen sind neben dem Fluss.","Die Personen sitzen am Fluss.","Sie sprechen vielleicht über die Natur.","Sie suchen einen ruhigen Platz.","Es ist Sommer.","Draußen ist es schön.","Die Personen sprechen über etwas, vielleicht über die Natur."]},{"id":"stanica","label":"Stanica","sentences":["Die Personen sind am Bahnhof.","Die Frau steht am Gleis.","Sie sprechen vielleicht über den Zug.","Der Mann kauft eine Fahrkarte.","Die Personen sprechen über etwas, vielleicht über den Weg."]},{"id":"plaza","label":"Plaža","sentences":["Die Personen sind am Strand.","Die Kinder spielen im Sand.","Sie sprechen vielleicht über das Meer.","Die Mutter sucht die Sonnencreme.","Die Personen sprechen über etwas, vielleicht über das Wetter."]},{"id":"more","label":"More","sentences":["Die Personen sind am Meer.","Die Personen schwimmen im Meer.","Sie sprechen vielleicht über den Urlaub.","Die Frau sucht ihre Sonnenbrille.","Die Personen sprechen über etwas, vielleicht über das Schwimmen."]},{"id":"jezero","label":"Jezero","sentences":["Die Personen sind am See.","Die Personen grillen am See.","Sie sprechen vielleicht über das Essen.","Sie brauchen mehr Brot.","Die Personen sprechen über etwas, vielleicht über das Essen."]},{"id":"pijaca","label":"Pijaca","sentences":["Die Personen sind auf dem Markt.","Die Frau schaut sich das Obst an.","Sie sprechen vielleicht über die Preise.","Sie kauft Äpfel und Tomaten.","Die Personen sprechen über etwas, vielleicht über das Obst und Gemüse."]},{"id":"ulica","label":"Na ulici","sentences":["Die Personen sind auf der Straße.","Die Personen schauen in ein Schaufenster.","Sie sprechen vielleicht über die Kleidung.","Die Frau sucht ein Geschäft.","Ich denke, die Frau ist die Polizistin und der Mann ist der Autofahrer.","Die Personen sprechen über etwas, vielleicht über die Straße."]},{"id":"kasa","label":"Na kasi","sentences":["Die Personen sind an der Kasse.","Die Kassiererin kassiert.","An der Kasse sprechen sie vielleicht über den Preis.","Der Kunde bezahlt mit Karte.","Ich denke, die Frau ist die Kassiererin und der Mann ist der Kunde.","Ich denke, der Mann ist der Kassierer und die Frau ist die Kundin.","Die Personen sprechen über etwas, vielleicht über die Bezahlung."]},{"id":"veterinar","label":"Veterinar","sentences":["Die Personen sind beim Tierarzt.","Die Personen sprechen über etwas, vielleicht über den Hund."]},{"id":"frizer","label":"Frizerski salon","sentences":["Die Personen sind im Friseursalon.","Die Personen sprechen über etwas, vielleicht über die Frisur."]},{"id":"restoran","label":"Restoran","sentences":["Die Personen sind im Restaurant.","Die Personen sprechen über etwas, vielleicht über das Essen."]},{"id":"autobus","label":"Autobus","sentences":["Die Personen sind im Bus.","Die Personen sprechen über etwas, vielleicht über den Bus."]},{"id":"auto","label":"U automobilu","sentences":["Die Personen sind im Auto.","Die Personen sprechen über etwas, vielleicht über den Weg."]},{"id":"park","label":"Park","sentences":["Die Personen sind im Park.","Die Personen sprechen über etwas, vielleicht über den Park."]},{"id":"posta","label":"Pošta","sentences":["Die Personen sind in der Postfiliale.","Die Personen sprechen über etwas, vielleicht über das Paket."]},{"id":"aerodrom","label":"Aerodrom","sentences":["Die Personen sind am Flughafen.","Die Personen sprechen über etwas, vielleicht über den Flug."]}];
let sceneFilter="priroda";
/* Završne rečenice su sada zaseban deveti korak. Redosled je prema učenikovom spisku. */
const CLOSING_SENTENCES=["Links sehe ich einen Mann.","Rechts sehe ich eine Frau.","In der Mitte sehe ich ein Kind.","Die Personen stehen nebeneinander.","Die Personen sitzen nebeneinander.","Die Personen stehen sich gegenüber.","Die Personen sitzen sich gegenüber.","Eine Person steht und die andere sitzt.","Ich sehe eine Familie.","Ich sehe eine Mutter mit ihrem Kind.","Ich sehe einen Vater mit seinem Kind.","Die Personen sind zusammen.","Ich sehe zwei Erwachsene.","Im Vordergrund sehe ich eine Frau.","Im Hintergrund sehe ich einen Mann.","Im Vordergrund sehe ich einen Mann.","Im Hintergrund sehe ich eine Frau.","Im Hintergrund sehe ich viele Personen."];
function closingDescriptionIds(){
 return CLOSING_SENTENCES.map(de=>BANK.findIndex(x=>x.cat==="start"&&x.de===de)).filter(i=>i>=0);
}
/* Brzi izbor vrste osoba – samo na prvom koraku. */
let personFilter="all";
const PERSON_GROUP_EXISTING={
 "Auf dem Bild sehe ich einen Mann und eine Frau.":"man_woman",
 "Auf dem Bild sehe ich zwei Frauen.":"two_women",
 "Auf dem Bild sehe ich zwei Männer.":"two_men",
 "Auf dem Bild sehe ich zwei Kinder.":"two_children",
 "Auf dem Bild sehe ich einen Mann und ein Kind.":"man_child",
 "Auf dem Bild sehe ich eine Frau und ein Kind.":"woman_child"
};
function personDescriptionIds(){
 const ids=BANK.map((_,i)=>i).filter(i=>BANK[i].cat==="start");
 const moveToEnd=["Im Vordergrund sehe ich einen Mann.","Im Hintergrund sehe ich eine Frau.","Im Hintergrund sehe ich viele Personen."];
 return ids.slice(0,6).concat(ids.filter(i=>BANK[i].personExample&&!CLOSING_SENTENCES.includes(BANK[i].de)));
}
function sceneMatches(scene){
 const words=new Set(scene.sentences);
 return BANK.map((row,i)=>words.has(row.de)?i:-1).filter(i=>i>=0);
}
/* Prikaži oba načina opisivanja svakog mesta jedan ispod drugog. */
function pairPlaces(indices){
 const lookup=new Map(BANK.map((row,i)=>[row.de,i]));
 const pairs=[];
 for(const idx of indices){
  const entry=BANK[idx];
  if(entry.cat!=="places"||!/^Die (Personen sind|Person ist) /.test(entry.de))continue;
  pairs.push(idx);
  const variant=lookup.get("Ich denke, "+entry.de[0].toLowerCase()+entry.de.slice(1));
  if(variant!==undefined)pairs.push(variant);
 }
 return pairs;
}
/* Korak 4 prikazuje samo izgled; detalji osoba pripadaju koraku 8.
   Identiteti unosa ostaju isti da se sačuvaju ranije izabrane rečenice. */
const TRANSFERRED_PERSON_DETAILS=new Set(["Der Mann hat schöne weiße Zähne.","Der Mann hat ein schönes Gesicht.","Der Mann trägt eine Armbanduhr.","Der Mann trägt ein Armband.","Der Mann hält eine Tüte.","Der Mann hat einen Bart.","Der Mann hat einen Schnurrbart.","Der Mann trägt eine Kette.","Die Frau hat schöne weiße Zähne.","Die Frau hat ein schönes Gesicht.","Die Frau trägt eine Armbanduhr.","Die Frau trägt ein Armband.","Die Frau hält eine Tüte.","Die Frau trägt Ohrringe.","Die Frau trägt einen Ring.","Die Frau trägt eine Halskette.","Das Kind hat schöne weiße Zähne.","Das Kind hat ein schönes Gesicht.","Das Kind trägt eine Armbanduhr.","Das Kind trägt ein Armband.","Das Kind hält eine Tüte.","Das Kind trägt eine Brille.","Das Kind trägt eine Sonnenbrille.","Das Kind hat ein schönes Lachen."]);
function isTransferredPersonDetail(row){
 return ["mann","frau","kind"].includes(row.cat)&&TRANSFERRED_PERSON_DETAILS.has(row.de);
}
function isHairOnlyPersonSentence(row){
 return ["mann","frau","kind"].includes(row.cat)&&/^(?:Er|Sie|Es) (?:hat .*(?:Haare|Haarsträhne)[.]|ist haarlos[.])$/.test(row.de);
}
function movedPersonDetailIds(){
 return BANK.map((row,i)=>isTransferredPersonDetail(row)?i:-1).filter(i=>i>=0);
}
function source(){
 // U 1. koraku prikazuj samo opise osoba, bez izbora situacija.
 if(step===0){
  const all=personDescriptionIds();
  if(personFilter==="all")return all;
  return all.filter(i=>BANK[i].personGroup===personFilter||PERSON_GROUP_EXISTING[BANK[i].de]===personFilter);
 }
 if(step===6)return closingDescriptionIds();
 const ids=BANK.map((_,i)=>i).filter(i=>BANK[i].cat===category);
 // Filter situacije postoji samo na stranama 2, 3 i 8.
 const scenePage=Number(document.body.dataset.stepPage);
 const useScene=scenePage===1||scenePage===2||scenePage===7;
 if(useScene&&sceneFilter!=="all"){
  const scene=SCENE_DATA.find(x=>x.id===sceneFilter);
  if(scene){
   const found=sceneMatches(scene);
   if(scenePage===1)return found.filter(i=>/\bsprechen\b/i.test(BANK[i].de));
   if(scenePage===2)return pairPlaces(found.filter(i=>BANK[i].cat==="places"));
   if(scenePage===7){
    // Prikaži dodatnih 10 posebnih opisa koji pripadaju baš izabranoj situaciji.
    // Za "Sve situacije" prikazuju se svi primeri kroz standardni extra filter.
    const sceneDetails=BANK.map((row,i)=>row.cat==="extra"&&row.sceneDetailIds?.includes(scene.id)?i:-1).filter(i=>i>=0);
    return [...new Set(found.filter(i=>BANK[i].cat==="extra").concat(sceneDetails,movedPersonDetailIds()))];
   }
  }
 }
 if(category==="extra"){
  const closing=ids.filter(i=>BANK[i].de==="Das war meine Bildbeschreibung.");
  return ids.filter(i=>BANK[i].de!=="Das war meine Bildbeschreibung.").concat(scenePage===7?movedPersonDetailIds():[],closing);
 }
 if(category==="start"&&step===1)return ids.slice(6).filter(i=>!BANK[i].personExample);
 // Prvo puni nazivi osoba (Der Mann / Die Frau / Das Kind), potom zamenice (Er / Sie / Es).
 // Sortiraj samo prikaz; ne pomeraj unose u BANK-u jer učenici već imaju sačuvane izbore.
 if(step===3&&appearanceMode==="description"&&["mann","frau","kind"].includes(category)){
  const noun=category==="mann"?"Der Mann":category==="frau"?"Die Frau":"Das Kind";
  const other=category==="mann"?"Der andere Mann":category==="frau"?"Die andere Frau":"Das andere Kind";
  const appearance=ids.filter(i=>!isTransferredPersonDetail(BANK[i])&&!isHairOnlyPersonSentence(BANK[i]));
  // Prvo sve "Der Mann ist" / "Die Frau ist" / "Das Kind ist" osobine,
  // zatim opisi izraza lica, na kraju links, rechts i druga osoba.
  const groups=[
   appearance.filter(i=>BANK[i].de.startsWith(noun+" ist ")),
   appearance.filter(i=>BANK[i].de.startsWith(noun+" sieht ")||BANK[i].de.startsWith(noun+" lacht")),
   appearance.filter(i=>BANK[i].de.startsWith(noun+" links ")||BANK[i].de.startsWith(noun+" rechts ")),
   appearance.filter(i=>BANK[i].de.startsWith(other+" ")),
  ];
  const used=new Set(groups.flat());
  return groups.flat().concat(appearance.filter(i=>!used.has(i)));
 }
 if(scenePage===2&&category==="places")return pairPlaces(ids);
 return ids;
}

/* Pretraga statičkih rečenica po nemačkom i srpskom; ostaje lokalna i radi i u iframe-u. */
const SEARCHABLE_CATEGORIES=new Set(["start","extra","places","mann","frau","kind"]);
const SEARCH_INDEX=BANK.map((entry,i)=>({entry,i})).filter(({entry})=>SEARCHABLE_CATEGORIES.has(entry.cat));
function searchNormalize(text){
 return String(text).toLowerCase().replace(/ß/g,"ss").normalize("NFD").replace(/[\u0300-\u036f]/g,"").trim();
}
function renderSearchResults(){
 const input=$("#searchInput"),q=searchNormalize(input.value),target=$("#searchResults"),count=$("#searchCount");
 if(!q){count.textContent="Unesi reč";target.innerHTML='<p class="search-empty">Upiši reč na nemačkom ili srpskom da pronađeš rečenicu.</p>';return}
 const words=q.split(/\s+/).filter(Boolean);
 const results=SEARCH_INDEX.filter(({entry})=>{const content=searchNormalize(entry.de+" "+entry.sr);return words.every(w=>content.includes(w))});
 const visible=results.slice(0,60);
 count.textContent=results.length+" pronađeno";
 target.innerHTML=visible.length?visible.map(({entry,i})=>{
  const isSelected=chosen.includes(i);
  return '<div class="search-result '+(isSelected?'selected':'')+'"><button type="button" class="search-result-add" data-search-add="'+i+'" aria-pressed="'+isSelected+'"><span class="search-plus">'+(isSelected?'✓':'❯')+'</span><span class="search-result-text"><strong>'+escapeHTML(entry.de)+'</strong><small>'+escapeHTML(entry.sr)+'</small></span></button><button type="button" class="search-result-sound" data-search-sound="'+i+'" aria-label="Poslušaj rečenicu">🔊</button></div>'
 }).join(""):'<p class="search-empty">Nema pronađenih rečenica. Probaj drugu reč.</p>';
 if(results.length>visible.length)count.textContent=results.length+" (prvih "+visible.length+")";
}
function openSentenceSearch(){
 $("#searchDialog").hidden=false;
 $("#openSearch").setAttribute("aria-expanded","true");
 renderSearchResults();
 $("#searchInput").focus({preventScroll:true});
}
function closeSentenceSearch(){
 $("#searchDialog").hidden=true;
 $("#openSearch").setAttribute("aria-expanded","false");
 $("#openSearch").focus({preventScroll:true});
}

function renderSample(){
 $("#sampleNumber").textContent=(step+1)+".";
 $("#samplehead").textContent=SAMPLE_HEADS[step].replace(/^\d+\.\s*/,"");
 $("#samplesr").textContent=SAMPLE_TRANSLATIONS[step];
 document.querySelectorAll(".step").forEach((button,index)=>{
  const isSelected=index===step;
  button.classList.toggle("active",isSelected);
  button.setAttribute("aria-pressed",String(isSelected));
  // Crvena aktivna kategorija i unutar mobilnog browsera ili iframe prikaza.
  button.style.setProperty("background-color",isSelected?"#e11d3c":"#2466bf","important");
  button.style.setProperty("border-color",isSelected?"#a91a32":"#15519c","important");
  const number=button.querySelector(".num");
  if(number)number.style.setProperty("background-color",isSelected?"#ad1630":"#4d90e4","important");
 });
}
function renderList(){
 if(step===4){
   $("#categoryCount").textContent=CLOTH_ITEMS.length+" odevnih predmeta";
   return;
 }
 if(step===3&&appearanceMode!=="description"){
   $("#categoryCount").textContent=appearanceMode==="age"?"Godine":"Kosa";
   return;
 }
 const box=$("#phrases");const usable=box.clientHeight;const width=box.clientWidth;
 const ideal=width<338?73:68;
 PAGE_SIZE=Math.max(3,Math.min(12,Math.floor(Math.max(0,usable-5)/ideal)));
 document.documentElement.style.setProperty("--page-rows",PAGE_SIZE);
 const data=source();const pages=Math.max(1,Math.ceil(data.length/PAGE_SIZE));page=Math.max(0,Math.min(page,pages-1));const visible=data.slice(page*PAGE_SIZE,(page+1)*PAGE_SIZE);$("#categoryCount").textContent=data.length+" rečenica";$("#pageCount").textContent="Strana "+(page+1)+" od "+pages;$("#prev").disabled=page<=0;$("#next").disabled=page>=pages-1;$("#phrases").innerHTML=visible.map(i=>{const a=BANK[i],is=chosen.includes(i);return '<div class="phrase '+(is?'selected':'')+'"><button class="add" data-add="'+i+'" aria-pressed="'+is+'"><span class="plus">'+(is?'✓':'❯')+'</span><span class="phrasetxt"><span class="de">'+escapeHTML(a.de)+'</span><span class="sr">'+escapeHTML(a.sr)+'</span></span></button><button class="sound" data-sound="'+i+'" aria-label="Izgovori rečenicu">🔊</button></div>'}).join("")}

/* Stranica 10: opis iste osobe je jedna celina, bez obzira na redosled odabira.
   Ne pomeramo originalne indekse niti redosled u localStorage-u. */
function summaryPersonRole(line){
 if(!line)return null;
 if(["mann","frau","kind"].includes(line.role))return line.role;
 if(["mann","frau","kind"].includes(line.cat))return line.cat;
 const sentence=line.de||"";
 if(/^Der (?:andere )?Mann\b/.test(sentence))return "mann";
 if(/^Die (?:andere )?Frau\b/.test(sentence))return "frau";
 if(/^Das (?:andere )?Kind\b/.test(sentence))return "kind";
 // Samo bezbedno prepoznatljive jedninske radnje, nikako "Sie sprechen/sind/suchen".
 if(line.cat==="extra"&&/^Sie (?:braucht|kauft|liest|schneidet|gießt|probiert|bestellt|legt|läuft|räumt|zeigt)\b/.test(sentence))return "frau";
 return null;
}
function summaryIsPronoun(line,role){
 const pronoun=role==="mann"?"Er":role==="frau"?"Sie":"Es";
 return (line.de||"").startsWith(pronoun+" ");
}
function orderedChosen(){
 if(!document.body.classList.contains("summary-mode"))return chosen;
 const index=chosen.findIndex(id=>summaryPersonRole(BANK[id])!==null);
 if(index<0)return chosen;
 const groupOrder=[],groups=new Map(),other=[];
 for(const id of chosen.slice(index)){
  const role=summaryPersonRole(BANK[id]);
  if(!role){other.push(id);continue}
  if(!groups.has(role)){groups.set(role,[]);groupOrder.push(role)}
  groups.get(role).push(id);
 }
 const grouped=[];
 for(const role of groupOrder){
  const entries=groups.get(role);
  // "Der Mann" pa "Er", "Die Frau" pa "Sie", "Das Kind" pa "Es".
  grouped.push(...entries.filter(id=>!summaryIsPronoun(BANK[id],role)));
  grouped.push(...entries.filter(id=>summaryIsPronoun(BANK[id],role)));
 }
 return chosen.slice(0,index).concat(grouped,other);
}

function chosenPageSize(){
 const box=$("#selectedArea");
 if(!document.body.classList.contains("summary-mode"))
  return Math.max(1,Math.min(4,Math.floor(Math.max(0,box.clientHeight-6)/(box.clientWidth<330?82:72))));
 if(!chosen.length)return 1;
 const available=Math.max(100,box.clientHeight-17),width=Math.max(150,box.clientWidth-20);
 const test=document.createElement("div");
 test.className="current summary-measure";
 test.style.width=width+"px";
 test.innerHTML='<span class="index">1.</span><div class="sentence"><div class="de"></div><div class="sr"></div></div><button class="sound">🔊</button><button class="remove">×</button>';
 document.body.appendChild(test);
 let maxH=0;
 for(const id of chosen){
  const line=BANK[id];
  test.querySelector(".de").textContent=line.de;
  test.querySelector(".sr").textContent=line.sr;
  maxH=Math.max(maxH,Math.ceil(test.getBoundingClientRect().height));
 }
 test.remove();
 const row=Math.max(53,maxH+7);
 return Math.max(1,Math.min(chosen.length,Math.floor((available+4)/(row+4))));
}
function renderChosen(){
 const arranged=orderedChosen();
 const n=arranged.length;chosenIndex=Math.min(Math.max(0,chosenIndex),Math.max(0,n-1));
 $("#total").textContent=n+" rečenica";if($("#wizardSelected"))$("#wizardSelected").textContent=n+" izabrano";
 if(!n){$("#chosenPage").textContent="Opis strana 1";$("#chosenPrev").disabled=true;$("#chosenNext").disabled=true;$("#selectedArea").innerHTML='<p class="empty">Dodaj rečenice pomoću ❯. Ovde će se videti više rečenica tvog opisa istovremeno.</p>';return}
 const per=chosenPageSize(),first=Math.floor(chosenIndex/per)*per,last=Math.min(first+per,n),visible=arranged.slice(first,last);
 $("#chosenPage").textContent=document.body.classList.contains("summary-mode")?"Stranica "+(Math.floor(first/per)+1)+" / "+Math.ceil(n/per):"Opis strana "+(Math.floor(first/per)+1);
 $("#chosenPrev").disabled=first===0;$("#chosenNext").disabled=last===n;
 $("#selectedArea").style.setProperty("--chosen-rows",per);
 $("#selectedArea").innerHTML='<div class="chosen-grid">'+visible.map((i,offset)=>{
  const line=BANK[i],isSpeaking=speakingChosenPosition===first+offset;return '<div class="current '+(["age","custom-hair","custom-clothing"].includes(line.cat)?'dynamic-current':'')+(isSpeaking?' speaking-now':'')+'" data-chosen-position="'+(first+offset)+'"'+(isSpeaking?' aria-current="true"':'')+'><span class="index">'+(first+offset+1)+'.'+'</span><div class="sentence"><div class="de">'+escapeHTML(line.de)+'</div><div class="sr">'+escapeHTML(line.sr)+'</div></div><button class="sound" data-chosen-sound="'+i+'" aria-label="Poslušaj rečenicu">🔊</button><button class="remove" data-chosen-remove="'+i+'" aria-label="Ukloni rečenicu">×</button></div>'
 }).join("")+'</div>'
}
function updateSpeakingFrame(){
 const rows=[...document.querySelectorAll("#selectedArea .current[data-chosen-position]")];
 const per=chosenPageSize(),wantedPage=Math.floor(chosenIndex/per);
 if(!rows.length||Math.floor(Number(rows[0].dataset.chosenPosition)/per)!==wantedPage){renderChosen();return}
 for(const row of rows){
  const pos=Number(row.dataset.chosenPosition),speaking=pos===speakingChosenPosition;
  row.classList.toggle("speaking-now",speaking);
  if(speaking)row.setAttribute("aria-current","true");else row.removeAttribute("aria-current");
  row.querySelector(".index").textContent=(pos+1)+".";
 }
}
function addOrRemove(i){const displayPosition=orderedChosen().indexOf(i),pos=chosen.indexOf(i);if(pos<0){chosen.push(i);chosenIndex=orderedChosen().indexOf(i);listen(i)}else{stop();chosen.splice(pos,1);chosenIndex=Math.max(0,Math.min(displayPosition,chosen.length-1))}renderChosen();renderList();renderAge();renderHair();renderClothing();persistDraft()}
function showRoles(){
 const show=step===3||step===4,appearance=step===3&&appearanceMode!=="description";
 $("#rolebar").hidden=!show;
 const panel=$("#phrases").closest(".panel");
 panel.classList.toggle("appearance-only",appearance);
 panel.classList.toggle("clothing-only",step===4);
 $("#selectorTitle").textContent=step===4?"Izaberi odeću i boju":step===3?(appearanceMode==="age"?"Izaberi godine":appearanceMode==="hair"?"Izaberi kosu":"Opis osobe"):step===0?"Opis osoba":step===1?"Razgovor · izaberi rečenice":"Izaberi rečenice";
 document.querySelectorAll("[data-role]").forEach(b=>b.classList.toggle("active",b.dataset.role===activeRole));
 renderModes();renderAge();renderHair();renderClothing();
}
function chooseStep(n){step=n;if(n===3){category=activeRole}else category=STEP_CATS[n];page=0;showRoles();renderSample();renderList()}
function playAll(){
 stop();
 const my=runId,arr=[...orderedChosen()];
 let position=0;
 function playNext(){
  if(my!==runId)return;
  if(position>=arr.length){
   speakingChosenPosition=-1;
   updateSpeakingFrame();
   return;
  }
  chosenIndex=position;
  speakingChosenPosition=position;
  updateSpeakingFrame();
  utter(BANK[arr[position++]].de,playNext);
 }
 playNext();
}
$("#steps").addEventListener("click",e=>{const b=e.target.closest("[data-step]");if(b)chooseStep(Number(b.dataset.step))});
$("#rolebar").addEventListener("click",e=>{const b=e.target.closest("[data-role]");if(!b)return;activeRole=b.dataset.role;if(step===3)category=activeRole;page=0;showRoles();renderSample();renderList()});
$("#modebar").addEventListener("click",e=>{const b=e.target.closest("[data-mode]");if(!b)return;appearanceMode=b.dataset.mode;page=0;showRoles();renderSample();renderList()});
$("#ageMinus").addEventListener("click",()=>adjustAge(-1));
$("#agePlus").addEventListener("click",()=>adjustAge(1));
$("#ageSound").addEventListener("click",()=>listen(AGE_INDEX[category]));
$("#ageAdd").addEventListener("click",()=>addOrRemove(AGE_INDEX[category]));
$("#hairbar").addEventListener("click",e=>{const b=e.target.closest("[data-hair-turn]");if(b)turnHair(b.dataset.hairTurn,Number(b.dataset.delta))});
$("#hairSound").addEventListener("click",()=>listen(HAIR_INDEX[category]));
$("#hairAdd").addEventListener("click",()=>addOrRemove(HAIR_INDEX[category]));
$("#clothingbar").addEventListener("click",e=>{const b=e.target.closest("[data-clothing-turn]");if(b)turnClothing(b.dataset.clothingTurn,Number(b.dataset.delta))});
$("#clothingSound").addEventListener("click",()=>listen(CLOTH_INDEX[activeRole]));
$("#clothingAdd").addEventListener("click",toggleClothing);
/* ❮ ❯ menjaju situaciju; "Sve situacije" prikazuje celu bazu. */
const sceneButtons=$("#sceneFilters");
if(sceneButtons){
 const current=$("#sceneName"),reset=$("#sceneAll");
 const syncScene=()=>{
  const i=SCENE_DATA.findIndex(x=>x.id===sceneFilter);
  current.textContent=i<0?"Sve":SCENE_DATA[i].label;
  current.setAttribute("aria-label",i<0?"Sve situacije":SCENE_DATA[i].label+", "+(i+1)+" od "+SCENE_DATA.length);
  reset.classList.toggle("active",sceneFilter==="all");
  reset.setAttribute("aria-pressed",String(sceneFilter==="all"));
  page=0;
  renderList();
 };
 sceneButtons.addEventListener("click",e=>{
  const b=e.target.closest("[data-scene-turn]");
  if(!b)return;
  const delta=Number(b.dataset.sceneTurn);
  const index=SCENE_DATA.findIndex(x=>x.id===sceneFilter);
  const next=index<0?(delta>0?0:SCENE_DATA.length-1):(index+delta+SCENE_DATA.length)%SCENE_DATA.length;
  sceneFilter=SCENE_DATA[next].id;
  syncScene();
 });
 reset.addEventListener("click",()=>{sceneFilter="all";syncScene()});
 syncScene();
}
/* Plavi filteri: izbor ne menja prethodno izabrane rečenice. */
const personFilters=$("#personFilters");
if(personFilters)personFilters.addEventListener("click",e=>{
 const b=e.target.closest("[data-person-filter]");
 if(!b||!personFilters.contains(b))return;
 const next=b.dataset.personFilter;
 if(!["all","man_woman","two_women","two_men","two_children","man_child","woman_child"].includes(next))return;
 personFilter=next;
 page=0;
 personFilters.querySelectorAll("[data-person-filter]").forEach(item=>{
  const active=item.dataset.personFilter===next;
  item.classList.toggle("active",active);
  item.setAttribute("aria-pressed",String(active));
 });
 renderList();
});
$("#phrases").addEventListener("click",e=>{let b=e.target.closest("[data-add]");if(b){addOrRemove(Number(b.dataset.add));return}b=e.target.closest("[data-sound]");if(b)listen(Number(b.dataset.sound))});
$("#prev").addEventListener("click",()=>{page--;renderList()});
$("#next").addEventListener("click",()=>{page++;renderList()});
$("#chosenPrev").addEventListener("click",()=>{chosenIndex=Math.max(0,(Math.floor(chosenIndex/chosenPageSize())-1)*chosenPageSize());renderChosen()});
$("#chosenNext").addEventListener("click",()=>{chosenIndex=Math.min(chosen.length-1,(Math.floor(chosenIndex/chosenPageSize())+1)*chosenPageSize());renderChosen()});
$("#selectedArea").addEventListener("click",e=>{const sound=e.target.closest("[data-chosen-sound]");if(sound){listen(Number(sound.dataset.chosenSound));return}const remove=e.target.closest("[data-chosen-remove]");if(remove)addOrRemove(Number(remove.dataset.chosenRemove))});
$("#playAll").addEventListener("click",playAll);
$("#clear").addEventListener("click",()=>{stop();chosen=[];chosenIndex=0;renderChosen();renderList();persistDraft()});
$("#openSearch").addEventListener("click",openSentenceSearch);
$("#closeSearch").addEventListener("click",closeSentenceSearch);
$("#searchInput").addEventListener("input",renderSearchResults);
$("#searchResults").addEventListener("click",e=>{
 const add=e.target.closest("[data-search-add]");
 if(add){addOrRemove(Number(add.dataset.searchAdd));renderSearchResults();return}
 const sound=e.target.closest("[data-search-sound]");
 if(sound)listen(Number(sound.dataset.searchSound));
});
document.addEventListener("keydown",e=>{
 if(e.key==="Escape"){if(!$("#searchDialog").hidden){e.preventDefault();closeSentenceSearch()}else stop()}
});
if("speechSynthesis" in window)speechSynthesis.getVoices();
renderSample();showRoles();renderList();renderChosen();
// Resize layout when device orientation/available viewport changes, without introducing scrollbars.
if("ResizeObserver" in window){new ResizeObserver(()=>renderList()).observe($("#phrases"))}
window.addEventListener("resize",()=>{renderList();renderChosen()});

// Kretanje kroz sedam odvojenih ekrana: šest tema + sastavljeni opis.
const WIZARD_NAMES=["Opis osoba","Razgovor osoba","Mesto osoba na slici","Izgled osoba na slici","Odeća osoba na slici","Kosa osoba na slici","Godine osoba na slici","Detalji na slici","Završne rečenice","Moj opis slike"];

const PAGE_LINKS=["1-opis-osoba.html","2-razgovor-osoba.html","3-mesto-osoba.html","4-izgled-osoba.html","5-odeca-osoba.html","6-kosa-osoba.html","7-godine-osoba.html","8-detalji.html","9-zavrsne-recenice.html","10-moj-opis.html"];
const PAGE_INDEX=Math.max(0,Math.min(9,Number(document.body.dataset.stepPage)||0));
const STORAGE_KEY="demax-a1-novi-sablon-9-koraka-v1";
function persistDraft(){
 try{
  localStorage.setItem(STORAGE_KEY,JSON.stringify({
   entries:chosen.map(i=>BANK[i]).filter(Boolean),
   ages:AGES,hair:HAIR_STATES,clothing:CLOTH_STATES
  }));
 }catch(err){/* Storage may be unavailable in some embedded browser views. */}
}
function restoreDraft(){
 let saved=null;
 try{saved=JSON.parse(localStorage.getItem(STORAGE_KEY)||"null")}catch(err){return}
 if(!saved||!Array.isArray(saved.entries))return;
 for(const role of ["mann","frau","kind"]){
  if(saved.ages&&typeof saved.ages[role]==="number"){
   AGES[role]=saved.ages[role];
   Object.assign(BANK[AGE_INDEX[role]],createAge(role));
  }
  if(saved.hair?.[role]){
   Object.assign(HAIR_STATES[role],saved.hair[role]);
   Object.assign(BANK[HAIR_INDEX[role]],makeHair(role));
  }
  if(saved.clothing?.[role]){
   Object.assign(CLOTH_STATES[role],saved.clothing[role]);
   Object.assign(BANK[CLOTH_INDEX[role]],makeClothing(role));
  }
 }
 const recovered=[];
 for(const entry of saved.entries){
  if(!entry||typeof entry.de!=="string"||typeof entry.sr!=="string"||typeof entry.cat!=="string")continue;
  let i=BANK.findIndex(a=>a.de===entry.de&&a.sr===entry.sr&&a.cat===entry.cat&&a.role===entry.role);
  if(i<0&&entry.de==="Die Personen sprechen über etwas, vielleicht über Fleisch.")i=BANK.findIndex(a=>a.de==="Die Personen sprechen über etwas, vielleicht über das Fleisch.");
  if(i<0&&entry.de==="Sie sprechen vielleicht über das Wetter.")i=BANK.findIndex(a=>a.de==="Die Personen sprechen vielleicht über das Wetter.");
  // Prati ranije izabranu rečenicu i kad je premeštena iz Detalja u Opis osoba.
  if(i<0&&entry.de==="Im Hintergrund sehe ich noch viele Personen.")
   i=BANK.findIndex(a=>a.de===entry.de&&a.sr===entry.sr);
  if(i<0&&["custom-clothing","custom-hair","age"].includes(entry.cat)){
   i=BANK.length;BANK.push({...entry});
  }
  if(i>=0&&!recovered.includes(i))recovered.push(i);
 }
 chosen=recovered;
 chosenIndex=0;
}
function goToPage(target){
 if(target<0||target>=PAGE_LINKS.length)return;
 persistDraft();
 window.location.assign(PAGE_LINKS[target]);
}

const PAGE_TO_ORIGINAL_STEP=[0,1,2,3,4,3,3,5,6];
const PAGE_MODES=["description","description","description","description","description","hair","age","description","description"];
const PAGE_QUESTIONS=["Was sehen Sie auf dem Bild?","Worüber sprechen die Personen?","Wo sind die Personen auf dem Bild?","Wie sehen die Personen aus?","Was tragen die Personen?","Welche Haare haben die Personen?","Wie alt sind die Personen?","Was sehen Sie noch?","Was können Sie noch über die Personen sagen?"];
const PAGE_TRANSLATIONS=["Šta vidiš na slici?","O čemu razgovaraju osobe?","Gde se nalaze osobe na slici?","Kako izgledaju osobe na slici?","Šta nose osobe na slici?","Kakvu kosu imaju osobe?","Koliko godina imaju osobe?","Šta još vidiš na slici?","Šta još možeš reći o osobama?"];
let wizardPosition=0;
function showWizard(position){
  wizardPosition=Math.max(0,Math.min(9,position));
 const summary=wizardPosition===9;
 stop();
 document.body.classList.toggle("summary-mode",summary);
 if(!summary){
  appearanceMode=PAGE_MODES[wizardPosition];
  chooseStep(PAGE_TO_ORIGINAL_STEP[wizardPosition]);
  $("#sampleNumber").textContent=(wizardPosition+1)+".";
  $("#samplehead").textContent=PAGE_QUESTIONS[wizardPosition];
  $("#samplesr").textContent=PAGE_TRANSLATIONS[wizardPosition];
  if(wizardPosition===0){
   $("#samplehead").textContent="";
   $("#samplesr").textContent="";
  }else if(wizardPosition===1){
   $("#samplehead").textContent="Worüber sprechen die Personen?";
  }
 }
 $("#wizardTitle").textContent=(wizardPosition+1)+". "+WIZARD_NAMES[wizardPosition];
 $("#wizardCounter").textContent=(wizardPosition+1)+" / 10";
 $("#wizardFooterCount").textContent=summary?"Moj opis slike":"Korak "+(wizardPosition+1)+" od 10";
 $("#wizardBack").disabled=false;
 const previousLabel=wizardPosition===0?"Uputstvo":wizardPosition+". "+WIZARD_NAMES[wizardPosition-1];
 $("#wizardBack").innerHTML='<span class="back-arrow" aria-hidden="true">❮</span><span class="back-label">'+escapeHTML(previousLabel)+'</span>';
 $("#wizardBack").title=previousLabel;
 $("#wizardBack").setAttribute("aria-label",previousLabel);
 const nextLabel=summary?"Početna stranica":"Dalje: "+(wizardPosition+2)+". "+WIZARD_NAMES[wizardPosition+1];
 $("#wizardForward").innerHTML='<span class="next-label">'+escapeHTML(nextLabel)+'</span><span class="next-arrow" aria-hidden="true">❯</span>';
 $("#wizardForward").setAttribute("aria-label",nextLabel);
 $("#wizardHint").textContent=summary?"Sve izabrane rečenice na preglednim stranama.":wizardPosition===0?"Dodirni ❯ da dodaš rečenicu u svoj opis.":wizardPosition===1?"Izaberi rečenice o razgovoru. Prvi izbor je sačuvan.":"Dodirni + da dodaš ono što želiš.";
 document.querySelectorAll(".wizard-progress i").forEach((node,i)=>{
  node.classList.toggle("done",i<wizardPosition);
  node.classList.toggle("current",i===wizardPosition);
 });
 if(!summary && !$("#searchDialog").hidden)closeSentenceSearch();
 requestAnimationFrame(()=>{
  if(summary){chosenIndex=0;renderChosen()}
  else renderList();
 });
}
$("#wizardBack").addEventListener("click",()=>{if(PAGE_INDEX===0){persistDraft();window.location.assign("index.html")}else goToPage(PAGE_INDEX-1)});
$("#wizardForward").addEventListener("click",()=>{if(PAGE_INDEX===9){persistDraft();window.location.assign("index.html")}else goToPage(PAGE_INDEX+1)});
window.addEventListener("pagehide",persistDraft);
restoreDraft();
showWizard(PAGE_INDEX);

