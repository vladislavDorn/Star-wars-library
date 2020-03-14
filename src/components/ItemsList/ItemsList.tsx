import React from "react";
import './style.css'

import Spinner from "../spinner";

const ItemsList: React.FC = () => {
    const isLoad = true
  return (
    <div className="starwars__itemslist">
      {isLoad ? (
        <ul className="starwars__itemslist_nav">
          <li className="starwars__itemslist_nav_item">Test item</li>
          <li className="starwars__itemslist_nav_item">Test item</li>
          <li className="starwars__itemslist_nav_item">Test item</li>
          <li className="starwars__itemslist_nav_item">Test item</li>
          <li className="starwars__itemslist_nav_item">Test item</li>
          <li className="starwars__itemslist_nav_item">Test item</li>
          <li className="starwars__itemslist_nav_item">Test item</li>
        </ul>
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default ItemsList;
