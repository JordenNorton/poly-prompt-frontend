import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    component: () => import("../layouts/DefaultLayout.vue"),
    children: [
      { path: "", component: () => import("../pages/HomePage.vue") },
      { path: "dashboard", component: () => import("../pages/DashboardPage.vue") },
      { path: "profile", component: () => import("../pages/ProfilePage.vue") },
    ],
  },
  { path: "/login", component: () => import("../pages/LoginPage.vue") },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
