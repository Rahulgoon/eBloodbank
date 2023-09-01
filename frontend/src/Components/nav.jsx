import React from "react";

export const Nav = () => {
  return (
    <>
      {/* ======= Top Bar ======= */}
      <div id="topbar" className="d-flex align-items-center fixed-top">
        <div className="container d-flex justify-content-between">
          <div className="contact-info d-flex align-items-center">
            <i className="bi bi-envelope" />{" "}
            <a href="mailto:contact@example.com">ebloodbank@gmail.com</a>
            <i className="bi bi-phone" /> +91 8348735101
          </div>
          <div className="d-none d-lg-flex social-links align-items-center">
            <a href="#" className="twitter">
              <i className="bi bi-twitter" />
            </a>
            <a href="#" className="facebook">
              <i className="bi bi-facebook" />
            </a>
            <a href="#" className="instagram">
              <i className="bi bi-instagram" />
            </a>
            <a href="#" className="linkedin">
              <i className="bi bi-linkedin" />
            </a>
          </div>
        </div>
      </div>
      {/* ======= Header ======= */}
      <header id="header" className="fixed-top">
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <a href="index.html">eBloodBank</a>
          </h1>
          {/* Uncomment below if you prefer to use an image logo */}
          {/* <a href="index.html" class="logo me-auto"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
          <nav id="navbar" className="navbar order-last order-lg-0">
            <ul>
              <li>
                <a className="nav-link scrollto" href="/">
                  Home
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="/about">
                  About Donation
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="/search">
                  Looking for Blood
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="/donate">
                  Want to Donate
                </a>
              </li>
              <li>
                <a className="nav-link scrollto" href="/contact">
                  Contact Us
                </a>
              </li>
            </ul>
            <button
              className="btn btn-ghost"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasTop"
              aria-controls="offcanvasTop"
            >
              <i className="bi bi-list mobile-nav-toggle" />
            </button>
          </nav>
            <div
              className="offcanvas offcanvas-top"
              tabIndex="1"
              id="offcanvasTop"
              aria-labelledby="offcanvasTopLabel"
            >
              <div className="offcanvas-header">
              <h1 className="logo me-auto">
            <a href="index.html"><u>eBloodBank</u> </a>
          </h1>
                <button
                  type="button"
                  className="btn-close text-reset"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
              <ul >
              <li style={mobile_nav_style}>
                <a className="nav-link scrollto" href="/">
                  Home
                </a>
              </li>
              <li style={mobile_nav_style}>
                <a className="nav-link scrollto" href="/about">
                  About Donation
                </a>
              </li>
              <li style={mobile_nav_style}>
                <a className="nav-link scrollto" href="/search">
                  Looking for Blood
                </a>
              </li>
              <li style={mobile_nav_style}>
                <a className="nav-link scrollto" href="/donate">
                  Want to Donate
                </a>
              </li>
              <li style={mobile_nav_style}>
                <a className="nav-link scrollto" href="/contact">
                  Contact Us
                </a>
              </li>
            </ul>
              </div>
            </div>
          {/* .navbar */}
          <a href="/signup" className="appointment-btn scrollto">
            Sign Up
          </a>
        </div>
      </header>
      {/* End Header */}
    </>
  );
};

const mobile_nav_style={
   padding:"5px",
   color:"red", 
   listStyleType:"none",
  fontWeight:"bold",
}