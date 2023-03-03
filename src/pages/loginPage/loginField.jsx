import Input from '../../Components/Input/Input';

export const loginField = [
  {
    component: Input,
    id: 'email-address',
    name: 'email',
    type: 'email',
    autoComplete: 'email',
    placeholder: 'Email address',
    val: '',
    className: 'rounded-t-md',
    validate: (value) => {
      if (!value) {
        return "Filed can't be empty";
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
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
    className: 'rounded-b-md',
    validate: (value) => {
      if (!value) {
        return "Filed can't be empty";
      }
      return null;
    },
  },
];

export const loginInitValue = loginField.reduce(
  (p, c) => ({ ...p, [c.name]: c.val }),
  {},
);
