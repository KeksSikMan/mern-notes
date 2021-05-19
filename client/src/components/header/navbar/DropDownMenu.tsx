import * as React from "react";
import "../../scss/NavBar.scss";

// REDUX
import { useDispatch } from "react-redux";

import { BiLogOut } from "react-icons/bi";
import { RiSettingsLine } from "react-icons/ri";
import { logout } from "../../../redux/auth/action";

export const DropDownMenu: React.FC = () => {
  const dispatch = useDispatch();
  const LogOut = () => {
    dispatch(logout());
  };

  return (
    <div className="dropdown">
      <div className="menu">
        <button>
          <RiSettingsLine size="2em" />
          Settings
        </button>
        <button onClick={() => LogOut()}>
          <BiLogOut size="2em" />
          Log Out
        </button>
      </div>
    </div>
  );
};
