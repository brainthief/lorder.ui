import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import Select, { SelectProps } from '@material-ui/core/Select';
import uniqueId from 'lodash-es/uniqueId';
import * as React from 'react';
import { WrappedFieldInputProps, WrappedFieldProps } from 'redux-form';

const onChange = (input: WrappedFieldInputProps) => (event: React.ChangeEvent<HTMLSelectElement>) =>
  input.onChange(event.target.value);

export interface ISelectFieldProps extends WrappedFieldProps {
  children: React.ReactNode;
  label: React.ReactNode;
  fullWidth: boolean;
}

export const SelectField = ({
  fullWidth,
  input,
  meta: { touched, error },
  label,
  children,
  ...custom
}: ISelectFieldProps & SelectProps) => {
  const id = uniqueId();
  return (
    <FormControl error={touched && error} fullWidth={fullWidth}>
      <InputLabel htmlFor={id}>{label}</InputLabel>
      <Select
        error={touched && error}
        {...input}
        input={<Input name={input.name} id={id} />}
        onChange={onChange(input)}
        children={children}
        {...custom}
      />
      {touched && error && <FormHelperText>{error}</FormHelperText>}
    </FormControl>
  );
};
