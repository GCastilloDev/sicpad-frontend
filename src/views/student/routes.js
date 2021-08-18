export const studentRoutes = [
  {
    path: 'dashboard/student',
    name: 'Student',
    component: () =>
      import(/* webpackChunkName: "Student" */ './views/Student'),
  },
  {
    path: 'dashboard/student/add',
    name: 'StudentAdd',
    component: () =>
      import(/* webpackChunkName: "StudentAdd" */ './views/StudentAdd'),
  },
];
