
import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Menu, { Images } from "../pages/menu/Menu";
import Login from "../presentation/pages/Login";
import User from "../routes/User";



const Allproject = () => {
  return (
        <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/user" element={<User/>}/>
        <Route path="/home" element={<Home />}>
        <Route path="menu" element={<Menu />}>
        <Route path="images" element={<Images />} />
        </Route>
        </Route>
        </Routes>
  );
};

export default Allproject;
