<template>
  <section id="kontakt" class="contact-section">
    <div class="container">
      <h2>Kontakt</h2>
      <p class="subtitle">Senden Sie uns eine Anfrage direkt per WhatsApp</p>

      <form class="contact-form" @submit.prevent="sendWhatsapp">
        <div class="form-grid">
          <input v-model="name" placeholder="Name *" required />
          <input v-model="phone" placeholder="Telefon *" required />
          <input v-model="ort" placeholder="Ort" />
          <input v-model="adresse" placeholder="Adresse" />
        </div>
        <textarea v-model="msg" placeholder="Wie können wir Ihnen helfen? (z.B. Reparatur, Installation...)"></textarea>

        <button type="submit" :disabled="loading" class="submit-btn">
          <span v-if="!loading">💬 Anfrage via WhatsApp senden</span>
          <span v-else>Wird geladen...</span>
        </button>
      </form>

      <!-- SUCCESS MODAL -->
      <div v-if="success" class="success-modal" @click.self="success=false">
        <div class="success-box">
          <div class="icon">✅</div>
          <h3>Anfrage bereit!</h3>
          <p>Bitte klicken Sie im nächsten Schritt bei WhatsApp auf <strong>"Senden"</strong>.</p>
          <button @click="success=false">Verstanden</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from "vue"

const success = ref(false)
const name = ref("")
const phone = ref("")
const ort = ref("")
const adresse = ref("")
const msg = ref("")
const loading = ref(false)

function sendWhatsapp() {
  if (!name.value || !phone.value) {
    alert("Bitte Name und Telefon eingeben")
    return
  }

  loading.value = true

  // Ωραίο φορμάρισμα για το WhatsApp μήνυμα
  const text = encodeURIComponent(
    `🚀 *Neue Anfrage - Elektro Service*\n\n` +
    `👤 *Name:* ${name.value}\n` +
    `📞 *Tel:* ${phone.value}\n` +
    `📍 *Ort:* ${ort.value || '-'}\n` +
    `🏠 *Adresse:* ${adresse.value || '-'}\n\n` +
    `📝 *Nachricht:* ${msg.value || 'Keine Nachricht'}`
  )

  window.open(`https://wa.me/+491607913020?text=${text}`, "_blank")

  setTimeout(() => {
    name.value = ""
    phone.value = ""
    adresse.value = ""
    ort.value = ""
    msg.value = ""
    loading.value = false
    success.value = true
  }, 800)
}
</script>

<style scoped>


.contact-section {
  padding: 100px 20px;
  background: #f8fafc;
  text-align: center;
}

.container {
  max-width: 800px;
  margin: 0 auto;
}

h2 {
  font-size: 44px;           /* Ίδιο μέγεθος με τα άλλα */
  font-weight: 900;           /* Μάξιμουμ πάχος */
  color: #0f172a;
  margin-bottom: 20px;       /* Λίγο κενό πριν τη γραμμή */
  text-align: center;
  position: relative;
  line-height: 1.2;
}

/* Η πορτοκαλί γραμμή κάτω από το Kontakt */
h2::after {
  content: "";
  display: block;
  width: 100px;               /* Μήκος γραμμής */
  height: 6px;                /* Πάχος γραμμής */
  background: #f59e0b;        /* Το πορτοκαλί σου */
  margin: 15px auto 0;        /* Κεντράρισμα */
  border-radius: 50px;
}

.subtitle {
  color: #64748b;
  margin-top: 25px;          /* Αέρας από τη γραμμή */
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: 500;
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

@media (max-width: 600px) {
  .form-grid { grid-template-columns: 1fr; }
}

h2 {
    font-size: 32px;
  }
  
  h2::after {
    width: 60px;
    height: 4px;
  }

input, textarea {
  padding: 16px;
  border-radius: 12px;
  border: 2px solid #e2e8f0;
  font-size: 16px;
  transition: 0.3s;
}

input:focus, textarea:focus {
  border-color: #f59e0b; /* Orange focus */
  outline: none;
  background: white;
}

textarea {
  min-height: 120px;
}

.submit-btn {
  background: #f59e0b;
  color: #000;
  padding: 20px;
  border: none;
  border-radius: 14px;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
  transition: 0.3s;
}

.submit-btn:hover {
  background: #d97706;
  transform: translateY(-2px);
}

/* Modal */
.success-modal {
  position: fixed;
  inset: 0;
  background: rgba(15, 23, 42, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
  padding: 20px;
}

.success-box {
  background: white;
  padding: 40px;
  border-radius: 24px;
  text-align: center;
  max-width: 400px;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.icon { font-size: 50px; margin-bottom: 15px; }

.success-box button {
  background: #0f172a;
  color: white;
  padding: 12px 30px;
  border: none;
  border-radius: 10px;
  margin-top: 20px;
  cursor: pointer;
}
</style>
