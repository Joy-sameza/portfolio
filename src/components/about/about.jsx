import React from "react";
import "./about.css";
import me from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import {FiUsers} from "react-icons/fi";
import {VscFolderLibrary} from "react-icons/vsc";

export default function About() {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="image_about" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiences</h5>
              <small>3+ years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>200+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>80+ completed</small>
            </article>

            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi dignissimos asperiores, officiis eius quisquam cum unde magnam voluptate delectus quam sed recusandae sint, totam, accusamus aut quibusdam libero nam rem.</p>
          </div>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  );
}
