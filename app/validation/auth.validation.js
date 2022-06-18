import validator from 'validator';

export const emailRules = {
  required: {value: true, message: 'Email is required'},
  validate: {
    checkEmail: value =>
      validator.isEmail(value) || 'Please enter a valid Email',
  },
};

export const passwordRules = {
  required: {value: true, message: 'Password is required'},
  minLength: {
    value: 3,
    message: 'Minimum password length is 3 ',
  },
};
