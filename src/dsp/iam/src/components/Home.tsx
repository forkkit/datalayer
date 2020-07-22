import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { authContext } from "../auth/AuthContext";
import Box1 from '../containers/Box1';
import Profile from "./Profile";

const Home = (props: any) => {
  const { user } = useContext(authContext);
  return (
    <Box1>
      <h3>Home</h3>
      {user ? 
        <div>Hello {user.username}</div>
      : 
        <Link to='/api/iam/login'>Sign in to Datalayer!</Link>
      }
    </Box1>
  );
};

export default Home;
