import { Skills, Testimonials } from "../components";

const About = () => {
  return (
    <section id="about">
      <Skills />
      <div className="max-w-7xl px-4 py-32 mx-auto flex flex-col gap-16">
        <div className="w-full flex lg:flex-row flex-col-reverse gap-16">
          <div className="w-full">
            <div className="h-96 bg-white rounded-lg shadow-lg">VIDEO</div>
          </div>
          <div className="w-full flex flex-col justify-center gap-6">
            <div className="flex gap-4 items-center lg:justify-start justify-center">
              <div>
                <p className="sm:text-8xl text-6xl font-bold text-violet-600">
                  2<span className="sm:text-6xl text-4xl">+</span>
                </p>
              </div>
              <div className="flex-col sm:text-3xl text-xl">
                <p>years of experience</p>
                <p>as a frontend developer</p>
              </div>
            </div>
            <p className="sm:text-2xl text-lg text-justify">
              What started out as doing simple customizations for Shopify stores
              quickly turned into a passion for building and designing clean,
              modern, fully-responsive and pixel-perfect websites from scratch.
            </p>
            <p className="flex items-center lg:justify-start justify-center sm:text-xl">
              Check out my
              <a
                className="mx-2 inline-flex items-center text-violet-600 hover:text-violet-700 border-b border-violet-600"
                href=""
              >
                <i className="mr-1 fa-brands fa-linkedin"></i> LinkedIn
              </a>{" "}
              profile for more
            </p>
          </div>
        </div>
        <div className="w-full flex lg:flex-row flex-col gap-16">
          <div className="flex flex-col gap-6 justify-center">
            <div className="w-full flex flex-col gap-6">
              <p className="text-3xl">Technical and soft skills:</p>
              <div className="flex flex-wrap gap-2 text-xl text-black">
                <p className="w-fit px-4 py-1 items-center rounded-full bg-gradient-to-b from-pink-300 to-rose-600 shadow-lg">
                  📈 sales
                </p>
                <p className="w-fit px-4 py-1 items-center rounded-full bg-gradient-to-b from-yellow-300 to-orange-600 shadow-lg">
                  💬 customer support
                </p>
                <p className="w-fit px-4 py-1 items-center rounded-full bg-gradient-to-b from-lime-300 to-green-600 shadow-lg">
                  🛍️ shopify
                </p>
                <p className="w-fit px-4 py-1 items-center rounded-full bg-gradient-to-b from-cyan-300 to-sky-600 shadow-lg">
                  🔎 googling
                </p>
                <p className="w-fit px-4 py-1 items-center rounded-full bg-gradient-to-b from-orange-300 to-red-600 shadow-lg">
                  🔗 git
                </p>
                <p className="w-fit px-4 py-1 items-center rounded-full bg-gradient-to-b from-sky-300 to-blue-600 shadow-lg">
                  💻 vs code
                </p>
                <p className="w-fit px-4 py-1 items-center rounded-full bg-gradient-to-b from-rose-300 to-red-600 shadow-lg">
                  📦 npm
                </p>
                <p className="w-fit px-4 py-1 items-center rounded-full bg-gradient-to-b from-teal-300 to-emerald-600 shadow-lg">
                  🖼️ figma
                </p>
                <p className="w-fit px-4 py-1 items-center rounded-full bg-gradient-to-b from-fuchsia-300 to-indigo-600 shadow-lg">
                  📷 photoshop
                </p>
              </div>
            </div>
            {/* <div className="w-full flex flex-col justify-center gap-6">
              <p className="text-3xl">Hobbies and interests:</p>
              <div className="flex flex-wrap gap-2 text-xl">
                <p className="w-fit px-4 py-1 items-center rounded-full bg-gradient-to-b from-blue-400 to-blue-500 shadow-lg">
                  🖥️ computers
                </p>
                <p className="w-fit px-4 py-1 items-center rounded-full bg-gradient-to-b from-green-400 to-green-500 shadow-lg">
                  💵 personal finance
                </p>
                <p className="w-fit px-4 py-1 items-center rounded-full bg-gradient-to-b from-red-400 to-red-500 shadow-lg">
                  🚗 cars
                </p>
                <p className="w-fit px-4 py-1 items-center rounded-full bg-gradient-to-b from-slate-400 to-slate-500 shadow-lg">
                  👽 space
                </p>
                <p className="w-fit px-4 py-1 items-center rounded-full bg-gradient-to-b from-yellow-400 to-yellow-500 shadow-lg">
                  🍝 cooking
                </p>
                <p className="w-fit px-4 py-1 items-center rounded-full bg-gradient-to-b from-indigo-400 to-indigo-500 shadow-lg">
                  🕹️ gaming
                </p>
              </div>
            </div> */}
          </div>
          <div className="w-full">
            <div className="">
              <Testimonials />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
