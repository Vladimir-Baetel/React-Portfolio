import React from "react";

const Header = () => {
  return (
    <header className="max-w-7xl pt-8 m-auto relative">
      <div className="flex flex-col lg:flex-row overflow-hidden">
        <div className="w-full px-8 flex flex-col gap-4 items-center justify-center z-20">
          <p className="text-4xl">hi there 👋</p>
          <h1 className="text-8xl text-violet-500">Vladimir</h1>
          <p className="text-4xl">frontend developer</p>
        </div>
        <div className="w-full h-full px-8 flex justify-center relative">
          <img className="hero-img z-50 w-4/5" src="../hero_img.png" alt="" />
          <div className="blob-1 bg-gradient-to-r from-violet-500 to-violet-700 h-2/4 w-2/4 absolute z-20 top-0"></div>
          <div className="blob-2 bg-gradient-to-t from-violet-600 to-violet-800 h-3/4 w-full absolute z-10 bottom-0"></div>
        </div>
      </div>

      {/* <div className="blob-3 bg-violet-200 h-80 w-80 blur-xl absolute top-1/4 z-10"></div> */}
    </header>
  );
};

export default Header;
