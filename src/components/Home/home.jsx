import React from "react";
import Header from "../header/header";
import Navbar from "../navbar/navbar";
import About from "../about/about";
import Experience from "../experience/experience";
import Services from "../services/services";
import Portfolio from "../portfolio/portfolio";
import Testimonial from "../testimonial/testimonial";
import Contact from "../contact/contact";
import Footer from "../footer/footer";

export default function Home() {
  return (
    <div id="Home">
      <Header />
      <Navbar />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}
