import { createRouter, createWebHistory } from "vue-router";
import Dashboard from '@/views/Dashboard.vue'
import Laporan from '@/views/Laporan.vue'
import AnggotaRouter from "./AnggotaRouter.js";
import BukuRouter from "./BukuRouter.js";
import PeminjamanRouter from "./PeminjamanRouter.js";

const BaseRouter = [
    {path: '/', name: 'dashboard', component: Dashboard},
    {path: '/laporan', name: 'laporan', component: Laporan},
]

const routes = [
    ...AnggotaRouter,
    ...BukuRouter,
    ...PeminjamanRouter,
    ...BaseRouter
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;