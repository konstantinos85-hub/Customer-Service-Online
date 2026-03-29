<template>
<section id ="home" class="hero">
  <div class="energy-grid"></div>
  <div class="snow-container">
  <div class="snow layer1"></div>
  <div class="snow layer2"></div>
  <div class="snow layer3"></div>
</div>


  <!-- ΤΟ ΠΛΑΙΣΙΟ (GLASS) -->
  <div class="hero-glass">
    
    <!-- ΤΟ ΠΕΡΙΕΧΟΜΕΝΟ ΤΩΡΑ ΕΙΝΑΙ ΜΕΣΑ -->
    <div class="hero-content">
      <h1>
          Tsikrikas Elektro
          <div class="lamp-container">
            <svg class="lamp-3d" viewBox="0 0 24 24" xmlns="http://w3.org">
              <defs>
                <radialGradient id="glassGradient" cx="50%" cy="40%" r="50%">
                  <stop offset="0%" stop-color="#fffbeb" stop-opacity="0.9" />
                  <stop offset="100%" stop-color="#f59e0b" stop-opacity="0.2" />
                </radialGradient>
              </defs>
              <!-- Το γυαλί της λάμπας με gradient για όγκο -->
              <path d="M12 2a7 7 0 0 0-7 7c0 2.32 1.27 4.35 3.16 5.41C9.23 15.17 10 16.53 10 18h4c0-1.47.77-2.83 1.84-3.59C17.73 13.35 19 11.32 19 9a7 7 0 0 0-7-7z" 
                    fill="url(#glassGradient)" stroke="#f59e0b" stroke-width="0.5"/>
              <!-- Το νήμα πυρακτώσεως -->
              <path d="M12 7v4M10 9h4" stroke="#fff" stroke-width="1" stroke-linecap="round" class="filament"/>
              <!-- Η βάση (ντουί) -->
              <path d="M9 18h6M10 21h4M11 23h2" stroke="#94a3b8" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <div class="lamp-glow"></div>
          </div>
        </h1>


      
      <div class="cta-group">
        <a href="tel:+491607913020" class="cta primary">Jetzt anrufen</a>
        <a href="#kontakt" class="cta ghost">Anfrage senden</a>
      </div>
    </div>

  </div> <!-- ΤΕΛΟΣ ΤΟΥ GLASS -->

  <div class="lightning"></div>
  <div class="shock"></div>
</section>
</template>


<style scoped>

.lamp-container {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  animation: lamp-flicker 6s linear infinite;
}

.lamp-3d {
  width: 100%;
  height: 100%;
  z-index: 2;
  filter: drop-shadow(0 0 15px rgba(245, 158, 11, 0.6));
}

/* Το εσωτερικό νήμα που λάμπει πιο έντονα */
.filament {
  filter: blur(0.5px);
  box-shadow: 0 0 10px #fff;
}

/* Η "αύρα" γύρω από τη λάμπα για 3D αίσθηση στο χώρο */
.lamp-glow {
  position: absolute;
  width: 40px;
  height: 40px;
  background: radial-gradient(circle, rgba(245, 158, 11, 0.8) 0%, transparent 70%);
  border-radius: 50%;
  top: 15%;
  filter: blur(10px);
  z-index: 1;
  opacity: 0.8;
}

