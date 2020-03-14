import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

import HeaderNav from './HeaderNav'

const Header: React.FC = () => {
  return (
    <header className="starwars__header">
      <div className="container">
        <div className="starwars__header_list">
          <Link className="starwars__header_logo" to="/" />
          <HeaderNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
