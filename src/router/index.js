import Vue from 'vue';
import VueRouter from 'vue-router';

// Rutas de los modulos
import { authRoutes } from '../views/auth/routes';
import { familyGuyRoutes } from '../views/familyGuy/routes';
import { groupsRoutes } from '../views/groups/routes';
import { studentRoutes } from '../views/student/routes';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "Home" */ '../layouts/auth'),
    redirect: { name: 'Dashboard' },
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () =>
          import(
            /* webpackChunkName: "Dashboard" */ '../views/dashboard/Dashboard'
          ),
      },
      ...familyGuyRoutes,
      ...studentRoutes,
      ...groupsRoutes,
    ],
  },
  ...authRoutes,
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
