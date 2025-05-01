import React from "react";
import { BsBackpack2, BsBackpack3 } from "react-icons/bs";
import { FaRegCalendarDays } from "react-icons/fa6";
import { MdOutlineSecurity } from "react-icons/md";
import { GoStopwatch } from "react-icons/go";

const Features = () => {
  const featureData = [
    {
      icon: <BsBackpack3 />,
      featureCradTitle: "Great Design",
      featureCradText:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt",
    },
    {
      icon: <FaRegCalendarDays />,
      featureCradTitle: "Optimal Choice",
      featureCradText:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt",
    },
    {
      icon: <MdOutlineSecurity />,
      featureCradTitle: "Finest Quality",
      featureCradText:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt",
    },
    {
      icon: <GoStopwatch />,
      featureCradTitle: "Time Saving",
      featureCradText:
        "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row">
          {featureData.map((item, index) => {
            return (
              <div className="col-lg-3">
                <div className="feature_card d-flex justify-content-center align-items-center flex-column">
                  <div key={index} className="feature_icon d-flex justify-content-center align-items-center">
                    <i>{item.icon}</i>
                  </div>
                  <h3 className="feature_card_titile">{item.featureCradTitle}</h3>
                  <p className="section_heading_subtext feature_card_text">{item.featureCradText}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Features;
