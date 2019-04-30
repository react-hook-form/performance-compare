import React from 'react';
import useForm from 'react-hook-form';
import createArrayWithNumbers from './createArrayWithNumbers';

export default function Form() {
  const { handleSubmit, register, errors } = useForm();
  const onSubmit = values => {
    console.log(values);
  };

  return (
    <div>
      <h1>React Hook Form</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {createArrayWithNumbers(1000).map(key => {
          return (
            <input
              key={key}
              name={`email${key}`}
              ref={register({
                required: 'This is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: 'invalid email',
                },
              })}
            />
          );
        })}
        {errors.email && <div>{errors.email.message}</div>}

        <input
          name="username"
          ref={register({
            validate: value => (value === 'admin' ? true : 'Nice try!'),
          })}
        />
        {errors.username && <div>{errors.username.message}</div>}

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
