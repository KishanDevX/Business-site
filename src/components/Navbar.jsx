import React from "react";
import "../stylesheets/navbar.css";

const HamBarsIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      class="icon icon-ham-bar"
    >
      <path
        fill_rule="evenodd"
        d="M3 6.75A.75.75 0 0 1 3.75 6h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 6.75ZM3 12a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75A.75.75 0 0 1 3 12Zm0 5.25a.75.75 0 0 1 .75-.75h16.5a.75.75 0 0 1 0 1.5H3.75a.75.75 0 0 1-.75-.75Z"
        clip_rule="evenodd"
      />
    </svg>
  );
};

export const Navbar = () => {
  return (
    <nav>
      <div className="nav-logo">Draflux</div>
      <ul className="nav-opts">
        <li>
          <a href="#home-sec">Home</a>
        </li>
        <li>
          <a href="#about-sec">About</a>
        </li>
        <li>
          <a href="#projects-sec">Projects</a>
        </li>
        <li>
          <a href="#contact-sec">Contact</a>
        </li>
      </ul>
      <div className="nav-btns">
        <button className="btn1">Hire now</button>
        <button className="btn2">Checkout my work</button>
      </div>
      <HamBarsIcon />
    </nav>
  );
};
