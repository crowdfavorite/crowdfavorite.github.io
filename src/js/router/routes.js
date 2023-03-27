import React from 'react';

const routes = [
  {
    key: 'home',
    exact: true,
    path: '/',
    component: React.lazy(() => import('@js/pages/Home')),
  },
  {
    key: 'invokable_introduction',
    path: '/patterns/invoker/introduction',
    component: React.lazy(() => import('@js/pages/patterns/invoker/Introduction')),
  },
  {
    key: 'invokable_classes',
    path: '/patterns/invoker/invokable',
    component: React.lazy(() => import('@js/pages/patterns/invoker/Invokable')),
  },
  {
    key: 'builder_introduction',
    path: '/patterns/builder/introduction',
    component: React.lazy(() => import('@js/pages/patterns/builder/Introduction')),
  },
  {
    key: 'builder_classes',
    path: '/patterns/builder/builder',
    component: React.lazy(() => import('@js/pages/patterns/builder/Builder')),
  },
  {
    key: 'factory_introduction',
    path: '/patterns/factory/introduction',
    component: React.lazy(() => import('@js/pages/patterns/factory/Introduction')),
  },
  {
    key: 'factory_classes',
    path: '/patterns/factory/factory',
    component: React.lazy(() => import('@js/pages/patterns/factory/Factory')),
  },
  {
    key: 'plugin_introduction',
    path: '/wordpress/plugin/introduction',
    component: React.lazy(() => import('@js/pages/wordpress/plugin/Introduction')),
  },
  {
    key: 'plugin_structure',
    path: '/wordpress/plugin/structure',
    component: React.lazy(() => import('@js/pages/wordpress/plugin/Structure')),
  },
  {
    key: 'plugin_bootstrap',
    path: '/wordpress/plugin/bootstrap',
    component: React.lazy(() => import('@js/pages/wordpress/plugin/Bootstrap')),
  },
  {
    key: 'plugin_providers',
    path: '/wordpress/plugin/providers',
    component: React.lazy(() => import('@js/pages/wordpress/plugin/Providers')),
  },
  {
    key: 'plugin_dependency',
    path: '/wordpress/plugin/dependency',
    component: React.lazy(() => import('@js/pages/wordpress/plugin/Dependency')),
  },
  {
    key: 'plugin_facades',
    path: '/wordpress/plugin/facades',
    component: React.lazy(() => import('@js/pages/wordpress/plugin/Facades')),
  },
  {
    key: 'plugin_logger',
    path: '/wordpress/plugin/logger',
    component: React.lazy(() => import('@js/pages/wordpress/plugin/logger/Index')),
    children: [
      {
        key: 'plugin_logger_introduction',
        path: '/wordpress/plugin/logger/introduction',
        component: React.lazy(() => import('@js/pages/wordpress/plugin/logger/Introduction')),
      },
      {
        key: 'plugin_logger_channels',
        path: '/wordpress/plugin/logger/channels',
        component: React.lazy(() => import('@js/pages/wordpress/plugin/logger/Channels')),
      },
    ],
  },
  {
    key: 'laravel_web_routes',
    path: '/laravel/web/routes',
    component: React.lazy(() => import('@js/pages/laravel/web/Routes')),
  },
  {
    key: 'laravel_web_controllers',
    path: '/laravel/web/controllers',
    component: React.lazy(() => import('@js/pages/laravel/web/Controllers')),
  },
  {
    key: 'laravel_web_views',
    path: '/laravel/web/views',
    component: React.lazy(() => import('@js/pages/laravel/web/Views')),
  },
  {
    key: 'laravel_web_assets',
    path: '/laravel/web/assets',
    component: React.lazy(() => import('@js/pages/laravel/web/Assets')),
  },
  {
    key: 'laravel_api_routes',
    path: '/laravel/api/routes',
    component: React.lazy(() => import('@js/pages/laravel/api/Routes')),
  },
  {
    key: 'laravel_api_controllers',
    path: '/laravel/api/controllers',
    component: React.lazy(() => import('@js/pages/laravel/api/Controllers')),
  },
  {
    key: 'laravel_api_request',
    path: '/laravel/api/request',
    component: React.lazy(() => import('@js/pages/laravel/api/Request')),
  },
  {
    key: 'laravel_api_actions',
    path: '/laravel/api/actions',
    component: React.lazy(() => import('@js/pages/laravel/api/Actions')),
  },
  {
    key: 'laravel_requirement',
    path: '/laravel/development/requirement',
    component: React.lazy(() => import('@js/pages/laravel/development/Requirement')),
  },
  {
    key: 'laravel_guidance',
    path: '/laravel/production/guidance',
    component: React.lazy(() => import('@js/pages/laravel/production/Guidance')),
  },
  {
    key: 'code_php_stan',
    path: '/code/quality/phpstan',
    component: React.lazy(() => import('@js/pages/code/quality/Phpstan')),
  },
  {
    key: 'code_php_cs_fixer',
    path: '/code/style/phpcsfixer',
    component: React.lazy(() => import('@js/pages/code/style/Phpcsfixer')),
  },
  {
    key: 'code_php_sniffer',
    path: '/code/style/phpcodesniffer',
    component: React.lazy(() => import('@js/pages/code/style/Phpcodesniffer')),
  },
];

export default routes;
