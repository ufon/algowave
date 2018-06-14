import withAuth from 'enhancers/withAuth';

import HomePage from 'pages/HomePage';
import LoginPage from 'pages/LoginPage';
import LogoutPage from 'pages/LogoutPage';

const routes = [
  {
    path: '/login',
    component: LoginPage,
    exact: true
  },
  {
    path: '/logout',
    component: LogoutPage,
    exact: true
  },
  {
    path: '/',
    component: withAuth(HomePage),
    exact: true
  }
];

export default routes;
