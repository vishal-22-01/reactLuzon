import React from "react";
import { LuSquareCheckBig } from "react-icons/lu";
import { FaRegSmile } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { GiTrophyCup } from "react-icons/gi";

const Counter = () => {
  const counterData = [
    {
      icon: <LuSquareCheckBig />,
      number: 950,
      title: "Completed Project",
    },
    {
      icon: <FaRegSmile />,
      number: 150,
      title: "Happy Clients",
    },
    {
      icon: <IoSettingsOutline />,
      number: 550,
      title: "Multi Services",
    },
    {
      icon: <GiTrophyCup />,
      number: 750,
      title: "Winning Awards",
    },
  ];
  return (
    <>
      <div className="container">
        <div className="row">
          {counterData.map((items, index) => {
            return (
              <div className="col-lg-3">
                <div key={index} className="counter_card d-flex flex-column justify-content-center align-items-center">
                  <div className="counter_card_icon d-flex justify-content-center align-items-center">
                    <i>{items.icon}</i>
                  </div>
                  <div className="counts counte_num">{items.number}</div>
                  <div className="counter_card_title">{items.title}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Counter;
