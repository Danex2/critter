import React from 'react';

function Button({ type, name }) {
  return (
    <button className='bg-blue-900 rounded text-white py-1' type={type}>
      {name}
    </button>
  );
}

export default Button;
