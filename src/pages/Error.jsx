import React from "react";

const ErrorPage = () => {
  
  return (
    <div className="flex justify-center align-middle">
      <div className="my-[4vw]">
        <img src='./img_404.png' alt="img" />
        <h1 className="text-4xl font-bold text-center mt-10 text-red-600">Oops Something went wrong</h1>
      </div>
    </div>
  );
};

export default ErrorPage;