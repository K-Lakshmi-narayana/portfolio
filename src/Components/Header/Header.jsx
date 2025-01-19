import React from "react";
import { Navbar } from "../Navbar/Navbar";
import { ThemeContext } from "../../Context/theme";
import Image from "./../../assets/logo.png";
import ImageDark from "./../../assets/logo-dark.png";

import "./Header.css";
export const Header = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <header className={"header center " + themename}>
        <h3>
          <a href="#home" className="link">
            <span>
              <img className="logo-img" src={themename === "light" ? Image : ImageDark} alt="logo" />
            </span>
            <span className="logo-name">ucky</span> 
          </a>
        </h3>
        <Navbar />
      </header>
    </>
  );
};
