import React, { useContext } from "react";
import { useNavigate, useRouteError } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";

const DisplayError = () => {
  const logOut = useContext(AuthContext);
  const error = useRouteError();
  const navigate = useNavigate();
  const handleSignOut = () => {
    logOut()
      .then(() => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1 className="text-4xl text-center">sorry sir this is not our page</h1>
      <p className="text-red-400">{error.statusText || error.message}</p>
      <h4 className="text-3xl">
        please <button onCanPlay={handleSignOut}>Sign Out</button> and log back
        in
      </h4>
    </div>
  );
};

export default DisplayError;
