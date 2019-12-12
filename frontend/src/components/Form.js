import React from 'react';

const Form = ({ submit, children }) => (
  <form
    className='flex flex-col bg-gray-300 py-10 px-12 lg:py-12 lg:px-32 rounded-lg'
    onSubmit={submit}
  >
    {children}
  </form>
);

export default Form;