/* Προσαρμογή του flicker για να επηρεάζει και το glow */
@keyframes lamp-flicker {
  0%, 18%, 22%, 25%, 53%, 57%, 100% { 
    opacity: 1; 
    transform: scale(1);
    filter: drop-shadow(0 0 20px #f59e0b);
  }
  20%, 24%, 55% { 
    opacity: 0.3; 
    transform: scale(0.98);
    filter: none;
  }
}



/* HERO BASE */
.hero {
  min-height: 95vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  overflow: hidden;
  color: white;
  background: linear-gradient(140deg, #000000, #0a0a0a, #000000);
}

.hero h1 {
  font-family: 'Inter', sans-serif;
  font-weight: 300;
  font-size: clamp(28px, 4.5vw, 42px);
  text-transform: uppercase;
  letter-spacing: 4px;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
  width: 100%;
  white-space: normal;
  flex-wrap: wrap;
  text-shadow: 0 0 5px #fff, 0 0 10px #f59e0b, 0 0 20px #f59e0b;
  animation: lamp-flicker 6s linear infinite !important;
}

/* GLASS CONTAINER */
.hero-glass {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 95%;
  max-width: 1100px;
  min-height: 420px;
  height: auto;
  padding: 60px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(25px);
  -webkit-backdrop-filter: blur(25px);
  border-radius: 40px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 40px 80px rgba(0, 0, 0, 0.7);
  z-index: 1;
  animation: 
    glassFloat 6s ease-in-out infinite alternate,
    glassPulse 5s infinite;
}

/* GLASS SCAN EFFECT & GRID */
.hero-glass::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: rgba(255, 255, 255, 0.1);
  animation: scan 4s linear infinite;
  z-index: 2;
}

.energy-grid {
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(rgba(245, 158, 11, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(245, 158, 11, 0.05) 1px, transparent 1px);
  background-size: 50px 50px;
  mask-image: radial-gradient(circle, black, transparent 80%);
  animation: grid-pulse 4s ease-in-out infinite;
}

/* CONTENT & CTA */
.hero-content {
  position: relative;
  z-index: 5;
}

.subtitle {
  margin-top: 18px;
  font-size: 22px;
  color: #cbd5e1;
}

.cta-group {
  margin-top: 28px;
  display: flex;
  gap: 14px;
  justify-content: center;
  align-items: center;
  flex-wrap: nowrap;   /* IMPORTANT -> να ΜΗΝ σπάνε κάτω */
}

.cta {
  padding: 10px 22px;     /* μικρά */
  border-radius: 14px;    /* pill shape */
  font-size: 15px;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  white-space: nowrap;    /* να μη σπάνε λέξεις */
}

.primary {
  background: white;
  color: #000000; /* Καθαρό μαύρο για την αντίθεση της φωτό */
}

.primary:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.4);
}

.ghost {
  border: 1px solid rgba(255,255,255,0.7);
  background: transparent;
  color: white;
}


.ghost:hover {
  background: rgba(255, 255, 255, 0.1);
}


/* DECORATIVE LIGHTS (Before/After) */
.hero::before {
  content: "";
  position: absolute;
  width: 1200px;
  height: 1200px;
  background: radial-gradient(circle, rgba(255, 255, 255, 0.06), transparent 60%);
  top: -400px;
  left: -300px;
  filter: blur(140px);
  animation: float1 20s ease-in-out infinite alternate;
}

.hero::after {
  content: "";
  position: absolute;
  width: 1000px;
  height: 1000px;
  background: radial-gradient(circle, rgba(148, 163, 184, 0.14), transparent 60%);
  bottom: -350px;
  right: -250px;
  filter: blur(150px);
  animation: float2 26s ease-in-out infinite alternate;
}

/* LIGHTNING & SHOCKWAVE */
.lightning {
  position: absolute;
  top: -30%;
  left: 50%;
  transform: translateX(-50%);
  width: 6px;
  height: 160%;
  background: linear-gradient(to bottom, transparent, rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0.6), transparent);
  opacity: 0;
  filter: blur(6px);
  animation: flash 5s infinite;
}

.shock {
  position: absolute;
  top: 50%;
  left: 0;
  height: 3px;
  width: 0;
  mix-blend-mode: screen;
  background: linear-gradient(to right, transparent, white, rgba(255, 255, 255, 0.7), transparent);
  filter: blur(6px);
  animation: shockWave 5s infinite;
  opacity: 0;
}

