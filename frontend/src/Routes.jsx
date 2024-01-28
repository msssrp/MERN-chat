import RegisterAndLogin from "./components/RegisterAndLogin";
import Chat from "./components/Chat";
import { UserContext } from "./context/UserContext";
import { useContext } from "react";

import React from "react";

const Routes = () => {
  const { username, id } = useContext(UserContext);
  if (username) return <Chat />;
  return <RegisterAndLogin />;
};

export default Routes;
