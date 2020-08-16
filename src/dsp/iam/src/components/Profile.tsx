import React, { useEffect, useState, useContext } from "react";
import { withRouter } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import {
  TextField,
  Button,
  FormControl,
  FormGroup
} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { useSnackbar } from 'notistack';
import { useForm, Controller } from 'react-hook-form';
import { authContext } from "../auth/AuthContext";
import Box1 from '../containers/Box1';
import { User } from "./../model/Model";
import useErrorHook from '../errors/ErrorHook';

const useStyles = makeStyles(theme => ({
  profileForm: {
    '& > *': {
//      margin: theme.spacing(2),
      width: '100%'
    }
  },
  spaced: {
    marginBottom: theme.spacing(2)
  }
}));

const Profile = (props: any) => {
  const classes: any = useStyles();
  const auth = useContext(authContext);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const { error, showError } = useErrorHook(null);
  const [me, setMe] = useState<User>();
  const [loading, setLoading] = useState(false);
  const [updated, setUpdated] = useState(false);
  const [formContents, setFormContents] = useState({
    username: me!.username,
    email: me!.email,
    firstName: me!.firstName,
    lastName: me!.lastName
  });
  const { handleSubmit, control, reset, errors, triggerValidation, formState, register, setError, clearError } = useForm({
    defaultValues: formContents
  });
  const hasError = field => errors[field] !== undefined;
  const getError = field => hasError(field) && errors[field].message;
  useEffect(() => {
    if (auth.user) {
      auth.apiRequest({
        url: "http://127.0.0.1:9700/api/iam/profile",
        method: "GET"
      }).then(resp => {
        if (resp.success) {
          setMe(resp.identity);
        } else {
          showError(resp.message);
        }
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
        showError('Server Error');
    });
    };
  }, []);
  const onSubmit = async (data) => {
    setLoading(true);
    auth.apiRequest({
      url: 'http://127.0.0.1:9700/api/iam/profile',
      method: 'POST',
      body: {
        username: data.username,
        firstName: data.firstName,
        lastName: data.lastName
      }
    }).then(resp => {
        setLoading(false);
        if (resp.success) {
//          setUpdated(true)
          enqueueSnackbar(resp.message, { variant: 'success' });
        } else {
//          showError(resp.errors);
        enqueueSnackbar(resp.message, { variant: 'error' })
        resp.errors!.map(error => enqueueSnackbar(error, { variant: 'error' }));
        }
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
//        showError('Server Error');
        enqueueSnackbar('Server Error', { variant: 'error' });
      });
  };
  return (
    <Box1>
      <h3>Profile</h3>
{/*}
      {updated && <MuiAlert elevation={6} variant="filled" severity="success">Your profile has been updated</MuiAlert>}
      {error && <ErrorMessage message={error} />}
*/}
      {me ?
        <>
          <form
            className={classes.profileForm}
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
                  defaultValue={me.username}
                  id='username'
                  name='username' 
                  variant='outlined'
                  label='Username'
                  control={control}
                  disabled={true}
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
                  label='Mail'
                  variant='outlined'
                  defaultValue={me.email}
                  fullWidth
                  control={control}
                  disabled={true}
                  className={classes.spaced}
                  rules={{
                    required: 'This field is required'
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
                  defaultValue={me.firstName}
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
                  defaultValue={me.lastName}
                  fullWidth
                  control={control}
                  className={classes.spaced}
                  rules={{
                    required: 'This field is required'
                  }}
                  error={!!errors.lastName}
                  helperText={errors.lastName ? errors.lastName.message : ''}
                />
              </FormGroup>
            </FormControl>
            <Button variant='contained' color='primary' type='submit' disabled={loading}>
              {loading ? "Updating..." : "Update Profile"}
            </Button>
          </form>
        </>
      :
        <p>Loading...</p>
      }
    </Box1>
  );
};

export default withRouter(Profile);
