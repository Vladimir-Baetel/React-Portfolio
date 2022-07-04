const Footer = () => {
  return (
    <section id="projects">
      <div className="flex bg-gradient-to-b from-violet-600 to-violet-700">
        <div className="w-full p-4 max-w-7xl mx-auto flex items-center justify-between">
          <a href="#">
            <img className="w-16 mr-2" src="../logo.png" alt="" />
          </a>
          <div className="flex flex-col items-end">
            <p className="text-white sm:text-xl">
              made with <span className="animate-pulse">❤️</span> by Vladimir
              Băețel
            </p>
            <p className="sm:text-sm text-xs text-end text-white italic">
              no templates or pre-built components were hurt in the making of
              this portfolio
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
