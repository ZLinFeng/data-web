import {type RouteRecordRaw, createRouter, createWebHistory} from "vue-router";


export const routes: RouteRecordRaw[] = [
    {
        path: "/",

    }
]

const history = createWebHistory("giraffe")

const router = createRouter({
    history, routes
})

export default router;

