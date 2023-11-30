import {type RouteRecordRaw, createRouter, createWebHistory} from "vue-router";

const Layouts = () => import("@/components/layouts/index.vue")

export const routes: RouteRecordRaw[] = [
    {
        path: "/",
        component: Layouts,
        children: [
            {
                path: "knowledge",
                component: () => import("@/views/KnowledgeView.vue")
            },
            {
                path: "information",
                component: () => import("@/views/InformationView.vue")
            },
            {
                path: "data",
                component: () => import("@/views/DataView.vue")
            }
        ]
    }
]

const history = createWebHistory("giraffe")

const router = createRouter({
    history, routes
})

export default router;

