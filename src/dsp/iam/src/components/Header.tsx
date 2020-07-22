import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../auth/AuthContext";

const Header = (props: any) => {
  const { user } = useContext(authContext);
  return (
    <>
      <Link to="/api/iam" style={{ fontWeight: "bold" }}>
        {props.title}
      </Link>
      {" | "}
      <Link to="/api/iam/about">About</Link>
      {" | "}
      <Link to="/api/iam/contact">Contact</Link>
      {" | "}
      {user ? (
        <>
          <Link to="/api/iam/profile">Profile</Link>
          {" | "}
          <Link to="/api/iam/logout">Logout</Link>
        </>
      ) : (
        <>
          <Link to="/api/iam/login">Login</Link>
          {" | "}
          <Link to="/api/iam/join">Join</Link>
        </>
      )}
    </>
  );
};

export default Header;
