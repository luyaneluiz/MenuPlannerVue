import { createRouter, createWebHistory } from 'vue-router'

import Home from '../views/Home.vue'
import Recipes from '../views/Recipes.vue'

const routes = [
    { path: '/', name: 'Home', component: () => import('../views/Home.vue') }, 
    {
        path: '/recipes',
        name: 'Recipes',
        component: () => import('../views/Recipes.vue'),
    }, 
    {
        path: '/planner',
        name: 'Planner',
        component: () => import('../views/Planner.vue'),
    }, 
    {
        path: '/grocery-list',
        name: 'GroceryList',
        component: () => import('../views/GroceryList.vue'),
    }, 
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
