import React from "react";
import Logo from "../../assets/images/healthTech_logo.svg";

const About = () => {
  return (
    <>
      <div className="login_page">
        <div className="row">
          <div className="col-lg-6">
            <div className="login_left">
              <div className="logo_img">
                <img src={Logo} alt="Logo" />
              </div>
              
            </div>
          </div>
          <div className="col-lg-6"></div>
        </div>
      </div>
    </>
  );
};

export default About;
