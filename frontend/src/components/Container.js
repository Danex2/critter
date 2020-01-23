import React from "react";

function Container({ children }) {
  return (
    <div className="container mx-auto flex justify-center items-center h-full pt-5 pb-5">
      {children}
    </div>
  );
}

export default Container;
