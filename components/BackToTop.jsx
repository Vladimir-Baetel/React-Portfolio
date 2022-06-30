import React from "react";

const BackToTop = () => {
  return (
    <a href="#">
      <div className="w-fit flex flex-col items-center justify-center fixed bottom-10 right-10 opacity-25 hover:opacity-100">
        <i className="text-3xl fa-solid fa-circle-up"></i>
        <p className="mt-1 text-xs">back to top</p>
      </div>
    </a>
  );
};

export default BackToTop;
