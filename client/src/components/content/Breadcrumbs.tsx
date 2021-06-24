import React from "react";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { INotesReducer } from "../../interfaces/redux.types";

import "../../styles/scss/Breadcrumbs.scss";

type Notes = {
  notes: INotesReducer;
};

export const Breadcrumbs = () => {
  const notesState = useSelector((state: Notes) => state.notes);
  const category = notesState.category;
  return <div className="bredcrumbs">{category?.title}</div>;
};
