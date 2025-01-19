import React from "react";
import "./Techstacks.css";
import { FaReact, FaNodeJs, FaAws, FaJava } from "react-icons/fa";
import { ThemeContext } from "../../Context/theme";
import {
  SiRedux,
  SiHtml5,
  SiMaterialui,
  SiExpress,
  SiRedis,
  SiTailwindcss,
  SiNetlify,
  SiPython,
} from "react-icons/si";
import { DiCss3, DiMysql } from "react-icons/di";
import { SiJavascript, SiHeroku, SiTypescript } from "react-icons/si";
import { VscGithub } from "react-icons/vsc";
import { BsBootstrap, BsWordpress } from "react-icons/bs";
import { Link, NavLink } from "react-router-dom";

export const Techstacks = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  return (
    <>
      <div className="section main" data-aos="fade-right">
        <h2 className="section__title">Skills</h2>
        <div className="techsection">
          <div>
            <SiPython />
            <h5>Python</h5>
          </div>
          <div>
            <FaJava color="#6F9CF3" />
            <h5>Java</h5>
          </div>
          <div>
            <FaReact color="#00D1F7"/>
            <h5>React</h5>
          </div>
          <div>
            <FaNodeJs color="#7DC828" />
            <h5>Nodejs</h5>
          </div>
          <div>
            <SiExpress color="#9D8BDC" />
            <h5>Express</h5>
          </div>
          <div>
            <SiJavascript color="#ECDA1D" />
            <h5>Javascript</h5>
          </div>
          <div>
            <SiHtml5 color="#E96228" />
            <h5>HTML</h5>
          </div>
          <div>
            <DiCss3 color="#2862E9" />
            <h5>CSS</h5>
          </div>
          <div>
            <DiMysql color="#42759C" />
            <h5>MySql</h5>
          </div>

          <div>
            <FaAws color="#F79401" />
            <h5>AWS</h5>
          </div>
          <div>
            <VscGithub />
            <h5>Github</h5>
          </div>
          
          <div>
            <BsBootstrap color="#7B11F3" />
            <h5>BootStrap</h5>
          </div>
          
        </div>
      </div>
    </>
  );
};
