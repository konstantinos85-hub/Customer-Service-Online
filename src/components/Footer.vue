<template>
  <footer class="footer">
    <div class="container">
      <p>© Elektro Service Landshut</p>
      
      <!-- Τα links σε ένα δικό τους κουτί για να τα ελέγχουμε -->
      <div class="footer-links">
        <router-link to="/impressum">Impressum</router-link>
        <span class="separator">|</span> <!-- Προαιρετικό διαχωριστικό -->
        <router-link to="/datenschutz">Datenschutz</router-link>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #0f172a;
  color: white;
  padding: 30px 0;
  text-align: center;
  margin-top: 60px;
}

.footer-links {
  display: flex;         /* Ενεργοποιεί το δίπλα-δίπλα */
  justify-content: center; /* Τα κεντράρει οριζόντια */
  align-items: center;     /* Τα ευθυγραμμίζει κάθετα */
  gap: 20px;               /* Το κενό ανάμεσα στα links */
  margin-top: 15px;
}

.footer-links a {
  color: orange;
  text-decoration: none;
  font-weight: 600;
}

.footer-links a:hover {
  text-decoration: underline;
}

.separator {
  color: #64748b; /* Γκρι χρώμα για την κάθετο */
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
}
</style>
