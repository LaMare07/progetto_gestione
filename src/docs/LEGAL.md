# Note legali e copyright

## Punti critici

1. **Locandine, backdrop, foto cast**
   - I diritti appartengono agli studi/distributori.
   - L'uso editoriale a corredo della scheda della serie e generalmente tollerato (fair use US, "diritto di cronaca/critica" UE) ma NON c'e una garanzia.
   - **Mitigazioni:**
     - Usare le immagini fornite da TMDB rispettando i loro [ToS](https://www.themoviedb.org/documentation/api/terms-of-use)
     - Includere attribuzione "Powered by TMDB" come richiesto
     - Salvare URL e cache solo per performance, non rivendere
     - Predisporre un takedown form per richieste di rimozione

2. **Catalogo Netflix**
   - Netflix non offre API pubblica.
   - Le classifiche pubbliche su [Tudum](https://www.netflix.com/tudum/top10) sono accessibili ma scrapare in modo aggressivo viola i ToS.
   - **Mitigazioni:**
     - Frequenza di scraping bassa (1x/settimana, in linea con l'aggiornamento ufficiale)
     - User-Agent identificativo, rispetto di robots.txt
     - Cache lato server, niente proxy del contenuto
     - Preferire integrazione con TMDB (legale e con API)

3. **Contenuti generati dagli utenti (UGC)**
   - Recensioni e commenti possono contenere diffamazione, spoiler, contenuti illeciti.
   - **Mitigazioni:**
     - Termini di servizio chiari (cosa e vietato)
     - Sistema di segnalazione + moderazione
     - Flag spoiler obbligatorio per contenuti di episodi recenti
     - DMCA / notice-and-takedown procedure

4. **GDPR**
   - Sito europeo con utenti europei: serve compliance piena.
   - Cookie banner conforme (TCF v2 se ads), informativa privacy dettagliata
   - Diritto di accesso, rettifica, cancellazione (export account)
   - DPO se trattamento sistematico su larga scala

5. **OAuth**
   - Termini di Google/Apple sull'uso dell'account: non chiedere scope inutili.
   - Memorizzare solo l'identificativo provider, non token long-lived se evitabili.

## Checklist pre-lancio
- [ ] Termini di servizio
- [ ] Privacy policy con base giuridica per ogni trattamento
- [ ] Cookie banner conforme
- [ ] Pagina contatti per takedown / DMCA
- [ ] Attribuzione TMDB visibile
- [ ] Disclaimer "Series Hub non e affiliato a Netflix/TMDB"
- [ ] Procedure di segnalazione UGC
- [ ] Backup ed export dati utente

> Questo documento e una checklist tecnica, non un parere legale. Prima del go-live, far revisionare tutto a un avvocato esperto in diritto digitale.
