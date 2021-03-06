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
      className="w-full bg-white/90 dark:bg-black/90 shadow-lg fixed z-50"
    >
      <div className="px-4 sm:py-2 py-0 max-w-7xl mx-auto flex justify-between items-center relative">
        <div className="flex items-center">
          <a href="#" className="flex items-center">
            <img className="sm:w-12 w-8 mr-2" src="../logo.png" alt="" />
            <h1 className="sm:text-2xl text-lg">Vladimir Băețel</h1>
          </a>
        </div>
        <div className="flex">
          <div className="mr-4 w-fit sm:flex hidden items-center">
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
          <div className="sm:py-0 py-2 flex items-center justify-center">
            <button id="toggle-btn" onClick={(e) => setToggle(!toggle)}>
              <i className="fa-solid fa-moon hover:text-violet-600"></i>
            </button>
          </div>
        </div>
        <div className="w-fit left-1/2 -translate-x-1/2 px-8 sm:hidden flex items-center justify-around gap-8 fixed bottom-2 bg-white/50 dark:bg-black/50 rounded-full border border-black/20 dark:border-white/20 backdrop-blur-sm shadow-lg">
          <a href="#">
            <i className="p-2 text-2xl fa-solid fa-house"></i>
          </a>
          <a href="#about">
            <i className="p-2 text-2xl fa-solid fa-user"></i>
          </a>
          <a href="#projects">
            <i className="p-2 text-2xl fa-solid fa-bars-progress"></i>
          </a>
          <a href="#contact">
            <i className="p-2 text-2xl fa-solid fa-address-book"></i>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
