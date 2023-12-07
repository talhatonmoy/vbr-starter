import { createRouter, createWebHistory } from 'vue-router'
import Products from '../components/Products.vue'
import HelloWorld from '../components/HelloWorld.vue'


const routes = [
    {
        path: '/',
        component: HelloWorld
    },
    {
        path: '/products',
        component: Products
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router;