import React, { useState } from "react";
import "./header.css";
import CTA from "./CTA"; //here we import the CTA component inside our header
import me_webp from "../../assets/changer.v4.webp";
import me_png from "../../assets/changer.v4.png";
import HeaderSocial from "./HeaderSocial"; //import of headerSocial component
export const Header = () => {
  const [activeNav, setActiveNav] = useState("#about");
  return (
    <header>
      <div className="container header__container">
        <div className="right">
          <div className="my_image">
            <picture>
              <source srcSet={me_webp} type="image/webp" />
              <source srcSet={me_png} type="image/png" />
              <img src={me_png} alt="my_image" className="img" />
            </picture>
          </div>
        </div>
        <div className="left">
          <h5>Hello I'm</h5>
          <h1>Kenfack Sameza Victorin-Joy</h1>
          <h5 className="text-light">Junior Software Engineer</h5>
          <CTA />
          <HeaderSocial />
        </div>
        <a
          href="#about"
          onClick={() => setActiveNav("#about")}
          className={
            activeNav === "#about" ? "scroll__down active" : "scroll__down"
          }
        >
          Scroll down
        </a>
      </div>
    </header>
  );
};
export default Header;
