const About = () => {
  return (
    <section id="contact">
      <div className="w-full max-w-7xl mx-auto flex">
        <div className="w-full px-4 py-8 flex gap-8">
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
          <div className="w-full flex flex-col items-center">
            <img
              className="w-2/3 border-8 border-violet-700 rounded-lg shadow-lg"
              src="coding.gif"
              alt=""
            />
            <p className="text-2xl">🔴 livestream of me coding</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
