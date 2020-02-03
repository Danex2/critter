import React from 'react';
import axios from 'axios';
import Container from './Container';
import Form from './Form';
import FormInput from './FormInput';
import useForm from 'react-hook-form';
import Error from './Error';
import useError from './../utils/useError';
import Button from './Button';
import { navigate } from '@reach/router';
import { getToken } from '../utils/getToken';

function NewPost() {
  const { error, setError } = useError();
  const { register, handleSubmit } = useForm();
  React.useEffect(() => {
    document.title = 'Find My Pet - New Ad';
  }, []);
  const onSubmit = data => {
    const { name, breed, image, lastSeen, address, info } = data;
    let dog = new FormData();
    dog.append('name', name);
    dog.append('breed', breed);
    dog.append('image', image[0]);
    dog.append('info', info);
    dog.append('lastSeen', lastSeen);
    dog.append('address', address);
    axios
      .post('http://localhost:4000/pet', dog, {
        headers: {
          Authorization: `Bearer ${getToken()}`
        }
      })
      .then(() => navigate('/'))
      .catch(e => setError(e.response.data));
  };
  return (
    <Container>
      <Form submit={handleSubmit(onSubmit)}>
        <h2 className='text-center mb-3 font-semibold text-blue-900 text-xl'>
          Post a new ad
        </h2>
        <Error error={error.error} />
        <FormInput
          name='name'
          label='Name'
          type='text'
          inputRef={register}
          placeholder='Pet name'
        />
        <FormInput
          name='breed'
          label='Breed'
          type='text'
          inputRef={register}
          placeholder='Pet breed'
        />
        <FormInput name='image' label='Image' type='file' inputRef={register} />
        <FormInput
          name='lastSeen'
          label='Last Seen'
          type='date'
          inputRef={register}
        />
        <FormInput
          name='address'
          label='Location'
          type='text'
          inputRef={register}
          placeholder='Jane St & Wilson Ave'
        />
        <label htmlFor='Extra info'>
          <textarea
            className='rounded px-3 py-2 w-64 sm:w-full mb-3 focus:outline-none border-blue-300 border'
            rows='4'
            style={{ resize: 'none' }}
            name='info'
            placeholder='Any extra info that can help people locate your pet'
            ref={register}
          ></textarea>
        </label>
        <Button type='submit' name='Submit Ad' />
      </Form>
    </Container>
  );
}

export default NewPost;
