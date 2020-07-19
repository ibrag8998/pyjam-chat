import Vue from "vue"
import VueRouter from "vue-router"
import Chats from "../views/Chats.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: "/",
    name: "Chats",
    component: Chats,
  },
  {
    path: "/chat/:id/",
    name: "Chat",
    component: () => import("@/views/Chat"),
  },
]

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
})

export default router
