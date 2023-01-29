import React from 'react';

const routes = [
  {
    key: 'home',
    exact: true,
    path: '/',
    component: React.lazy(() => import('@js/pages')),
  },
  {
    key: 'invokable_introduction',
    path: '/patterns/invoker/introduction',
    component: React.lazy(() => import('@js/pages/patterns/invoker/introduction')),
  },
  {
    key: 'invokable_classes',
    path: '/patterns/invoker/invokable',
    component: React.lazy(() => import('@js/pages/patterns/invoker/invokable')),
  },
  {
    key: 'builder_introduction',
    path: '/patterns/builder/introduction',
    component: React.lazy(() => import('@js/pages/patterns/builder/introduction')),
  },
  {
    key: 'builder_classes',
    path: '/patterns/builder/builder',
    component: React.lazy(() => import('@js/pages/patterns/builder/builder')),
  },
  {
    key: 'factory_introduction',
    path: '/patterns/factory/introduction',
    component: React.lazy(() => import('@js/pages/patterns/factory/introduction')),
  },
  {
    key: 'factory_classes',
    path: '/patterns/factory/factory',
    component: React.lazy(() => import('@js/pages/patterns/factory/factory')),
  },
  {
    key: 'plugin_introduction',
    path: '/wordpress/plugin/introduction',
    component: React.lazy(() => import('@js/pages/wordpress/plugin/introduction')),
  },
  {
    key: 'plugin_structure',
    path: '/wordpress/plugin/structure',
    component: React.lazy(() => import('@js/pages/wordpress/plugin/structure')),
  },
  {
    key: 'plugin_bootstrap',
    path: '/wordpress/plugin/bootstrap',
    component: React.lazy(() => import('@js/pages/wordpress/plugin/bootstrap')),
  },
  {
    key: 'plugin_providers',
    path: '/wordpress/plugin/providers',
    component: React.lazy(() => import('@js/pages/wordpress/plugin/providers')),
  },
  {
    key: 'plugin_dependency',
    path: '/wordpress/plugin/dependency',
    component: React.lazy(() => import('@js/pages/wordpress/plugin/dependency')),
  },
  {
    key: 'plugin_facades',
    path: '/wordpress/plugin/facades',
    component: React.lazy(() => import('@js/pages/wordpress/plugin/facades')),
  },
  {
    key: 'plugin_logger',
    path: '/wordpress/plugin/logger',
    component: React.lazy(() => import('@js/pages/wordpress/plugin/logger/index')),
    children: [
      {
        key: 'plugin_logger_introduction',
        path: '/wordpress/plugin/logger/introduction',
        component: React.lazy(() => import('@js/pages/wordpress/plugin/logger/introduction')),
      },
      {
        key: 'plugin_logger_channels',
        path: '/wordpress/plugin/logger/channels',
        component: React.lazy(() => import('@js/pages/wordpress/plugin/logger/channels')),
      },
    ],
  },
  {
    key: 'laravel_web_routes',
    path: '/laravel/web/routes',
    component: React.lazy(() => import('@js/pages/laravel/web/routes')),
  },
  {
    key: 'laravel_web_controllers',
    path: '/laravel/web/controllers',
    component: React.lazy(() => import('@js/pages/laravel/web/controllers')),
  },
  {
    key: 'laravel_web_views',
    path: '/laravel/web/views',
    component: React.lazy(() => import('@js/pages/laravel/web/views')),
  },
  {
    key: 'laravel_web_assets',
    path: '/laravel/web/assets',
    component: React.lazy(() => import('@js/pages/laravel/web/assets')),
  },
  {
    key: 'laravel_api_routes',
    path: '/laravel/api/routes',
    component: React.lazy(() => import('@js/pages/laravel/api/routes')),
  },
  {
    key: 'laravel_api_controllers',
    component: React.lazy(() => import('@js/pages/laravel/api/controllers')),
  },
  {
    key: 'laravel_api_request',
    path: '/laravel/api/request',
    component: React.lazy(() => import('@js/pages/laravel/api/request')),
  },
  {
    key: 'laravel_api_actions',
    path: '/laravel/api/actions',
    component: React.lazy(() => import('@js/pages/laravel/api/actions')),
  },
  {
    key: 'laravel_requirement',
    path: '/laravel/development/requirement',
    component: React.lazy(() => import('@js/pages/laravel/development/requirement')),
  },
  {
    key: 'laravel_guidance',
    path: '/laravel/production/guidance',
    component: React.lazy(() => import('@js/pages/laravel/production/guidance')),
  },
  {
    key: 'code_php_stan',
    path: '/code/quality/phpstan',
    component: React.lazy(() => import('@js/pages/code/quality/phpstan')),
  },
  {
    key: 'code_php_cs_fixer',
    path: '/code/style/phpcsfixer',
    component: React.lazy(() => import('@js/pages/code/style/phpcsfixer')),
  },
  {
    key: 'code_php_sniffer',
    path: '/code/style/phpcodesniffer',
    component: React.lazy(() => import('@js/pages/code/style/phpcodesniffer')),
  },
];

export default routes;
