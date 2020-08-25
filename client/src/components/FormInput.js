import React from "react";

function FormInput({
  name,
  label,
  inputRef,
  type,
  placeholder,
  optionalText,
  value,
}) {
  return (
    <>
      <label className="text-gray-900" htmlFor={name}>
        {label}
        {optionalText ? (
          <small className="text-gray-900"> - {optionalText}</small>
        ) : null}
      </label>
      <input
        className="rounded w-64 sm:w-full px-3 py-2  mb-3 focus:outline-none border-blue-300 border"
        type={type}
        name={name}
        ref={inputRef}
        placeholder={placeholder}
        defaultValue={value}
      />
    </>
  );
}

export default FormInput;
