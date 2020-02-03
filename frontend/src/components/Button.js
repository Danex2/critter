import React from 'react';

function Button({ type, name, onClick }) {
  return (
    <button
      className='bg-blue-900 rounded text-white py-1 mt-3 hover:bg-blue-700'
      type={type}
      onClick={onClick}
    >
      {name}
    </button>
  );
}

export default Button;
