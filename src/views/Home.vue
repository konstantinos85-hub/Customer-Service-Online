<template>
<div class="page">

<Hero />

<!-- SERVICES -->
<section class="services" id="services">
<div class="container">

<h2>Elektro-Dienstleistungen für Privat & Gewerbe</h2>

<div class="grid">
<div class="card">⚡ Elektroinstallation</div>
<div class="card">💡 Beleuchtung</div>
<div class="card">🔌 Steckdosen Montage</div>
<div class="card">🚨 Notdienst</div>
<div class="card">📡 Smart Home</div>
<div class="card">🔋 Wallbox Installation</div>
</div>

</div>
</section>

<!-- MAP -->
<section class="map-section">
<div class="map-full">

<h2>Schnell vor Ort im gesamten Einsatzgebiet</h2>

<div id="map"></div>

<p class="map-text">
Ich bin im gesamten Umkreis von <strong>bis zu 60 km rund um Landshut</strong> schnell für Sie im Einsatz.
</p>

<p class="map-text">
Ob Notdienst, Installation oder Reparatur – Sie erhalten <strong>persönlichen Service,
kurze Reaktionszeiten</strong> und eine <strong>fachgerechte Umsetzung</strong>.
</p>

</div>
</section>

<!-- REVIEWS -->
<Reviews />

<section id="kontakt">
<ContactForm />
</section>

<!-- MOBILE CALL BAR -->
<div class="mobile-bar">
<a href="tel:+491607913020">📞 Jetzt anrufen</a>
</div>

<Footer />

</div>
</template>

<script setup>
import { onMounted, nextTick } from "vue"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

import Hero from "@/components/Hero.vue"
import ContactForm from "@/components/ContactForm.vue"
import Reviews from "@/components/Reviews.vue"
import Footer from "@/components/Footer.vue" 


delete L.Icon.Default.prototype._getIconUrl
L.Icon.Default.mergeOptions({
iconRetinaUrl:"https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
iconUrl:"https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
shadowUrl:"https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png"
})

const mainIcon = new L.Icon({
iconUrl:"https://maps.google.com/mapfiles/ms/icons/orange-dot.png",
iconSize:[32,32],
iconAnchor:[16,32],
popupAnchor:[0,-32]
})

onMounted(async ()=>{

await nextTick()

const center = [48.5442,12.1469]

const map = L.map("map").setView(center,8)

L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{
maxZoom:19,
attribution:"© OpenStreetMap"
}).addTo(map)

L.marker(center,{ icon: mainIcon })
.addTo(map)
.bindPopup(`
<b>Landshut (Hauptstandort)</b><br>
✔ Einsatz möglich<br><br>

<a href="tel:+491607913020" style="
background:#f59e0b;
padding:6px 12px;
border-radius:8px;
color:black;
text-decoration:none;
font-weight:600;
display:inline-block;
">
📞 Jetzt anrufen
</a>
`)

function cityMarker(coords,name){
L.marker(coords)
.addTo(map)
.bindPopup(`
<b>${name}</b><br>
✔ Einsatz möglich<br><br>

<a href="tel:+491607913020" style="
background:#f59e0b;
padding:6px 12px;
border-radius:8px;
color:black;
text-decoration:none;
font-weight:600;
display:inline-block;
">
📞 Jetzt anrufen
</a>
`)
}

cityMarker([48.4703,11.9382],"Moosburg")
cityMarker([48.3067,11.9082],"Erding")
cityMarker([48.6350,12.4925],"Dingolfing")
cityMarker([48.7656,11.4237],"Ingolstadt")
cityMarker([48.2600,11.4340],"Dachau")
cityMarker([48.1351,11.5820],"München")
cityMarker([49.0134,12.1016],"Regensburg")
cityMarker([48.8810,12.5730],"Straubing")
cityMarker([48.0459,11.9670],"Grafing")
cityMarker([48.0623,12.2325],"Wasserburg")
cityMarker([48.1358,12.5905],"Garching")
cityMarker([48.4326,12.9386],"Pfarrkirchen")

const circle = L.circle(center,{
radius:60000,
color:"#f59e0b",
weight:3,
fillOpacity:0.15
}).addTo(map)

map.fitBounds(circle.getBounds(),{
maxZoom:9
})

const observer = new ResizeObserver(() => {
map.invalidateSize()
})

observer.observe(document.getElementById("map"))

})
</script>

