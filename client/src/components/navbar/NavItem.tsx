/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import "../../scss/NavBar.scss";

import { TNavItem } from "../../types";

export const NavItem: React.FC<TNavItem> = (props) => {
  const [open, setOpen] = React.useState(false);

  return (
    <li className="nav-item">
      <a href="#" className="icon-button" onClick={() => setOpen(!open)}>
        {props.icon}
      </a>

      {open && props.children}
    </li>
  );
};
