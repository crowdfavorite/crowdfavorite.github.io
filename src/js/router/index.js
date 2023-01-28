/* eslint-disable func-names */
/* eslint-disable react/no-array-index-key */
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
    key: 'home',
    exact: true,
    path: '/',
    component: Home,
  },
  {
    key: 'invokable_introduction',
    path: '/patterns/invoker/introduction',
    component: InvokableIntroduction,
  },
  {
    key: 'invokable_classes',
    path: '/patterns/invoker/invokable',
    component: InvokableClasses,
  },
  {
    key: 'builder_introduction',
    path: '/patterns/builder/introduction',
    component: BuilderIntroduction,
  },
  {
    key: 'builder_classes',
    path: '/patterns/builder/builder',
    component: BuilderClasses,
  },
  {
    key: 'factory_introduction',
    path: '/patterns/factory/introduction',
    component: FactoryIntroduction,
  },
  {
    key: 'factory_classes',
    path: '/patterns/factory/factory',
    component: FactoryClasses,
  },
  {
    key: 'plugin_introduction',
    path: '/wordpress/plugin/introduction',
    component: PluginIntroduction,
  },
  {
    key: 'plugin_structure',
    path: '/wordpress/plugin/structure',
    component: PluginStructure,
  },
  {
    key: 'plugin_bootstrap',
    path: '/wordpress/plugin/bootstrap',
    component: PluginBootstrap,
  },
  {
    key: 'plugin_providers',
    path: '/wordpress/plugin/providers',
    component: PluginProviders,
  },
  {
    key: 'plugin_dependency',
    path: '/wordpress/plugin/dependency',
    component: PluginDependency,
  },
  {
    key: 'plugin_facades',
    path: '/wordpress/plugin/facades',
    component: PluginFacades,
  },
  {
    key: 'plugin_logger',
    path: '/wordpress/plugin/logger',
    component: PluginLogger,
    children: [
      {
        key: 'plugin_logger_introduction',
        path: '/wordpress/plugin/logger/introduction',
        component: PluginLoggerIntroduction,
      },
      {
        key: 'plugin_logger_channels',
        path: '/wordpress/plugin/logger/channels',
        component: PluginLoggerChannels,
      },
    ],
  },
  {
    key: 'laravel_web_routes',
    path: '/laravel/web/routes',
    component: LaravelWebRoutes,
  },
  {
    key: 'laravel_web_controllers',
    path: '/laravel/web/controllers',
    component: LaravelWebControllers,
  },
  {
    key: 'laravel_web_views',
    path: '/laravel/web/views',
    component: LaravelWebViews,
  },
  {
    key: 'laravel_web_assets',
    path: '/laravel/web/assets',
    component: LaravelWebAssets,
  },
  {
    key: 'laravel_api_routes',
    path: '/laravel/api/routes',
    component: LaravelApiRoutes,
  },
  {
    key: 'laravel_api_controllers',
    component: LaravelApiControllers,
  },
  {
    key: 'laravel_api_request',
    path: '/laravel/api/request',
    component: LaravelApiRequest,
  },
  {
    key: 'laravel_api_actions',
    path: '/laravel/api/actions',
    component: LaravelApiActions,
  },
  {
    key: 'laravel_requirement',
    path: '/laravel/development/requirement',
    component: LaravelRequirement,
  },
  {
    key: 'laravel_guidance',
    path: '/laravel/production/guidance',
    component: LaravelGuidance,
  },
  {
    key: 'code_php_stan',
    path: '/code/quality/phpstan',
    component: CodePhpStan,
  },
  {
    key: 'code_php_cs_fixer',
    path: '/code/style/phpcsfixer',
    component: CodePhpCsFixer,
  },
  {
    key: 'code_php_sniffer',
    path: '/code/style/phpcodesniffer',
    component: CodePhpCodeSniffer,
  },
];

const routeComponents = routes
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
          route.children.map((child, index) => (
            <Route
              key={`${child.key}_${index}`}
              exact={child.exact}
              path={child.path}
              element={<child.component />}
            />
          ))
        }
      </Route>
    );
  });

export default function () {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          {routeComponents}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
