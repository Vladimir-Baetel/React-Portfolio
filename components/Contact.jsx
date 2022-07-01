const About = () => {
  return (
    <section id="contact">
      <div className="px-4 py-32 max-w-7xl mx-auto flex lg:flex-row flex-col gap-16">
        <div className="w-full flex flex-col lg:items-start items-center justify-center gap-6">
          <p className="sm:text-3xl text-2xl">
            Like what you see?{" "}
            <span className="text-violet-600 font-bold">Let&apos;s talk!</span>
          </p>
          <div className="flex flex-col gap-2">
            <p
              onClick={() => {
                navigator.clipboard.writeText("+40739727097");
                alert("Phone copied to clipboard!");
              }}
              className="sm:text-2xl text-xl cursor-pointer"
            >
              <i className="mr-2 text-violet-600 fa-solid fa-square-phone"></i>
              +40 739 727 097
              <i className="ml-2 text-base text-violet-600 fa-solid fa-paste"></i>
            </p>
            <p
              onClick={() => {
                navigator.clipboard.writeText("vladimir.baetel@gmail.com");
                alert("Email copied to clipboard!");
              }}
              className="sm:text-2xl text-xl cursor-pointer"
            >
              <i className="mr-2 text-violet-600 fa-solid fa-square-envelope"></i>
              vladimir.baetel@gmail.com
              <i className="ml-2 text-base text-violet-600 fa-solid fa-paste"></i>
            </p>
          </div>
          <p className="sm:text-2xl text-xl lg:text-left text-center">
            I&apos;m open to both employment as well as freelance opportunities,
            so don&apos;t hesitate to contact me 😀
          </p>
          <div className="flex gap-4">
            <a
              href="https://www.linkedin.com/in/vladimir-baetel/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 flex items-center justify-center text-white bg-gradient-to-b from-violet-600 hover:from-violet-500 to-violet-700 hover:to-violet-600 transition-all rounded-lg shadow-lg border-2 border-violet-600">
                  <i className="p-4 text-3xl fa-brands fa-linkedin-in"></i>
                </div>
                <p>LinkedIn</p>
              </div>
            </a>
            <a
              href="https://github.com/Vladimir-Baetel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 flex items-center justify-center text-white bg-gradient-to-b from-violet-600 hover:from-violet-500 to-violet-700 hover:to-violet-600 transition-all rounded-lg shadow-lg border-2 border-violet-600">
                  <i className="p-4 text-3xl fa-brands fa-github"></i>
                </div>
                <p>GitHub</p>
              </div>
            </a>
            <a
              href="https://codepen.io/vladimirbaetel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className="flex flex-col items-center">
                <div className="w-16 flex items-center justify-center text-white bg-gradient-to-b from-violet-600 hover:from-violet-500 to-violet-700 hover:to-violet-600 transition-all rounded-lg shadow-lg border-2 border-violet-600">
                  <i className="p-4 text-3xl fa-brands fa-codepen"></i>
                </div>
                <p>CodePen</p>
              </div>
            </a>
          </div>
        </div>

        <div className="lg:w-full sm:w-2/3 w-full mx-auto h-fit flex flex-col bg-white/20 rounded-lg shadow-lg border border-black/50 dark:border-white/50 relative">
          <div className="p-1.5 flex gap-1.5 absolute top-0 left-0">
            <div className="w-3 h-3 rounded-full bg-gradient-to-b from-red-400 to-red-600 border border-red-600"></div>
            <div className="w-3 h-3 rounded-full bg-gradient-to-b from-yellow-400 to-yellow-600 border border-yellow-600"></div>
            <div className="w-3 h-3 rounded-full bg-gradient-to-b from-green-400 to-green-600 border border-green-600"></div>
          </div>
          <p className="bg-gradient-to-b from-white dark:from-gray-800 to-gray-300 dark:to-black border-b border-black/50 dark:border-white/50 dark:bg-black text-center rounded-t-lg">
            <i className="mr-2 animate-pulse text-red-600 fa-solid fa-video"></i>{" "}
            livestream of me coding
          </p>
          <img className="rounded-b-lg" src="coding.gif" alt="" />
        </div>
      </div>
    </section>
  );
};

export default About;
