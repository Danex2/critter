import React from 'react';
import axios from 'axios';
import Form from '../Form';
import FormInput from '../FormInput';
import Button from '../Button';
import Container from '../Container';
import Error from '../Error';
import useForm from 'react-hook-form';

function Login() {
  const [error, setError] = React.useState('');
  const { register, handleSubmit } = useForm();
  React.useEffect(() => {
    document.title = 'Find My Pet - Login';
  }, []);
  const onSubmit = data => {
    const { username, password } = data;
    axios
      .post('http://localhost:4000/login', {
        username,
        password
      })
      .then(res => localStorage.setItem('token', res.data.token))
      .catch(e => setError(e.response.data));
  };
  return (
    <Container>
      <Form submit={handleSubmit(onSubmit)}>
        <h2 className='text-center mb-3 font-semibold text-blue-900 text-xl'>
          Login
        </h2>
        <Error error={error.error} />
        <FormInput
          name='username'
          label='Username'
          type='text'
          inputRef={register}
          placeholder='Username'
        />
        <FormInput
          name='password'
          label='Password'
          type='password'
          inputRef={register}
          placeholder='Password'
        />
        <Button type='submit' name='Log in' />
      </Form>
    </Container>
  );
}

export default Login;
