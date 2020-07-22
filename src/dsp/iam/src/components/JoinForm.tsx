import React, { useState, useCallback, useContext } from 'react';
import { withRouter } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  Button,
  FormControl,
  FormHelperText,
  FormGroup
} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useForm, Controller } from 'react-hook-form';
import { useSnackbar } from 'notistack';
import { authContext } from "../auth/AuthContext";
import Checkbox from '@material-ui/core/Checkbox';
import ErrorMessage from "./../errors/ErrorMessage";
import Box1 from '../containers/Box1';
import useErrorHook from '../errors/ErrorHook';

const useStyles = makeStyles(theme => ({
  joinForm: {
    '& > *': {
//      margin: theme.spacing(2),
      width: '100%'
    }
  },
  spaced: {
    marginBottom: theme.spacing(2)
  }
}));

const JoinForm = (props: any) => {
  const classes: any = useStyles();
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const auth = useContext(authContext);
  const { error, showError } = useErrorHook(null);
  const [loading, setLoading] = useState(false);
  const [formContents, setFormContents] = useState({
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    passwordConfirm: '',
    terms: false, 
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
        url: 'http://127.0.0.1:9700/api/iam/join',
        method: 'POST',
        body: {
          username: data.username,
          email: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
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
            enqueueSnackbar(resp.message, { variant: 'warning' })
            resp.errors?.map(error => enqueueSnackbar(error, { variant: 'error' }));
          }
        })
        .catch(err => {
          console.error(err);
          setLoading(false);
//          setError("submission", "submission", 'Server Error');
          enqueueSnackbar('Server Error', { variant: 'error' })
        });
    }
  };
  return (
    <Box1>
      <h3>Join</h3>
      {error && <ErrorMessage message={error} />}
{/*
      {errors.submission && <SnackbarContent message={errors.submission.message} color='warning' close />}
*/}
      <form 
        className={classes.joinForm}
        onSubmit={handleSubmit(onSubmit)}
      >
        <FormControl
          fullWidth
          component='fieldset'
          margin='normal'
          error={hasError('terms')}
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
              id='email'
              name='email' 
              variant='outlined'
              label='Mail'
              control={control}
              fullWidth
              className={classes.spaced}
              rules={{
                required: 'This field is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'Invalid email address'
                }
              }}
              error={!!errors.email}
              helperText={errors.email ? errors.email.message : ''}
            />
            <Controller
              as={TextField}
              id='firstName'
              name='firstName'
              label='First Name'
              variant='outlined'
              fullWidth
              control={control}
              className={classes.spaced}
              rules={{
                required: 'This field is required'
              }}
              error={!!errors.firstName}
              helperText={errors.firstName ? errors.firstName.message : ''}
            />
            <Controller
              as={TextField}
              id='lastName'
              name='lastName'
              label='Last Name'
              variant='outlined'
              fullWidth
              control={control}
              className={classes.spaced}
              rules={{
                required: 'This field is required'
              }}
              error={!!errors.lastName}
              helperText={errors.lastName ? errors.lastName.message : ''}
            />
            <Controller
              as={TextField}
              id='password'
              name='password'
              label='Password'
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
              label='Confirm your Password'
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
            <FormControlLabel
              control={
                <Controller
                  as={Checkbox}
                  id='terms'
                  color="primary"
                  name='terms'
                  control={control}
                  rules={{
                    required: 'Please accept the terms'
                  }}
                />
                }
              label='Accept Terms'
            />
          </FormGroup>
          {hasError('terms') && (
            <FormHelperText error={hasError('terms')}>
              {getError('terms')}
            </FormHelperText>
          )}
        </FormControl>
        <Button variant='contained' color='primary' onClick={e => reset()} className={classes.spaced} disabled={loading}>
          {loading ? "Loading..." : "Reset"}
        </Button>
        <Button variant='contained' color='primary' type='submit' disabled={loading}>
          {loading ? "Loading..." : "Join"}
        </Button>
      </form>
    </Box1>
  );
}

export default withRouter(JoinForm);
