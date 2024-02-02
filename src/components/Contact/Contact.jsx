import React, { Component } from "react";
import Star from "../Star/Star";

export default class Contact extends Component {
  render() {
    return (
      <h2
        className="text-center bg-white"
        style={{ paddingTop: "70px", color: "#2c3e50" }}
      >
        <h1 style={{ fontSize: "45px", fontWeight: "bolder" }}>
          Contact Section
        </h1>
        <Star color="#2c3e50"/>

        <form
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            maxWidth: "700px",
            margin: "auto",
          }}
        >
          <input
            className="form-control border-bottom py-3 row mt-3"
            placeholder="userName"
          />
          <input
            className="form-control border-bottom py-3 row mt-3"
            placeholder="userAge"
          />
          <input
            className="form-control border-bottom py-3 row mt-3"
            placeholder="userEmail"
          />
          <input
            className="form-control border-bottom py-3 row mt-3"
            placeholder="userPassword"
          />
          <button className="btn btn-success mt-3">send Message</button>
        </form>
      </h2>
    );
  }
}
