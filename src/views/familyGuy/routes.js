export const familyGuyRoutes = [
  {
    path: 'dashboard/family-guy',
    name: 'FamilyGuy',
    component: () =>
      import(/* webpackChunkName: "FamilyGuy" */ './views/FamilyGuy'),
  },
  {
    path: 'dashboard/family-guy/add',
    name: 'FamilyGuyAdd',
    component: () =>
      import(/* webpackChunkName: "FamilyGuyAdd" */ './views/FamilyGuyAdd'),
  },
];
