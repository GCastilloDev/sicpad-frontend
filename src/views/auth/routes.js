export const authRoutes = [
  {
    path: "/auth",
    component: () => import("../../layouts/noAuth"),
    children: [
      {
        path: "login",
        component: () => import("../auth/Login"),
      },
    ],
  },
];
