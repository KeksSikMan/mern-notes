import React from "react";
import "../../styles/scss/layout/sideBar.scss";
import { Category } from "./Category";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories } from "../../redux/category/action";
import { CategoryReducerType } from "../../interfaces/redux.types";

import { RiAddFill } from "react-icons/ri";
import { Modal } from "../Modal";
import { CategoryCreate } from "./CategoryCreate";

export type CategoriesType = {
  categories: CategoryReducerType;
};

export const SideBar = () => {
  const [isModal, setIsModal] = React.useState(false);
  const dispatch = useDispatch();

  const sectionsState = useSelector(
    (state: CategoriesType) => state.categories
  );
  const sectionData = sectionsState.data;
  const isLoadedSections = sectionsState.isLoaded;
  const isLoadingSections = sectionsState.isLoading;

  React.useEffect(() => {
    if (!isLoadedSections) dispatch(getAllCategories());
  }, [dispatch, isLoadedSections, sectionData]);

  if (isLoadingSections)
    return (
      <div className="wrapper-sidebar">
        <div className="create-section">
          <div className="group-section">
            <h2>...loading</h2>
          </div>
        </div>
      </div>
    );

  return (
    <div className="wrapper-sidebar">
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
      <div className="group-section">
        {sectionData ? (
          <>
            {sectionData.map((item, index) => {
              return (
                <Category
                  key={index}
                  _id={item._id}
                  title={item.title}
                  color={item.color}
                  favorite={item.favorite}
                  description={item.description}
                  owner={item.owner}
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
