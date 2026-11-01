
"use strict";
const BANK=[{"cat":"start","de":"Auf dem Bild sehe ich zwei Personen.","sr":"Na ovoj slici vidim dve osobe."},{"cat":"start","de":"Auf dem Bild sehe ich drei Personen.","sr":"Na ovoj slici vidim tri osobe."},{"cat":"start","de":"Auf dem Bild sehe ich einen Mann und eine Frau.","sr":"Na ovoj slici vidim jednog čoveka i jednu ženu."},{"cat":"start","de":"Auf dem Bild sehe ich zwei Männer.","sr":"Na ovoj slici vidim dva muškarca."},{"cat":"start","de":"Auf dem Bild sehe ich zwei Frauen.","sr":"Na ovoj slici vidim dve žene."},{"cat":"start","de":"Auf dem Bild sehe ich zwei Kinder.","sr":"Na ovoj slici vidim dvoje dece."},{"cat":"start","de":"Die Personen sprechen über etwas.","sr":"Osobe o nečemu pričaju."},{"cat":"start","de":"Die Personen sprechen miteinander über etwas.","sr":"Osobe međusobno razgovaraju o nečemu."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über die Arbeit.","sr":"Osobe pričaju o nečemu, možda o poslu."},{"cat":"extra","de":"Ich denke, die Personen sind ein Ehemann und eine Ehefrau.","sr":"Mislim da su ove osobe muž i žena."},{"cat":"extra","de":"Ich denke, die Frau ist Kundin.","sr":"Mislim da je žena mušterija."},{"cat":"extra","de":"Ich denke, die Frau ist die Verkäuferin.","sr":"Mislim da je žena prodavačica."},{"cat":"places","de":"Die Personen sind in der Natur.","sr":"Osobe su u prirodi."},{"cat":"places","de":"Die Personen sind in der Bäckerei.","sr":"Osobe su u pekari."},{"cat":"places","de":"Die Personen sind in der Werkstatt.","sr":"Osobe su u radionici."},{"cat":"places","de":"Die Personen sind in der Wohnung.","sr":"Osobe su u stanu."},{"cat":"places","de":"Die Personen sind in der Küche.","sr":"Osobe su u kuhinji."},{"cat":"places","de":"Die Personen sind in der Boutique.","sr":"Osobe su u butiku."},{"cat":"places","de":"Die Personen sind in der Apotheke.","sr":"Osobe su u apoteci."},{"cat":"places","de":"Die Personen sind in der Metzgerei.","sr":"Osobe su u mesari."},{"cat":"places","de":"Die Personen sind in der Bibliothek.","sr":"Osobe su u biblioteci."},{"cat":"places","de":"Die Personen sind in der Schule.","sr":"Osobe su u školi."},{"cat":"places","de":"Die Personen sind im Café.","sr":"Osobe su u kafiću."},{"cat":"places","de":"Die Personen sind im Garten.","sr":"Osobe su u bašti."},{"cat":"places","de":"Die Personen sind im Supermarkt.","sr":"Osobe su u supermarketu."},{"cat":"places","de":"Die Personen sind im Wald.","sr":"Osobe su u šumi."},{"cat":"places","de":"Die Personen sind im Hotel.","sr":"Osobe su u hotelu."},{"cat":"places","de":"Die Personen sind im Buchladen.","sr":"Osobe su u knjižari."},{"cat":"places","de":"Die Personen sind im Blumenladen.","sr":"Osobe su u cvećari."},{"cat":"places","de":"Die Personen sind im Zug.","sr":"Osobe su u vozu."},{"cat":"places","de":"Die Personen sind im Wartezimmer.","sr":"Osobe su u čekaonici."},{"cat":"places","de":"Die Personen sind im Zimmer.","sr":"Osobe su u sobi."},{"cat":"places","de":"Die Personen sind im Fitnessstudio.","sr":"Osobe su u teretani."},{"cat":"places","de":"Die Personen sind im Büro.","sr":"Osobe su u kancelariji."},{"cat":"places","de":"Die Personen sind im Krankenhaus.","sr":"Osobe su u bolnici."},{"cat":"places","de":"Die Personen sind im Schwimmbad.","sr":"Osobe su na bazenu."},{"cat":"places","de":"Die Personen sind im Park.","sr":"Osobe su u parku."},{"cat":"places","de":"Die Personen sind im Schuhladen.","sr":"Osobe su u prodavnici obuće."},{"cat":"places","de":"Die Personen sind im Auto.","sr":"Osobe su u automobilu."},{"cat":"places","de":"Die Personen sind im Bus.","sr":"Osobe su u autobusu."},{"cat":"places","de":"Die Personen sind im Kino.","sr":"Osobe su u bioskopu."},{"cat":"places","de":"Die Personen sind zu Hause.","sr":"Osobe su kod kuće."},{"cat":"places","de":"Die Personen sind neben dem Fluss.","sr":"Osobe su pored reke."},{"cat":"places","de":"Die Personen sind am Bahnhof.","sr":"Osobe su na železničkoj stanici."},{"cat":"places","de":"Die Personen sind am Strand.","sr":"Osobe su na plaži."},{"cat":"places","de":"Die Personen sind am Flughafen.","sr":"Osobe su na aerodromu."},{"cat":"places","de":"Die Personen sind am Meer.","sr":"Osobe su na moru."},{"cat":"places","de":"Die Personen sind am See.","sr":"Osobe su na jezeru."},{"cat":"places","de":"Die Personen sind auf dem Markt.","sr":"Osobe su na pijaci."},{"cat":"places","de":"Die Personen sind auf der Straße.","sr":"Osobe su na ulici."},{"cat":"places","de":"Die Personen sind an der Rezeption.","sr":"Osobe su na recepciji."},{"cat":"places","de":"Die Personen sind an der Kasse.","sr":"Osobe su na kasi."},{"cat":"mann","de":"Der Mann links ist groß.","sr":"Muškarac levo je visok."},{"cat":"mann","de":"Der Mann rechts ist klein.","sr":"Muškarac desno je nizak."},{"cat":"mann","de":"Der Mann sieht glücklich aus.","sr":"Muškarac izgleda srećan."},{"cat":"mann","de":"Der Mann sieht besorgt aus.","sr":"Muškarac izgleda zabrinut."},{"cat":"mann","de":"Er ist ungefähr 20 Jahre alt.","sr":"On ima otprilike 20 godina."},{"cat":"mann","de":"Er ist circa 23 Jahre alt.","sr":"On ima oko 23 godine."},{"cat":"mann","de":"Er hat kurze braune Haare.","sr":"On ima kratku smeđu kosu."},{"cat":"mann","de":"Er hat lange schwarze Haare.","sr":"On ima dugu crnu kosu."},{"cat":"mann","de":"Er hat lockige graue Haare.","sr":"On ima kovrdžavu sedu kosu."},{"cat":"mann","de":"Er hat kurze blonde Haare.","sr":"On ima kratku plavu kosu."},{"cat":"mann","de":"Er ist haarlos.","sr":"On nema kosu."},{"cat":"mann","de":"Er hat eine blonde Haarsträhne.","sr":"On ima jedan plavi pramen."},{"cat":"mann","de":"Der Mann hat schöne weiße Zähne.","sr":"Muškarac ima lepe bele zube."},{"cat":"mann","de":"Der Mann lacht.","sr":"Muškarac se smeje."},{"cat":"mann","de":"Der Mann hat ein schönes Gesicht.","sr":"Muškarac ima lepo lice."},{"cat":"mann","de":"Der Mann trägt eine Armbanduhr.","sr":"Muškarac nosi ručni sat."},{"cat":"mann","de":"Der Mann trägt ein Armband.","sr":"Muškarac nosi narukvicu."},{"cat":"mann","de":"Der Mann hält eine Tüte.","sr":"Muškarac drži kesu."},{"cat":"mann","de":"Der Mann sieht freundlich aus.","sr":"Muškarac izgleda ljubazno."},{"cat":"mann","de":"Der Mann sieht wunderschön aus.","sr":"Muškarac izgleda prelepo."},{"cat":"mann","de":"Der Mann hat einen Bart.","sr":"Muškarac ima bradu."},{"cat":"mann","de":"Der Mann hat einen Schnurrbart.","sr":"Muškarac ima brkove."},{"cat":"mann","de":"Der Mann trägt eine Kette.","sr":"Muškarac nosi lančić."},{"cat":"frau","de":"Die Frau links ist groß.","sr":"Žena levo je visoka."},{"cat":"frau","de":"Die Frau rechts ist klein.","sr":"Žena desno je niska."},{"cat":"frau","de":"Die Frau sieht glücklich aus.","sr":"Žena izgleda srećna."},{"cat":"frau","de":"Die Frau sieht besorgt aus.","sr":"Žena izgleda zabrinuta."},{"cat":"frau","de":"Sie ist ungefähr 20 Jahre alt.","sr":"Ona ima otprilike 20 godina."},{"cat":"frau","de":"Sie ist circa 23 Jahre alt.","sr":"Ona ima oko 23 godine."},{"cat":"frau","de":"Sie hat kurze braune Haare.","sr":"Ona ima kratku smeđu kosu."},{"cat":"frau","de":"Sie hat lange schwarze Haare.","sr":"Ona ima dugu crnu kosu."},{"cat":"frau","de":"Sie hat lockige graue Haare.","sr":"Ona ima kovrdžavu sedu kosu."},{"cat":"frau","de":"Sie hat kurze blonde Haare.","sr":"Ona ima kratku plavu kosu."},{"cat":"frau","de":"Sie ist haarlos.","sr":"Ona nema kosu."},{"cat":"frau","de":"Sie hat eine blonde Haarsträhne.","sr":"Ona ima jedan plavi pramen."},{"cat":"frau","de":"Die Frau hat schöne weiße Zähne.","sr":"Žena ima lepe bele zube."},{"cat":"frau","de":"Die Frau lacht.","sr":"Žena se smeje."},{"cat":"frau","de":"Die Frau hat ein schönes Gesicht.","sr":"Žena ima lepo lice."},{"cat":"frau","de":"Die Frau trägt eine Armbanduhr.","sr":"Žena nosi ručni sat."},{"cat":"frau","de":"Die Frau trägt ein Armband.","sr":"Žena nosi narukvicu."},{"cat":"frau","de":"Die Frau hält eine Tüte.","sr":"Žena drži kesu."},{"cat":"frau","de":"Die Frau sieht freundlich aus.","sr":"Žena izgleda ljubazno."},{"cat":"frau","de":"Die Frau sieht wunderschön aus.","sr":"Žena izgleda prelepo."},{"cat":"frau","de":"Die Frau trägt Ohrringe.","sr":"Žena nosi minđuše."},{"cat":"frau","de":"Die Frau trägt einen Ring.","sr":"Žena nosi prsten."},{"cat":"frau","de":"Die Frau trägt eine Halskette.","sr":"Žena nosi ogrlicu."},{"cat":"kind","de":"Das Kind links ist groß.","sr":"Dete levo je visoko."},{"cat":"kind","de":"Das Kind rechts ist klein.","sr":"Dete desno je nisko."},{"cat":"kind","de":"Das Kind sieht glücklich aus.","sr":"Dete izgleda srećno."},{"cat":"kind","de":"Das Kind sieht besorgt aus.","sr":"Dete izgleda zabrinuto."},{"cat":"kind","de":"Es ist ungefähr 7 Jahre alt.","sr":"Ono ima otprilike 7 godina."},{"cat":"kind","de":"Es ist circa 9 Jahre alt.","sr":"Ono ima oko 9 godina."},{"cat":"kind","de":"Es hat kurze braune Haare.","sr":"Ono ima kratku smeđu kosu."},{"cat":"kind","de":"Es hat lange schwarze Haare.","sr":"Ono ima dugu crnu kosu."},{"cat":"kind","de":"Es hat lockige graue Haare.","sr":"Ono ima kovrdžavu sedu kosu."},{"cat":"kind","de":"Es hat kurze blonde Haare.","sr":"Ono ima kratku plavu kosu."},{"cat":"kind","de":"Es ist haarlos.","sr":"Ono nema kosu."},{"cat":"kind","de":"Es hat eine blonde Haarsträhne.","sr":"Ono ima jedan plavi pramen."},{"cat":"kind","de":"Das Kind hat schöne weiße Zähne.","sr":"Dete ima lepe bele zube."},{"cat":"kind","de":"Das Kind lacht.","sr":"Dete se smeje."},{"cat":"kind","de":"Das Kind hat ein schönes Gesicht.","sr":"Dete ima lepo lice."},{"cat":"kind","de":"Das Kind trägt eine Armbanduhr.","sr":"Dete nosi ručni sat."},{"cat":"kind","de":"Das Kind trägt ein Armband.","sr":"Dete nosi narukvicu."},{"cat":"kind","de":"Das Kind hält eine Tüte.","sr":"Dete drži kesu."},{"cat":"kind","de":"Das Kind sieht freundlich aus.","sr":"Dete izgleda ljubazno."},{"cat":"kind","de":"Das Kind sieht wunderschön aus.","sr":"Dete izgleda prelepo."},{"cat":"kind","de":"Das Kind trägt eine Brille.","sr":"Dete nosi naočare."},{"cat":"kind","de":"Das Kind trägt eine Sonnenbrille.","sr":"Dete nosi sunčane naočare."},{"cat":"kind","de":"Das Kind hat ein schönes Lachen.","sr":"Dete ima lep osmeh."},{"cat":"extra","de":"Auf dem Bild sehe ich noch einen Tisch.","sr":"Na slici vidim još jedan sto."},{"cat":"extra","de":"Im Hintergrund sehe ich noch ein Fenster.","sr":"U pozadini vidim još jedan prozor."},{"cat":"extra","de":"Der Raum ist groß.","sr":"Prostorija je velika."},{"cat":"extra","de":"Der Garten ist klein.","sr":"Bašta je mala."},{"cat":"extra","de":"Es ist Sommer.","sr":"Leto je."},{"cat":"extra","de":"Es ist Winter.","sr":"Zima je."},{"cat":"extra","de":"Es ist Herbst.","sr":"Jesen je."},{"cat":"extra","de":"Draußen ist es schön.","sr":"Napolju je lepo."},{"cat":"extra","de":"Draußen ist es kalt.","sr":"Napolju je hladno."},{"cat":"extra","de":"Der Mann sitzt.","sr":"Muškarac sedi."},{"cat":"extra","de":"Die Frau steht.","sr":"Žena stoji."},{"cat":"extra","de":"Das war meine Bildbeschreibung.","sr":"To je bio moj opis slike."},{"cat":"extra","de":"Ich denke, der Mann ist der Verkäufer und die Frau ist die Kundin.","sr":"Mislim da je muškarac prodavac, a žena mušterija."},{"cat":"extra","de":"Ich denke, der Mann ist der Bäcker und die Frau ist die Kundin.","sr":"Mislim da je muškarac pekar, a žena mušterija."},{"cat":"extra","de":"Ich denke, die Frau ist die Ärztin und der Mann ist der Patient.","sr":"Mislim da je žena lekarka, a muškarac pacijent."},{"cat":"extra","de":"Ich denke, die Frau ist die Verkäuferin und der Mann ist der Kunde.","sr":"Mislim da je žena prodavačica, a muškarac mušterija."},{"cat":"extra","de":"Ich denke, der Mann ist der Arzt und die Frau ist die Patientin.","sr":"Mislim da je muškarac lekar, a žena pacijentkinja."},{"cat":"extra","de":"Ich denke, die Frau ist die Apothekerin und der Mann ist der Kunde.","sr":"Mislim da je žena apotekarka, a muškarac mušterija."},{"cat":"extra","de":"Ich denke, der Mann ist der Apotheker und die Frau ist die Kundin.","sr":"Mislim da je muškarac apotekar, a žena mušterija."},{"cat":"extra","de":"Ich denke, der Mann ist der Mechaniker und die Frau ist die Kundin.","sr":"Mislim da je muškarac mehaničar, a žena mušterija."},{"cat":"extra","de":"Ich denke, die Frau ist die Mechanikerin und der Mann ist der Kunde.","sr":"Mislim da je žena mehaničarka, a muškarac mušterija."},{"cat":"extra","de":"Ich denke, der Mann ist der Kellner und die Frau ist ein Gast.","sr":"Mislim da je muškarac konobar, a žena gošća."},{"cat":"extra","de":"Ich denke, die Frau ist die Kellnerin und der Mann ist der Gast.","sr":"Mislim da je žena konobarica, a muškarac gost."},{"cat":"extra","de":"Ich denke, der Mann ist der Metzger und der andere Mann ist der Kunde.","sr":"Mislim da je jedan muškarac mesar, a drugi mušterija."},{"cat":"extra","de":"Ich denke, die Frau ist die Friseurin und der Mann ist der Kunde.","sr":"Mislim da je žena frizerka, a muškarac mušterija."},{"cat":"extra","de":"Ich denke, der Mann ist der Friseur und die Frau ist die Kundin.","sr":"Mislim da je muškarac frizer, a žena mušterija."},{"cat":"extra","de":"Ich denke, die Frau ist die Lehrerin und das Mädchen ist die Schülerin.","sr":"Mislim da je žena učiteljica, a devojčica učenica."},{"cat":"extra","de":"Ich denke, der Mann ist der Lehrer und der Junge ist der Schüler.","sr":"Mislim da je muškarac učitelj, a dečak učenik."},{"cat":"extra","de":"Ich denke, die Frau ist die Kassiererin und der Mann ist der Kunde.","sr":"Mislim da je žena kasirka, a muškarac mušterija."},{"cat":"extra","de":"Ich denke, der Mann ist der Kassierer und die Frau ist die Kundin.","sr":"Mislim da je muškarac kasir, a žena mušterija."},{"cat":"extra","de":"Ich denke, die Frau ist die Floristin und der Mann ist der Kunde.","sr":"Mislim da je žena cvećarka, a muškarac mušterija."},{"cat":"extra","de":"Ich denke, der Mann ist der Trainer und die Frau ist die Sportlerin.","sr":"Mislim da je muškarac trener, a žena sportistkinja."},{"cat":"extra","de":"Ich denke, die Frau ist die Trainerin und der Mann ist der Sportler.","sr":"Mislim da je žena trenerka, a muškarac sportista."},{"cat":"extra","de":"Ich denke, die Frau ist die Rezeptionistin und der Mann ist der Hotelgast.","sr":"Mislim da je žena recepcionerka, a muškarac gost hotela."},{"cat":"extra","de":"Ich denke, der Mann ist der Busfahrer und die Frau ist ein Fahrgast.","sr":"Mislim da je muškarac vozač autobusa, a žena putnica."},{"cat":"extra","de":"Ich denke, die Frau ist die Polizistin und der Mann ist der Autofahrer.","sr":"Mislim da je žena policajka, a muškarac vozač automobila."},{"cat":"extra","de":"Ich denke, der Mann ist der Vater und das Kind ist sein Sohn.","sr":"Mislim da je muškarac otac, a dete njegov sin."},{"cat":"extra","de":"Ich denke, die Frau ist die Mutter und das Kind ist ihre Tochter.","sr":"Mislim da je žena majka, a dete njena ćerka."},{"cat":"extra","de":"Ich denke, die Personen sitzen.","sr":"Mislim da osobe sede."},{"cat":"extra","de":"Ich denke, die Personen stehen.","sr":"Mislim da osobe stoje."},{"cat":"extra","de":"Der Mann sitzt und die Frau steht.","sr":"Muškarac sedi, a žena stoji."},{"cat":"extra","de":"Die Frau sitzt und der Mann steht.","sr":"Žena sedi, a muškarac stoji."},{"cat":"extra","de":"Der Raum ist groß und schön.","sr":"Prostorija je velika i lepa."},{"cat":"extra","de":"Der Raum ist hell.","sr":"Prostorija je svetla."},{"cat":"extra","de":"Der Raum ist klein.","sr":"Prostorija je mala."},{"cat":"extra","de":"Im Hintergrund sehe ich viele Brote und Brötchen.","sr":"U pozadini vidim mnogo hlebova i zemički."},{"cat":"start","de":"Im Hintergrund sehe ich noch viele Personen.","sr":"U pozadini vidim još mnogo osoba.","personExample":true},{"cat":"extra","de":"Im Hintergrund sehe ich viele Stühle und Tische.","sr":"U pozadini vidim mnogo stolica i stolova."},{"cat":"start","personExample":true,"de":"Auf dem Bild sehe ich einen Mann.","sr":"Na slici vidim jednog muškarca."},{"cat":"start","personExample":true,"de":"Auf dem Bild sehe ich eine Frau.","sr":"Na slici vidim jednu ženu."},{"cat":"start","personExample":true,"de":"Auf dem Bild sehe ich ein Kind.","sr":"Na slici vidim jedno dete."},{"cat":"start","personExample":true,"de":"Auf dem Bild sehe ich einen Mann und zwei Frauen.","sr":"Na slici vidim jednog muškarca i dve žene."},{"cat":"start","personExample":true,"de":"Auf dem Bild sehe ich zwei Männer und eine Frau.","sr":"Na slici vidim dva muškarca i jednu ženu."},{"cat":"start","personExample":true,"de":"Auf dem Bild sehe ich einen Mann und zwei Kinder.","sr":"Na slici vidim jednog muškarca i dvoje dece."},{"cat":"start","personExample":true,"de":"Auf dem Bild sehe ich zwei Frauen und ein Kind.","sr":"Na slici vidim dve žene i jedno dete."},{"cat":"start","personExample":true,"de":"Auf dem Bild sehe ich zwei Männer und ein Kind.","sr":"Na slici vidim dva muškarca i jedno dete."},{"cat":"start","personExample":true,"de":"Auf dem Bild sehe ich drei Kinder.","sr":"Na slici vidim troje dece."},{"cat":"start","personExample":true,"de":"Auf dem Bild sehe ich vier Personen.","sr":"Na slici vidim četiri osobe."},{"cat":"start","personExample":true,"de":"Im Vordergrund sehe ich einen Mann.","sr":"U prvom planu vidim muškarca."},{"cat":"start","personExample":true,"de":"Im Hintergrund sehe ich eine Frau.","sr":"U pozadini vidim ženu."},{"cat":"start","personExample":true,"de":"Auf dem Bild sehe ich eine Frau und ein Kind.","sr":"Na ovoj slici vidim jednu ženu i jedno dete."},{"cat":"start","personExample":true,"de":"Auf dem Bild sehe ich eine Frau und zwei Kinder.","sr":"Na ovoj slici vidim jednu ženu i dvoje dece."},{"cat":"start","personExample":true,"de":"Auf dem Bild sehe ich einen Mann und ein Kind.","sr":"Na ovoj slici vidim jednog muškarca i jedno dete."},{"cat":"extra","de":"Das ist alles, was ich sehe.","sr":"To je sve što vidim."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über die Natur.","sr":"Osobe razgovaraju o nečemu, možda o prirodi."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über Brot und Brötchen.","sr":"Osobe razgovaraju o nečemu, možda o hlebu i zemičkama."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über das Auto.","sr":"Osobe razgovaraju o nečemu, možda o automobilu."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über die Wohnung.","sr":"Osobe razgovaraju o nečemu, možda o stanu."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über das Essen.","sr":"Osobe razgovaraju o nečemu, možda o hrani."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über die Kleidung.","sr":"Osobe razgovaraju o nečemu, možda o odeći."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über Medikamente.","sr":"Osobe razgovaraju o nečemu, možda o lekovima."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über Fleisch.","sr":"Osobe razgovaraju o nečemu, možda o mesu."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über Bücher.","sr":"Osobe razgovaraju o nečemu, možda o knjigama."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über die Schule.","sr":"Osobe razgovaraju o nečemu, možda o školi."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über Kaffee.","sr":"Osobe razgovaraju o nečemu, možda o kafi."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über die Blumen.","sr":"Osobe razgovaraju o nečemu, možda o cveću."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über Lebensmittel.","sr":"Osobe razgovaraju o nečemu, možda o namirnicama."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über die Bäume.","sr":"Osobe razgovaraju o nečemu, možda o drveću."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über das Zimmer.","sr":"Osobe razgovaraju o nečemu, možda o sobi."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über ein Buch.","sr":"Osobe razgovaraju o nečemu, možda o jednoj knjizi."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über Blumen.","sr":"Osobe razgovaraju o nečemu, možda o cveću."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über die Reise.","sr":"Osobe razgovaraju o nečemu, možda o putovanju."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über den Arzttermin.","sr":"Osobe razgovaraju o nečemu, možda o terminu kod lekara."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über die Möbel.","sr":"Osobe razgovaraju o nečemu, možda o nameštaju."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über Sport.","sr":"Osobe razgovaraju o nečemu, možda o sportu."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über einen Termin.","sr":"Osobe razgovaraju o nečemu, možda o jednom terminu."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über die Gesundheit.","sr":"Osobe razgovaraju o nečemu, možda o zdravlju."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über das Schwimmen.","sr":"Osobe razgovaraju o nečemu, možda o plivanju."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über das Wetter.","sr":"Osobe razgovaraju o nečemu, možda o vremenu."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über die Schuhe.","sr":"Osobe razgovaraju o nečemu, možda o cipelama."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über den Weg.","sr":"Osobe razgovaraju o nečemu, možda o putu."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über die nächste Haltestelle.","sr":"Osobe razgovaraju o nečemu, možda o sledećoj stanici."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über den Film.","sr":"Osobe razgovaraju o nečemu, možda o filmu."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über die Familie.","sr":"Osobe razgovaraju o nečemu, možda o porodici."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über das Wasser.","sr":"Osobe razgovaraju o nečemu, možda o vodi."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über den Zug.","sr":"Osobe razgovaraju o nečemu, možda o vozu."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über den Urlaub.","sr":"Osobe razgovaraju o nečemu, možda o odmoru."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über den Flug.","sr":"Osobe razgovaraju o nečemu, možda o letu."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über das Meer.","sr":"Osobe razgovaraju o nečemu, možda o moru."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über das Grillen.","sr":"Osobe razgovaraju o nečemu, možda o roštiljanju."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über Obst und Gemüse.","sr":"Osobe razgovaraju o nečemu, možda o voću i povrću."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über die Geschäfte.","sr":"Osobe razgovaraju o nečemu, možda o prodavnicama."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über die Reservierung.","sr":"Osobe razgovaraju o nečemu, možda o rezervaciji."},{"cat":"start","de":"Die Personen sprechen über etwas, vielleicht über den Preis.","sr":"Osobe razgovaraju o nečemu, možda o ceni."},{"cat":"start","de":"Die Personen machen einen Spaziergang.","sr":"Osobe šetaju."},{"cat":"start","de":"Die Personen sprechen vielleicht über das Wetter.","sr":"Osobe možda razgovaraju o vremenu."},{"cat":"extra","de":"Sie suchen einen schönen Platz.","sr":"Traže lepo mesto."},{"cat":"extra","de":"Die Verkäuferin zeigt frisches Brot.","sr":"Prodavačica pokazuje svež hleb."},{"cat":"extra","de":"Sie sprechen vielleicht über den Preis.","sr":"Možda razgovaraju o ceni."},{"cat":"extra","de":"Die Kundin kauft zwei Brötchen.","sr":"Mušterija kupuje dve zemičke."},{"cat":"extra","de":"Der Mechaniker repariert ein Auto.","sr":"Mehaničar popravlja automobil."},{"cat":"extra","de":"Sie sprechen vielleicht über das Problem.","sr":"Možda razgovaraju o problemu."},{"cat":"extra","de":"Der Kunde braucht einen neuen Reifen.","sr":"Mušteriji je potrebna nova guma."},{"cat":"extra","de":"Die Personen sitzen im Wohnzimmer.","sr":"Osobe sede u dnevnoj sobi."},{"cat":"extra","de":"Sie sprechen vielleicht über die Möbel.","sr":"Možda razgovaraju o nameštaju."},{"cat":"extra","de":"Die Frau sucht eine neue Wohnung.","sr":"Žena traži novi stan."},{"cat":"extra","de":"Die Frau schneidet Gemüse.","sr":"Žena seče povrće."},{"cat":"extra","de":"Sie sprechen vielleicht über das Mittagessen.","sr":"Možda razgovaraju o ručku."},{"cat":"extra","de":"Sie braucht Tomaten und Kartoffeln.","sr":"Potrebni su joj paradajz i krompir."},{"cat":"extra","de":"Die Frau probiert ein Kleid an.","sr":"Žena isprobava haljinu."},{"cat":"extra","de":"Sie sprechen vielleicht über die Größe.","sr":"Možda razgovaraju o veličini."},{"cat":"extra","de":"Die Kundin sucht eine blaue Jacke.","sr":"Mušterija traži plavu jaknu."},{"cat":"extra","de":"Die Apothekerin hilft dem Kunden.","sr":"Apotekarka pomaže mušteriji."},{"cat":"extra","de":"Sie sprechen vielleicht über Medikamente.","sr":"Možda razgovaraju o lekovima."},{"cat":"extra","de":"Der Kunde kauft Tabletten.","sr":"Mušterija kupuje tablete."},{"cat":"extra","de":"Der Metzger schneidet Fleisch.","sr":"Mesar seče meso."},{"cat":"extra","de":"Sie sprechen vielleicht über das Fleisch.","sr":"Možda razgovaraju o mesu."},{"cat":"extra","de":"Der Kunde kauft ein Kilo Fleisch.","sr":"Mušterija kupuje kilogram mesa."},{"cat":"extra","de":"Die Frau liest ein Buch.","sr":"Žena čita knjigu."},{"cat":"extra","de":"Sie sprechen vielleicht über Bücher.","sr":"Možda razgovaraju o knjigama."},{"cat":"extra","de":"Die Frau sucht ein Buch über Tiere.","sr":"Žena traži knjigu o životinjama."},{"cat":"extra","de":"Der Lehrer schreibt an die Tafel.","sr":"Nastavnik piše na tabli."},{"cat":"extra","de":"Sie sprechen vielleicht über die Hausaufgaben.","sr":"Možda razgovaraju o domaćim zadacima."},{"cat":"extra","de":"Der Schüler sucht sein Heft.","sr":"Učenik traži svoju svesku."},{"cat":"extra","de":"Der Kellner bringt zwei Tassen Kaffee.","sr":"Konobar donosi dve šoljice kafe."},{"cat":"extra","de":"Sie sprechen vielleicht über die Getränke.","sr":"Možda razgovaraju o piću."},{"cat":"extra","de":"Die Frau bestellt einen Tee.","sr":"Žena naručuje čaj."},{"cat":"extra","de":"Die Frau gießt die Blumen.","sr":"Žena zaliva cveće."},{"cat":"extra","de":"Sie sprechen vielleicht über den Garten.","sr":"Možda razgovaraju o bašti."},{"cat":"extra","de":"Der Mann sucht eine Schaufel.","sr":"Muškarac traži lopatu."},{"cat":"extra","de":"Die Frau legt Äpfel in den Einkaufswagen.","sr":"Žena stavlja jabuke u kolica."},{"cat":"extra","de":"Sie sprechen vielleicht über die Einkaufsliste.","sr":"Možda razgovaraju o spisku za kupovinu."},{"cat":"extra","de":"Sie kauft Milch und Brot.","sr":"Ona kupuje mleko i hleb."},{"cat":"extra","de":"Die Personen wandern im Wald.","sr":"Osobe pešače kroz šumu."},{"cat":"extra","de":"Sie sprechen vielleicht über die Bäume.","sr":"Možda razgovaraju o drveću."},{"cat":"extra","de":"Sie suchen den richtigen Weg.","sr":"Traže pravi put."},{"cat":"extra","de":"Der Gast kommt ins Hotel.","sr":"Gost dolazi u hotel."},{"cat":"extra","de":"Sie sprechen vielleicht über das Zimmer.","sr":"Možda razgovaraju o sobi."},{"cat":"extra","de":"Der Gast fragt nach einem freien Zimmer.","sr":"Gost pita za slobodnu sobu."},{"cat":"extra","de":"Der Verkäufer zeigt ein Buch.","sr":"Prodavac pokazuje knjigu."},{"cat":"extra","de":"Sie sprechen vielleicht über den Autor.","sr":"Možda razgovaraju o autoru."},{"cat":"extra","de":"Die Frau sucht ein Wörterbuch.","sr":"Žena traži rečnik."},{"cat":"extra","de":"Die Floristin macht einen Blumenstrauß.","sr":"Cvećarka pravi buket."},{"cat":"extra","de":"Sie sprechen vielleicht über die Blumen.","sr":"Možda razgovaraju o cveću."},{"cat":"extra","de":"Die Kundin kauft rote Rosen.","sr":"Mušterija kupuje crvene ruže."},{"cat":"extra","de":"Die Personen sitzen im Zug.","sr":"Osobe sede u vozu."},{"cat":"extra","de":"Sie sprechen vielleicht über die Reise.","sr":"Možda razgovaraju o putovanju."},{"cat":"extra","de":"Der Mann sucht seinen Sitzplatz.","sr":"Muškarac traži svoje sedište."},{"cat":"extra","de":"Die Personen warten auf den Arzt.","sr":"Osobe čekaju lekara."},{"cat":"extra","de":"Sie sprechen vielleicht über den Arzttermin.","sr":"Možda razgovaraju o terminu kod lekara."},{"cat":"extra","de":"Die Frau sucht ihre Karte.","sr":"Žena traži svoju karticu."},{"cat":"extra","de":"Die Frau macht das Bett.","sr":"Žena namešta krevet."},{"cat":"extra","de":"Im Zimmer sprechen sie vielleicht über die Möbel.","sr":"Možda razgovaraju o nameštaju."},{"cat":"extra","de":"Der Mann sucht seine Schlüssel.","sr":"Muškarac traži svoje ključeve."},{"cat":"extra","de":"Die Frau läuft auf dem Laufband.","sr":"Žena trči na traci."},{"cat":"extra","de":"Sie sprechen vielleicht über das Training.","sr":"Možda razgovaraju o treningu."},{"cat":"extra","de":"Der Mann sucht eine Hantel.","sr":"Muškarac traži teg."},{"cat":"extra","de":"Die Personen arbeiten am Computer.","sr":"Osobe rade za računarom."},{"cat":"extra","de":"Sie sprechen vielleicht über einen Termin.","sr":"Možda razgovaraju o jednom terminu."},{"cat":"extra","de":"Die Frau sucht einen Stift.","sr":"Žena traži olovku."},{"cat":"extra","de":"Der Arzt untersucht einen Patienten.","sr":"Lekar pregleda pacijenta."},{"cat":"extra","de":"Sie sprechen vielleicht über die Gesundheit.","sr":"Možda razgovaraju o zdravlju."},{"cat":"extra","de":"Der Patient sucht sein Zimmer.","sr":"Pacijent traži svoju sobu."},{"cat":"extra","de":"Die Kinder schwimmen im Wasser.","sr":"Deca plivaju u vodi."},{"cat":"extra","de":"Sie sprechen vielleicht über das Schwimmen.","sr":"Možda razgovaraju o plivanju."},{"cat":"extra","de":"Die Frau sucht ein Handtuch.","sr":"Žena traži peškir."},{"cat":"extra","de":"Die Personen sitzen auf einer Bank.","sr":"Osobe sede na klupi."},{"cat":"extra","de":"Im Park sprechen sie vielleicht über das Wetter.","sr":"Možda razgovaraju o vremenu."},{"cat":"extra","de":"Der Mann sucht einen freien Platz.","sr":"Muškarac traži slobodno mesto."},{"cat":"extra","de":"Die Frau probiert Schuhe an.","sr":"Žena isprobava cipele."},{"cat":"extra","de":"Sie sprechen vielleicht über die Schuhgröße.","sr":"Možda razgovaraju o broju obuće."},{"cat":"extra","de":"Die Frau kauft schwarze Schuhe.","sr":"Žena kupuje crne cipele."},{"cat":"extra","de":"Der Mann fährt das Auto.","sr":"Muškarac vozi automobil."},{"cat":"extra","de":"Sie sprechen vielleicht über den Weg.","sr":"Možda razgovaraju o putu."},{"cat":"extra","de":"Die Frau sucht die Adresse auf dem Handy.","sr":"Žena traži adresu na telefonu."},{"cat":"extra","de":"Die Personen steigen in den Bus ein.","sr":"Osobe ulaze u autobus."},{"cat":"extra","de":"Sie sprechen vielleicht über die nächste Haltestelle.","sr":"Možda razgovaraju o sledećoj stanici."},{"cat":"extra","de":"Die Frau sucht ihre Fahrkarte.","sr":"Žena traži svoju kartu."},{"cat":"extra","de":"Die Personen sehen einen Film.","sr":"Osobe gledaju film."},{"cat":"extra","de":"Sie sprechen vielleicht über den Film.","sr":"Možda razgovaraju o filmu."},{"cat":"extra","de":"Der Mann kauft zwei Kinokarten.","sr":"Muškarac kupuje dve bioskopske karte."},{"cat":"extra","de":"Die Frau räumt die Küche auf.","sr":"Žena sređuje kuhinju."},{"cat":"extra","de":"Sie sprechen vielleicht über die Hausarbeit.","sr":"Možda razgovaraju o kućnim poslovima."},{"cat":"extra","de":"Der Mann sucht den Staubsauger.","sr":"Muškarac traži usisivač."},{"cat":"extra","de":"Die Personen sitzen am Fluss.","sr":"Osobe sede pored reke."},{"cat":"extra","de":"Sie sprechen vielleicht über die Natur.","sr":"Možda razgovaraju o prirodi."},{"cat":"extra","de":"Sie suchen einen ruhigen Platz.","sr":"Traže mirno mesto."},{"cat":"extra","de":"Die Frau steht am Gleis.","sr":"Žena stoji na peronu."},{"cat":"extra","de":"Sie sprechen vielleicht über den Zug.","sr":"Možda razgovaraju o vozu."},{"cat":"extra","de":"Der Mann kauft eine Fahrkarte.","sr":"Muškarac kupuje kartu."},{"cat":"extra","de":"Die Kinder spielen im Sand.","sr":"Deca se igraju u pesku."},{"cat":"extra","de":"Sie sprechen vielleicht über das Meer.","sr":"Možda razgovaraju o moru."},{"cat":"extra","de":"Die Mutter sucht die Sonnencreme.","sr":"Majka traži kremu za sunčanje."},{"cat":"extra","de":"Die Personen warten am Flughafen.","sr":"Osobe čekaju na aerodromu."},{"cat":"extra","de":"Sie sprechen vielleicht über den Flug.","sr":"Možda razgovaraju o letu."},{"cat":"extra","de":"Der Mann sucht seinen Koffer.","sr":"Muškarac traži svoj kofer."},{"cat":"extra","de":"Die Personen schwimmen im Meer.","sr":"Osobe plivaju u moru."},{"cat":"extra","de":"Sie sprechen vielleicht über den Urlaub.","sr":"Možda razgovaraju o odmoru."},{"cat":"extra","de":"Die Frau sucht ihre Sonnenbrille.","sr":"Žena traži svoje sunčane naočare."},{"cat":"extra","de":"Die Personen grillen am See.","sr":"Osobe roštiljaju pored jezera."},{"cat":"extra","de":"Sie sprechen vielleicht über das Essen.","sr":"Možda razgovaraju o hrani."},{"cat":"extra","de":"Sie brauchen mehr Brot.","sr":"Potrebno im je još hleba."},{"cat":"extra","de":"Die Frau schaut sich das Obst an.","sr":"Žena razgleda voće."},{"cat":"extra","de":"Sie sprechen vielleicht über die Preise.","sr":"Možda razgovaraju o cenama."},{"cat":"extra","de":"Sie kauft Äpfel und Tomaten.","sr":"Ona kupuje jabuke i paradajz."},{"cat":"extra","de":"Die Personen schauen in ein Schaufenster.","sr":"Osobe gledaju u izlog."},{"cat":"extra","de":"Sie sprechen vielleicht über die Kleidung.","sr":"Možda razgovaraju o odeći."},{"cat":"extra","de":"Die Frau sucht ein Geschäft.","sr":"Žena traži prodavnicu."},{"cat":"extra","de":"Die Frau zeigt ihren Pass.","sr":"Žena pokazuje svoj pasoš."},{"cat":"extra","de":"Sie sprechen vielleicht über die Reservierung.","sr":"Možda razgovaraju o rezervaciji."},{"cat":"extra","de":"Der Gast fragt nach seinem Zimmerschlüssel.","sr":"Gost pita za ključ svoje sobe."},{"cat":"extra","de":"Die Kassiererin kassiert.","sr":"Kasirka naplaćuje."},{"cat":"extra","de":"An der Kasse sprechen sie vielleicht über den Preis.","sr":"Možda razgovaraju o ceni."},{"cat":"extra","de":"Der Kunde bezahlt mit Karte.","sr":"Mušterija plaća karticom."},{"cat":"start","personExample":true,"de":"Auf dem Bild sehe ich drei Personen: zwei Erwachsene und ein Kind.","sr":"Na ovoj slici vidim tri osobe: dve odrasle osobe i dete."},{"cat":"start","personExample":true,"de":"Auf dem Bild sehe ich vier Personen: zwei Erwachsene und zwei Kinder.","sr":"Na ovoj slici vidim četiri osobe: dve odrasle osobe i dvoje dece."},{"cat":"start","personExample":true,"de":"Links sehe ich einen Mann.","sr":"Levo vidim muškarca."},{"cat":"start","personExample":true,"de":"Rechts sehe ich eine Frau.","sr":"Desno vidim ženu."},{"cat":"start","personExample":true,"de":"In der Mitte sehe ich ein Kind.","sr":"U sredini vidim dete."},{"cat":"start","personExample":true,"de":"Die Personen stehen nebeneinander.","sr":"Osobe stoje jedna pored druge."},{"cat":"start","personExample":true,"de":"Die Personen sitzen nebeneinander.","sr":"Osobe sede jedna pored druge."},{"cat":"start","personExample":true,"de":"Die Personen stehen sich gegenüber.","sr":"Osobe stoje jedna naspram druge."},{"cat":"start","personExample":true,"de":"Die Personen sitzen sich gegenüber.","sr":"Osobe sede jedna naspram druge."},{"cat":"start","personExample":true,"de":"Eine Person steht und die andere sitzt.","sr":"Jedna osoba stoji, a druga sedi."},{"cat":"start","personExample":true,"de":"Ich sehe eine Familie.","sr":"Vidim porodicu."},{"cat":"start","personExample":true,"de":"Ich sehe eine Mutter mit ihrem Kind.","sr":"Vidim majku sa njenim detetom."},{"cat":"start","personExample":true,"de":"Ich sehe einen Vater mit seinem Kind.","sr":"Vidim oca sa njegovim detetom."},{"cat":"start","personExample":true,"de":"Die Personen sind zusammen.","sr":"Osobe su zajedno."},{"cat":"start","personExample":true,"de":"Ich sehe zwei Erwachsene.","sr":"Vidim dve odrasle osobe."},{"cat":"start","personExample":true,"de":"Im Vordergrund sehe ich eine Frau.","sr":"U prvom planu vidim ženu."},{"cat":"start","personExample":true,"de":"Im Hintergrund sehe ich einen Mann.","sr":"U pozadini vidim muškarca."},{"cat":"start","personExample":true,"de":"Im Hintergrund sehe ich viele Personen.","sr":"U pozadini vidim mnogo osoba."},{"cat":"start","de":"Die Personen sprechen vielleicht über Brot.","sr":"Osobe možda razgovaraju o hlebu."},{"cat":"start","de":"Die Personen sprechen vielleicht über das Auto.","sr":"Osobe možda razgovaraju o automobilu."},{"cat":"start","de":"Die Personen sprechen vielleicht über die Blumen.","sr":"Osobe možda razgovaraju o cveću."},{"cat":"start","de":"Die Personen sprechen vielleicht über die Hotelreservierung.","sr":"Osobe možda razgovaraju o rezervaciji hotela."},{"cat":"start","de":"Die Personen sprechen vielleicht über den Hund.","sr":"Osobe možda razgovaraju o psu."},{"cat":"start","de":"Die Personen sprechen vielleicht über einen Geburtstag.","sr":"Osobe možda razgovaraju o rođendanu."},{"cat":"start","de":"Die Personen sprechen vielleicht über ein Geschenk.","sr":"Osobe možda razgovaraju o poklonu."},{"cat":"start","de":"Die Personen sprechen vielleicht über Musik.","sr":"Osobe možda razgovaraju o muzici."},{"cat":"start","de":"Die Personen sprechen vielleicht über ein Konzert.","sr":"Osobe možda razgovaraju o koncertu."},{"cat":"start","de":"Die Personen sprechen vielleicht über das Handy.","sr":"Osobe možda razgovaraju o mobilnom telefonu."},{"cat":"start","de":"Die Personen sprechen vielleicht über den Computer.","sr":"Osobe možda razgovaraju o računaru."},{"cat":"start","de":"Die Personen sprechen vielleicht über ein Fahrrad.","sr":"Osobe možda razgovaraju o biciklu."},{"cat":"start","de":"Die Personen sprechen vielleicht über den Garten.","sr":"Osobe možda razgovaraju o bašti."},{"cat":"start","de":"Die Personen sprechen vielleicht über eine Hochzeit.","sr":"Osobe možda razgovaraju o venčanju."},{"cat":"start","de":"Die Personen sprechen vielleicht über Hausaufgaben.","sr":"Osobe možda razgovaraju o domaćim zadacima."},{"cat":"start","de":"Die Personen sprechen vielleicht über eine Prüfung.","sr":"Osobe možda razgovaraju o ispitu."},{"cat":"start","de":"Die Personen sprechen vielleicht über einen Deutschkurs.","sr":"Osobe možda razgovaraju o kursu nemačkog jezika."},{"cat":"start","de":"Die Personen sprechen vielleicht über ein Paket.","sr":"Osobe možda razgovaraju o paketu."},{"cat":"start","de":"Die Personen sprechen vielleicht über eine Rechnung.","sr":"Osobe možda razgovaraju o računu."},{"cat":"start","de":"Die Personen sprechen vielleicht über einen Schlüssel.","sr":"Osobe možda razgovaraju o ključu."},{"cat":"start","de":"Die Personen sprechen vielleicht über das Wochenende.","sr":"Osobe možda razgovaraju o vikendu."},{"cat":"start","de":"Die Personen sprechen vielleicht über eine Einladung.","sr":"Osobe možda razgovaraju o pozivnici."},{"cat":"start","de":"Die Personen sprechen vielleicht über eine Katze.","sr":"Osobe možda razgovaraju o mački."},{"cat":"start","de":"Die Personen sprechen vielleicht über ein Foto.","sr":"Osobe možda razgovaraju o fotografiji."},{"cat":"start","de":"Die Personen sprechen vielleicht über die Öffnungszeiten.","sr":"Osobe možda razgovaraju o radnom vremenu."}];
const SAMPLE_HEADS=["1. Was sehen Sie auf dem Bild?","2. Worüber sprechen die Personen?","3. Wo sind diese Personen?","4. Wie sehen die Personen aus?","5. Was tragen die Personen?","6. Was sehen Sie noch?"];
const SAMPLE_TRANSLATIONS=["Šta vidiš na slici?","O čemu razgovaraju osobe?","Gde su ove osobe?","Kako izgledaju ove osobe?","Šta nose ove osobe?","Šta još vidite?"];
const STEP_CATS=["start","start","places","mann","clothing","extra"];
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
function source(){const ids=BANK.map((_,i)=>i).filter(i=>BANK[i].cat===category);if(category==="extra"){const closing=ids.filter(i=>BANK[i].de==="Das war meine Bildbeschreibung.");return ids.filter(i=>BANK[i].de!=="Das war meine Bildbeschreibung.").concat(closing)}if(category==="start"&&step===0){const moveToEnd=["Im Vordergrund sehe ich einen Mann.","Im Hintergrund sehe ich eine Frau.","Im Hintergrund sehe ich viele Personen."];const original=ids.slice(0,6).concat(ids.filter(i=>BANK[i].personExample&&!moveToEnd.includes(BANK[i].de)));const last=moveToEnd.map(de=>ids.find(i=>BANK[i].de===de)).filter(i=>i!==undefined);return original.concat(last)}if(category==="start"&&step===1)return ids.slice(6).filter(i=>!BANK[i].personExample);return ids}

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
 const n=chosen.length;chosenIndex=Math.min(Math.max(0,chosenIndex),Math.max(0,n-1));
 $("#total").textContent=n+" rečenica";if($("#wizardSelected"))$("#wizardSelected").textContent=n+" izabrano";
 if(!n){$("#chosenPage").textContent="Opis strana 1";$("#chosenPrev").disabled=true;$("#chosenNext").disabled=true;$("#selectedArea").innerHTML='<p class="empty">Dodaj rečenice pomoću ❯. Ovde će se videti više rečenica tvog opisa istovremeno.</p>';return}
 const per=chosenPageSize(),first=Math.floor(chosenIndex/per)*per,last=Math.min(first+per,n),visible=chosen.slice(first,last);
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
function addOrRemove(i){const pos=chosen.indexOf(i);if(pos<0){chosen.push(i);chosenIndex=chosen.length-1;listen(i)}else{stop();chosen.splice(pos,1);chosenIndex=Math.min(pos,chosen.length-1)}renderChosen();renderList();renderAge();renderHair();renderClothing();persistDraft()}
function showRoles(){
 const show=step===3||step===4,appearance=step===3&&appearanceMode!=="description";
 $("#rolebar").hidden=!show;
 const panel=$("#phrases").closest(".panel");
 panel.classList.toggle("appearance-only",appearance);
 panel.classList.toggle("clothing-only",step===4);
 $("#selectorTitle").textContent=step===4?"Izaberi odeću i boju":step===3?(appearanceMode==="age"?"Izaberi godine":appearanceMode==="hair"?"Izaberi kosu":"Opis osobe"):step===0?"Opis osoba · izaberi rečenice":step===1?"Razgovor · izaberi rečenice":"Izaberi rečenice";
 document.querySelectorAll("[data-role]").forEach(b=>b.classList.toggle("active",b.dataset.role===activeRole));
 renderModes();renderAge();renderHair();renderClothing();
}
function chooseStep(n){step=n;if(n===3){category=activeRole}else category=STEP_CATS[n];page=0;showRoles();renderSample();renderList()}
function playAll(){
 stop();
 const my=runId,arr=[...chosen];
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
const WIZARD_NAMES=["Opis osoba","Razgovor osoba","Mesto osoba na slici","Izgled osoba na slici","Odeća osoba na slici","Kosa osoba na slici","Godine osoba na slici","Detalji na slici","Moj opis cele slike"];

const PAGE_LINKS=["1-opis-osoba.html","2-razgovor-osoba.html","3-mesto-osoba.html","4-izgled-osoba.html","5-odeca-osoba.html","6-kosa-osoba.html","7-godine-osoba.html","8-detalji.html","9-moj-opis.html"];
const PAGE_INDEX=Math.max(0,Math.min(8,Number(document.body.dataset.stepPage)||0));
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

const PAGE_TO_ORIGINAL_STEP=[0,1,2,3,4,3,3,5];
const PAGE_MODES=["description","description","description","description","description","hair","age","description"];
const PAGE_QUESTIONS=["Was sehen Sie auf dem Bild?","Worüber sprechen die Personen?","Wo sind die Personen auf dem Bild?","Wie sehen die Personen aus?","Was tragen die Personen?","Welche Haare haben die Personen?","Wie alt sind die Personen?","Was sehen Sie noch?"];
const PAGE_TRANSLATIONS=["Šta vidiš na slici?","O čemu razgovaraju osobe?","Gde se nalaze osobe na slici?","Kako izgledaju osobe na slici?","Šta nose osobe na slici?","Kakvu kosu imaju osobe?","Koliko godina imaju osobe?","Šta još vidiš na slici?"];
let wizardPosition=0;
function showWizard(position){
 wizardPosition=Math.max(0,Math.min(8,position));
 const summary=wizardPosition===8;
 stop();
 document.body.classList.toggle("summary-mode",summary);
 if(!summary){
  appearanceMode=PAGE_MODES[wizardPosition];
  chooseStep(PAGE_TO_ORIGINAL_STEP[wizardPosition]);
  $("#sampleNumber").textContent=(wizardPosition+1)+".";
  $("#samplehead").textContent=PAGE_QUESTIONS[wizardPosition];
  $("#samplesr").textContent=PAGE_TRANSLATIONS[wizardPosition];
 }
 $("#wizardTitle").textContent=(wizardPosition+1)+". "+WIZARD_NAMES[wizardPosition];
 $("#wizardCounter").textContent=(wizardPosition+1)+" / 9";
 $("#wizardFooterCount").textContent=summary?"Završni opis":"Korak "+(wizardPosition+1)+" od 9";
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
$("#wizardForward").addEventListener("click",()=>{if(PAGE_INDEX===8){persistDraft();window.location.assign("index.html")}else goToPage(PAGE_INDEX+1)});
window.addEventListener("pagehide",persistDraft);
restoreDraft();
showWizard(PAGE_INDEX);

