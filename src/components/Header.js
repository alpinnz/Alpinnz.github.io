import React from "react";
import Typed from "react-typed";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="main-info">
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
