<template>

<section class="reviews">
  <div class="container">
    <h2>Kundenbewertungen</h2>

    <div class="carousel-container">
  <div class="review-track">
    <!-- Πρώτο σετ -->
    <div class="review-card">
      <div class="stars">⭐⭐⭐⭐⭐</div>
      <p>"Sehr schnell und professionell!"</p>
      <span class="author">- Thomas M.</span>
    </div>
    <div class="review-card">
      <div class="stars">⭐⭐⭐⭐⭐</div>
      <p>"Top Elektriker 👍"</p>
      <span class="author">- Andreas S.</span>
    </div>
    <div class="review-card">
      <div class="stars">⭐⭐⭐⭐⭐</div>
      <p>"Notdienst war sofort da."</p>
      <span class="author">- Petra K.</span>
    </div>
    <div class="review-card">
      <div class="stars">⭐⭐⭐⭐⭐</div>
      <p>"Faire Preise & super Arbeit."</p>
      <span class="author">- Markus W.</span>
    </div>

    <!-- Δεύτερο σετ (Αντίγραφο) -->
    <div class="review-card">
      <div class="stars">⭐⭐⭐⭐⭐</div>
      <p>"Sehr schnell und professionell!"</p>
      <span class="author">- Thomas M.</span>
    </div>
    <div class="review-card">
      <div class="stars">⭐⭐⭐⭐⭐</div>
      <p>"Top Elektriker 👍"</p>
      <span class="author">- Andreas S.</span>
    </div>
    <div class="review-card">
      <div class="stars">⭐⭐⭐⭐⭐</div>
      <p>"Notdienst war sofort da."</p>
      <span class="author">- Petra K.</span>
    </div>
    <div class="review-card">
      <div class="stars">⭐⭐⭐⭐⭐</div>
      <p>"Faire Preise & super Arbeit."</p>
      <span class="author">- Markus W.</span>
    </div>
  </div>
</div>


<div class="google-wrapper">

<a 
  href="https://www.google.com/search?q=elektriker+tsikrikas+landshut"
  target="_blank"
  class="google-rating"
>
  <img 
    src="https://www.gstatic.com/images/branding/product/1x/googleg_48dp.png" 
    width="24" 
    height="24"
    alt="Google Logo"
  >
  <span>4.9 / 5 Sterne bei Google</span>
</a>

</div>

<div class="trust-links">

<a 
href="https://www.11880.com/branchenbuch/landshut-isar/060691303B113628300/georgios-tsikrikas.html"
target="_blank"
class="trust-card"
>
⭐ Profil auf 11880 ansehen
</a>

<a 
href="https://www.google.com/search?q=elektriker+tsikrikas+landshut"
target="_blank"
class="trust-card"
>
⭐ Google Bewertungen ansehen
</a>

<a 
href="https://www.facebook.com/tsikrikaselektronlandshut/?locale=de_DE"
target="_blank"
class="trust-card"
>
👍 Facebook Seite ansehen
</a>

</div>

</div>
</section>

</template>

<script setup>
</script>

<style scoped>



.reviews h2 {
  text-align: center;
  font-size: 42px;         /* Etwas größer */
  font-weight: 900;         /* Maximal fett */
  color: #0f172a;           /* Tiefes Dunkelblau/Schwarz */
  margin-bottom: 50px;
  text-transform: uppercase; /* Alles Großbuchstaben für mehr Wucht */
  letter-spacing: 1px;      /* Etwas mehr Abstand zwischen den Buchstaben */
  position: relative;
  display: block;
}

/* Optional: Ein kleiner oranger Strich unter der Überschrift zur Betonung */
.reviews h2::after {
  content: "";
  display: block;
  width: 80px;
  height: 5px;
  background: #f59e0b;      /* Dein Orange */
  margin: 15px auto 0;
  border-radius: 10px;
}


.carousel-container {
  overflow: hidden; /* Κρύβει ό,τι βγαίνει έξω από την οθόνη */
  padding: 40px 0;
  position: relative;
  width: 100%;
}

.review-track {
  display: flex;
  gap: 20px;
  width: max-content; /* Επιτρέπει στα στοιχεία να απλωθούν σε μια ευθεία */
  animation: scroll 30s linear infinite; /* Η κίνηση */
}

