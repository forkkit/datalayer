import React, { useState, useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  Box,
  Button,
  FormControl,
  FormGroup
} from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import ErrorMessage from "./../errors/ErrorMessage";
import { authContext } from "../auth/AuthContext";
import Box1 from '../containers/Box1';
import useErrorHook from '../errors/ErrorHook';

const useStyles = makeStyles(theme => ({
  loginForm: {
    '& > *': {
//      margin: theme.spacing(2),
      width: '100%'
    }
  },
  spaced: {
    marginBottom: theme.spacing(2)
  }
}));

const LoginForm = (props: any) => {
  const classes: any = useStyles();
  const auth = useContext(authContext);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { error, showError } = useErrorHook(null);
  const [loading, setLoading] = useState(false);
  const [formContents, setFormContents] = useState({
    username: '',
    password: ''
  });
  const { handleSubmit, control, reset, errors, triggerValidation, formState, register, setError, clearError } = useForm({
    defaultValues: formContents
  });
  const hasError = field => errors[field] !== undefined;
  const getError = field => hasError(field) && errors[field].message;
  const onSubmit = async (data) => {
    setLoading(true);
    auth.apiRequest({
      url: "http://127.0.0.1:9700/api/iam/login",
      method: "POST",
      body: {
        username: data.username,
        password: data.password
      }
    }).then(resp => {
      setLoading(false);
      if (resp.success) {
        auth.setAuthStatus(resp.user, resp.token);
//        enqueueSnackbar(resp.message, { variant: 'success' });
        props.history.push("/api/iam")
      } else {
        enqueueSnackbar(resp.message, { variant: 'warning' })
        resp.errors?.map(error => enqueueSnackbar(error, { variant: 'warning' }));
      }
    })
    .catch(err => {
      console.error(err);
      setLoading(false);
//      showError('Server Error');
      enqueueSnackbar('Server Error', { variant: 'error' });
    });
  };
  return (
    <Box1>  
      <h3>Login</h3>
      {error && <ErrorMessage message={error} />}
      <form 
        className={classes.loginForm}
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormControl
          fullWidth
          component='fieldset'
          margin='normal'
        >
        <FormGroup aria-label='Login' row={false}>
          <Controller
              as={TextField}
              id='username'
              name='username' 
              variant='outlined'
              label='Username'
              control={control}
              fullWidth
              className={classes.spaced}
              rules={{
                required: 'This field is required'
              }}
              error={!!errors.username}
              helperText={errors.username ? errors.username.message : ''}
            />
            <Controller
              as={TextField}
              id='password'
              name='password' 
              variant='outlined'
              label='Password'
              control={control}
              type='password'
              fullWidth
              className={classes.spaced}
              rules={{
                required: 'This field is required',
              }}
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ''}
            />
          </FormGroup>
        </FormControl>
        <Link to="/api/iam/newpassword">Forgot Password?</Link>
        <Box p={1} />
        <Button variant='contained' color='primary' onClick={e => reset()} className={classes.spaced} disabled={loading}>
          {loading ? "Signing..." : "Reset"}
        </Button>
        <Button variant='contained' color='primary' type='submit' disabled={loading}>
          {loading ? "Signing..." : "Login"}
        </Button>
      </form>
    </Box1>
  );
};

export default withRouter(LoginForm);
