import React from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <section id="header">
      <NavLink to="/">
        <img src="image/logo.png" className="logo" alt="" />
      </NavLink>

      <div>
        <ul id="navbar">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/shop">Shop</NavLink>
          </li>
          <li>
            <NavLink to="/blog">Blog</NavLink>
          </li>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li id="lg-bag">
            <NavLink to="/cart">
              <i className="far fa-shopping-bag"></i>
            </NavLink>
          </li>
          <NavLink to="#" id="close">
            <i className="far fa-times"></i>
          </NavLink>
        </ul>
      </div>
      <div id="mobile">
        <NavLink to="/cart">
          <i className="far fa-shopping-bag"></i>
        </NavLink>
        <i id="bar" className="fas fa-outdent"></i>
      </div>
    </section>
  );
}
