import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import About from "../pages/About";
import Home from "../pages/Home";
import Car from "../pages/Car";
import Contact from "../pages/Contact";
import CarDetails from "../pages/CarDetails";
import Blog from "../pages/Blog";
import Error from "../pages/Error";
import BlogDetails from "../pages/BlogDetails";

export const Routers = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />}></Route>
      <Route path="/home" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/cars" element={<Car />} />
      <Route path="/cars/:slug" element={<CarDetails />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/blog/:slug" element={<BlogDetails />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};
export default Routers;
