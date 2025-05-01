import React from "react";
import Buton from "../../components/common/button";
import MoniterImg from "../../assets/images/home-two-shape4.png";
import Girl from "../../assets/images/girl.png";
import Rocket from "../../assets/images/rocket.png";
import FacingRightImg from "../../assets/images/facingRight.png";
import FacingLeftImg from "../../assets/images/facingLeft.png";
import Features from "../../components/common/features";
import WorkImg from "../../assets/images/workImg.jpg";
import ServiceCard from "../../components/common/serviceCard";
import Support from "../../assets/images/supportImg.png";
import { FaToolbox } from "react-icons/fa6";
import { BsGlobe } from "react-icons/bs";
import { GrCloudSoftware } from "react-icons/gr";
import { FiEdit } from "react-icons/fi";
import { GiDeathZone } from "react-icons/gi";
import { GiMagnifyingGlass } from "react-icons/gi";
import { PiMonitorArrowUpFill } from "react-icons/pi";


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
      <section className="creative_features">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="heding_container d-flex justify-content-center align-items-center flex-column">
                <h2 className="section_heading">Creative Features</h2>
                <p className="section_heading_subtext">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incidiunt labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida.
                </p>
                <div className="bar"></div>
              </div>
            </div>
            <div className="features">
              <Features />
            </div>
          </div>
        </div>
        <div className="creative_feature_lower_area position-relative">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="col-12">
                  <div className="creative_feature_lower_content">
                    <h4 className="creative_feature_lower_content_heading">
                      Brainstorming,<span>Researching</span>Planning,
                      Strategizing Work
                    </h4>
                    <p className="section_heading_subtext">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed dood tempor incididunt ut labore et dolore magna
                      aliqua. Quis ipsum suspendisse ultrices gravida. Risus
                      commodo viverra maecenas.
                    </p>
                  </div>
                  <div className="row">
                    <div className="col-lg-6">
                      <div className="complete_project">
                        <div className="counts">
                          50<span>K</span>
                        </div>
                        <span className="subHeading">Completeed Project</span>
                        <p className="section_heading_subtext">
                          Lorem ipsum dolor sit amet consectetur do eiusmod
                          tempor incididunt ut labore et dolore
                        </p>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="complete_project">
                        <div className="counts">
                          98<span>%</span>
                        </div>
                        <span className="subHeading">
                          Customer Satisfaction
                        </span>
                        <p className="section_heading_subtext">
                          Lorem ipsum dolor sit amet consectetur do eiusmod
                          tempor incididunt ut labore et dolore
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div className="creative_feature_lower_img">
                  <img src={WorkImg} alt="workImg" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="agency_service_section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="heding_container d-flex justify-content-center align-items-center flex-column">
                <h2 className="section_heading">IT Agency Services</h2>
                <p className="section_heading_subtext">
                  Lorem ipsums dolor it amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incidiunt labore et dolore magna aliqua.
                  Quis ipsum suspendisse ultrices gravida.
                </p>
                <div className="bar"></div>
              </div>
              <div className="agency_service_cards d-flex align-items-center">
                <ServiceCard />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="support_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="supportRight">
                <img src={Support} alt="supportImg" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="supportLeft d-flex flex-column align-items-center justify-content-center h-100">
                <div className="supportLeft_Content d-flex align-items-start">
                  <i className="support_Content_icon">
                    <FaToolbox />
                  </i>
                  <div className="support_Content_text d-flex flex-column justify-content-start">
                    <span className="subHeading">Amazing Support</span>
                    <p className="section_heading_subtext">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incidiunt labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <div className="supportLeft_Content d-flex align-items-start">
                  <i className="support_Content_icon">
                    <BsGlobe />
                  </i>
                  <div className="support_Content_text d-flex flex-column justify-content-start">
                    <span className="subHeading">Big Data Analysis</span>
                    <p className="section_heading_subtext">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incidiunt labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
                <div className="supportLeft_Content d-flex align-items-start">
                  <i className="support_Content_icon">
                    <GrCloudSoftware />
                  </i>
                  <div className="support_Content_text d-flex flex-column justify-content-start">
                    <span className="subHeading">Cloud Computing</span>
                    <p className="section_heading_subtext">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incidiunt labore et dolore magna
                      aliqua.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="overView_section">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <div className="overView d-flex flex-column justify-content-center align-items-center">
                <div className="icon_container">
                  <div className="icon_bg d-flex justify-content-center align-items-center">
                    <i><FiEdit /></i>
                  </div>
                </div>
                <span className="subHeading">Sketch</span>
                <p className="section_heading_subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="overView d-flex flex-column justify-content-center align-items-center">
                <div className="icon_container">
                  <div className="icon_bg d-flex justify-content-center align-items-center">
                    <i><GiDeathZone /></i>
                  </div>
                </div>
                <span className="subHeading">Design</span>
                <p className="section_heading_subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="overView d-flex flex-column justify-content-center align-items-center">
                <div className="icon_container">
                  <div className="icon_bg d-flex justify-content-center align-items-center">
                    <i><GiMagnifyingGlass /></i>
                  </div>
                </div>
                <span className="subHeading">Teting</span>
                <p className="section_heading_subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="overView d-flex flex-column justify-content-center align-items-center">
                <div className="icon_container">
                  <div className="icon_bg d-flex justify-content-center align-items-center">
                    <i><PiMonitorArrowUpFill /></i>
                  </div>
                </div>
                <span className="subHeading">Develop</span>
                <p className="section_heading_subtext">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
