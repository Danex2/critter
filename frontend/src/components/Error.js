import React from 'react';

function Error({ error }) {
  return error ? (
    <small className='text-red-900 mb-3'>{error?.message}</small>
  ) : null;
}

export default Error;
