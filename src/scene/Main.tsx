import React from "react";

import Header from "../components/Header/Header";
import RandomItem from "../components/RandomItem/RandomItem";
import ItemsList from "../components/ItemsList/ItemsList";
import InfoItem from "../components/InfoItem/InfoItem";

const Main: React.FC = () => {
  return (
    <>
      <Header />
      <div className="container">
        <RandomItem />  
        <div className="flex_grid">
          <ItemsList />
          <InfoItem />
        </div>
      </div>
    </>
  );
};

export default Main;
