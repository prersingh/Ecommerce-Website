import React from "react";
import "./footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-4">
            <h5>About Us</h5>
            <p>We are a company that specializes in creating amazing websites and applications.</p>
          </div>
          <div className="col-sm-4">
            <h5>Address</h5>
            <p>Near cult fitnes</p>
            <p>Bangalore.</p>
          </div>
          <div className="col-sm-4">
            <h5>Contact Us</h5>
            <p>Phone: 8884973569</p>
            <p>Email: prerana@gmail.com</p>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-12 text-center">
            <hr />
            <p className="text-muted">&copy; 2023 developed by DisneyWorld. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
