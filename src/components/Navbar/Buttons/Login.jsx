import React from "react";

import AuthContext from "../../context/authContent";
import { Button } from "@mui/material";

const Login = () => {
  const onClickHandler = () => {
    console.log("ok");
  };
  return (
    <AuthContext.Consumer>
      {(value) => {
        return (
          <Button color="inherit" onClick={value.onLogin} variant="contained">
            Login
          </Button>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default Login;
