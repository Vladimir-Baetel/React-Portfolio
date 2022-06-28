import { useState, useEffect } from "react";

const Navbar = () => {
  const [isFirst, setIsFirst] = useState(true);
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    if (isFirst) {
      setIsFirst(false);
      return;
    }

    document.documentElement.classList.toggle("dark");

    document.querySelector("#toggle-btn").classList.add("spin");
    setTimeout(() => {
      document.querySelector("#toggle-btn").classList.remove("spin");
    }, 500);
  }, [toggle]);

  useEffect(() => {
    const toggleBtn = document.querySelector("#toggle-btn");

    if (document.documentElement.classList.contains("dark")) {
      setTimeout(() => {
        toggleBtn.innerHTML =
          '<i class="fa-solid fa-sun hover:text-violet-600"></i>';
      }, 250);
    } else {
      setTimeout(() => {
        toggleBtn.innerHTML =
          '<i class="fa-solid fa-moon hover:text-violet-600"></i>';
      }, 250);
    }
  });

  const NavbarHeight = () => {
    useEffect(() => {
      const navbarH = document.querySelector("#navbar").offsetHeight;

      document.documentElement.style.setProperty(
        "scroll-padding-top",
        navbarH + "px"
      );
    });
  };
  NavbarHeight();

  return (
    <nav
      id="navbar"
      className="w-full bg-white/50 dark:bg-black/50 shadow shadow-black/10 dark:shadow-gray-200/10 backdrop-blur-sm fixed z-50"
    >
      <div className="flex sm:flex-row flex-col max-w-7xl mx-auto relative">
        <div className="py-2 px-4 flex grow justify-between">
          <div className="flex items-center cursor-pointer">
            <a href="#" className="flex items-center">
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
              className="py-2 px-4 text-lg hover:text-violet-600 text-center"
            >
              About
            </a>
            <a
              href="#projects"
              className="py-2 px-4 text-lg hover:text-violet-600 text-center"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="py-1 px-4 hover:px-6 mx-2 hover:mx-0 text-lg text-center text-white bg-gradient-to-b from-violet-600 hover:from-violet-500 to-violet-700 hover:to-violet-600 transition-all rounded-lg shadow-lg border-2 border-violet-600"
            >
              <p>
                Contact
                <span id="emoji-1" className="ml-2 inline-flex">
                  ✋
                </span>
              </p>
            </a>
          </div>
          <div className="px-4 sm:py-0 py-2 flex items-center justify-center">
            <p className="mr-2 sm:hidden inline">Dark</p>
            <button id="toggle-btn" onClick={(e) => setToggle(!toggle)}>
              <i className="fa-solid fa-moon hover:text-violet-600"></i>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
