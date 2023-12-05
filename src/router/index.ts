import {type RouteRecordRaw, createRouter, createWebHistory} from "vue-router";

const Layouts = () => import("@/components/layouts/index.vue")

export const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: Layouts,
        children: [
            {
                path: "knowledge",
                component: () => import("@/views/knowledge/KnowledgeView.vue")
            },
            {
                path: "information",
                component: () => import("@/views/information/InformationView.vue")
            },
            {
                path: "data",
                component: () => import("@/views/data/DataView.vue")
            },
            {
                path: "cognition",
                component: () => import("@/views/cognition/CognitionView.vue")
            },
            {
                path: "dashboard",
                component: () => import("@/views/dashboard/DashboardView.vue")
            },
            {
                path: "/",
                component: () => import("@/views/dashboard/DashboardView.vue")
            }
        ]
    },
    {
        path: "/login",
        component: () => import("@/views/auth/LoginView.vue")
    }
]

const history = createWebHistory("giraffe")

const router = createRouter({
    history, routes
})

export default router;

