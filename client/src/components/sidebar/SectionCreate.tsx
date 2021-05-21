import React from "react";
import { Field, Form, Formik } from "formik";

import { GrClose } from "react-icons/gr";
import "../../styles/scss/SectionModalForm.scss";

// REDUX
import { useDispatch } from "react-redux";
import { createSection } from "../../redux/section/action";
import { AuthReducerType } from "../../types/redux.types";
import { useAppSelector } from "../../app/hooks";

type Props = {
  setIsModal: any;
};

export const SectionCreate: React.FC<Props> = ({ setIsModal }) => {
  const initialValues = {
    title: "",
    description: "",
    color: null,
    favorite: null,
  };

  const auth = useAppSelector((state): AuthReducerType => state.auth);
  const userId = auth.user?._id;

  const dispatch = useDispatch();

  return (
    <div className="content-wrapper">
      <div className="container">
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            const payload = {
              title: values.title,
              description: values.description,
              owner: userId,
            };
            dispatch(createSection(payload));
            setIsModal(false);
          }}
        >
          <Form className="form-section">
            <div className="title">Create Section</div>
            <div className="form-group">
              <div className="input-field">
                <Field
                  autoFocus
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Title"
                  className="input"
                  border="2"
                ></Field>
              </div>
              <div className="input-field">
                <Field
                  type="text"
                  name="description"
                  id="description"
                  placeholder="Description"
                  className="input"
                ></Field>
              </div>
              <div className="input-field">hex code #:</div>

              <div className="input-field">favorite</div>
              <div className="button-section">
                <button type="submit">
                  <span>Submit</span>
                </button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
      <div className="delete">
        <button type="button" onClick={() => setIsModal(false)}>
          <GrClose size="1.5em" />
        </button>
      </div>
    </div>
  );
};
