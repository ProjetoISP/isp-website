import React from "react";
import { PartnersContainer } from "./styles.js";
import partner1 from "./assets/partner1.png";
import partner2 from "./assets/partner2.png";
import partner3 from "./assets/partner3.png";
import partner4 from "./assets/partner4.png";
import partner5 from "./assets/partner5.png";
import partner6 from "./assets/partner6.png";
import partner7 from "./assets/partner7.png";
import partner8 from "./assets/partner8.png";

export const Partners = () => {
  return (
    <PartnersContainer>
      <h2> Parceiros </h2>
      <div>
        <img src={partner1} alt="" />
        <img src={partner2} alt="" />
        <img src={partner3} alt="" />
        <img src={partner4} alt="" />
        <img src={partner5} alt="" />
        <img src={partner6} alt="" />
        <img src={partner7} alt="" />
        <img src={partner8} alt="" />
      </div>
    </PartnersContainer>
  );
};
