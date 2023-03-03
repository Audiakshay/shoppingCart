import Input from '../../Components/Input/Input';

export const registerField = [
  {
    component: Input,
    id: 'name',
    name: 'name',
    autoComplete: 'name',
    placeholder: 'Name',
    val: '',
    className: 'rounded-t-md',
    validate: (value) => {
      if (!value) {
        return "Filed can't be empty";
      }
      return null;
    },
  },
  {
    component: Input,
    id: 'email-address',
    name: 'email',
    type: 'email',
    autoComplete: 'email',
    placeholder: 'Email address',
    val: '',
    validate: (value) => {
      if (!value) {
        return "Filed can't be empty";
      } if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
        return 'Invalid email address';
      }
      return null;
    },
  },
  {
    component: Input,
    id: 'password',
    name: 'password',
    type: 'password',
    autoComplete: 'current-password',
    placeholder: 'Password',
    val: '',
    validate: (value) => {
      if (!value) {
        return "Filed can't be empty";
      }
      return null;
    },
  },
  {
    component: Input,
    id: 'confirmpassword',
    name: 'confirmpassword',
    type: 'password',
    autoComplete: 'current-password',
    placeholder: 'Confirm Password',
    val: '',
    className: 'rounded-b-md',
    validate: (value) => {
      if (!value) {
        return "Filed can't be empty";
      } if (value !== password.value) {
        return 'Password mismatch';
      }
      return null;
    },
  },
];

export const registerInitValue = registerField.reduce(
  (p, c) => ({ ...p, [c.name]: c.val }),
  {},
);
