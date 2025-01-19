import React from "react";
import "./Introduction.css";
import PaletteIcon from '@material-ui/icons/Palette';
import OfflineBoltIcon from '@material-ui/icons/OfflineBolt';
import PeopleAltIcon from '@material-ui/icons/PeopleAlt';
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/myPhoto.jpeg";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="#about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone! My name is{" "}
                <span className="different">Lakshmi Narayana Kuntumalla </span>, and I am
                from{" "}
                <span className="different">Kadapa, Andhra Pradesh, Bharat</span>.
                I am currently in the final year of my Bachelor of Technology degree in Computer Science and Engineering at {" "}
                <span className="different">
                 IIIT RGUKT Rk Valley, Andhra Pradesh, Bharat
                </span>.
              </h4>
              <h4>Terms That can describe me apart from Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <OfflineBoltIcon />
                </span>
                Quick Learner{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <PeopleAltIcon />
                </span>
                Team Player{" "}
              </h4>
              <h4 className="different">
                <span className="icons">
                  <PaletteIcon />
                </span>
                Artist{" "}
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