<style>

.page{
font-family:Arial, sans-serif;
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
}

.container{
max-width:1200px;
margin:auto;
padding:0 20px;
}

/* SERVICES */

.services{
padding:80px 0;
background:#f8fafc;
}

/* SERVICES ÜBERSCHRIFT */
.services h2 {
  text-align: center;
  font-size: 44px;           /* Schön groß */
  font-weight: 900;           /* Maximal fett für "Meister"-Optik */
  color: #0f172a;             /* Dein dunkles Navy/Schwarz */
  margin-bottom: 50px;
  line-height: 1.2;
  letter-spacing: -0.5px;     /* Etwas enger für modernere Optik */
  position: relative;
}

/* Der orangefarbene Akzent unter der Überschrift */
.services h2::after {
  content: "";
  display: block;
  width: 100px;               /* Länge des Balkens */
  height: 6px;                /* Dicke des Balkens */
  background: #f59e0b;        /* Dein Orange */
  margin: 20px auto 0;        /* Zentriert unter dem Text */
  border-radius: 50px;        /* Abgerundete Ecken */
}

.grid{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(220px,1fr));
gap:25px;
margin-top:40px;
}

.card{
background:white;
padding:30px;
border-radius:16px;
text-align:center;
box-shadow:0 15px 30px rgba(0,0,0,0.08);
transition:0.3s;
}

.card:hover{
transform:translateY(-8px);
}

/* MAP */

#map{
height:550px;
width:100%;
border-radius:20px;
margin-top:25px;
box-shadow:0 20px 40px rgba(0,0,0,0.1);
}

.map-text{
margin-top:18px;
font-size:18px;
color:#334155;
max-width:700px;
margin-left:auto;
margin-right:auto;
line-height:1.6;
text-align:center;
}

.map-full{
width:100%;
padding:0;
}

.map-section h2{
font-size:34px;
font-weight:800;
text-align:center;
margin-bottom:25px;
color:#0f172a;
}

/* REVIEWS */

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

.review-card{
background:white;
padding:25px;
border-radius:14px;
box-shadow:0 10px 20px rgba(0,0,0,0.06);
}

/* MOBILE BAR */

.mobile-bar{
position:fixed;
bottom:0;
left:0;
right:0;
background:orange;
padding:18px;
text-align:center;
font-weight:bold;
display:none;
z-index:998;
}

.mobile-bar a{
color:black;
text-decoration:none;
}

@media(max-width:768px){
.mobile-bar{
display:block;
}

.services h2{
text-align:center;
font-size:26px;
line-height:1.3;
padding:0 10px;
}

.grid {
    grid-template-columns: 1fr; /* Ένα κουτί ανά σειρά στο κινητό */
    gap: 15px;
    padding: 0 10px;
  }
  
  .card {
    padding: 20px; /* Λιγότερο padding για να χωράει η γραμματοσειρά */
  }

  #map {
    height: 350px; /* Μικρότερος χάρτης για να μην σκρολάρει ο χρήστης αιώνια */
  }

.page {
    padding-bottom: 80px; /* Όσο περίπου είναι το ύψος της mobile-bar */
  }

  /* Βεβαιωνόμαστε ότι το Footer δεν κρύβεται */
  .footer {
    position: relative;
    z-index: 10;
    margin-bottom: 20px; /* Έξτρα αέρας */
  }

}


</style>