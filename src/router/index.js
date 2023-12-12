import { createRouter, createWebHashHistory } from "vue-router";
import MainView from "../views/MainView.vue";
import SignUp from "../views/SignUpView.vue";
import LogIn from "../views/LogInView.vue";
import auth from "../auth";

const routes = [{
    path: "/signup",
    name: "SignUp",
    component: SignUp,
},
{
    path: "/login",
    name: "LogIn",
    component: LogIn,
},
{
    path: '/',
    name: 'main',
    component: MainView,
    beforeEnter: async (to, from, next) => {
        let authResult = await auth.authenticated();
        if (!authResult) {
            next('/login')
        } else {
            next();
        }
    }
},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
});

export default router;