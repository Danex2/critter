import React from 'react';
import Container from './Container';
import Form from './Form';
import FormInput from './FormInput';
import useForm from 'react-hook-form';
import axios from 'axios';
import Error from './Error';
import useError from './../utils/useError';
import Button from './Button';

const onSubmit = data => {
  const { name, breed, image, lastSeen, address, info } = data;
};

function NewPost() {
  const { register, handleSubmit } = useForm();
  const { error, setError } = useError();
  React.useEffect(() => {
    document.title = 'Find My Pet - New Ad';
  }, []);
  return (
    <Container>
      <Form submit={handleSubmit(onSubmit)}>
        <h2 className='text-center mb-3 font-semibold text-blue-900 text-xl'>
          Post a new ad
        </h2>
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
        <FormInput
          name='image'
          label='Pet image'
          type='file'
          inputRef={register}
        />
        <FormInput
          name='date'
          label='Last Seen'
          type='date'
          inputRef={register}
        />
        <FormInput
          name='address'
          label='Location'
          type='text'
          inputRef={register}
          placeholder='Last known location'
        />
        <label htmlFor='Extra info'>
          <textarea
            className='rounded px-3 py-2 w-64 sm:w-full mb-3 focus:outline-none border-blue-300 border'
            rows='4'
            style={{ resize: 'none' }}
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
