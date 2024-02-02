import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import Navigation from "./components/Navigation/Navigation";
import Portofolio from "./components/Portofolio/Portofolio";
import Layout from "./components/Layout/Layout";

export default function App() {
  const route = createBrowserRouter([
    {path:'/', element:<Layout/>, children:[
      {
        path:'/',
        element:<Header/>
      },
      {
        path:"/about",
        element:<About />
      },
      {
        path:'/portofolio',
        element:<Portofolio />
      },
      {
        path:'/contact',
        element:<Contact />
      }
    ]},
    
  ]);
  return (
    <>
    <RouterProvider router={route}/>
    </>
  );
}
