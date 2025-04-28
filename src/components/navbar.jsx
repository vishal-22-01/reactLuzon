import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="navbar_container">
        <div className="container">
            <div className="custom_navbar">
          {/* <div className="nav_logo">{Logo}</div> */}
          <img src="/images/logo.png" alt="gf" />
          <div className="navbar_links">
            <a className="navbar_link" href="#">
                <div className="dropdown">
                    <span>Home</span>
                    <div className="dropdown_menu d-flex flex-column gap-3">
                        <a href="#">Demo-1</a>
                        <a href="#">Demo-2</a>
                        <a href="#">Demo-3</a>
                        <a href="#">Demo-4</a>
                        <a href="#">Demo-5</a>
                        <a href="#">Demo-6</a>
                        <a href="#">Demo-7</a>
                    </div>
                    <div className="dropdown_menu d-flex flex-column gap-3">
                        <a href="#">Demo-1</a>
                        <a href="#">Demo-2</a>
                        <a href="#">Demo-3</a>
                        <a href="#">Demo-4</a>
                        <a href="#">Demo-5</a>
                        <a href="#">Demo-6</a>
                        <a href="#">Demo-7</a>
                    </div>
                    <div className="dropdown_menu d-flex flex-column gap-3">
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
          </div>
            </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
