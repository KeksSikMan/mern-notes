import React from "react";
import "../../scss/layout/sideBar.scss";
import { Section } from "./Section";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { getSections } from "../../redux/section/action";
import { SectionReducerType } from "../../types/redux.types";

import { RiAddFill } from "react-icons/ri";
import { Modal } from "../Modal";
import { SectionCreate } from "./SectionCreate";

export type SectionType = {
  nameSection: string;
  colorHEX: string;
  id: string;
  favorite: boolean;
  description: string;
};

type Sections = {
  sections: SectionReducerType;
};

export const SideBar = () => {
  const [isModal, setIsModal] = React.useState(false);
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(getSections());
  }, [dispatch]);

  const sections = useSelector((state: Sections) => state.sections.data);
  const sectionData = sections;

  return (
    <div className="wrapper-sidebar">
      <div className="create-section">
        <div className="button-create-section">
          <button onClick={() => setIsModal(true)}>
            <RiAddFill size="2em" />
          </button>
          <Modal isModal={isModal}>
            <SectionCreate setIsModal={setIsModal} />
          </Modal>
        </div>
      </div>
      <div className="group-section">
        {sectionData ? (
          <>
            {sectionData.map((item, index) => {
              return (
                <Section
                  key={index}
                  id={item._id}
                  nameSection={item.title}
                  colorHEX={item.color}
                  favorite={item.favorite}
                  description={item.description}
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
