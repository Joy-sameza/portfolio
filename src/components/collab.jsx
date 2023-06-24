import React, { useState } from "react";
import Decoration from "./decoration";
import Pop from "./pop";

export default function Collab() {
  const [isOpen, setIsOpen] = useState(false);

  function handleModal() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <>
      <section className="collab" id="contact">
        {isOpen && <Pop close={() => handleModal()} />}
        <h3 className="styled">Collaboration</h3>
        <h2>Let's talk Collaboration</h2>
        <div>
          <a href="#pop-box" className="btn" onClick={() => handleModal()}>
            Get in Touch
          </a>
          <a
            href="mailto:samgaming500@gmail.com?subject=I%20want%20to%20hire%20you%20for&body=Hi%2C%20I%20wish%20to%20hire%20you%20for"
            className="btn"
          >
            Hire Me
          </a>
        </div>
        <Decoration />
        <Decoration />
      </section>
    </>
  );
}
