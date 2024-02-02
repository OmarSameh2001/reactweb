import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  const iconStyle = {
    borderRadius: '50%',
    background: 'transparent',  // Transparent background
    border: '1px solid white',  // White border
    padding: '10px',            // Adjust the padding to control the size of the circle
    margin: '5px',              // Adjust the margin to create space between circles
    width: '45px',
    display: 'inline-block',
  };

  return (
    <div
      className="container-fluid text-white"
      style={{ backgroundColor: "#2c3e50" }}
    >
      <div className="container">
        <div className="row text-center" style={{ padding: "70px" }}>
          <div className="col-md-4">
            <h2>LOCATION</h2>
            <p>2215 John Daniel Drive</p>
            <p>Clark, MO 65243</p>
          </div>
          <div className="col-md-4">
            <h2>AROUND THE WEB</h2>
            <div style={iconStyle}>
              <FontAwesomeIcon icon={faFacebook} />
            </div>
            <div style={iconStyle}>
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div style={iconStyle}>
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
            <div style={iconStyle}>
              <FontAwesomeIcon icon={faGlobe} />
            </div>
          </div>
          <div className="col-md-4">
            <h2>ABOUT FREELANCER</h2>
            <p>
              Freelance is a free to use, licensed Bootstrap theme created by
              Route write tose.
            </p>
          </div>
        </div>
      </div>
      <div
        className="row bg-dark text-white"
        style={{ padding: "20px", textAlign: "center" }}
      >
        <div className="col-md-12">Copyright © Your Website 2021</div>
      </div>
    </div>
  );
}
