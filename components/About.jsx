import { Skills, Testimonials } from "../components";

const About = () => {
  return (
    <section id="about">
      <Skills />
      <div className="w-full max-w-7xl mx-auto flex flex-col">
        <div className="w-full px-4 py-32 flex lg:flex-row flex-col gap-8">
          <div className="w-full flex flex-col justify-center">
            <pre className="mx-auto">
              <p className="md:text-4xl sm:text-3xl text-2xl">
                <span className="text-violet-700">console</span>.
                <span className="text-green-400">log</span>
                <span className="text-pink-400">&#40;</span>
                <span className="text-blue-500">"hello world"</span>
                <span className="text-pink-400">&#41;</span>
              </p>
            </pre>
            2+ years of experience as a frontend dev
          </div>
          <div className="w-full">
            <div className="flex flex-col gap-8 md:text-2xl sm:text-xl text-lg md:leading-10r">
              <p>Passionate about:</p>
              <div className="flex flex-wrap gap-2">
                <p className="w-fit px-4 items-center rounded-full bg-gradient-to-b from-blue-400 to-blue-500 shadow-lg">
                  🖥️ technology
                </p>
                <p className="w-fit px-4 items-center rounded-full bg-gradient-to-b from-green-400 to-green-500 shadow-lg">
                  💰 finance
                </p>
                <p className="w-fit px-4 items-center rounded-full bg-gradient-to-b from-red-400 to-red-500 shadow-lg">
                  🚗 cars
                </p>
                <p className="w-fit px-4 items-center rounded-full bg-gradient-to-b from-violet-400 to-violet-500 shadow-lg">
                  🚀 space
                </p>
                <p className="w-fit px-4 items-center rounded-full bg-gradient-to-b from-yellow-400 to-yellow-500 shadow-lg">
                  🍝 cooking
                </p>
                <p className="w-fit px-4 items-center rounded-full bg-gradient-to-b from-indigo-400 to-indigo-500 shadow-lg">
                  🕹️ gaming
                </p>
              </div>
              <a
                className="italic"
                href="https://youtu.be/5PsnxDQvQpw?t=15"
                target="blank"
              >
                <q>I'm just a regular, everyday, normal guy...</q>
              </a>
            </div>
          </div>
        </div>
        <Testimonials />
      </div>
    </section>
  );
};

export default About;
