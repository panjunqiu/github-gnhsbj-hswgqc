export default [
  {
    path: '/',
    // '@/layouts', 可以，路径是相对pages的
    component: '../layouts',
    name: 'root',
    routes: [
      {
        path: '/docs',
        component: 'Docs',
        name: 'Docs',
      },
      {
        path: '/home',
        component: 'Home',
        name: 'Home',
      },
    ],
  },
];
