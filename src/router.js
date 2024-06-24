// src/router.js
import { createRouter, createWebHistory } from 'vue-router'
import HomePage from "@/components/HomePage.vue";
import LandingPage from "@/components/LandingPage.vue";

const routes = [
    {
        path: '/',
        name: 'Home',
        component: HomePage
    },{
        path: '/landingpage',
        name: 'landing',
        component: LandingPage,
        meta: { hideHeaderFooter: true }
    },

]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router