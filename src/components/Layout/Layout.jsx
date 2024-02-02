import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <div>
      <Navigation />
      <Outlet />
      <Footer/>
    </div>
  );
}
