import React from "react";
import "./Projects.css";
import { FaReact, FaHardHat } from "react-icons/fa";
import {
  SiBlockchaindotcom,
  SiHtml5,
  SiMaterialui,
  SiChai,
  SiEthereum,
  SiExpress,
  SiSocketdotio,
  SiTailwindcss,
  SiReactrouter,
  SiJavascript,
  SiMongodb,
  SiNodedotjs,
  SiFastapi,
  SiFirebase,
  SiCss3,
  SiPython,
  SiStreamlit,
  SiOpenai,
  SiSqlite,
} from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { VscJson, VscAzure } from "react-icons/vsc";
import { IoLogoJavascript } from "react-icons/io";
import NxtTrendz from "../../assets/NxtTrendz.png";
import LT from "../../assets/LT.png";
import ipldashboard from "../../assets/ipldashboard.png";
import speedTyping from "../../assets/speedTyping.png"


export const Projects = () => {
  const htmlsvg = <SiHtml5 color="#E96228" />
  const csssvg = <DiCss3 color="#2862E9" />
  const reactsvg = <FaReact color="#00D1F7"/>
  const expresssvg = <SiExpress color="#9D8BDC" />
  const nodesvg = <SiNodedotjs color="#7DC828" />
  const pythonsvg = <SiPython color="#000000" />
  const streamlitsvg = <SiStreamlit color="#F7494A" />
  const azuresvg = <VscAzure color="#2EA6E0" />
  const openaisvg = <SiOpenai color="#0F9E7B" />
  const sqlitesvg = <SiSqlite color="#053755" />

  return (
    <>
      <div className="section">
        <h2 className="section__title">Projects</h2>
        <div className="allProjects">
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={NxtTrendz}
                    alt="Nxt Trendz"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>NXT Trendz</h2>
                <p>
                  Nxt Trendz is an E-commerce application clone similar to Amazon or Flipkart, where users can log in to browse a wide range of products with advanced features like search, filters, sorting options, and more.
                </p>
                <div>
                  {/* <SiNodedotjs /> */}
                  {/* <SiExpress /> */}
                  {/* <SiMongodb /> */}
                  {htmlsvg}
                  {csssvg}
                  {reactsvg}
                  {expresssvg}
                  {sqlitesvg}
                </div>
                <div>
                  <a
                    href="https://narayanatrendz.ccbp.tech/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/K-Lakshmi-narayana/nxt-trandz"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={LT}
                    alt="LT"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>LT Learning Platform</h2>
                <p>
                  LT Club is a platform for RGUKT students to enhance technical skills through curated resources, interactive tools, and a collaborative learning environment for continuous growth in the tech field.
                </p>
                <div>
                  {reactsvg}
                  {nodesvg}
                  {csssvg}
                  {expresssvg}
                  <VscJson />
                </div>
                <div>
                  <a
                    href="https://lt-ebon.vercel.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/K-Lakshmi-narayana/LT-Club"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={speedTyping}
                    alt="speed Typing Test"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>AI Grammer Correction </h2>
                <p>
                A Python-based AI project leveraging transcription, grammar correction, and AI voice synthesis to replace improper audio in video files, ensuring precise synchronization between corrected audio and original video timestamps.                </p>
                <div>
                  {pythonsvg}
                  {streamlitsvg}
                  {azuresvg}
                  {openaisvg}
                </div>
                <div>
                  <a
                    href="https://lakshmi-ai-voice-replacement.streamlit.app/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/K-Lakshmi-narayana/curiousPM"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="projects_container" data-aos="fade-right">
            <div className="project">
              <div className="project_videocontainer">
                <div>
                  <img
                    src={ipldashboard}
                    alt="IPL Dashboard"
                  />
                </div>
              </div>
              <div className="project_information">
                <h2>IPL Dashboard</h2>
                <p>
                  Implemented IPL Dashboard app where users can list of ipl team, individual team details and respective team matches information.
                </p>
                <div>
                  {nodesvg}
                  {htmlsvg}
                  {reactsvg}
                  {csssvg}
                </div>
                <div>
                  <a
                    href="http://narayanaipldash.ccbp.tech"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt onbt">
                      See this Live
                    </span>
                  </a>
                  <a
                    href="https://github.com/K-Lakshmi-narayana/ipl-dashboard"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <span type="button" className="btns onbt">
                      View Code
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};
