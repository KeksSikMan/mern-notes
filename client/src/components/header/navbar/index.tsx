import * as React from "react";
import "../../../styles/scss/NavBar.scss";

//types
import { TNavBar } from "../../../interfaces";

export const Navbar: React.FC<TNavBar> = (props) => {
  return (
    <nav>
      <nav className="navbar">
        <ul className="navbar-nav">{props.children}</ul>
      </nav>
    </nav>
  );
};
