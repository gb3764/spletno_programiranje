# Spletna trgovina Music Market

Music Market je spletna aplikacija, kjer lahko uporabniki brskajo in kupujejo 
glasbene albume. Namenjena je za vse ljubitelje glasbe, ki še vedno radi kupujejo
fizične kopije albumov. Uporabniki lahko iščejo po kategorijah s pomočjo menija, ali pa 
po imenu izvajalca / albuma s pomočjo iskalnika. Željene albume uporabniki dodajo 
v košarico, kjer sledijo navodilom za nakup. Za uporabo aplikacije ni potrebna 
registracija, prinašala pa bo nekatere ugodnosti kot npr. popust.

Aplikacija je podprta na vseh napravah, ki so zmožne brskanja po spletu. Za manjše 
zaslone (mobiteli) se vsebina razporedi navpično, za večje resolucije se vsebina 
skalira, v primeru resolucije večje od 1080 pikslov pa vsebina ostane enako velika.

Spletišče je organizirano hierarhično. Na vrhu je landing_page.html - vstopna stran 
preko katere lahko navigiramo na vse ostale strani. Preko te strani se izvaja ena izmed 
glavnih funkcij aplikacije - brskanje po izdelkih. Druga glavna funkcija, nakup izdelkov, 
se začne na strani kosarica_page1.html in nadaljuje do kosarica_page4.html. Strani košarice 
so izjemoma organizirane linearno, saj so vsi podatki pridobljeni na teh straneh ključni 
za izvedbo naročila.

Spletna aplikacija je bila testirana na treh različnih brskalnikih: Chrome, Firefox in
Internet Explorer (11). Poleg malce drugačnega izgleda nekaterih elementov kot npr.
elementi tipa input, deluje aplikacija enako na vseh treh, z izjemo Internet Explorerja, 
ki nogo strani ne izriše na dnu strani, temveč na dnu vsebine.

Za 2 'posebni zmogljivosti' bi rad izpostavil izrisovanje izdelkov na vstopni strani 
(ki se lepo kopičijo ter prilagajajo širini zaslona) ter sistem košarice (klik na gumb 
'košarica' nas vodi skozi postopek naročila, po oddanem naročilu nas vrne na vstopno stran.

Samo brskanje po izdelkih še ni implementirano, saj bodo iskalni rezultati odvisni od 
iskanih lastnosti posameznega izdelka, ki pa bodo (po vsej verjetnosti) zapisi v neki 
podatkovni bazi. Glede na to, da se bomo s tem ukvarjali šele v 2. fazi, sem implementacijo 
iskanja preložil v naslednjo fazo. Zaradi podobnih razlogov niso implementirani 
registracija, prijava ter izvedba naročila, vendar to tako ali tako spada med poslovno 
logiko, sepravi v 2. fazo.