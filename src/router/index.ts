import {
    type RouteRecordRaw,
    createRouter,
    createWebHistory,
    RouteLocationNormalized,
    NavigationGuardNext
} from "vue-router";
import {expiryDate} from "@/utils/MixUtil.ts";

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

router.beforeEach((to:RouteLocationNormalized,
                   _: RouteLocationNormalized, next: NavigationGuardNext) => {
    let token = localStorage.getItem("")
    token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c";
    if (!token) {
        if (to.path !== "/login") {
            next({path: "/login"});
        } else {
            next();
        }
    } else {
        if (expiryDate(token)) {
            next({path: "/login"});
        } else {
            next();
        }
    }
})

export default router;

