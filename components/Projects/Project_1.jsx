import React from "react";

const Project_1 = () => {
  return (
    <>
      <div className="w-full h-fit flex flex-col bg-white/20 rounded-lg shadow-lg border border-black/50 dark:border-white/50">
        <div className="flex relative">
          <div className="p-1.5 flex gap-1.5 absolute top-0 left-0">
            <div className="w-3 h-3 rounded-full bg-gradient-to-b from-red-400 to-red-600 border border-red-600"></div>
            <div className="w-3 h-3 rounded-full bg-gradient-to-b from-yellow-400 to-yellow-600 border border-yellow-600"></div>
            <div className="w-3 h-3 rounded-full bg-gradient-to-b from-green-400 to-green-600 border border-green-600"></div>
          </div>
          <p className="w-full bg-gradient-to-b from-white dark:from-gray-800 to-gray-300 dark:to-black border-b border-black/50 dark:border-white/50 dark:bg-black text-center rounded-t-lg">
            Weather App
          </p>
        </div>
        <div className="flex relative">
          <img className="rounded-b-lg" src="Weather_App.jpg" alt="" />
          <div className="w-full h-full flex flex-col opacity-0 hover:opacity-100 transition-opacity ease-in-out bg-black/50 text-white rounded-b-lg absolute">
            <div className="grow flex items-center justify-around">
              <a
                className="w-full h-full"
                href="https://github.com/Vladimir-Baetel/Weather-App.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-full h-full flex flex-col items-center justify-center hover:text-violet-300">
                  <i className="text-6xl fa-brands fa-github"></i>
                  <p>Check GitHub Repo</p>
                </div>
              </a>
              <a
                className="w-full h-full"
                href="https://vladimir-baetel.github.io/Weather-App/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="w-full h-full flex flex-col items-center justify-center hover:text-violet-300">
                  <i className="text-6xl fa-solid fa-globe"></i>
                  <p>Check Live Demo</p>
                </div>
              </a>
            </div>
            <div className="w-fit mx-auto flex gap-2 bg-black/50 rounded-full">
              <div className="p-2 flex flex-col items-center">
                <img
                  className="w-10 h-10 min-w-[2.5rem]"
                  src="HTML_icon.png"
                  alt=""
                />
              </div>
              <div className="p-2 flex flex-col items-center">
                <img
                  className="w-10 h-10 min-w-[2.5rem]"
                  src="SASS_icon.png"
                  alt=""
                />
              </div>
              <div className="p-2 flex flex-col items-center">
                <img
                  className="w-10 h-10 min-w-[2.5rem]"
                  src="JS_icon.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project_1;