/* Σταματάει την κίνηση όταν ο χρήστης ακουμπάει με το ποντίκι */
.carousel-container:hover .review-track {
  animation-play-state: paused;
}

.customer-name {
  display: block;
  font-size: 14px;
  color: #f59e0b; /* Πορτοκαλί για να ταιριάζει με το brand */
  font-weight: 700;
  margin-top: 5px;
  text-align: right; /* Στοίχιση δεξιά για στυλ */
}

.reviews{
padding:80px 0;
background:#f8fafc;
}

.review-grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(250px,1fr));
gap:20px;
margin-top:30px;
}

@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%); /* Μετακινείται κατά το ήμισυ (το πρώτο σετ) */
  }
}

.review-card {
  background: white;
  padding: 25px 40px;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0,0,0,0.06);
  white-space: nowrap; /* Κρατάει το κείμενο σε μια γραμμή μέσα στην κάρτα */
  font-weight: 600;
  border-left: 4px solid orange;
  display: flex;
  flex-direction: column;
  gap: 10px;
  min-width: 300px; /* Για να χωράει άνετα το όνομα */
}



.review-card::before {
  content: "“";
  position: absolute;
  top: 10px;
  left: 10px;
  font-size: 40px;
  color: #f1f5f9;
  font-family: serif;
}

.google-wrapper{
text-align:center;
margin-top:30px;
}

.google-rating{
font-size:20px;
font-weight:600;
background:#f1f5f9;
padding:14px 22px;
border-radius:40px;
display:inline-flex;
gap:10px;
align-items:center;
text-decoration:none;
color:#111827;
transition:0.25s;
align-items: center; /* Κεντράρει κάθετα εικονίδιο και κείμενο */
gap: 12px;

display: inline-flex;
  align-items: center;
  gap: 12px;
  transition: transform 0.5s ease; /* Για ομαλή επαναφορά στο hover */
  
  /* Ενεργοποίηση της 3D περιστροφής */
  animation: flipAround 8s linear infinite;
  backface-visibility: visible;
}


.google-rating img {
  display: block;
  object-fit: contain;
}

/* Η κίνηση γύρω από τον εαυτό του (άξονας Y) */
@keyframes flipAround {
  from { transform: rotateY(0deg); }
  to { transform: rotateY(360deg); }
}

/* ΟΤΑΝ ΤΟ ΠΟΝΤΙΚΙ ΕΙΝΑΙ ΕΠΑΝΩ: Σταματάει και επανέρχεται στο 0 */
.google-rating:hover {
  animation: none;          /* Σταματάει το animation */
  transform: rotateY(0deg); /* Το επαναφέρει στην ευθεία */
  box-shadow: 0 5px 15px rgba(0,0,0,0.1); /* Προαιρετικό εφεδάκι */
}

.trust-links{
margin:40px auto 0;
display:flex;
justify-content:center;
align-items:stretch;   /* ⭐ ίδια ύψη */
gap:20px;

flex-wrap:nowrap;      /* ⭐ ΜΙΑ γραμμή */
max-width:1000px;      /* ⭐ χωράνε */
}

.trust-card{

flex:1;                /* ⭐ όλα ίδιο πλάτος */
min-width:260px;       /* ⭐ δεν μικραίνουν */

background:linear-gradient(135deg,#ffffff,#f1f5f9);
padding:18px 28px;
border-radius:16px;
text-decoration:none;
color:#111827;
font-weight:600;
transition:0.3s;
box-shadow:0 10px 25px rgba(0,0,0,0.08);
transition:all .3s ease;

display:flex;
align-items:center;
gap:10px;
}

.trust-card:hover{
transform:translateY(-6px);
box-shadow:0 20px 40px rgba(0,0,0,0.15);
}



@media(max-width:768px){

.trust-links{
flex-direction:column;     /* ⭐ κατεβαίνουν κάθετα */
align-items:center;
max-width:100%;
}

.trust-card{
width:100%;               /* ⭐ γεμίζει οθόνη */
max-width:320px;          /* ⭐ ωραίο mobile size */
padding:22px;
font-size:18px;
text-align:center;
flex-direction:column;
line-height:1.3;
}

.reviews h2{
text-align:center;
font-size:26px;
line-height:1.3;
padding:0 10px;
}

}

</style>