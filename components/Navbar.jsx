import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isFirst, setIsFirst] = useState(true);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    if (isFirst) {
      setIsFirst(false);
      return;
    }

    document.documentElement.classList.toggle("dark");
  }, [toggle]);

  return (
    <nav className="w-full bg-white/50 dark:bg-black/50 shadow-lg shadow-black/10 dark:shadow-gray-400/10 fixed z-50">
      <div className="flex sm:flex-row flex-col max-w-7xl mx-auto relative">
        <div className="py-2 px-4 flex grow justify-between">
          <div className="flex items-center cursor-pointer">
            <a href="/" className="flex items-center">
              <img className="w-12 mr-2" src="../logo.png" alt="" />
              <h1 className="text-2xl">Vladimir Băețel</h1>
            </a>
          </div>
          <div className="sm:hidden">
            <i
              id="nav-button"
              className="fa-solid fa-ellipsis sm:text-2xl text-lg"
            ></i>
          </div>
        </div>
        <div
          id="mobile-nav"
          className="sm:w-fit w-1/2 sm:flex hidden sm:flex-row flex-col items-center sm:static absolute right-0 sm:bg-inherit bg-black/20 sm:border-0 border-t-0 border-r-0 border border-slate-300/10"
        >
          <div className="sm:w-fit w-full flex items-center sm:flex-row flex-col">
            <a
              href="#about"
              className="py-2 px-4 text-lg hover:text-violet-500 text-center"
            >
              About
            </a>
            <a
              href="#"
              className="py-2 px-4 text-lg hover:text-violet-500 text-center"
            >
              Projects
            </a>
            <a
              href="#"
              className="py-1 px-4 hover:px-6 mx-2 hover:mx-0 text-lg text-center text-white bg-violet-600 hover:bg-violet-500 transition-all rounded-lg shadow-lg shadow-black/20 dark:shadow-gray-400/10"
            >
              Contact
            </a>
          </div>
          <div className="px-4 sm:py-0 py-2 flex items-center justify-center">
            <p className="mr-2 sm:hidden inline">Dark</p>
            <button id="toggle-btn" onClick={(e) => setToggle(!toggle)}>
              <i className="fa-solid fa-circle-half-stroke hover:text-violet-500"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
