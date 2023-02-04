import {ADMIN_ORDERS, ADMIN_PRODUCTS, ADMIN_RETURNS, ADMIN_USERS} from '@/constants/routes';
import React from 'react';
import { NavLink } from 'react-router-dom';

const SideNavigation = () => (
  <aside className="sidenavigation">
    <div className="sidenavigation-wrapper">
      <div className="sidenavigation-item">
        <NavLink
          activeClassName="sidenavigation-menu-active"
          className="sidenavigation-menu"
          to={ADMIN_PRODUCTS}
        >
          Products
        </NavLink>
      </div>
      <div className="sidenavigation-item">
        <NavLink
            activeClassName="sidenavigation-menu-active"
            className="sidenavigation-menu"
            to={ADMIN_USERS}
        >
          Users
        </NavLink>
      </div>
      <div className="sidenavigation-item">
        <NavLink
            activeClassName="sidenavigation-menu-active"
            className="sidenavigation-menu"
            to={ADMIN_ORDERS}
        >
          Orders
        </NavLink>
        <div className="sidenavigation-item">
          <NavLink
              activeClassName="sidenavigation-menu-active"
              className="sidenavigation-menu"
              to={ADMIN_RETURNS}
          >
            Returns
          </NavLink>
        </div>
      </div>
    </div>
  </aside>
);

export default SideNavigation;
