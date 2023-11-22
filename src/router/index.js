import { createRouter, createWebHashHistory } from 'vue-router'
import SignUpView from '../views/SignUpView.vue'
import MainView from '../views/MainView.vue'

const routes = [{
        path: '/',
        name: 'signup',
        component: SignUpView
    },
    {
        path: '/main',
        name: 'main',
        component: MainView
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router