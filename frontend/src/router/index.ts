// router/index.js
import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    {
        path: '/',
        name: 'Upload',
        component: ()=>import( '../views/Upload.vue')
    },
    {
        path: '/download/:token',
        name: 'Download',
        component: ()=>import( '../views/Download.vue'),
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router