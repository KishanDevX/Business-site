import React from "react";
import "../stylesheets/projects.css";
import whatsapp_icon from "../assets/icons/whatsapp.png";
import instagram_icon from "../assets/icons/instagram.png";
import facebook_icon from "../assets/icons/facebook.png";
import youtube_icon from "../assets/icons/youtube.png";

// ICONS
const PreviewIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="icon icon-preview"
    >
      <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
      <path
        fillRule="evenodd"
        d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 0 1 0-1.113ZM17.25 12a5.25 5.25 0 1 1-10.5 0 5.25 5.25 0 0 1 10.5 0Z"
        clip_rule="evenodd"
      />
    </svg>
  );
};

const SrcCodeIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke_width="1.5"
      stroke="currentColor"
      class="icon icon-src-code"
    >
      <path
        stroke_linecap="round"
        stroke_linejoin="round"
        d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
      />
    </svg>
  );
};

// PROJECT DATA
const UI_clones = {
  title: "UI Clones",
  desc: "Here I have listed some of my best accurately clones porjects of existing softwares that include well known social media apps and some other tools.",
  projects: [
    {
      name: "Whatsapp",
      visual: whatsapp_icon,
      desc: "an amazing way of calculating big numbers, doing complex arithmetic calculations in few miliseconds, don't wait hurry up and stop wasting your time on old and manual calculation.",
      previewLink: "https://bw-whatsapp-clone.vercel.app/",
      srcCodeLink: "https://github.com/KishanDevX/BW-Whatsapp-clone.git",
    },
    {
      name: "Instagram",
      visual: instagram_icon,
      desc: "an amazing way of calculating big numbers, doing complex arithmetic calculations in few miliseconds, don't wait hurry up and stop wasting your time on old and manual calculation.",
      previewLink: "https://bw-instagram-clone.vercel.app/",
      srcCodeLink: "https://github.com/KishanDevX/BW-Instagram-clone.git",
    },
    {
      name: "Youtube",
      visual: youtube_icon,
      desc: "an amazing way of calculating big numbers, doing complex arithmetic calculations in few miliseconds, don't wait hurry up and stop wasting your time on old and manual calculation.",
      previewLink: "#",
      srcCodeLink: "#",
    },
    {
      name: "Facebook",
      visual: facebook_icon,
      desc: "an amazing way of calculating big numbers, doing complex arithmetic calculations in few miliseconds, don't wait hurry up and stop wasting your time on old and manual calculation.",
      previewLink: "#",
      srcCodeLink: "#",
    },
  ],
};

const Freelance_works = {
  title: "Freelance Works",
  desc: "Here I have listed some of my best accurately clones porjects of existing softwares that include well known social media apps and some other tools.",
  projects: [
    {
      name: "Calculator",
      desc: "an amazing way of calculating big numbers, doing complex arithmetic calculations in few miliseconds, don't wait hurry up and stop wasting your time on old and manual calculation.",
      previewLink: "#",
      srcCodeLink: "#",
    },
    {
      name: "Calculator",
      desc: "an amazing way of calculating big numbers, doing complex arithmetic calculations in few miliseconds, don't wait hurry up and stop wasting your time on old and manual calculation.",
      previewLink: "#",
      srcCodeLink: "#",
    },
    {
      name: "Calculator",
      desc: "an amazing way of calculating big numbers, doing complex arithmetic calculations in few miliseconds, don't wait hurry up and stop wasting your time on old and manual calculation.",
      previewLink: "#",
      srcCodeLink: "#",
    },
  ],
};

const Other_tools = {
  title: "Personal Projects",
  desc: "Here I have listed some of my best accurately clones porjects of existing softwares that include well known social media apps and some other tools.",
  projects: [
    {
      name: "Calculator",
      desc: "an amazing way of calculating big numbers, doing complex arithmetic calculations in few miliseconds, don't wait hurry up and stop wasting your time on old and manual calculation.",
      previewLink: "#",
      srcCodeLink: "#",
    },
    {
      name: "Calculator",
      desc: "an amazing way of calculating big numbers, doing complex arithmetic calculations in few miliseconds, don't wait hurry up and stop wasting your time on old and manual calculation.",
      previewLink: "#",
      srcCodeLink: "#",
    },
    {
      name: "Calculator",
      desc: "an amazing way of calculating big numbers, doing complex arithmetic calculations in few miliseconds, don't wait hurry up and stop wasting your time on old and manual calculation.",
      previewLink: "#",
      srcCodeLink: "#",
    },
  ],
};

// PROJECT CARD
const Project_card = ({ name, desc, previewLink, srcCodeLink, visual }) => {
  return (
    <div className="project-card card1">
      <div className="project-info">
        {visual && (
          <div className="visual-info">
            {" "}
            <img src={visual} alt={name} />{" "}
          </div>
        )}
        <div className="text-info">
          <div className="pro-card-name">{name}</div>
          <div className="pro-card-desc">{desc}</div>
        </div>
      </div>
      <div className="pro-card-btns">
        <a
          href={previewLink}
          className="prev-btn btn1 link-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="btn-icon">
            <PreviewIcon />
          </div>
          <div className="btn-label">Preview</div>
        </a>
        <a
          href={srcCodeLink}
          className="srcCode-btn btn2 link-btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="btn-icon">
            <SrcCodeIcon />
          </div>
          <div className="btn-label">Src code</div>
        </a>
      </div>
    </div>
  );
};

const Project_catalog = ({ title, desc, projects }) => {
  return (
    <div className="pro-catalog">
      <div className="pro-listing-box">
        {projects.map((project, idx) => (
          <Project_card
            key={`project${idx}`}
            name={project.name}
            visual={project.visual}
            desc={project.desc}
            previewLink={project.previewLink}
            srcCodeLink={project.srcCodeLink}
          />
        ))}
      </div>
      <div className="pro-info">
        <div className="pro-title head1">{title}</div>
        <div className="pro-desc desc1">{desc}</div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects-sec">
      <div className="intro-cover">
        <h3 className="pro-sec-head head1">Projects made by me</h3>
        <p className="pro-sec-desc desc1">
          below you will get some amazing builds of mine where i have reflected
          my ideas into code, just click the preview or explore the source code.
        </p>
      </div>
      <Project_catalog
        title={UI_clones.title}
        desc={UI_clones.desc}
        projects={UI_clones.projects}
      />
      <Project_catalog
        title={Freelance_works.title}
        desc={Freelance_works.desc}
        projects={Freelance_works.projects}
      />
      <Project_catalog
        title={Other_tools.title}
        desc={Other_tools.desc}
        projects={Other_tools.projects}
      />
    </section>
  );
};

export default Projects;
