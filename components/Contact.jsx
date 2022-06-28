const About = () => {
  return (
    <section id="contact">
      <div className="px-4 py-32 max-w-7xl mx-auto flex flex-col gap-16">
        <div className="w-full flex gap-8">
          <div className="w-full flex flex-col">
            <p className="text-xl">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              eos perspiciatis sapiente aliquid rem dolorum accusamus, debitis,
              totam eligendi ad fugiat dolore temporibus labore reprehenderit
              dolorem, amet possimus doloribus nostrum repellat. Dolores eum
              libero reprehenderit nobis cum beatae, ab reiciendis, impedit
              ratione laboriosam in alias doloremque earum? Quos, dicta esse.
            </p>
          </div>

          <div className="w-fit flex flex-col items-center relative">
            <img
              className="border-8 border-violet-700 rounded-lg shadow-lg"
              src="coding.gif"
              alt=""
            />
            <p className="px-2 text-xl text-white absolute top-2 left-2">
              <i className="mr-2 animate-pulse text-red-600 fa-solid fa-video"></i>{" "}
              livestream of me coding
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
