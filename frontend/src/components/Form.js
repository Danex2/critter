import React from 'react';

const Form = ({ submit, children }) => (
  <form className='flex flex-col bg-gray-300 p-32 rounded-lg' onSubmit={submit}>
    {children}
  </form>
);

export default Form;
