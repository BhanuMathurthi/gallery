import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar";
import Images from "./components/Images";
import Profile from "./components/Profile";

export default function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Images />} />
        <Route path="/:imgname" element={<Profile />} />
      </Routes>
    </div>
  );
}
