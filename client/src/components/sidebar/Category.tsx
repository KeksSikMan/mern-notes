import React from "react";
import "../../styles/scss/Section.scss";

import { FiEdit2 } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { Modal } from "../Modal";
import { EditCategory } from "./EditCategory";
import { deleteCategory } from "../../redux/category/action";
import { activeCategory, getAllNotes } from "../../redux/notes/action";
import { ICategory } from "../../interfaces/interfaces";

export const Category = ({
  title,
  color,
  description,
  favorite,
  _id,
}: ICategory) => {
  const dispatch = useDispatch();

  const [isEditModal, setIsEditModal] = React.useState(false);

  const handleClickSelectSection = (_id: string, title: string) => {
    dispatch(activeCategory(_id, title));
    dispatch(getAllNotes(_id));
  };

  const handleClickEdit = (id: string) => {
    console.log("Edit, id: ", id);
    setIsEditModal(true);
  };

  const handleClickDelete = (id: string) => {
    console.log("Delete, id: ", id);
    dispatch(deleteCategory({ _id: id }));
  };

  return (
    <div className="section">
      <div className="color"></div>

      <div className="action">
        <button onClick={() => handleClickSelectSection(_id, title)}>
          <div className="title">{title}</div>
        </button>
        <button className="edit" onClick={() => handleClickEdit(_id)}>
          <FiEdit2 size="1.5em" />
        </button>
        <Modal isModal={isEditModal}>
          <EditCategory
            setIsEditModal={setIsEditModal}
            id={_id}
            title={title}
            color={color}
            favorite={favorite}
            description={description}
          />
        </Modal>
        <button className="delete" onClick={() => handleClickDelete(_id)}>
          <GrClose size="1.5em" />
        </button>
      </div>
    </div>
  );
};
