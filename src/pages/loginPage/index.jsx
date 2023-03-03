import { Field } from 'formik';
import React, { useContext } from 'react';
import checkBox from '../../Components/checkBox/checkBox';
import CustomForm from '../../Components/customForm';
import { AuthContext } from '../../context/authContext';
import { loginField, loginInitValue } from './loginField';

// const wait = (time) => new Promise((resolve) => setTimeout(resolve, time));

function Login() {
  const { login } = useContext(AuthContext);
  return (
    <CustomForm
      initialValues={loginInitValue}
      onSubmit={login}
      fields={loginField}
      btnProps={{
        children: 'Log in',
      }}
    >
      <div className="flex items-center justify-between">
        <Field
          component={checkBox}
          id="remember-me"
          name="remember-me"
          label="remember-me"
        />

        <div className="text-sm">
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            Forgot your password?
          </a>
        </div>
      </div>
    </CustomForm>
  );
}

export default Login;
