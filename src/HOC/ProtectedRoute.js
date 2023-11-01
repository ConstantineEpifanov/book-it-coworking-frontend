/* eslint-disable react/prop-types */
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { CurrentUserContext } from "../contexts/currentUserContext";

const ProtectedRouteElement = ({ element: Component, ...props }) => {
  const { isLoggedIn } = useContext(CurrentUserContext);
  return isLoggedIn ? <Component {...props} /> : <Navigate to="/" replace />;
};

const AuthElement = ({ element: Component, ...props }) => {
  const { isLoggedIn } = useContext(CurrentUserContext);
  return !isLoggedIn ? <Component {...props} /> : <Navigate to="/" replace />;
};

export { ProtectedRouteElement, AuthElement };
