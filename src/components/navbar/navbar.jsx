import React, { useState } from "react";
import "./navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDetail, BiBookmarkHeart } from "react-icons/bi";
import { MdOutlineReviews } from "react-icons/md";

export default function Navbar() {
  const [activeNav, setActiveNav] = useState("#root");
  return (
    <nav>
      <a
        href="#root"
        onClick={() => setActiveNav("#root")}
        className={activeNav === "#root" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <BiBook />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}
      >
        <BiBookmarkHeart />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <BiMessageSquareDetail />
      </a>
      <a href="/reviews">
        <MdOutlineReviews />
      </a>
    </nav>
  );
}
