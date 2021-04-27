import React from "react";
import "../scss/layout/sideBar.scss";
import { Section } from "./side/Section";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { getSections } from "../redux/section/action";
import { SectionReducerType } from "../redux/section/reducer";

export type SectionType = { nameSection: string; colorHEX: string };

type Sections = {
  sections: SectionReducerType;
};

export const SideBar = () => {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getSections());
  }, [dispatch]);

  const sections = useSelector((state: Sections) => state.sections.data);
  const sectionData = sections;

  return (
    <div className="wrapper-sidebar">
      <div className="group-section">
        <div className="button-create-section">
          <button> create section</button>
        </div>
        {sectionData ? (
          <>
            {sectionData.map((item, index) => {
              return (
                <Section
                  key={index}
                  nameSection={item.title}
                  colorHEX={item.color}
                />
              );
            })}
          </>
        ) : (
          <> empty </>
        )}
      </div>
    </div>
  );
};
