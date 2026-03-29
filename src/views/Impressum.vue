<template>
  <div id="impressum" class="imp">
    <h1>Impressum</h1>

    <div class="content">
      <p>
        <strong>Max Mustermann</strong><br>
        Elektro Service<br>
        Musterstraße 123, 84028 Landshut<br>
        Deutschland
      </p>

      <p>
        <strong>Kontakt:</strong><br>
        Telefon: +49 160 7913020<br>
        E-Mail: info@email.de
      </p>

      <!-- ΑΥΤΟ ΕΙΝΑΙ ΥΠΟΧΡΕΩΤΙΚΟ ΓΙΑ ΗΛΕΚΤΡΟΛΟΓΟΥΣ ΣΤΗ ΓΕΡΜΑΝΙΑ -->
      <p>
        <strong>Zuständige Kammer:</strong><br>
        Handwerkskammer Niederbayern-Oberpfalz<br>
        Nikolastraße 10, 84034 Landshut
      </p>

      <p>
        <strong>Berufsbezeichnung:</strong><br>
        Elektrotechniker (verliehen in der Bundesrepublik Deutschland)
      </p>

      <p>
        <strong>Rechtsform:</strong><br>
        Einzelunternehmen
      </p>

      <p>
        <strong>Streitbeilegung:</strong><br>
        Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: 
        <a href="https://europa.eu" target="_blank" rel="noopener noreferrer">https://europa.eu</a>.
        <br>Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
      </p>
    </div>
  </div>
</template>

<style scoped>
.imp {
  padding: 80px 20px;
  max-width: 800px;
  margin: 0 auto;
  line-height: 1.6;
  color: #334155;
  /* Προσθέτουμε min-height για να μην φαίνεται άδεια η σελίδα αν είναι μόνο το Impressum */
  min-height: 80vh; 
}

h1 {
  color: #0f172a;
  border-bottom: 2px solid orange;
  display: inline-block;
  margin-bottom: 30px;
}

.content p {
  margin-bottom: 20px;
}

a {
  color: orange;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}
</style>
