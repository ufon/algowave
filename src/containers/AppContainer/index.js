import React from 'react';
import routes from 'routes';
import { AppLayout } from 'components';
import { Route } from 'react-router-dom';
import './styles.scss';

const App = () => <AppLayout>{routes.map(route => <Route key={route.path} {...route} />)}</AppLayout>;

export default App;
