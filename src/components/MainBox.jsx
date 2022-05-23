import React from "react";
import MainBoxStyled from "./styles/MainBoxStyled";
import databiz from "../assets/images/client-databiz.svg";
import audio from "../assets/images/client-audiophile.svg";
import meet from "../assets/images/client-meet.svg";
import maker from "../assets/images/client-maker.svg";
import imgMobile from "../assets/images/image-hero-mobile.png";
import imgDesktop from "../assets/images/image-hero-desktop.png";

const MainBox = () => {
  return (
    <MainBoxStyled>
      <div className="main-img">
        <img src={imgMobile} alt="" className="mobile-img" />
        <img src={imgDesktop} alt="" className="desktop-img" />
      </div>

      <div className="text">
        <h1>Make remote work</h1>
        <p>
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
        <button>Learn more</button>
        <div className="icons">
          <img src={databiz} alt="" />
          <img src={audio} alt="" />
          <img src={meet} alt="" />
          <img src={maker} alt="" />
        </div>
      </div>
    </MainBoxStyled>
  );
};

export default MainBox;
