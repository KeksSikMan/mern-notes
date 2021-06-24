import React from "react";
import "../../styles/scss/layout/content.scss";

// REDUX
import { useSelector, useDispatch } from "react-redux";

import { Card } from "./Card";
import { INotesReducer } from "../../interfaces/redux.types";
import { CategoriesType } from "../sidebar";
import { activeCategory, getAllNotes } from "../../redux/notes/action";
import { RiAddFill } from "react-icons/ri";
import { Modal } from "../Modal";
import { CardCreate } from "./CardCreate";

type Notes = {
  notes: INotesReducer;
};

export const Content: React.FC = () => {
  const [isModal, setIsModal] = React.useState(false);

  //* Redux
  const dispatch = useDispatch();

  const notesState = useSelector((state: Notes) => state.notes);
  const notesData = notesState.data;

  const categoriesState = useSelector(
    (state: CategoriesType) => state.categories
  );
  const categoryData = categoriesState.data;
  const category = notesState.category;

  React.useEffect(() => {
    // if (categoryData != null)
    // dispatch(activeCategory(categoryData[0]?._id, categoryData[0]?.title));
    if (!notesState.isLoaded && notesState.category != null)
      dispatch(getAllNotes(notesState.category._id));
  }, [dispatch, categoryData, notesState.isLoaded, notesState.category]);

  return !category ? (
    <div className="wrapper-content">Select category</div>
  ) : (
    <div className="wrapper-content">
      <div className="card-container">
        {notesData ? (
          <>
            {notesData.map((note, index) => {
              return (
                <>
                  <div key={index} className="card-item">
                    <Card
                      key={note._id}
                      _id={note._id}
                      title={note.title}
                      createdAt={note.createdAt}
                      description={note.description}
                    />
                  </div>
                </>
              );
            })}
          </>
        ) : (
          <>empty</>
        )}

        <div className="card-item">
          <div className="card-creater">
            <div className="create-section">
              <div className="button-create-section">
                <button onClick={() => setIsModal(true)}>
                  <RiAddFill size="2em" />
                </button>
                <Modal isModal={isModal}>
                  <CardCreate setIsModal={setIsModal} />
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
