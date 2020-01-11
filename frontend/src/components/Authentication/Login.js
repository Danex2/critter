import React from 'react';
import axios from 'axios';
import Form from '../Form';
import FormInput from '../FormInput';
import Button from '../Button';
import Container from '../Container';
import Error from '../Error';
import { navigate } from '@reach/router';
import useForm from 'react-hook-form';
import useError from '../../utils/useError';
import { AuthContext } from '../../context/AuthProvider';

function Login() {
  const { dispatch } = React.useContext(AuthContext);
  const { error, setError } = useError();
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
      .then(res => {
        window.localStorage.setItem('token', res.data.token);
        dispatch({ type: 'LOGIN_USER' });
      })
      .then(() => navigate('/'))
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
