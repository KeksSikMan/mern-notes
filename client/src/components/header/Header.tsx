import * as React from "react";
import "../../styles/scss/layout/header.scss";

import { Navbar } from "./navbar";
import { DropDownMenu } from "./navbar/DropDownMenu";
import { NavItem } from "./navbar/NavItem";

import { BiCaretDown } from "react-icons/bi";
import { IAuthReducer } from "../../interfaces/redux.types";
import { useAppSelector } from "../../app/hooks";

export const Header: React.FC = () => {
  const auth = useAppSelector((state): IAuthReducer => state.auth);

  const user = auth.user;

  const userName =
    user != null ? user.firstName + " " + user.lastName : "loading...";

  return (
    <>
      <div className="header">
        <div className="header-title">Notes</div>
        <div className="header-profile">
          <div className="user-icon"></div>
          <div className="user-name">{userName}</div>
          <Navbar>
            <NavItem icon={<BiCaretDown size="2em" />}>
              <DropDownMenu />
            </NavItem>
          </Navbar>
        </div>
      </div>
    </>
  );
};
