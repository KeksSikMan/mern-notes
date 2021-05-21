import React from "react";
import "../../styles/scss/SectionModalForm.scss";
import { Field, Form, Formik } from "formik";
import { GrClose } from "react-icons/gr";
import { updateSection } from "../../redux/section/action";
import { useDispatch } from "react-redux";

type Props = {
  setIsEditModal: any;
  id: string;
  title: string;
  color: string;
  favorite: boolean;
  description: string;
};

export const EditSection: React.FC<Props> = (props) => {
  const { setIsEditModal, id, title, description, favorite, color } = props;

  const initialValues = {
    _id: id,
    title: "",
    description: "",
    color: null,
    favorite: null,
  };

  const dispatch = useDispatch();

  return (
    <div className="content-wrapper">
      <div className="container">
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            const payload = {
              _id: values._id,
              title: values.title,
              description: values.description,
            };
            dispatch(updateSection(payload));
            setIsEditModal(false);
          }}
        >
          <Form className="form-section">
            <div className="title">Edit Section</div>
            <div className="form-group">
              <div className="input-field">
                <Field
                  autoFocus
                  type="text"
                  name="title"
                  id="title"
                  placeholder={title}
                  className="input"
                  border="2"
                ></Field>
              </div>
              <div className="input-field">
                <Field
                  type="text"
                  name="description"
                  id="description"
                  placeholder={description}
                  className="input"
                ></Field>
              </div>
              <div className="input-field">hex code #:</div>
              <div className="input-field">favorite</div>
              <div className="button-section">
                <button type="submit" >
                  <span>Submit</span>
                </button>
              </div>
            </div>
          </Form>
        </Formik>
      </div>
      <div className="delete">
        <button type="button" onClick={() => setIsEditModal(false)}>
          <GrClose size="1.5em" />
        </button>
      </div>
    </div>
  );
};
