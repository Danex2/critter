import React from 'react';

function FormInput({ name, label, inputRef, type, placeholder }) {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        className='rounded px-3 py-2 mb-3 focus:outline-none border-blue-300 border'
        type={type}
        name={name}
        ref={inputRef}
        placeholder={placeholder}
      />
    </>
  );
}

export default FormInput;
