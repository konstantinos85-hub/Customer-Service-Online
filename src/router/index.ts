import { createRouter, createWebHistory } from "vue-router"
import Home from "../views/Home.vue"
import Impressum from "../views/Impressum.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Home
    },
    {
      path: "/impressum",
      component: Impressum
    },

    {
  path: "/datenschutz",
  component: () => import("../views/Datenschutz.vue")
}

  ],

  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth', // Για να γλιστράει όμορφα η σελίδα
      }
    }
    return { top: 0 }
  }

})

export default router