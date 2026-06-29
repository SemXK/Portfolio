<template>

  <div class="table-wrapper">

    <table class="skills-table quote-table">
      <thead>
        <tr>
          <th>Parametro di progetto</th>
          <th>Descrizione</th>
          <th>Impatto sul costo</th>
          <th>Note</th>
        </tr>
      </thead>

      <tbody>

        <tr>
          <td>Tipologia progetto</td>
          <td>Frontend / Full Stack / DevOps / Manutenzione</td>
          <td>Base pricing</td>
          <td>Definisce la struttura iniziale del preventivo</td>
        </tr>

        <tr>
          <td>Durata sviluppo</td>
          <td>Numero di settimane o mesi richiesti</td>
          <td>Alto</td>
          <td>Influisce su complessità e pianificazione risorse</td>
        </tr>

        <tr>
          <td>Numero schermate</td>
          <td>UI pages / componenti frontend richiesti</td>
          <td>Alto</td>
          <td>Maggiore UI = più tempo di sviluppo</td>
        </tr>

        <tr>
          <td>Complessità logica</td>
          <td>Logiche business, workflow, automazioni</td>
          <td>Molto alto</td>
          <td>Include regole avanzate e processi personalizzati</td>
        </tr>

        <tr>
          <td>Integrazioni esterne</td>
          <td>API, servizi terzi, sistemi legacy</td>
          <td>Medio / Alto</td>
          <td>Dipende dal numero e qualità delle API</td>
        </tr>

        <tr>
          <td>Architettura richiesta</td>
          <td>Monolite / Microservizi / Event-driven</td>
          <td>Alto</td>
          <td>Influisce su scalabilità e tempi di setup</td>
        </tr>

        <tr>
          <td>Hosting & infrastruttura</td>
          <td>Cloud (AWS) o on-premise</td>
          <td>Medio / Alto</td>
          <td>Include configurazione ambienti e deploy</td>
        </tr>

        <tr>
          <td>CI/CD & automazione</td>
          <td>Pipeline build, test e deploy automatico</td>
          <td>Medio</td>
          <td>Riduce errori e velocizza release</td>
        </tr>

        <tr>
          <td>Manutenzione inclusa</td>
          <td>Supporto post-lancio e aggiornamenti</td>
          <td>Ricorrente</td>
          <td>Possibile modello mensile o SLA</td>
        </tr>

        <tr>
          <td>Urgenza delivery</td>
          <td>Timeline accelerata rispetto allo standard</td>
          <td>Molto alto</td>
          <td>Richiede priorità sul workload</td>
        </tr>

      </tbody>
    </table>
  </div>

</template>