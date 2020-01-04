import React from 'react';
import Form from '../Form';
import FormInput from '../FormInput';
import Button from '../Button';
import Container from '../Container';
import useForm from 'react-hook-form';

function Login() {
  const { register, handleSubmit } = useForm();
  React.useEffect(() => {
    document.title = 'Find My Pet - Login';
  }, []);
  const onSubmit = data => console.log(data);
  return (
    <Container>
      <Form submit={handleSubmit(onSubmit)}>
        <h2 className='text-center mb-3 font-semibold text-blue-900 text-xl'>
          Login
        </h2>
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
