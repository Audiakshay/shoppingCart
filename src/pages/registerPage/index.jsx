import React, { useContext } from 'react';
import { registerField, registerInitValue } from './registerField';
import CustomForm from '../../Components/customForm';
import { AuthContext } from '../../context/authContext';

function Register() {
  const { register } = useContext(AuthContext);
  return (
    <CustomForm
      initialValues={registerInitValue}
      fields={registerField}
      onSubmit={register}
      btnProps={{
        children: 'Sign Up',
      }}
    />
  );
}

export default Register;
