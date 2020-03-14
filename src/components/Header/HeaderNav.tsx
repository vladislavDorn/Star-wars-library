import React from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

import { headerNaVData } from "./headerNavData";

export default () => {
  return (
    <ul className="header__nav">
      {headerNaVData.map(({ title, path }, index) => {
        return (
          <li className="header__nav_item" key={index}>
            <NavLink
              className="header__nav_item_link"
              activeClassName="header__nav_active"
              to={path}
            >
              {title}
            </NavLink>
          </li>
        );
      })}
    </ul>
  );
};
