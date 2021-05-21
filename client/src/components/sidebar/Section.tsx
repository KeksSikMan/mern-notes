import React from "react";
import "../../styles/scss/Section.scss";
import { SectionType } from "./index";

import { FiEdit2 } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "../Modal";
import { EditSection } from "./EditSection";
import { deleteSection } from "../../redux/section/action";

export const Section = ({
  nameSection,
  colorHEX,
  description,
  favorite,
  id,
}: SectionType) => {
  const dispatch = useDispatch();

  const [isEditModal, setIsEditModal] = React.useState(false);

  const handleClickSelectSection = (id: string) => {
    console.log("Select section id: ", id);
    // TODO: get _id section and push _id to history
  };

  const handleClickEdit = (id: string) => {
    console.log("Edit, id: ", id);
    // TODO: open edit modal
    setIsEditModal(true);
  };

  const handleClickDelete = (id: string) => {
    console.log("Delete, id: ", id);
    // TODO: delete section
    //const _id = { id };
    dispatch(deleteSection({ _id: id }));
  };

  return (
    <div className="section">
      <div className="color"></div>

      <div className="action">
        <button onClick={() => handleClickSelectSection(id)}>
          <div className="title">{nameSection}</div>
        </button>
        <button className="edit" onClick={() => handleClickEdit(id)}>
          <FiEdit2 size="1.5em" />
        </button>
        <Modal isModal={isEditModal}>
          <EditSection
            setIsEditModal={setIsEditModal}
            id={id}
            title={nameSection}
            color={colorHEX}
            favorite={favorite}
            description={description}
          />
        </Modal>
        <button className="delete" onClick={() => handleClickDelete(id)}>
          <GrClose size="1.5em" />
        </button>
      </div>
    </div>
  );
};
