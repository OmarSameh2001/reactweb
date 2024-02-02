import React from "react";
import Star from "../Star/Star";

export default function About() {
  return (
    <header className="App-header" style={{ backgroundColor: "#1abc9c" }}>
      <h1 style={{ fontSize: "50px", fontWeight: "bolder" }}>
        About Component
      </h1>
      <Star color="#ffffff" />
      <div className="row mx-auto">
        <div className="col-md-6">
          <p style={{ fontSize: "15px", paddingLeft: '250px' }}>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
        <div className="col-md-6">
          <p style={{ fontSize: "15px", paddingRight: '250px' }}>
            Freelancer is a free bootstrap theme created by Route. The download
            includes the complete source files including HTML, CSS, and
            JavaScript as well as optional SASS stylesheets for easy
            customization.
          </p>
        </div>
      </div>
    </header>
  );
}
