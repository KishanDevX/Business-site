import React from "react";
import "../stylesheets/about.css";

const skill_setData = [
  {
    title: "Frontend Designing",
    about: "The visible part of the system",
    explore_url: "#",
    tag_set: ["React-JS", "Tailwind-css", "HTML5", "CSS3"],
    color: ["#e0f1ff", "#bfe9fe"],
  },
  {
    title: "Backend/Database",
    about: "Behind the things that matters most",
    explore_url: "#",
    tag_set: ["Node-JS", "Express", "SQL", "Postman", "Curl"],
    color: ["#ffe4c8", "#fed2b1"],
  },
  {
    title: "Hosting & Deployment",
    about: "Other useful techs we use",
    explore_url: "#",
    tag_set: ["Go-Daddy", "Hostinger", "Planet-Scale", "Vercel", "Netlify"],
    color: ["#eacdfb", "#e3a8fe"],
  },
  {
    title: "Utility Tools & Tech",
    about: "Other useful tools we use",
    explore_url: "#",
    tag_set: ["VS-Code", "Git", "Github", "Python", "Javascript", "Linux"],
    color: ["#ccfeec", "#86f7d4"],
  },
];

const Arrow_rightIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      className="icon icon-arrow-right"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
      />
    </svg>
  );
};

const SkillCard = ({ title, about, explore_url, tag_set, color }) => {
  return (
    <div className="skill-card">
      <div className="skill-top" style={{ backgroundColor: color[0] }}>
        <div className="skill-head">{title}</div>
        <div className="skill-about">{about}</div>
        <div className="skill-tags">
          {tag_set.map((tag, idx) => {
            return (
              <div
                key={idx}
                className="tag"
                style={{ backgroundColor: color[1] }}
              >
                {tag}
              </div>
            );
          })}
        </div>
      </div>
      <div className="skill-bottom">
        <span>Explore</span>
        <a href={explore_url}>
          <Arrow_rightIcon />
        </a>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <section id="about-sec">
      <div className="skills-part">
        <h3 className="head1">Our skills and expertise</h3>
        <p className="desc1">
          We are excelled in various areas, below are our core skills that we
          use to make you projects shine.
        </p>
        <div className="skill-show-box">
          {skill_setData.map((skill, idx) => {
            return (
              <SkillCard
                key={idx}
                title={skill.title}
                about={skill.about}
                explore_url={skill.explore_url}
                tag_set={skill.tag_set}
                color={skill.color}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
