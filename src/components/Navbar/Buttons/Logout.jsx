import React from "react";

import AuthContext from "../../context/authContent";
import { Button } from "@mui/material";

const Logout = () => {
  const onLogoutHandler = () => {
    console.log("logout");
  };
  return (
    <AuthContext.Consumer>
      {(value) => {
        return (
          <Button color="inherit" variant="contained" onClick={value.onLogout}>
            Logout
          </Button>
        );
      }}
    </AuthContext.Consumer>
  );
};

export default Logout;
