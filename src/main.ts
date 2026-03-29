import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import './assets/index.css'
import 'leaflet/dist/leaflet.css'

// Σωστό import για TypeScript & v3
import * as CookieConsent from 'vanilla-cookieconsent'
import 'vanilla-cookieconsent/dist/cookieconsent.css'

const app = createApp(App)
app.use(router)
app.mount('#app')

// Χρησιμοποιούμε ένα μικρό delay για να σιγουρευτούμε ότι το DOM είναι έτοιμο
setTimeout(() => {
  CookieConsent.run({
    guiOptions: {
      consentModal: {
        layout: 'box',
        position: 'bottom right'
      }
    },
    categories: {
      necessary: { 
        enabled: true, // Υποχρεωτικό για v3
        readOnly: true 
      },
      analytics: {},
      marketing: {}
    },
    language: {
      default: 'de',
      translations: {
        de: {
          consentModal: {
            title: 'Cookies & Datenschutz',
            description: 'Wir verwenden Cookies zur sicheren Nutzung der Website.',
            acceptAllBtn: 'Alle akzeptieren',
            acceptNecessaryBtn: 'Nur notwendige',
            showPreferencesBtn: 'Einstellungen'
          },
          preferencesModal: {
            title: 'Cookie Einstellungen',
            acceptAllBtn: 'Alle akzeptieren',
            acceptNecessaryBtn: 'Nur notwendige',
            savePreferencesBtn: 'Speichern',
            closeIconLabel: 'Schließen',
            // ΠΡΕΠΕΙ να έχει τουλάχιστον ένα section
            sections: [
              {
                title: 'Cookie-Nutzung',
                description: 'Wir nutzen Cookies, um die grundlegenden Funktionen της ιστοσελίδας zu gewährleisten.'
              },
              {
                title: 'Strictly Necessary Cookies',
                description: 'Diese Cookies sind für das reibungslose Funktionieren της ιστοσελίδας essential.',
                linkedCategory: 'necessary'
              }
            ]
          }
        }
      }
    }
  })
}, 100)



