import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import React from 'react';
import Home from '@js/pages';
import InvokableIntroduction from '@js/pages/patterns/invoker/introduction';
import InvokableClasses from '@js/pages/patterns/invoker/invokable';
import BuilderIntroduction from '@js/pages/patterns/builder/introduction';
import BuilderClasses from '@js/pages/patterns/builder/builder';
import FactoryIntroduction from '@js/pages/patterns/factory/introduction';
import FactoryClasses from '@js/pages/patterns/factory/factory';
import PluginIntroduction from '@js/pages/wordpress/plugin/introduction';
import PluginStructure from '@js/pages/wordpress/plugin/structure';
import PluginBootstrap from '@js/pages/wordpress/plugin/bootstrap';
import PluginProviders from '@js/pages/wordpress/plugin/providers';
import PluginDependency from '@js/pages/wordpress/plugin/dependency';

const routes = [
  {
    key: 0,
    exact: true,
    path: '/',
    component: Home,
  },
  {
    key: 1,
    path: '/patterns/invoker/introduction',
    component: InvokableIntroduction,
  },
  {
    key: 2,
    path: '/patterns/invoker/invokable',
    component: InvokableClasses,
  },
  {
    key: 3,
    path: '/patterns/builder/introduction',
    component: BuilderIntroduction,
  },
  {
    key: 4,
    path: '/patterns/builder/builder',
    component: BuilderClasses,
  },
  {
    key: 5,
    path: '/patterns/factory/introduction',
    component: FactoryIntroduction,
  },
  {
    key: 6,
    path: '/patterns/factory/factory',
    component: FactoryClasses,
  },
  {
    key: 7,
    path: '/wordpress/plugin/introduction',
    component: PluginIntroduction,
  },
  {
    key: 8,
    path: '/wordpress/plugin/structure',
    component: PluginStructure,
  },
  {
    key: 9,
    path: '/wordpress/plugin/bootstrap',
    component: PluginBootstrap,
  },
  {
    key: 10,
    path: '/wordpress/plugin/providers',
    component: PluginProviders,
  },
  {
    key: 11,
    path: '/wordpress/plugin/dependency',
    component: PluginDependency,
  },
];

const routeComponents = routes.map((route) => (
  <Route
    key={route.key}
    exact={route.exact}
    path={route.path}
    element={<route.component />}
  />
));

export default () => (
  <Router>
    <Routes>
      {routeComponents}
    </Routes>
  </Router>
);
