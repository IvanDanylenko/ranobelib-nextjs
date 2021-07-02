import React, { FC } from 'react';
import NextLink from 'next/link';
import { Form, Field, FormikProps, withFormik } from 'formik';
import { object, string } from 'yup';

import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import TextField from 'src/components/common/TextField';
import AccountCircleOutlined from '@material-ui/icons/AccountCircleOutlined';
import LockOutlined from '@material-ui/icons/AccountCircleOutlined';
import useStyles from './useStyles';

const loginSchema = object().shape({
  email: string().email('Invalid email').required("Email can't be empty"),
  password: string().required("Password can't be empty"),
});

interface IFormValues {
  email: string;
  password: string;
}

interface ILoginForm {
  initialValues?: IFormValues;
}

const LoginForm: FC<ILoginForm & FormikProps<IFormValues>> = ({ isValid, isSubmitting }) => {
  const classes = useStyles();

  return (
    <Form className={classes.form}>
      <Typography component="h2" variant="h5" align="center" gutterBottom>
        Авторизация
      </Typography>
      <Field
        type="email"
        name="email"
        component={TextField}
        startIcon={<AccountCircleOutlined fontSize="small" />}
      />

      <Field
        type="password"
        name="password"
        component={TextField}
        startIcon={<LockOutlined fontSize="small" />}
      />
      <Grid container>
        <Button
          disabled={isSubmitting || !isValid}
          color="primary"
          variant="contained"
          type="submit"
        >
          Войти
        </Button>
        <NextLink href="/register" passHref>
          <Button
            variant="text"
            classes={{
              root: classes.registerLinkRoot,
            }}
          >
            Регистрация
          </Button>
        </NextLink>
      </Grid>
    </Form>
  );
};

export default withFormik<ILoginForm, IFormValues>({
  mapPropsToValues: ({ initialValues }) => {
    return {
      email: initialValues?.email || '',
      password: initialValues?.password || '',
    };
  },
  validationSchema: loginSchema,
  handleSubmit: (values) => {
    console.log(values);
  },
})(LoginForm);
