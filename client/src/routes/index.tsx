import * as React from "react";
import { Redirect, Route, Switch } from "react-router-dom";

// PAGES
import { Home } from "../pages/Home";
import { SignIn } from "../pages/SignIn";
import { SignUp } from "../pages/SignUp";

interface MainRouterProps {
  isAuth: boolean;
}

export const MainRouter: React.FC<MainRouterProps> = ({ isAuth }) => {
  return (
    <Switch>
      {isAuth ? (
        <>
          <Route path="/" exact children={<Home />} />
          <Redirect to="/" />
        </>
      ) : (
        <>
          <Route path="/signin" exact children={<SignIn />} />
          <Route path="/signup" exact children={<SignUp />} />
          <Redirect to="/signin" />
        </>
      )}
    </Switch>
  );
};
