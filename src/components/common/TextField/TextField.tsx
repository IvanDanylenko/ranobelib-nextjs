import React, { FC, ReactNode } from 'react';
import { FieldProps } from 'formik';
import MuiTextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';
import useStyles from './useStyles';

interface ITextField {
  startIcon: ReactNode;
}

const TextField: FC<ITextField & FieldProps> = ({
  field,
  form: { touched, errors },
  startIcon,
}) => {
  const classes = useStyles();

  return (
    <MuiTextField
      error={touched[field.name] && !!errors[field.name]}
      label={field.name}
      defaultValue={field.value}
      variant="outlined"
      size="small"
      helperText={errors[field.name]}
      fullWidth
      InputProps={{
        startAdornment: <InputAdornment position="start">{startIcon}</InputAdornment>,
      }}
      classes={{
        root: classes.root,
      }}
    />
  );
};

export default TextField;
