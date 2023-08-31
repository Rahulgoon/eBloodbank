import React from "react";

export const Footer = () => {
    return(
        <>
          {/* ======= Footer ======= */}
  <footer id="footer">
    <div className="footer-top">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 footer-contact">
            <strong><h3>eBloodBank</h3></strong>
            <p>
              Rajbari Para <br />
              Jalpaiguri - 735101 <br/>
              West Bengal
              <br />
              India <br />
              <br />
              <strong>Phone:</strong> +91 8348735101
              <br />
              <strong>Email:</strong> rgbloodbank@gmail.com
              <br />
            </p>
          </div>
          <div className="col-lg-2 col-md-6 footer-links">
            <h4>Useful Links</h4>
            <ul>
              <li>
                <i className="bx bx-chevron-right" /> <a href="/">Home</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" /> <a href="/about">Learn About Donation</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" /> <a href="/search"> Looking for Blood</a>
              </li>
              <li>
                <i className="bx bx-chevron-right" />{" "}
                <a href="/donate">  Want to Donate</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="container d-md-flex py-4">
      <div className="me-md-auto text-center text-md-start">
        <div className="copyright">
            eBloodBank @
           All Rights Reserved
        </div>
        <div className="credits">
          Designed & Developed by <a href="https://bootstrapmade.com/">Rahul Goon</a>
        </div>
      </div>
      <div className="social-links text-center text-md-right pt-3 pt-md-0">
        <a href="#" className="twitter">
          <i className="bx bxl-twitter" />
        </a>
        <a href="#" className="facebook">
          <i className="bx bxl-facebook" />
        </a>
        <a href="#" className="instagram">
          <i className="bx bxl-instagram" />
        </a>
        <a href="#" className="google-plus">
          <i className="bx bxl-skype" />
        </a>
        <a href="#" className="linkedin">
          <i className="bx bxl-linkedin" />
        </a>
      </div>
    </div>
  </footer>
  {/* End Footer */}
        </>
    );
};