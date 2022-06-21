import React from "react";

const Header = () => {
  return (
    <header className="pt-24 overflow-hidden ">
      <div className="max-w-7xl m-auto">
        <div className="flex flex-col lg:flex-row">
          <div className="w-full px-8 flex flex-col gap-4 items-center justify-center">
            <h1 className="text-8xl text-violet-600">Vladimir</h1>
            <p className="text-4xl">frontend developer</p>
            <a
              className="py-2 px-4 hover:px-6 mt-4 text-xl text-center text-white bg-gradient-to-b from-violet-600 hover:from-violet-500 to-violet-700 hover:to-violet-600 transition-all rounded-lg shadow-lg shadow-black/20 dark:shadow-gray-400/10"
              href="#projects"
            >
              <p>
                Check my work
                <span id="emoji-2" className="ml-2 inline-flex">
                  👇
                </span>
              </p>
              {/* <i className="ml-2 rotate-90 fa-solid fa-share"></i> */}
            </a>
          </div>
          <div className="w-full h-full px-8 flex justify-center relative">
            <img className="hero-img z-20 w-4/5" src="../hero_img.png" alt="" />
            <div className="blob-1 bg-gradient-to-r from-violet-500 to-violet-700 h-2/4 w-2/4 absolute z-10 top-0 shadow-2xl"></div>
            <div className="blob-2 bg-gradient-to-t from-violet-600 to-violet-800 h-3/4 w-full absolute bottom-0 shadow-2xl"></div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
