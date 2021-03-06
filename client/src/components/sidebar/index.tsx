import React from "react";
import "../../styles/scss/layout/sideBar.scss";
import { Category } from "./Category";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { getAllCategories } from "../../redux/category/action";
import { ICategoryReducer } from "../../interfaces/redux.types";

import { RiAddFill } from "react-icons/ri";
import { Modal } from "../Modal";
import { CategoryCreate } from "./CategoryCreate";

export type CategoriesType = {
  categories: ICategoryReducer;
};

interface SideBarProps {
  active: boolean;
}

export const SideBar: React.FC<SideBarProps> = ({ active }) => {
  const [isModal, setIsModal] = React.useState(false);
  const dispatch = useDispatch();

  const categoriesState = useSelector(
    (state: CategoriesType) => state.categories
  );
  const categoryData = categoriesState.data;
  const isLoadedCategories = categoriesState.isLoaded;
  const isLoadingCategories = categoriesState.isLoading;

  React.useEffect(() => {
    if (!isLoadedCategories) dispatch(getAllCategories());
  }, [dispatch, isLoadedCategories, categoryData]);

  if (!active) return null;

  if (isLoadingCategories)
    return (
      <div className="wrapper-sidebar">
        <div className="create-category">
          <div className="group-category">
            <h2>...loading</h2>
          </div>
        </div>
      </div>
    );

  return (
    <div className="wrapper-sidebar">
      <div className="create-category">
        <div className="button-create-category">
          <button onClick={() => setIsModal(true)}>
            <RiAddFill size="2em" />
          </button>
          <Modal isModal={isModal}>
            <CategoryCreate setIsModal={setIsModal} />
          </Modal>
        </div>
      </div>
      <div className="group-category">
        {categoryData ? (
          <>
            {categoryData.map((item) => {
              return (
                <Category
                  key={item._id}
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
