import React from 'react';
import Form from '../Form';
import FormInput from '../FormInput';
import Button from '../Button';
import Error from '../Error';
import Container from '../Container';
import useForm from 'react-hook-form';

function Register() {
  const [error, setError] = React.useState('');

  React.useEffect(() => {
    document.title = 'Find My Pet - Register';
  }, []);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    fetch('http://localhost:4000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(data => data.json())
      .then(res => setError(res));
  };

  return (
    <Container>
      <Form submit={handleSubmit(onSubmit)}>
        <h2 className='text-center mb-3 font-semibold text-blue-900 text-xl'>
          Register
        </h2>
        <FormInput
          name='username'
          label='Username'
          type='text'
          inputRef={register({ required: 'Username must not be empty.' })}
          placeholder='Username'
          optionalText='Must be between 6 to 10 characters.'
        />
        <Error error={error.error} />
        <Error error={errors.username} />
        <FormInput
          name='password'
          label='Password'
          type='password'
          inputRef={register({ required: 'Password must not be empty.' })}
          placeholder='Password'
          optionalText='Must be between 7 to 20 characters.'
        />
        <Error error={error.password} />
        <Error error={errors.password} />
        <FormInput
          name='email'
          label='E-mail'
          type='email'
          inputRef={register}
          placeholder='E-mail'
          optionalText='Optional'
        />
        <FormInput
          name='phone'
          label='Phone Number'
          type='tel'
          inputRef={register({ required: 'Phone number must not be empty.' })}
          placeholder='Phone Number'
        />
        <Error error={error.phone} />
        <Error error={errors.phone} />
        <Button type='submit' name='Register' />
      </Form>
    </Container>
  );
}

export default Register;
