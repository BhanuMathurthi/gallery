import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "#000050" }}
      >
        <div className="container">
          <Link to="/" className="navbar-brand">
            <span className="text-light" style={{ fontWeight: "500" }}>
              Image Gallery
            </span>
          </Link>
        </div>
      </nav>
    </>
  );
}
