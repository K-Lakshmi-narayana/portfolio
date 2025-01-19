import React from "react";
import "./Contact.css";
import { VscGithub } from "react-icons/vsc";
import { CgMail } from "react-icons/cg";
import { BsInstagram, BsFillTelephoneFill } from "react-icons/bs";
import { ThemeContext } from "../../Context/theme";

import { FaLinkedin } from "react-icons/fa";
export const Contact = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <div className="footer-con">
      <div className="section">
        <h2 className="section__title" data-aos="fade-right">
          Get in <span className="different">Touch</span>
        </h2>
        <div className="contactMain">
          <div
            className={"contactcontainer " + themename}
            data-aos="fade-right"
          >
            <a
              href="https://www.linkedin.com/in/lakshmi-narayana-kuntumalla-6759872bb/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin className="linkedin" color="#0073B1" />
            </a>
            <a
              href="https://github.com/K-Lakshmi-narayana"
              target="_blank"
              rel="noreferrer"
            >
              <VscGithub className="github" color="#8400E3" />
            </a>
            <a
              href="mailto: klaxminarayana2004@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <CgMail className="email" color="#F6BF00" />
            </a>
            <a href="tel:+917287043001" target="_blank" rel="noreferrer">
              <BsFillTelephoneFill className="phone" color="#13CF1D" />
            </a>
          </div>
          <div className="mailNumber" data-aos="fade-right">
            <div>
              <span>
                <CgMail className="email" />
              </span>
              <span>
                <p>klaxminarayana2004@gmail.com</p>
              </span>
            </div>
            <div className="iconsCont">
              <span>
                <BsFillTelephoneFill className="phone" />
              </span>
              <span>
                <p>+917287043001</p>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
