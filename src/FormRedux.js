import React from 'react';
import { Field, reduxForm } from 'redux-form';
import createArrayWithNumbers from './createArrayWithNumbers';
import { Form } from 'formik';

const validate = values => {
  const errors = {};

  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length !== 'admin') {
    errors.username = 'Nice try!';
  }

  if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address';
  }

  return errors;
};

const renderField = ({ input, label, type, meta: { touched, error } }) => (
  <>
    <input {...input} placeholder={label} type={type} />
    {touched && error && <span>{error}</span>}
  </>
);

function Example(props) {
  const { handleSubmit } = props;
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {createArrayWithNumbers(1000).map(key => {
        return <Field key={`email${key}`} name={`email${key}`} type="email" component={renderField} label="Email" />;
      })}

      <Field name="username" type="text" component={renderField} label="Username" />

      <button type="submit">Submit</button>
    </form>
  );
}

export default reduxForm({
  form: 'syncValidation',
  validate,
})(Example);
