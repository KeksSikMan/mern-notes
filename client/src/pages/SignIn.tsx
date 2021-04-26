import * as React from "react";
import * as Yup from "yup";
import { Link } from "react-router-dom";
import { Formik, Form, Field } from "formik";

import "../scss/Form.scss";

// REDUX
import { useDispatch } from "react-redux";
import { signIn } from "../redux/auth/action";
// import { clearErrors } from "../redux/error/action";

export interface SignInProps {}

interface MyFormValues {
  email: string;

  password: string;
}

export const SignIn: React.FC<SignInProps> = () => {
  const initialValues: MyFormValues = {
    email: "",
    password: "",
  };

  const dispatch = useDispatch();
  //const state = useSelector((state) => state);

  return (
    <div className="wrapper">
      <Formik
        initialValues={initialValues}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email("Email is invalid")
            .required("Email is required"),
          password: Yup.string()
            .min(6, "Password must be at least 6 characters")
            .required("Password is required"),
        })}
        onSubmit={(values, actions) => {
          const payload = {
            email: values.email,
            password: values.password,
          };
          dispatch(signIn(payload));
        }}
      >
        <Form className="form">
          <h1>Notes</h1>
          <div className="form-group">
            <div className="input-field">
              <Field
                className="input"
                autoFocus
                type="email"
                name="email"
                id="email"
                placeholder="Email"
              ></Field>
            </div>
            <div className="input-field">
              <Field
                className="input"
                type="password"
                name="password"
                id="password"
                placeholder="Password"
              ></Field>
            </div>
          </div>

          <div className="pass">
            <Link className="link" to="/signup">
              forgot password?
            </Link>
          </div>
          <div className="button-sign">
            <button>Sign In</button>
          </div>
          <div className="link_sign">
            Don’t have an account?
            <Link className="link" to="/signup">
              Sign Up
            </Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
