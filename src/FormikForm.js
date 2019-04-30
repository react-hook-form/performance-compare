import React from 'react';
import { Formik, Form, Field } from 'formik';
import createArrayWithNumbers from './createArrayWithNumbers';

function validateEmail(value) {
  let error;

  if (!value) {
    error = 'Required';
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = 'Invalid email address';
  }

  return error;
}

function validateUsername(value) {
  let error;

  if (value === 'admin') {
    error = 'Nice try!';
  }

  return error;
}

export default function FormTest() {
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
      }}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <div>
          <h1>Formik</h1>
          <Form>
            {createArrayWithNumbers(1000).map(key => {
              return <Field key={key} name={`email${key}`} validate={validateEmail} />;
            })}

            {errors.email && touched.email && errors.email}

            <Field name="username" validate={validateUsername} />
            {errors.username && touched.username && errors.username}

            <button type="submit">Submit</button>
          </Form>
        </div>
      )}
    </Formik>
  );
}
