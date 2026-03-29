<template>
  <!-- ΤΗΛΕΦΩΝΟ -->
  <a class="float call" href="tel:+491607913020">📞</a>

  <!-- WHATSAPP ΜΕ ΠΡΟΣΥΜΠΛΗΡΩΜΕΝΟ ΜΗΝΥΜΑ -->
<a class="float wa" 
   href="https://wa.me/+491607913020?text=Hallo%20Elektro%20Service%20Landshut,%0Aich%20habe%20eine%20Anfrage.%20Hier%20sind%20meine%20Daten:%0AName:%0ATelefon:%0AAdresse:%0ABitte%20um%20Rückruf."
   target="_blank">
  💬
</a>

  <!-- EMAIL (Προσθήκη κάτω από το WhatsApp) -->
  <a class="float email" href="mailto:info@email.de">✉️</a>
</template>

<style scoped>
.float {
  position: fixed;
  right: 18px;
  width: 58px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: white;
  font-size: 24px;
  text-decoration: none;
  box-shadow: 0 10px 25px rgba(0,0,0,0.25);
  transition: 0.3s;
  z-index: 999;
}

.float:hover {
  transform: scale(1.1);
}

/* ΘΕΣΕΙΣ DESKTOP */

.call {
  bottom: 170px; /* Πάνω */
  background: #f59e0b;
}

.wa {
  bottom: 95px; /* Μέση */
  background: #16a34a;
}

.email {
  bottom: 20px; /* Κάτω */
  background: #3b82f6;
}

/* ΘΕΣΕΙΣ ΚΙΝΗΤΟ (Για να μη σε εμποδίζει η mobile-bar) */

@media(max-width:768px) {
  .float {
    width: 60px;
    height: 60px;
    font-size: 26px;
  }

  .call {
    bottom: 235px; /* Πιο ψηλά */
  }

  .wa {
    bottom: 160px; /* Στη μέση */
  }

  .email {
    bottom: 85px; /* Πάνω από τη μπάρα κλήσης */
  }
}
</style>
