import * as React from "react";
import "../scss/NavBar.scss";

//types
import { TNavBar } from "../types";

export const Navbar: React.FC<TNavBar> = (props) => {
  return (
    <nav>
      <nav className="navbar">
        <ul className="navbar-nav">{props.children}</ul>
      </nav>
    </nav>
  );
};