/* KEYFRAMES */
@keyframes lamp-flicker {
  0%, 18%, 22%, 25%, 53%, 57%, 100% { opacity: 1; text-shadow: 0 0 7px #fff, 0 0 15px #f59e0b, 0 0 30px #f59e0b; }
  20%, 24%, 55% { opacity: 0.4; text-shadow: none; }
}

@keyframes scan {
  0% { top: 0; }
  100% { top: 100%; }
}

@keyframes glassFloat {
  0% { transform: translate(-50%, -50%) translateY(0); }
  100% { transform: translate(-50%, -50%) translateY(-20px); }
}

@keyframes glassPulse {
  0%, 30%, 100% { box-shadow: 0 40px 80px rgba(0, 0, 0, 0.6), inset 0 0 60px rgba(255, 255, 255, 0.05); }
  12% { box-shadow: 0 40px 80px rgba(0, 0, 0, 0.6), 0 0 60px rgba(255, 255, 255, 0.35), inset 0 0 90px rgba(255, 255, 255, 0.25); }
  20% { box-shadow: 0 40px 80px rgba(0, 0, 0, 0.6), 0 0 100px rgba(255, 255, 255, 0.25), inset 0 0 70px rgba(255, 255, 255, 0.18); }
}

@keyframes flash {
  0%, 6%, 11%, 100% { opacity: 0; }
  4%, 9% { opacity: 1; }
}

@keyframes shockWave {
  0%, 10%, 28%, 100% { width: 0; opacity: 0; }
  12% { opacity: 1; }
  20% { width: 100%; opacity: 0.8; }
}

@keyframes float1 { 0% { transform: translate(0,0); } 100% { transform: translate(140px,90px); } }
@keyframes float2 { 0% { transform: translate(0,0); } 100% { transform: translate(-120px,-70px); } }
@keyframes grid-pulse { 0%, 100% { opacity: 0.3; } 50% { opacity: 0.7; } }


.snow-container {
  position: absolute;
  inset: 0;
  pointer-events: none; /* Για να μπορείς να πατάς τα κουμπιά */
  z-index: 2; /* Πίσω από το hero-content, πάνω από το μαύρο φόντο */
  overflow: hidden;
}

.snow {
  position: absolute;
  top: -100px;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: 
    radial-gradient(4px 4px at 100px 50px, #fff, transparent),
    radial-gradient(6px 6px at 200px 150px, rgba(255,255,255,0.8), transparent),
    radial-gradient(3px 3px at 300px 250px, #fff, transparent),
    radial-gradient(4px 4px at 400px 350px, rgba(245,158,11,0.3), transparent); /* Λίγο πορτοκαλί χιόνι */
  background-size: 600px 600px;
  animation: snow-fall linear infinite;
}

/* Διαφορετικά μεγέθη και ταχύτητες για 3D αίσθηση */
.layer1 {
  opacity: 0.8;
  animation-duration: 25s;
  background-size: 400px 400px;
  filter: blur(1px); /* Πιο κοντά, λίγο θολό */
}

.layer2 {
  opacity: 0.5;
  animation-duration: 35s;
  background-size: 300px 300px;
  animation-delay: -10s;
}

.layer3 {
  opacity: 0.3;
  animation-duration: 45s;
  background-size: 200px 200px;
  filter: blur(3px); /* Μακριά στο βάθος */
  animation-delay: -20s;
}

@keyframes snow-fall {
  0% { transform: translateY(0) rotate(0deg); }
  100% { transform: translateY(600px) rotate(20deg); }
}






/* MOBILE */

/* ===== MOBILE FIX ===== */
/* ===== ΔΙΟΡΘΩΜΕΝΟ MOBILE FIX ===== */
@media (max-width: 768px) {
  
  .hero-glass {
    width: 92%;
    min-height: 380px;
    padding: 40px 20px;
  }

  .hero h1 {
    display: flex;         /* Επαναφορά σε flex */
    flex-wrap: wrap;       /* Επιτρέπει την αλλαγή σειράς αν δεν χωράει */
    justify-content: center;
    align-items: center;
    gap: 10px;             /* Απόσταση κειμένου-λάμπας */
    
    font-size: 26px !important;    
    letter-spacing: 1px !important; 
    line-height: 1.2;
    white-space: normal !important;
    text-align: center;
  }

  .lamp-container {
    display: inline-flex;  /* Για να στέκεται σωστά δίπλα στο κείμενο */
    width: 32px;           /* Ελαφρώς μικρότερη για να "δένει" με τα γράμματα */
    height: 32px;
    margin-top: 2px;       /* Μικρή διόρθωση ύψους */
  }

  /* Υπόλοιπα (CTA κλπ) παραμένουν ως έχουν */
}


  /* Αν ο κεραυνός είναι emoji μέσα στο h1 */
  .hero h1 span, .hero h1 {
    word-break: break-word;
  }

  .cta-group {
    flex-direction: column; /* Τα κουμπιά το ένα κάτω από το άλλο */
    width: 100%;
    gap: 12px;
  }

  .cta {
    width: 100%; /* Τα κουμπιά πιάνουν όλο το πλάτος του πλαισίου */
    padding: 14px;
  }



</style>