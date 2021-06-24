import React from "react";
import "../../styles/scss/layout/content.scss";

// REDUX
import { useSelector, useDispatch } from "react-redux";

import { Card } from "./Card";
import { INotesReducer } from "../../interfaces/redux.types";
import { CategoriesType } from "../sidebar";
import { activeCategory } from "../../redux/notes/action";
import { RiAddFill } from "react-icons/ri";
import { Modal } from "../Modal";
import { CategoryCreate } from "../sidebar/CategoryCreate";

export type NoteType = {
  title: string;
  date: string;
  description: string;
};

const contentData = [
  { title: "one", date: "10.10", description: "123" },
  { title: "two", date: "10.10", description: "3231" },
  { title: "three", date: "10.10", description: "3123123" },
  { title: "four", date: "10.10", description: "37892123" },
];

type Notes = {
  notes: INotesReducer;
};

export const Content: React.FC = () => {
  const [isModal, setIsModal] = React.useState(false);

  //* Redux
  const dispatch = useDispatch();
  const notesState = useSelector((state: Notes) => state.notes);
  const categoriesState = useSelector(
    (state: CategoriesType) => state.categories
  );
  const categoryData = categoriesState.data;
  const category = notesState.category;
  //*

  // React.useEffect(() => {
  //   if (categoryData != null)
  //     dispatch(activeCategory(categoryData[0]?._id, categoryData[0]?.title));
  // }, [dispatch, categoryData]);

  return !category ? (
    <div className="wrapper-content">Select category</div>
  ) : (
    <div className="wrapper-content">
      <div className="card-container">
        {contentData.map((note, index) => {
          return (
            <>
              <div key={index} className="card-item">
                <Card
                  key={index}
                  title={note.title}
                  date={note.date}
                  description={note.description}
                />
              </div>
            </>
          );
        })}
        <div className="card-item">
          <div className="card-creater">
            <div className="create-section">
              <div className="button-create-section">
                <button onClick={() => setIsModal(true)}>
                  <RiAddFill size="2em" />
                </button>
                <Modal isModal={isModal}>
                  <CategoryCreate setIsModal={setIsModal} />
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
