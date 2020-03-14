import React from "react";
import TestImg from "../../assets/images/random.jpg";

export default () => (
  <>
    <div className="starwars__random_Item__image_wrapper">
      <img
        src={TestImg}
        alt="Random item"
        className="starwars__random_Item__image"
      />
    </div>
    <div className="starwars__random_Item__info">
      <h2 className="starwars__random_Item__info_title">Random title</h2>
      <ul className="starwars__random_Item__info_nav">
        <li className="starwars__random_Item__info_nav_item">
          random text:
          <span className="starwars__random_Item__info_nav_item_value">
            random value
          </span>
        </li>
        <li className="starwars__random_Item__info_nav_item">
          random text:
          <span className="starwars__random_Item__info_nav_item_value">
            random value
          </span>
        </li>
        <li className="starwars__random_Item__info_nav_item">
          random text:
          <span className="starwars__random_Item__info_nav_item_value">
            random value
          </span>
        </li>
      </ul>
    </div>
  </>
);
