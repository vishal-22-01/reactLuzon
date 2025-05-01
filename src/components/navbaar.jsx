import React from "react";
import Logo from "../assets/images/logo.png";
import { RxCaretDown } from "react-icons/rx";
import { IoIosSearch } from "react-icons/io";
import { VscListSelection } from "react-icons/vsc";

const Navbaar = () => {
  return (
    <>
      <nav className="navbar_container">
        <div className="container">
          <div className="custom_navbar d-flex justify-content-between align-items-center">
            <div className="nav_logo">
              <img src={Logo} alt="nav-logo" />
            </div>
            <div className="navbar_links d-flex justify-content-between align-items-start gap-3">
              <a className="navbar_link" href="/home">
                <div className="home_dropdown">
                  <span>
                    Home
                    <i>
                      <RxCaretDown />
                    </i>
                  </span>
                  <ul className="home_dropdown_menu d-flex flex-column gap-2 mt-2">
                    <li className="dropdown_link" href="#">
                      Home-Demo-1
                    </li>
                    <li className="dropdown_link" href="#">
                      Home-Demo-2
                    </li>
                    <li className="dropdown_link" href="#">
                      Home-Demo-3
                    </li>
                    <li className="dropdown_link" href="#">
                      Home-Demo-4
                    </li>
                    <li className="dropdown_link" href="#">
                      Home-Demo-5
                    </li>
                    <li className="dropdown_link" href="#">
                      Home-Demo-6
                    </li>
                    <li className="dropdown_link" href="#">
                      Home-Demo-7
                    </li>
                  </ul>
                </div>
              </a>
              <a className="navbar_link" href="/about">
                About
              </a>
              <a className="navbar_link" href="#">
                <div className="service_dropdown">
                  <span>
                    Service
                    <i>
                      <RxCaretDown />
                    </i>
                  </span>
                  <ul className="service_dropdown_menu d-flex flex-column gap-2 mt-2">
                    <li className="dropdown_link" href="#">
                      Services Style 1
                    </li>
                    <li className="dropdown_link" href="#">
                      Services Style 2
                    </li>
                    <li className="dropdown_link" href="#">
                      Services Detail
                    </li>
                  </ul>
                </div>
              </a>
              <a className="navbar_link" href="#">
                <div className="project_dropdown">
                  <span>
                    Projects
                    <i>
                      <RxCaretDown />
                    </i>
                  </span>
                  <div className="projects_dropdown_menu d-flex flex-column gap-2 mt-2">
                    <li className="dropdown_link" href="#">
                      Projects Style 1
                    </li>
                    <li className="dropdown_link" href="#">
                      Projects Style 2
                    </li>
                    <li className="dropdown_link" href="#">
                      Projects Detail
                    </li>
                  </div>
                </div>
              </a>
              <a className="navbar_link" href="#">
                <div className="pages_dropdown">
                  <span>
                    Pages
                    <i>
                      <RxCaretDown />
                    </i>
                  </span>
                  <ul className="pages_dropdown_menu d-flex flex-column gap-2 mt-2">
                    <li className="dropdown_link" href="#">
                      Team
                    </li>
                    <li className="dropdown_link" href="#">
                      Pricing
                    </li>
                    <li className="dropdown_link" href="#">
                      Faq
                    </li>
                    <li className="dropdown_link" href="#">
                      Sign In
                    </li>
                    <li className="dropdown_link" href="#">
                      Sign Up
                    </li>
                    <li className="dropdown_link" href="#">
                      Comming Soon
                    </li>
                    <li className="dropdown_link" href="#">
                      Terms & Conditions
                    </li>
                    <li className="dropdown_link" href="#">
                      Privacy Policy
                    </li>
                  </ul>
                </div>
              </a>
              <a className="navbar_link" href="#">
                <div className="blog_dropdown">
                  <span>
                    Blogs
                    <i>
                      <RxCaretDown />
                    </i>
                  </span>
                  <div className="blog_dropdown_menu d-flex flex-column gap-2 mt-2">
                    <li className="dropdown_link" href="#">
                      Blog Grid
                    </li>
                    <li className="dropdown_link" href="#">
                      Blog Right Sidebar
                    </li>
                    <li className="dropdown_link" href="#">
                      Blog Details
                    </li>
                  </div>
                </div>
              </a>
              <a className="navbar_link" href="#">
                Contact
              </a>
              <div className="search_icon">
                <i>
                  <IoIosSearch />
                </i>
              </div>
              <div className="list_icon"><i><VscListSelection />
              </i></div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbaar;
