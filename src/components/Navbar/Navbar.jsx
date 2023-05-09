import React, { useContext } from "react";
import AuthContext from "../context/authContent";
import { AppBar, Toolbar } from "@mui/material";
import Login from "./Buttons/Login";
import Logout from "./Buttons/Logout";

const Navbar = () => {
  const context = useContext(AuthContext);

  console.log(context.user);
  return (
    <>
      <AppBar>
        <Toolbar>
          <div style={{ flexGrow: 1 }}>MoviesDB</div>
          {context.user ? <Logout /> : <Login />}
        </Toolbar>
      </AppBar>
    </>
  );
};
export default Navbar;
