import { Skills, Testimonials } from "../components";

const About = () => {
  return (
    <section id="about">
      <Skills />
      <div className="max-w-7xl py-16 mx-auto flex flex-col">
        <pre className="mx-auto">
          <p className="md:text-4xl sm:text-3xl text-2xl">
            <span className="text-violet-700">console</span>.
            <span className="text-green-400">log</span>
            <span className="text-pink-400">&#40;</span>
            <span className="text-blue-500">"hello world"</span>
            <span className="text-pink-400">&#41;</span>;
          </p>
        </pre>
        <div className="px-4 py-16 flex flex-col gap-8">
          <div className="w-full flex flex-col justify-center gap-8">
            <div className="flex gap-4 items-center justify-center">
              <div>
                <p className="text-8xl font-bold text-violet-600">
                  2<span className="text-6xl">+</span>
                </p>
              </div>
              <div className="flex-col text-4xl">
                <p>years of experience</p>
                <p>as a frontend developer</p>
              </div>
            </div>
            <div className="px-8 flex flex-col gap-4 text-2xl text-justify">
              <p className="indent-4">
                Although I am a superstar when it comes to customer success, I
                have found my passion for development when I joined this cool
                little IT start-up towards the end of 2019 where I learned some
                HTML and CSS by doing customizations for Shopify stores and I
                absolutely loved it!
              </p>
              <p className="indent-4">
                Fast forward a couple of years and now I'm building and
                designing clean, modern, fully-responsive and pixel-perfect
                websites from scratch using React.js, Next.js and Tailwind.
              </p>
            </div>
            <p className="flex items-center justify-center text-2xl">
              Check out my
              <a
                className="mx-2 text-violet-600 hover:text-violet-700 border-b border-violet-600"
                href=""
              >
                <i className="fa-brands fa-linkedin"></i> LinkedIn
              </a>{" "}
              profile for more
            </p>
          </div>
          <div className="w-full flex flex-col gap-4 items-center md:text-2xl sm:text-xl text-lg md:leading-10r">
            <p>Hobbies and interests include:</p>
            {/* <a
              className="italic text-center"
              href="https://youtu.be/5PsnxDQvQpw?t=15"
              target="blank"
            >
              <q>I'm just a regular, everyday, normal guy...</q>
            </a> */}
            <div className="mb-4 flex flex-wrap justify-center gap-2">
              <p className="w-fit px-4 items-center rounded-full bg-gradient-to-b from-blue-400 to-blue-500 shadow-lg">
                🖥️ technology
              </p>
              <p className="w-fit px-4 items-center rounded-full bg-gradient-to-b from-green-400 to-green-500 shadow-lg">
                💵 finance
              </p>
              <p className="w-fit px-4 items-center rounded-full bg-gradient-to-b from-red-400 to-red-500 shadow-lg">
                🚗 cars
              </p>
              <p className="w-fit px-4 items-center rounded-full bg-gradient-to-b from-slate-400 to-slate-500 shadow-lg">
                👽 space
              </p>
              <p className="w-fit px-4 items-center rounded-full bg-gradient-to-b from-yellow-400 to-yellow-500 shadow-lg">
                🍝 cooking
              </p>
              <p className="w-fit px-4 items-center rounded-full bg-gradient-to-b from-violet-400 to-violet-500 shadow-lg">
                🕹️ gaming
              </p>
            </div>
          </div>
        </div>
      </div>
      <Testimonials />
    </section>
  );
};

export default About;
