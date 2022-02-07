import { createWebHistory, createRouter } from "vue-router"
const Welcome = () => import('./components/Welcome.vue')

export const routes = [
    {
        name: 'home',
        path: '/',
        component: Welcome
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router