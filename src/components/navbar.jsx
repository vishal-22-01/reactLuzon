import React from "react";
import Logo from "../assets/images/logo.png"
const Navbar = () => {
  return (
    <>
      <nav className="navbar_container">
        <div className="container">
            <div className="custom_navbar d-flex justify-content-between">
          <div className="nav_logo"><img src={Logo} alt="nav-logo" /></div>
          <div className="navbar_links d-flex justify-content-between align-items-start gap-3">
            <a className="navbar_link" href="#">
                <div className="dropdown">
                    <span>Home</span>
                    <div className="dropdown_menu d-flex flex-column gap-2 mt-2">
                        <a href="#">Demo-1</a>
                        <a href="#">Demo-2</a>
                        <a href="#">Demo-3</a>
                        <a href="#">Demo-4</a>
                        <a href="#">Demo-5</a>
                        <a href="#">Demo-6</a>
                        <a href="#">Demo-7</a>
                    </div>
                </div>
                </a>
                <a href="#">About</a>
                <a href="#">
                    <div className="service_dropdown">
                        <span>Service</span>
                        <div className="service_dropdown_menu d-flex flex-column gap-2 mt-2">
                            <a href="#">Services Style 1</a>
                            <a href="#">Services Style 2</a>
                            <a href="#">Services Detail</a>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <div className="service_dropdown">
                        <span>Projects</span>
                        <div className="projects_dropdown_menu d-flex flex-column gap-2 mt-2">
                            <a href="#">Projects Style 1</a>
                            <a href="#">Projects Style 2</a>
                            <a href="#">Projects Detail</a>
                        </div>
                    </div>
                </a>
                <a href="#">
                    <span>Pages</span>
                    <div className="pages_dropdown_menu d-flex flex-column gap-2 mt-2">
                        <a href="#">Team</a>
                        <a href="#">Pricing</a>
                        <a href="#">Faq</a>
                        <a href="#">Sign In</a>
                        <a href="#">Sign Up</a>
                        <a href="#">Comming Soon</a>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Privacy Policy</a>
                    </div>
                </a>
                <a href="#">
                    <span>Blogs</span>
                    <div className="blog_dropdown_menu d-flex flex-column gap-2 mt-2">
                        <a href="#">Blog Grid</a>
                        <a href="#">Blog Right Sidebar</a>
                        <a href="#">Blog Details</a>
                    </div>
                </a>
                <a href="#">Contact</a>
          </div>
            </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
