import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink, useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation();
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <Navbar
      expand="lg"
      className="fixed-top"
      style={{ backgroundColor: "#2c3e50" }}
    >
      <Container>
        <NavLink
          className="navbar-brand col-md-9"
          to="/"
          style={{ color: "white", fontSize: "30px", fontWeight: "bolder" }
        }
        >
          START FRAMEWORK
        </NavLink>
        <Nav className="me-auto">
          <NavLink
            className="nav-link"
            to="/about"
            style={{
              color: "white",
              background: isActive("/about") ? "#1abc9c" : "transparent",
              borderRadius: "10px"
            }}
          >
            ABOUT
          </NavLink>

          <NavLink
            className="nav-link"
            to="/portofolio"
            style={{
              color: "white",
              background: isActive("/portofolio") ? "#1abc9c" : "transparent",
              borderRadius: "10px"
            }}
          >
            PORTFOLIO
          </NavLink>
          <NavLink
            className="nav-link"
            to="/contact"
            style={{
              color: "white",
              background: isActive("/contact") ? "#1abc9c" : "transparent",
              borderRadius: "10px"
            }}
          >
            CONTACT
          </NavLink>
        </Nav>
      </Container>
    </Navbar>
  );
}

