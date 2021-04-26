import React from "react";
import "../../scss/Section.scss";
import { SectionType } from "../SideBar";

export const Section = ({ nameSection, colorHEX }: SectionType) => {
  return (
    <div className="section">
      <div className="color">
        <div className="action">
          <button>{nameSection}</button>
        </div>
      </div>
    </div>
  );
};
