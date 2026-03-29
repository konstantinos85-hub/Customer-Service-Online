<template>
  <nav :class="['nav', scrolled && 'nav-small']">
    <div class="container nav-inner">
      
      <!-- LOGO -->

      <router-link to="/#home" class="logo-link" @click="menuOpen = false">
        <div class="logo">
          <div class="lamp-icon">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://w3.org">
              <defs>
                <radialGradient id="lampGrad" cx="50%" cy="40%" r="50%">
                  <stop offset="0%" stop-color="#fffbeb" />
                  <stop offset="100%" stop-color="#f59e0b" />
                </radialGradient>
              </defs>
              <path d="M12 2a7 7 0 0 0-7 7c0 2.32 1.27 4.35 3.16 5.41C9.23 15.17 10 16.53 10 18h4c0-1.47.77-2.83 1.84-3.59C17.73 13.35 19 11.32 19 9a7 7 0 0 0-7-7z" fill="url(#lampGrad)" stroke="#f59e0b" stroke-width="0.5" />
              <path d="M12 7v3M10 9h4" stroke="white" stroke-width="1" stroke-linecap="round" opacity="0.8" />
              <path d="M9 18h6M10 21h4" stroke="#94a3b8" stroke-width="2" stroke-linecap="round" />
            </svg>
          </div>
          <div class="logo-text">
              <div class="main-title">Meisterbetrieb für Elektrotechnik</div>
              <div class="city">Landshut</div>
          </div>
        </div>
      </router-link>





      <!-- HAMBURGER BUTTON (Μόνο για κινητά) -->
      <button class="menu-toggle" @click="menuOpen = !menuOpen" aria-label="Menu">
        <span :class="['bar', menuOpen && 'open']"></span>
        <span :class="['bar', menuOpen && 'open']"></span>
        <span :class="['bar', menuOpen && 'open']"></span>
      </button>

      <!-- LINKS & MOBILE MENU -->
      <div :class="['links', menuOpen && 'active']">
        <router-link to="/#home" @click="menuOpen = false">Start</router-link>
        <router-link to="/#services" @click="menuOpen = false">Leistungen</router-link>
        <router-link to="/#kontakt" @click="menuOpen = false">Kontakt</router-link>
        
        <!-- Το κουμπί Notdienst μέσα στο μενού στα κινητά -->
        <a href="tel:+491607913020" class="call mobile-only" @click="menuOpen = false">
          Notdienst
        </a>
      </div>

      <!-- CALL BUTTON (Desktop) -->
      <a href="tel:+491607913020" class="call desktop-only">
        Notdienst
      </a>

    </div>

    <!-- Overlay για να κλείνει το μενού πατώντας έξω -->
    <div v-if="menuOpen" class="overlay" @click="menuOpen = false"></div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue"

const scrolled = ref(false)
const menuOpen = ref(false)

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll)
})

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll)
})
</script>

<style scoped>




.nav {
  position: sticky;
  top: 0;
  background: white;
  transition: 0.3s;
  padding: 20px 0;
  z-index: 1000;
}

.nav-small {
  padding: 10px 0;
  box-shadow: 0 10px 25px rgba(0,0,0,0.1);
}

.container {
  max-width: 1200px;
  margin: auto;
  padding: 0 20px;
}

.nav-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}


/* LOGO */
.logo {
  display: flex;
  align-items: flex-start; /* Ευθυγράμμιση του κεραυνού με την πρώτη γραμμή */
  gap: 8px; /* Απόσταση κεραυνού από το κείμενο */
  margin-left: -5px; /* Μετακίνηση όλου του logo αριστερά */
  text-align: left;
}

.lamp-icon {
  width: 26px;  /* Μέγεθος που ταιριάζει με το ύψος του τίτλου σου */
  height: 26px;
  margin-top: 2px; /* Διορθώνει τη στοίχιση για να "κάθεται" δίπλα στο Meisterbetrieb */
  filter: drop-shadow(0 0 5px rgba(245, 158, 11, 0.4)); /* Διακριτική 3D λάμψη */
}

.lamp-icon svg {
  width: 100%;
  height: 100%;
}


.logo-text {
  display: flex;
  flex-direction: column; /* Το Landshut κάτω από το Meisterbetrieb */
  line-height: 1.2;
}

.main-title {
  font-size: 20px;
  font-weight: 800;
  color: #0f172a;
  white-space: nowrap; /* Για να μην σπάει η πρόταση σε δύο γραμμές */
}

.city {
  font-weight: 600;
  color: #f59e0b;
  font-size: 17px;
  margin-top: -2px; /* Μικρή διόρθωση για να κολλήσει από κάτω */
}



/* LINKS */

.logo-link {
  text-decoration: none;
  color: inherit;
  display: block;
}


.links {
  display: flex;
  gap: 25px;
}

.links a {
  text-decoration: none;
  color: black;
  font-weight: 600;
  transition: 0.3s;
}

.links a:hover {
  color: #f59e0b;
}

/* CALL BUTTON */
.call {
  background: #f59e0b;
  padding: 12px 20px;
  border-radius: 10px;
  text-decoration: none;
  color: black;
  font-weight: 700;
  transition: 0.3s;
  
  /* Κεντράρισμα κειμένου */
  display: inline-flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-width: 130px; /* Δίνει σταθερό πλάτος για να φαίνεται το κεντράρισμα */
}
  


.call:hover {
  background: #d97706;
  transform: translateY(-2px);
}

.mobile-only { display: none; }

/* HAMBURGER */
.menu-toggle {
  display: none;
  flex-direction: column;
  gap: 6px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 5px;
  z-index: 1100;
}

.bar {
  width: 30px;
  height: 3px;
  background: #0f172a;
  border-radius: 10px;
  transition: 0.4s;
}

/* ANIMATION FOR X */
.bar.open:nth-child(1) { transform: translateY(9px) rotate(45deg); }
.bar.open:nth-child(2) { opacity: 0; }
.bar.open:nth-child(3) { transform: translateY(-9px) rotate(-45deg); }

/* ===== RESPONSIVE ===== */
@media (max-width: 600px) {
  .menu-toggle { display: flex; }
  .desktop-only { display: none; }
  .mobile-only { display: block; margin-top: 20px; }

  .links {
    position: fixed;
    top: 0;
    right: -100%; /* Κρυμμένο δεξιά */
    width: 280px;
    height: 100vh;
    background: white;
    flex-direction: column;
    padding: 100px 30px;
    box-shadow: -10px 0 30px rgba(0,0,0,0.1);
    transition: 0.4s ease-in-out;
    z-index: 1050;
  }

  .links.active {
    right: 0; /* Εμφάνιση */
  }

  .links a {
    font-size: 20px;
    padding: 15px 0;
    border-bottom: 1px solid #f1f5f9;
  }

  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.4);
    z-index: 1040;
  }

  .main-title {
    font-size: 16px; /* Μικραίνει το κείμενο για να χωράει στην οθόνη */
  }
  .city {
    font-size: 14px;
  }
}
</style>
