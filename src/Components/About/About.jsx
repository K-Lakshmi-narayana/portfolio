import React from "react";
import "./About.css";
import { Type } from "./Type";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import PhoneIcon from "@material-ui/icons/Phone";
import TwitterIcon from "@material-ui/icons/Twitter";
import DescriptionIcon from "@material-ui/icons/Description";
// import PublicIcon from "@material-ui/icons/Public";
import { Introduction } from "./Introduction";
import { Timeline } from "./Timeline";
import { Techstacks } from "./Techstacks";
// import Button from "@mui/material/Button";
export const About = () => {
  return (
    <>
      <div className="about center">
        <h2 data-aos="fade-right" className="mobileHead">
          <span className="greet">Hello, I am</span> <br/> <span className="about__name">Lakshmi Narayana Kuntumalla</span>
        </h2>
        <Type />
        <p className="about__desc" data-aos="fade-right">
          Visionary Computer Science student blending creativity and technology, mastering full-stack development, React, and machine learning to craft impactful, innovative solutions for real-world challenges
        </p>
        <div className="about__contact center">
          <a
            href="https://github.com/K-Lakshmi-narayana/"
            aria-label="github"
            target="_blank"
            rel="noreferrer"
            className="link link--icon"
          >
            <GitHubIcon />
          </a>
          <a
            href="mailto:klaxminarayana2004@gmail.com"
            target="_blank"
            rel="noreferrer"
            aria-label="mail"
            className="link link--icon"
          >
            <EmailIcon />
          </a>
          <a
            href="tel:+(91)7287043001"
            target="_blank"
            rel="noreferrer"
            aria-label="phone"
            className="link link--icon"
          >
            <PhoneIcon />
          </a>
          <a
            href="https://www.linkedin.com/in/lakshmi-narayana-kuntumalla-6759872bb/"
            aria-label="linkedin"
            className="link link--icon"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedInIcon />
          </a>
        </div>

        <button
          className="btnResume"
          onClick={() => {
            window.open(
              "https://drive.google.com/file/d/1flkPVmUOE6a6snZiLQYROgNkGIM_VAA_/view?usp=sharing"
            );
          }}
        >
          Resume
        </button>
      </div>
      <Introduction />
      <section id="#skills">
        <Techstacks />
      </section>
    </>
  );
};
