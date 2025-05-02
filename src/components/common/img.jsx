import React from "react";
import ProjectImgOne from "../../assets/images/project1.jpg";
import ProjectImgTwo from "../../assets/images/project2.jpg";
import ProjectImgThree from "../../assets/images/project3.jpg";
import ProjectImgFour from "../../assets/images/project4.jpg";
import ProjectImgFive from "../../assets/images/project5.jpg";
import ProjectImgSix from "../../assets/images/project6.jpg";
import ProjectImgSeven from "../../assets/images/project7.jpg";
import ProjectImgEight from "../../assets/images/project8.jpg";

const Img = () => {
  const imgContent = [
    {
      img: ProjectImgOne,
      heading: "App Update & Rebrand",
      text: "Research and StartUp",
    },
    {
      img: ProjectImgTwo,
      heading: "IT Consultancy",
      text: "Research and StartUp",
    },
    {
      img: ProjectImgThree,
      heading: "Digital Marketing",
      text: "Research and StartUp",
    },
    {
      img: ProjectImgFour,
      heading: "App Development",
      text: "Research and StartUp",
    },
    {
      img: ProjectImgFive,
      heading: "IT Solutions",
      text: "Research and StartUp",
    },
    {
      img: ProjectImgSix,
      heading: "Data Management",
      text: "Research and StartUp",
    },
    {
      img: ProjectImgSeven,
      heading: "E-commerce Development",
      text: "Research and StartUp",
    },
    {
      img: ProjectImgEight,
      heading: "Creative Web Develop",
      text: "Research and StartUp",
    },
  ];
  return (
    <>
      <div className="row g-0">
        {imgContent.map((items, index) => {
          return (
            <div className="col-3">
              <div key={index} className="img_container position-relative">
                <div className="projectImg">
                  <img src={items.img} alt="projectImg" />
                </div>
                <div className="img_content d-flex align-items-center position-absolute top-0 start-0 h-100 w-100">
                    <div className="float_text d-flex flex-column justify-content-center align-items-center gap-3">
                  <a className="content_heading" href="#">{items.heading}</a>
                  <a className="content_text" href="#">{items.text}</a>
                    </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Img;
