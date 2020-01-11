import React from 'react';

const useError = () => {
  const [error, setError] = React.useState('');
  return {
    setError,
    error
  };
};

export default useError;
