import React from "react";
import Logo from "../../assets/images/healthTech_logo.svg";

const About = () => {
  return (
    <>
      <div className="login_main_container">
        <div className="login_page">
          <div className="row">
            <div className="col-lg-6">
              <div className="login_left">
                <div className="logo_img">
                  <img src={Logo} alt="Logo" />
                </div>
                <div className="require_info">
                  <div className="heading">
                    <h1>Welcome Back</h1>
                    <p>Log in to your existing account.</p>
                  </div>
                  <div className="input_&_btns">
                    <div className="input_field">
                      <label>Email</label>
                      <input type="email" placeholder="Enter your Email" />
                    </div>
                    <div className="input_field">
                      <label>Password</label>
                      <input type="email" placeholder="Enter your Password" />
                    </div>
                    <div className="forget">
                      <a href="#">Forget Password</a>
                    </div>
                    <div className="btns">
                      <button>Login</button>
                      
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
