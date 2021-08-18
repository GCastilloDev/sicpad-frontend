export const groupsRoutes = [
  {
    path: 'dashboard/groups',
    name: 'Groups',
    component: () => import(/* webpackChunkName: "Student" */ './views/Groups'),
  },
  {
    path: 'dashboard/groups/add',
    name: 'GroupAdd',
    component: () =>
      import(/* webpackChunkName: "StudentAdd" */ './views/GroupAdd'),
  },
];
