import { Link } from 'react-router-dom';
import React from 'react';

export default () => (
  <>
    <div className="grid-container">
      <div>
        <h2>Design patterns</h2>
        <div className="flex flex-gap-2">
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
      </div>
      <div>
        <h2>Wordpress</h2>
        <div className="flex flex-gap-2">
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
      </div>
    </div>
  </>
);
