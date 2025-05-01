import React from "react";
import { BsFillSuitcaseLgFill } from "react-icons/bs";
import { PiMonitorFill } from "react-icons/pi";
import { HiSpeakerphone } from "react-icons/hi";
import { FaMobileRetro } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { FaToolbox } from "react-icons/fa";

const ServiceCard = () => {
  const serviceCardData = [
    {
      icon: <BsFillSuitcaseLgFill />,
      bgColor: "#deb0fe",
      title: "IT Consultancy",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore facilisis.",
      btn: "Read More",
    },
    {
      icon: <PiMonitorFill />,
      bgColor: "#79e8e2",
      title: "Web Development",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore facilisis.",
      btn: "Read More",
    },
    {
      icon: <HiSpeakerphone />,
      bgColor: "#fcc774",
      title: "Digital Marketing",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore facilisis.",
      btn: "Read More",
    },
    {
      icon: <FaMobileRetro />,
      bgColor: "#84b7fd",
      title: "App Development",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore facilisis.",
      btn: "Read More",
    },
    {
      icon: <FiShoppingCart />,
      bgColor: "#fe929f",
      title: "E-commerce Development",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore facilisis.",
      btn: "Read More",
    },
    {
      icon: <FaToolbox />,
      bgColor: "#2e1342",
      title: "IT Solutions",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore facilisis.",
      btn: "Read More",
    },
  ];
  return (
    <>
      <div className="row">
        {serviceCardData.map((items, index) => {
          return (
            <div key={index} className="col-lg-4">
              <div className="serviceCard bg-white mb-4 rounded-3 d-flex flex-column justify-contentr-center align-items-center">
                <div style={{backgroundColor:items.bgColor}} className="cardIcon d-flex justify-content-center align-items-center">
                  <i>{items.icon}</i>
                </div>
                <h3 className="feature_card_titile">{items.title}</h3>
                <p className="section_heading_subtext">{items.text}</p>
                <a className="service_card_btn text-decoration-none" href="#">
                  {items.btn}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ServiceCard;
