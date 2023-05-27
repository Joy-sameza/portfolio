import React from "react";
import "./portfolio.css";
import img1 from "../../assets/portfolio1.jpg";
import img2 from "../../assets/portfolio2.jpg";
import img3 from "../../assets/portfolio3.jpg";
import img4 from "../../assets/portfolio4.jpg";
import img5 from "../../assets/portfolio5.png";
import img6 from "../../assets/portfolio6.jpg";

export default function Portfolio() {
  const data = [
    {
      id: 1,
      image: img1,
      title: "Eclipse - Figma dashboard UI kit for data design web apps",
      github: "https://github.com/",
      demo: "https://dribbble.com/shots/21518870-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
    },
    {
      id: 2,
      image: img2,
      title: "Orion UI kit – data visualization and charts templates for Figma",
      github: "https://github.com/",
      demo: "https://dribbble.com/shots/21518922-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma",
    },
    {
      id: 3,
      image: img3,
      title: "Eclipse - Figma dashboard UI kit for data design web apps",
      github: "https://github.com/",
      demo: "https://dribbble.com/shots/21518866-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
    },
    {
      id: 4,
      image: img4,
      title: "Orion UI kit – data visualization and charts templates for Figma",
      github: "https://github.com/",
      demo: "https://dribbble.com/shots/21518917-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma",
    },
    {
      id: 5,
      image: img5,
      title: "Eclipse - Figma dashboard UI kit for data design web apps",
      github: "https://github.com/",
      demo: "https://dribbble.com/shots/21518912-Orion-UI-kit-data-visualization-and-charts-templates-for-Figma",
    },
    {
      id: 6,
      image: img6,
      title: "Orion UI kit – data visualization and charts templates for Figma",
      github: "https://github.com/",
      demo: "https://dribbble.com/shots/21518827-Eclipse-Figma-dashboard-UI-kit-for-data-design-web-apps",
    },
  ];

  return (
    <section id="portfolio">
      <h5>My Recent work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {data.map(function ({ id, image, title, github, demo }) {
          return (
            <article key={id} className="portfolio__item">
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a
                  href={github}
                  target="blank"
                  className="btn"
                >
                  Github
                </a>
                <a
                  href={demo}
                  target="blank"
                  className="btn btn-primary"
                >
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
