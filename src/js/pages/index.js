/* eslint-disable func-names */
import { Link } from 'react-router-dom';
import React from 'react';

export default function () {
  return (
    <>
      <div className="grid-col-3">
        <div>
          <h1>Design patterns</h1>
          <div className="flex flex-column flex-one flex-gap-1">
            <div>
              <h3>The invoker</h3>
              <ul className="menu">
                <li>
                  <Link to="/patterns/invoker/introduction">Introduction</Link>
                </li>
                <li>
                  <Link to="/patterns/invoker/invokable">Invokable classes</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3>The factory</h3>
              <ul className="menu">
                <li>
                  <Link to="/patterns/factory/introduction">Introduction</Link>
                </li>
                <li>
                  <Link to="/patterns/factory/factory">Factory classes</Link>
                </li>
              </ul>
            </div>
            <div>
              <h3>The builder</h3>
              <ul className="menu">
                <li>
                  <Link to="/patterns/builder/introduction">Introduction</Link>
                </li>
                <li>
                  <Link to="/patterns/builder/builder">Builder classes</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h1>Wordpress</h1>
          <div className="flex flex-column flex-one">
            <div>
              <h3>Plugin in a container</h3>
              <ul className="menu">
                <li>
                  <Link to="/wordpress/plugin/introduction">Introduction</Link>
                </li>
                <li>
                  <Link to="/wordpress/plugin/structure">Plugin structure</Link>
                </li>
                <li>
                  <Link to="/wordpress/plugin/bootstrap">Bootstrapping</Link>
                </li>
                <li>
                  <Link to="/wordpress/plugin/providers">Service providers</Link>
                </li>
                <li>
                  <Link to="/wordpress/plugin/dependency">Dependency injection</Link>
                </li>
                <li>
                  <Link to="/wordpress/plugin/facades">Facades</Link>
                </li>
                <li>
                  <Link to="/wordpress/plugin/logger">Logger</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div>
          <h1>Laravel boilerplate</h1>
          <div className="flex flex-column">
            <h3>Architecture</h3>
            <div className="grid-col-2">
              <div>
                <h3 className="mt-0">Web</h3>
                <ul className="menu">
                  <li>
                    <Link to="/laravel/web/routes">Web routes</Link>
                  </li>
                  <li>
                    <Link to="/laravel/web/controllers">View controllers</Link>
                  </li>
                  <li>
                    <Link to="/laravel/web/views">Views</Link>
                  </li>
                  <li>
                    <Link to="/laravel/web/assets">Assets</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mt-0">Api</h3>
                <ul className="menu">
                  <li>
                    <Link to="/laravel/api/routes">Api routes</Link>
                  </li>
                  <li>
                    <Link to="/laravel/api/controllers">Route controllers</Link>
                  </li>
                  <li>
                    <Link to="/laravel/api/request">Request classes</Link>
                  </li>
                  <li>
                    <Link to="/laravel/api/actions">Action classes</Link>
                  </li>
                </ul>
              </div>
            </div>
            <h3>Packages</h3>
            <div className="grid-col-2">
              <div>
                <h4 className="mt-0 mb-05">Caching</h4>
                <ul className="menu">
                  <li>
                    <a href="https://github.com/crowdfavorite/persist/blob/master/README.md" target="_blank" rel="noreferrer">CrowdFavorite Persist</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mt-0 mb-05">Http requests</h4>
                <ul className="menu">
                  <li>
                    <a href="https://github.com/crowdfavorite/fetch/blob/master/README.md" target="_blank" rel="noreferrer">CrowdFavorite Fetch</a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mt-0 mb-05">Response</h4>
                <ul className="menu">
                  <li>
                    <a href="https://github.com/crowdfavorite/respond/blob/master/README.md" target="_blank" rel="noreferrer">CrowdFavorite Respond</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid-col-2">
              <div>
                <h3 className="mb-05">Development</h3>
                <ul className="menu">
                  <li>
                    <Link to="/laravel/development/requirement">Requirement</Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="mb-05">Production</h3>
                <ul className="menu">
                  <li>
                    <Link to="/laravel/production/guidance">Guidance</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid-col-3">
        <div>
          <h1>Code styling</h1>
          <ul className="menu">
            <li>
              <Link to="/code/style/phpcsfixer">Php CS Fixer</Link>
            </li>
            <li>
              <Link to="/code/style/phpcodesniffer">Php Code Sniffer</Link>
            </li>
          </ul>
        </div>
        <div>
          <h1>Code quality</h1>
          <ul className="menu">
            <li>
              <Link to="/code/quality/phpstan">PhpStan</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
