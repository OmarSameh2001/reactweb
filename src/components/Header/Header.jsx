import React, { Component } from "react";
import face from "../../assets/images/face.png";
import Star from "../Star/Star";

export default class Header extends Component {
  render() {
    return (
      <header className="App-header" style={{ backgroundColor: "#1abc9c" }}>
        <img src={face} sizes="100px" />
        <h1>Start Framework</h1>
        <Star color="#ffffff" />

        <h5>Graphic Artist - Web Designer - Illustrator</h5>
      </header>
    );
  }
}
