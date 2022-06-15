const Navbar = () => {
  return (
    <nav className="w-full bg-black/20 border-b border-slate-300/10 shadow">
      <div className="flex sm:flex-row flex-col max-w-7xl mx-auto relative">
        <div className="py-2 px-4 flex grow justify-between">
          <div className="flex items-center cursor-pointer">
            <a href="/">
              <img className="w-10 mr-2" src="logo.png" alt="" />
            </a>
            <h1 className="text-xl">Vladimir Băețel</h1>
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
          <div className="sm:w-fit w-full flex sm:flex-row flex-col">
            <a
              href="#"
              className="py-2 px-4 text-lg hover:text-sky-500 text-center"
            >
              About
            </a>
            <a
              href="#"
              className="py-2 px-4 text-lg hover:text-sky-500 text-center"
            >
              Projects
            </a>
            <a
              href="#"
              className="py-2 px-4 text-lg hover:text-sky-500 text-center"
            >
              Contact
            </a>
          </div>
          <div className="px-4 sm:py-0 py-2 flex items-center justify-center sm:border-l sm:border-t-0 border-l-0 border-t sm:w-fit w-full border-slate-300/10">
            <p className="mr-2 sm:hidden inline">Dark</p>
            <i className="fa-solid fa-circle-half-stroke hover:text-sky-500"></i>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;