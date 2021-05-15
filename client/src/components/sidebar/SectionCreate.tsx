import { Field, Form, Formik } from "formik";
import React from "react";
import { GrClose } from "react-icons/gr";
import "../../scss/SectionModalForm.scss";

type Props = {
  setIsModal: any;
};

export const SectionCreate: React.FC<Props> = ({ setIsModal }) => {
  const initialValues = {
    title: "",
  };

  return (
    <div className="content-wrapper">
      <div className="container">
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            const payload = {};
          }}
        >
          <Form className="form-section-create">
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
              <div className="button-create-section">
                <button type="button" onClick={() => setIsModal(false)}>
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
