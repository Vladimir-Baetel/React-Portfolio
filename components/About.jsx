import { Skills, Testimonials } from "../components";

const About = () => {
  return (
    <section id="about">
      <Skills />
      <div className="max-w-7xl px-4 py-16 mx-auto flex flex-col gap-16">
        {/* <pre className="mx-auto">
					<p className="md:text-6xl sm:text-4xl text-2xl">
						<span className="text-violet-700">console</span>.
						<span className="text-green-400">log</span>
						<span className="text-pink-400">&#40;</span>
						<span className="text-blue-500">"hello world"</span>
						<span className="text-pink-400">&#41;</span>;
					</p>
				</pre>
				<div className="py-16 flex lg:flex-row flex-col gap-4">
					<div className="w-full p-8 flex flex-col justify-center gap-8 backdrop-blur-sm bg-white/25 dark:bg-black/25 border border-violet-500/25 rounded-lg shadow-lg">
						<div className="flex gap-4 items-center justify-center">
							<div>
								<p className="text-8xl font-bold text-violet-600">
									2<span className="text-6xl">+</span>
								</p>
							</div>
							<div className="flex-col text-3xl">
								<p>years of experience</p>
								<p>as a frontend developer</p>
							</div>
						</div>
						<div className="flex flex-col gap-4 text-xl text-justify">
							<p>
								I'm passionate about building and designing clean, modern,
								fully-responsive and pixel-perfect websites from scratch using
								React.js, Next.js and Tailwind.
							</p>
						</div>
						<p className="flex items-center justify-center text-2xl">
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
					<div className="w-full p-8 flex flex-col gap-4 items-center justify-between md:text-xl text-lg backdrop-blur-sm bg-white/25 dark:bg-black/25 border border-violet-500/25 rounded-lg shadow-lg">
						<p className="text-3xl">Hobbies and interests of mine:</p>
						<div className="px-4 flex flex-wrap justify-center gap-2">
							<p className="w-fit px-4 py-1 items-center rounded-full bg-gradient-to-b from-blue-400 to-blue-500 shadow-lg">
								🖥️ computers
							</p>
							<p className="w-fit px-4 py-1 items-center rounded-full bg-gradient-to-b from-green-400 to-green-500 shadow-lg">
								💵 finance
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
							<p className="w-fit px-4 py-1 items-center rounded-full bg-gradient-to-b from-violet-400 to-violet-500 shadow-lg">
								🕹️ gaming
							</p>
						</div>

						<a
							className="italic text-center"
							href="https://youtu.be/5PsnxDQvQpw?t=15"
							target="blank"
						>
							<q>I'm just a regular, everyday, normal guy...</q>
						</a>
					</div>
				</div> */}
        <div className="w-full flex gap-16">
          <div className="w-full">
            <div className="h-96 bg-white rounded-lg shadow-lg"></div>
          </div>
          <div className="w-full flex flex-col justify-center gap-6">
            <div className="flex gap-4 items-center">
              <div>
                <p className="text-8xl font-bold text-violet-600">
                  2<span className="text-6xl">+</span>
                </p>
              </div>
              <div className="flex-col text-3xl">
                <p>years of experience</p>
                <p>as a frontend developer</p>
              </div>
            </div>
            <p className="text-2xl text-justify">
              What started out as doing simple customizations for Shopify stores
              quickly turned into a passion for building and designing clean,
              modern, fully-responsive and pixel-perfect websites from scratch
              using React, Next and Tailwind.
            </p>
            <p className="flex items-center text-xl">
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
        <div className="w-full flex gap-16">
          <div className="w-full flex flex-col justify-center gap-6">
            <p className="text-3xl">Hobbies and interests of mine:</p>
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
              <p className="w-fit px-4 py-1 items-center rounded-full bg-gradient-to-b from-violet-400 to-violet-500 shadow-lg">
                🕹️ gaming
              </p>
            </div>

            <a
              className="text-xl"
              href="https://youtu.be/5PsnxDQvQpw?t=15"
              target="blank"
            >
              <q>I'm just a regular, everyday, normal guy...</q>
            </a>
          </div>
          <div className="w-full">
            <div className="h-96">
              {/* <iframe
                className="rounded-lg shadow-lg"
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/5PsnxDQvQpw?start=12"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe> */}
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
    </section>
  );
};

export default About;
