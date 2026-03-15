import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ProductView from '@/views/ProductView.vue'
import AboutView from '@/views/AboutView.vue'
import AllProductsView from '@/views/AllProductsView.vue'
import CartView from '@/views/CartView.vue'

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: "/home",
        component: HomeView
    },
    { 
        path: '/about',
        component: AboutView
    },
    {
        path: '/products',
        name: "All Products",
        component: AllProductsView
    },
    { 
        path: '/products/:id',
        name: "products",
        component: ProductView
    },
    { path: '/cart', name: 'cart', component: CartView }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router