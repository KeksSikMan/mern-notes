import React from "react";
import "../../scss/Section.scss";
import { SectionType } from "./index";

import { FiEdit2 } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

export const Section = ({ nameSection, colorHEX }: SectionType) => {
  return (
    <div className="section">
      <div className="color"></div>
      <div className="title">{nameSection}</div>
      <div className="action">
        <button className="edit">
          <FiEdit2 size="1.5em" />
        </button>
        <button className="delete">
          <GrClose size="1.5em" />
        </button>
      </div>
    </div>
  );
};
