import React from "react";
import Buton from "../../components/common/button";
import MoniterImg from "../../assets/images/home-two-shape4.png";
import Girl from "../../assets/images/girl.png";
import Rocket from "../../assets/images/rocket.png";
import FacingRightImg from "../../assets/images/facingRight.png"
import FacingLeftImg from "../../assets/images/facingLeft.png"

const Home = () => {
  return (
    <>
      <section className="header_section">
        <div className="row">
          <div className="col-lg-4">
            <div className="header_left_content">
              <h1 className="main_heading">Be Unique With Luzon IT Startup</h1>
              <p className="heading_subtext">
                Lorem ipsum dolor sit amet, consectetur adipiscing incididunt ut
                laboredolore magna aliqua elsed tempomet, consectetur adipiscing
              </p>
              <div className="common_btns d-flex align-items-center">
                <Buton title="Get Started" />
                <Buton title="Contact Us" btn_class="btn_bg_change" />
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="header_right_content d-flex justify-content-end">
              <div className="header_img position-relative">
                <img src={MoniterImg} alt="moniter-img" />
                <div className="girl_img position-absolute">
                  <img src={Girl} alt="girl" />
                </div>
                <div className="rocket_img position-absolute">
                  <img src={Rocket} alt="rocket" />
                </div>
                <div className="FacingRight_img position-absolute">
                  <img src={FacingRightImg} alt="FacingRightImg" />
                </div>
                <div className="FacingLeft_img position-absolute">
                  <img src={FacingLeftImg} alt="FacingLeftImg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
