import * as React from "react";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";

import "../styles/scss/Form.scss";

//REDUX
import { useDispatch } from "react-redux";
import { signUp } from "../redux/auth/action";

interface MyFormValues {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const SignUp = () => {
  const initialValues: MyFormValues = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const dispatch = useDispatch();

  return (
    <div className="wrapper">
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object().shape({
          firstName: Yup.string().required("First Name is required"),
          lastName: Yup.string().required("Last Name is required"),
          email: Yup.string()
            .email("Email is invalid")
            .required("Email is required"),
          password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
          confirmPassword: Yup.string()
            .oneOf([Yup.ref("password")], "Passwords must match")
            .required("Confirm Password is required"),
        })}
        onSubmit={(values, actions) => {
          const payload = {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            password: values.password,
          };
          dispatch(signUp(payload));
        }}
      >
        <Form className="form">
          <div className="title">Sign Up</div>
          <div className="form-group">
            <div className="input-field">
              <Field
                autoFocus
                type="text"
                name="firstName"
                id="firstName"
                placeholder="First Name"
                className="input"
              ></Field>
            </div>
            <div className="input-field">
              <Field
                className="input"
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Last Name"
              ></Field>
            </div>
          </div>

          <div className="form-group">
            <div className="input-field">
              <Field
                className="input"
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              ></Field>
            </div>
          </div>
          <div className="form-group">
            <div className="input-field">
              <Field
                className="input"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              ></Field>
            </div>
            <div className="input-field">
              <Field
                className="input"
                type="password"
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm password"
              ></Field>
            </div>
          </div>
          <div className="form-actions">
            <div className="button-sign">
              <button type="submit">Sign Up</button>
            </div>
            <div className="terms-confition">
              By clicking Sign Up, you agree on our
              <Link className="link-terms-condition" to="/terms-condition">
                terms and condition.
              </Link>
            </div>
            <div className="link_sign">
              Have an account?
              <Link className="link" to="/signin">
                Sign In
              </Link>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
