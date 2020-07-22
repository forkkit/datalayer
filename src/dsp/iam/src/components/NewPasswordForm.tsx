import React, { useState, useCallback, useContext } from 'react';
import { withRouter } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  Button,
  FormControl,
  FormGroup
} from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import { authContext } from "../auth/AuthContext";
import Box1 from '../containers/Box1';
import ErrorMessage from "../errors/ErrorMessage";
import useErrorHook from '../errors/ErrorHook';

const useStyles = makeStyles(theme => ({
  newPasswordForm: {
    '& > *': {
//      margin: theme.spacing(2),
      width: '100%'
    }
  },
  spaced: {
    marginBottom: theme.spacing(2)
  }
}));

const NewPasswordForm = (props: any) => {
  const classes: any = useStyles();
  const auth = useContext(authContext);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { error, showError } = useErrorHook(null);
  const [loading, setLoading] = useState(false);
  const [formContents, setFormContents] = useState({
    username: '',
    password: '',
    passwordConfirm: '',
    submission: null
  });
  const { handleSubmit, control, reset, errors, triggerValidation, formState, register, setError, clearError } = useForm({
    defaultValues: formContents
  });
  const hasError = field => errors[field] !== undefined;
  const getError = field => hasError(field) && errors[field].message;
  const validateForm = (data) => {
    if (data.password !== data.passwordConfirm) {
//      showError('Make sure your passwords match.');
      enqueueSnackbar('Please make sure your passwords match.', { variant: 'warning' })
      return false;
    }
    return true;
  };
  const onSubmit = async (data) => {
    if (validateForm(data)) {
      setLoading(true);
      auth.apiRequest({
        url: 'http://127.0.0.1:9700/api/iam/newpassword',
        method: 'POST',
        body: {
          username: data.username,
          password: data.password,
          passwordConfirm: data.passwordConfirm
        }
      }).then(resp => {
          setLoading(false);
          if (resp.success) {
            enqueueSnackbar(resp.message, { variant: 'success' })
            props.history.push('/api/iam')
          } else {
//            showError(resp.errors);
            enqueueSnackbar(resp.message, { variant: 'error' })
            resp.errors?.map(error => enqueueSnackbar(error, { variant: 'error' }));
          }
        })
        .catch(err => {
          console.error(err);
          setLoading(false);
//          setError("submission", "submission", 'Error');
          enqueueSnackbar('Server Error', { variant: 'error' })
        });
    }
  };
  return (
    <Box1>
      <h3>Forgot Password</h3>
      {error && <ErrorMessage message={error} />}
{/*
      {errors.submission && <SnackbarContent message={errors.submission.message} color='warning' close />}
*/}
      <form 
        className={classes.newPasswordForm}
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
              label='New Password'
              variant='outlined'
              fullWidth
              type='password'
              control={control}
              className={classes.spaced}
              rules={{
                required: 'This field is required'
              }}
              error={!!errors.password}
              helperText={errors.password ? errors.password.message : ''}
            />
            <Controller
              as={TextField}
              id='passwordConfirm'
              name='passwordConfirm'
              label='Confirm your new Password'
              variant='outlined'
              fullWidth
              type='password'
              control={control}
              className={classes.spaced}
              rules={{
                required: 'This field is required'
              }}
              error={!!errors.passwordConfirm}
              helperText={errors.passwordConfirm ? errors.passwordConfirm.message : ''}
            />
          </FormGroup>
        </FormControl>
        <Button variant='contained' color='primary' onClick={e => reset()} className={classes.spaced} disabled={loading}>
          {loading ? "Loading..." : "Reset"}
        </Button>
        <Button variant='contained' color='primary' type='submit' disabled={loading}>
          {loading ? "Loading..." : "Request New Password"}
        </Button>
      </form>
    </Box1>
  );
}

export default withRouter(NewPasswordForm);
