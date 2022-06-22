import React from "react";

const Skills = () => {
  return (
    <div className="flex bg-gradient-to-b from-violet-600 to-violet-700">
      <div className="w-full p-4 max-w-7xl mx-auto flex">
        <div className="w-full flex md:justify-evenly justify-start md:overflow-x-none overflow-x-scroll">
          <div className="p-2 flex flex-col items-center bg-gradient-to-b from-violet-600 to-violet-700">
            <img
              className="w-20 h-20 min-w-[5rem]"
              src="HTML_icon.png"
              alt=""
            />
            <p className="text-white">HTML</p>
          </div>
          <div className="p-2 flex flex-col items-center bg-gradient-to-b from-violet-600 to-violet-700">
            <img className="w-20 h-20 min-w-[5rem]" src="CSS_icon.png" alt="" />
            <p className="text-white">CSS</p>
          </div>
          <div className="p-2 flex flex-col items-center bg-gradient-to-b from-violet-600 to-violet-700">
            <img className="w-20 h-20 min-w-[5rem]" src="JS_icon.png" alt="" />
            <p className="text-white">JavaScript</p>
          </div>
          <div className="p-2 flex flex-col items-center bg-gradient-to-b from-violet-600 to-violet-700">
            <img
              className="w-20 h-20 min-w-[5rem]"
              src="REACT_icon.png"
              alt=""
            />
            <p className="text-white">React</p>
          </div>
          <div className="p-2 flex flex-col items-center bg-gradient-to-b from-violet-600 to-violet-700">
            <img
              className="w-20 h-20 min-w-[5rem]"
              src="TAILWIND_icon.png"
              alt=""
            />
            <p className="text-white">Tailwind</p>
          </div>
          <div className="p-2 flex flex-col items-center bg-gradient-to-b from-violet-600 to-violet-700">
            <img
              className="w-20 h-20 min-w-[5rem]"
              src="SASS_icon.png"
              alt=""
            />
            <p className="text-white">SASS</p>
          </div>
          <div className="p-2 flex flex-col items-center bg-gradient-to-b from-violet-600 to-violet-700">
            <img
              className="w-20 h-20 min-w-[5rem]"
              src="JQUERY_icon.png"
              alt=""
            />
            <p className="text-white">jQuery</p>
          </div>
          <div className="p-2 flex flex-col items-center bg-gradient-to-b from-violet-600 to-violet-700">
            <img
              className="w-20 h-20 min-w-[5rem]"
              src="BOOTSTRAP_icon.png"
              alt=""
            />
            <p className="text-white">Bootstrap</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
