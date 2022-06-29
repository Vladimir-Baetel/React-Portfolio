import { Project_1, Project_2 } from "..";

const Projects = () => {
  return (
    <section id="projects">
      <div className="flex flex-col bg-gradient-to-b from-violet-600/50 to-violet-700/50">
        <div className="px-4 py-32 max-w-7xl mx-auto flex flex-col gap-16">
          <div className="flex lg:flex-row flex-col gap-16">
            <Project_1 />
            <Project_2 />
          </div>
          {/* <div className="flex lg:flex-row flex-col gap-16">
            <div className="w-full h-60 flex flex-col bg-white/20 rounded-lg shadow-lg">
              Certification
            </div>
            <div className="w-full h-60 flex flex-col bg-white/20 rounded-lg shadow-lg">
              Certification
            </div>
            <div className="w-full h-60 flex flex-col bg-white/20 rounded-lg shadow-lg">
              Certification
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Projects;
