/* eslint-disable func-names */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import React, { Suspense } from 'react';
import Loading from '@js/components/router/loading';
import routes from '@js/router/routes.ts';
import { RouteProps } from './types';

const routeComponents: JSX.Element[] = routes
  .map((route: RouteProps) => {
    if (route.children === undefined) {
      return (
        <Route
          key={route.key}
          path={route.path}
          element={<route.component />}
        />
      );
    }
    return (
      <Route
        key={route.key}
        path={route.path}
        element={<route.component />}
      >
        {
          route.children.map((child: RouteProps, index: number) => (
            <Route
              key={`${child.key}_${index}`}
              path={child.path}
              element={<child.component />}
            />
          ))
        }
      </Route>
    );
  });

export default function (): JSX.Element {
  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <Routes>
          {routeComponents}
        </Routes>
      </Suspense>
    </Router>
  );
}
