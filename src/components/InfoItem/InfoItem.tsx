import React from "react";
import "./style.css";

import Spinner from "../spinner";

import R2D2 from "../../assets/images/r2d2.jpg";

const InfoItem: React.FC = () => {
  const isLoad = false;
  return (
    <div className="starwars__infoitem">
      {isLoad ? (
        <Spinner />
      ) : (
        <>
          <div className="starwars__infoitem_image_wrapper">
            <img src={R2D2} alt="" className="starwars__infoitem_image" />
          </div>
          <div className="starwars__infoitem_info">
            <h2 className="starwars__infoitem_title">Random Item</h2>
            <ul className="starwars__infoitem_nav">
              <li className="starwars__infoitem_nav_item">
                random text:{" "}
                <span className="starwars__infoitem_nav_value">
                  random value
                </span>
              </li>
              <li className="starwars__infoitem_nav_item">
                random text:{" "}
                <span className="starwars__infoitem_nav_value">
                  random value
                </span>
              </li>
              <li className="starwars__infoitem_nav_item">
                random text:{" "}
                <span className="starwars__infoitem_nav_value">
                  random value
                </span>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};

export default InfoItem;
