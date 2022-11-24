import React from "react";
import logo from "../assets/images/logo.svg";
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <img src={logo} alt="bizstats" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Business <span>Statistics</span> app
          </h1>
          <p>Business statistics and sales prediction for local businesses.</p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="business stats" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
