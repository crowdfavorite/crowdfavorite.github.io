/* eslint-disable func-names */
/* eslint-disable react/no-array-index-key */
import {
  HashRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import React, { Suspense } from 'react';
import Loading from '@js/components/router/loading';
import routes from '@js/router/routes';

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
    <Router>
      <Suspense fallback={Loading}>
        <Routes>
          {routeComponents}
        </Routes>
      </Suspense>
    </Router>
  );
}
