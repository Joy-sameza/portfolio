import React from 'react';
import "./experience.css";
import { BsPatchCheckFill } from "react-icons/bs";

/**
 * 
 * @param {string} name Name of the skill (article)
 * @param {string} level The level of the skill
 */
function generateArticle(name, level) {
  return (
    <article className="experience__details">
      <BsPatchCheckFill className="experience__details-icon" />
      <div>
        <h4>{name}</h4>
        <small className='text-light'>{level}</small>
      </div>
    </article>
  );
}

const frontendSkills = [{
  name: 'HTML',
  level: "Experienced"
}, {
  name: "CSS",
  level: "Intermediate"
}, {
  name: "JavaScript",
  level: "Experienced"
}, {
  name: "Bootstrap",
  level: "Experienced"
}, {
  name: "Tailwind",
  level: "Experienced"
}, {
  name: "ReactJS",
  level: "Experienced"
}];

const backendSkills = [
  {
    name: "Node",
    level: "Experienced"
  },
  {
    name: "Python",
    level: "Intermediate"
  },
  {
    name: "MongoDB",
    level: "Intermediate"
  },
  {
    name: "MySQL",
    level: "Intermediate"
  },
  {
    name: "PHP",
    level: "Experienced"
  },
  {
    name: "Flutter",
    level: "Intermediate"
  },
];

const frontendContent = frontendSkills.map((skill) => generateArticle(skill.name, skill.level));
const backendContent = backendSkills.map((skill) => generateArticle(skill.name, skill.level));

export default function Experience() {
  return (
    <section id='experience'>
      <h5>What Skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            {frontendContent}
            {/* <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Boostrap</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Tailwind</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>ReactJs</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article> */}
          </div>
        </div>

        {/* End of frntend section */}

        <div className="experience__backend">
          <h3>Backend Development</h3>
          <div className="experience__content">
            {backendContent}
            {/* <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>NodeJs</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>MySQL</h4>
                <small className='text-light'>Intermidiate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article> */}
          </div>
        </div>
      </div>
    </section>
  );
}
