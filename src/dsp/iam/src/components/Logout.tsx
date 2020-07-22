import React, { useContext } from "react";
import { authContext } from "../auth/AuthContext";
import { useSnackbar } from 'notistack';

const Logout = (props: any) => {
  const auth = useContext(authContext);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  auth.setUnauthStatus();
//  enqueueSnackbar('You are now signed out of Datalayer', { variant: 'success' });
  props.history.push("/api/iam");
  return <></>
};

export default Logout;
