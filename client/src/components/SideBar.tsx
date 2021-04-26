import React from "react";
import "../scss/layout/sideBar.scss";
import { Section } from "./side/Section";

export type SectionType = { nameSection: string; colorHEX: string };

const sideBarData = [
  { nameSection: "Section 1", colorHEX: "#111" },
  { nameSection: "Section 2", colorHEX: "#111" },
];

export const SideBar = () => {
  return (
    <div className="wrapper-sidebar">
      <div className="group-section">
        {sideBarData.map((section, index) => {
          return (
            <Section
              key={index}
              nameSection={section.nameSection}
              colorHEX={section.colorHEX}
            />
          );
        })}
      </div>
    </div>
  );
};
