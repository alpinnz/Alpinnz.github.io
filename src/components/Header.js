/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Typed from "react-typed";
import Images from "./../assets/images";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
        <img
          src={Images.profile}
          class="rounded-circle img-circle"
          alt="profile"
        />
        <h1>Alfin Noviaji</h1>
        <Typed
          className="typed-text"
          typeSpeed={40}
          backSpeed={60}
          loop
          strings={[
            "Web Development",
            "Flutter Development",
            "React Native Development",
          ]}
        />
        <a href="#" className="btn-main-offer">
          contact me
        </a>
      </div>
    </div>
  );
};

export default Header;
