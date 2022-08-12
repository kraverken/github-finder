import React from "react";
import { useEffect, useContext } from "react";
import GithubContext from "../context/github/GithubContext";

function User() {
  const { getUser, user } = useContext(GithubContext);
  useEffect(() => {
    getUser();
  }, []);
  return <div>User</div>;
}

export default User;
