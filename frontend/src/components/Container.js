import React from 'react';

function Container({ children }) {
  return (
    <div className='container mx-auto flex justify-center items-center h-full'>
      {children}
    </div>
  );
}

export default Container;
