import { createApp} from 'vue'
import App from './App.vue'

import {createRouter, createWebHistory} from 'vue-router'
import WelcomePage from './views/WelcomePage.vue'
import CustomersPage from './views/CustomersPage.vue'
import ProductsPage from './views/ProductsPage.vue'
import UsersPage from './views/UsersPage.vue'
import AddUser from './components/AddUser.vue'


const router = createRouter ({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: WelcomePage
        },
        {
            path: '/customers',
            component: CustomersPage
        },
        {
            path: '/products',
            component: ProductsPage
        },
        {
            path: '/users',
            component: UsersPage
        },
        {
            path: '/adduser',
            component: AddUser
        }

    ]
})

export default router

createApp(App).use(router).mount('#app')
