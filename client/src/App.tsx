import * as React from "react";
import "./styles/scss/App.scss";

// ROUTING
import { MainRouter } from "./routes";

// REDUX
import { useSelector, useDispatch } from "react-redux";
import { loadUser } from "./redux/auth/action";

interface AuthState {
  auth: any;
}

function App(): React.ReactElement {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  const isAuthenticated = useSelector(
    (state: AuthState) => state.auth.isAuthenticated
  );

  const isLoading = useSelector((state: AuthState) => state.auth.isLoading);

  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <MainRouter isAuth={isAuthenticated} />
      )}
    </>
  );
}

export default App;
