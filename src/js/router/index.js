import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import React from 'react';
import { ThemeProvider } from '@primer/components';
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
import PluginFacades from '@js/pages/wordpress/plugin/facades';
import PluginLogger from '@js/pages/wordpress/plugin/logger/index';
import PluginLoggerIntroduction from '@js/pages/wordpress/plugin/logger/introduction';
import PluginLoggerChannels from '@js/pages/wordpress/plugin/logger/channels';
import LaravelWebRoutes from '@js/pages/laravel/web/routes';
import LaravelWebControllers from '@js/pages/laravel/web/controllers';
import LaravelWebViews from '@js/pages/laravel/web/views';
import LaravelWebAssets from '@js/pages/laravel/web/assets';
import LaravelApiRoutes from '@js/pages/laravel/api/routes';
import LaravelApiControllers from '@js/pages/laravel/api/controllers';
import LaravelApiRequest from '@js/pages/laravel/api/request';
import LaravelApiActions from '@js/pages/laravel/api/actions';
import LaravelRequirement from '@js/pages/laravel/development/requirement';
import LaravelGuidance from '@js/pages/laravel/production/guidance';
import CodePhpStan from '@js/pages/code/quality/phpstan';
import CodePhpCsFixer from '@js/pages/code/style/phpcsfixer';
import CodePhpCodeSniffer from '@js/pages/code/style/phpcodesniffer';

const routes = [
  {
    exact: true,
    path: '/',
    component: Home,
  },
  {
    path: '/patterns/invoker/introduction',
    component: InvokableIntroduction,
  },
  {
    path: '/patterns/invoker/invokable',
    component: InvokableClasses,
  },
  {
    path: '/patterns/builder/introduction',
    component: BuilderIntroduction,
  },
  {
    path: '/patterns/builder/builder',
    component: BuilderClasses,
  },
  {
    path: '/patterns/factory/introduction',
    component: FactoryIntroduction,
  },
  {
    path: '/patterns/factory/factory',
    component: FactoryClasses,
  },
  {
    path: '/wordpress/plugin/introduction',
    component: PluginIntroduction,
  },
  {
    path: '/wordpress/plugin/structure',
    component: PluginStructure,
  },
  {
    path: '/wordpress/plugin/bootstrap',
    component: PluginBootstrap,
  },
  {
    path: '/wordpress/plugin/providers',
    component: PluginProviders,
  },
  {
    path: '/wordpress/plugin/dependency',
    component: PluginDependency,
  },
  {
    path: '/wordpress/plugin/facades',
    component: PluginFacades,
  },
  {
    path: '/wordpress/plugin/logger',
    component: PluginLogger,
    children: [
      {
        path: '/wordpress/plugin/logger/introduction',
        component: PluginLoggerIntroduction,
      },
      {
        path: '/wordpress/plugin/logger/channels',
        component: PluginLoggerChannels,
      },
    ],
  },
  {
    path: '/laravel/web/routes',
    component: LaravelWebRoutes,
  },
  {
    path: '/laravel/web/controllers',
    component: LaravelWebControllers,
  },
  {
    path: '/laravel/web/views',
    component: LaravelWebViews,
  },
  {
    path: '/laravel/web/assets',
    component: LaravelWebAssets,
  },
  {
    path: '/laravel/api/routes',
    component: LaravelApiRoutes,
  },
  {
    path: '/laravel/api/controllers',
    component: LaravelApiControllers,
  },
  {
    path: '/laravel/api/request',
    component: LaravelApiRequest,
  },
  {
    path: '/laravel/api/actions',
    component: LaravelApiActions,
  },
  {
    path: '/laravel/development/requirement',
    component: LaravelRequirement,
  },
  {
    path: '/laravel/production/guidance',
    component: LaravelGuidance,
  },
  {
    path: '/code/quality/phpstan',
    component: CodePhpStan,
  },
  {
    path: '/code/style/phpcsfixer',
    component: CodePhpCsFixer,
  },
  {
    path: '/code/style/phpcodesniffer',
    component: CodePhpCodeSniffer,
  },
];

const routeComponents = routes
  .map((route, index) => {
  // eslint-disable-next-line no-param-reassign
    route.key = index;
    return route;
  })
  .map((route) => {
    if (route.children === undefined) {
      return (
        <Route
          key={route.key}
          exact={route.exact}
          path={route.path}
          element={<route.component />}
        />
      );
    }
    return (
      <Route>
        <Route
          key={route.key}
          exact={route.exact}
          path={route.path}
          element={<route.component />}
        />
        {
          route.children.map((child) => (
            <Route
              key={child.key}
              exact={child.exact}
              path={child.path}
              element={<child.component />}
            />
          ))
        }
      </Route>
    );
  });

export default () => (
  <ThemeProvider>
    <Router>
      <Routes>
        {routeComponents}
      </Routes>
    </Router>
  </ThemeProvider>
);
