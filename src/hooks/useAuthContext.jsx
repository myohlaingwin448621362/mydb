import { useState } from "react";

const useAuthContext = () => {
  const [user, setUser] = useState({
    firstName: null,
    lastName: null,
    email: null,
  });

  const onLoginHandler = () => {
    setUser({
      username: "John",
    });
    console.log(user);
  };
  const onLogoutHandler = () => {
    setUser(null);
  };

  return {
    user,
    onLogin: onLoginHandler,
    onLogout: onLogoutHandler,
  };
};
export default useAuthContext;
