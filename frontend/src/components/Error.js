import React from 'react';

function Error({ error }) {
  console.log(error);
  return typeof error === 'object' ? (
    <small className='text-red-500 mb-3'>{error?.message}</small>
  ) : (
    <small className='text-red-500 mb-3'>{error}</small>
  );
}

export default Error;
