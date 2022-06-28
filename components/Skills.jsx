import { useEffect } from "react";

const Skills = () => {
  const skillsAnimation = () => {
    useEffect(() => {
      for (
        let i = 0;
        i < document.querySelector(".skill-cont").children.length;
        i++
      ) {
        document.querySelector(".skill-cont").children[i].style.animationDelay =
          150 * i + "ms";
      }
    });
  };
  skillsAnimation();

  return (
    <div className="flex bg-gradient-to-b from-violet-600 to-violet-700">
      <div className="w-full max-w-7xl mx-auto flex">
        <div className="skill-cont w-full flex gap-2 md:justify-around justify-start md:overflow-x-hidden overflow-x-scroll text-white">
          <div className="fade-in p-2 flex flex-col items-center">
            <img
              className="w-20 h-20 min-w-[5rem]"
              src="HTML_icon.png"
              alt=""
            />
            <p className="-mt-2 mb-2">HTML</p>
          </div>
          <div className="fade-in p-2 flex flex-col items-center">
            <img className="w-20 h-20 min-w-[5rem]" src="CSS_icon.png" alt="" />
            <p className="-mt-2 mb-2">CSS</p>
          </div>
          <div className="fade-in p-2 flex flex-col items-center">
            <img className="w-20 h-20 min-w-[5rem]" src="JS_icon.png" alt="" />
            <p className="-mt-2 mb-2">JavaScript</p>
          </div>
          <div className="fade-in p-2 flex flex-col items-center">
            <img
              className="w-20 h-20 min-w-[5rem]"
              src="REACT_icon.png"
              alt=""
            />
            <p className="-mt-2 mb-2">React</p>
          </div>
          <div className="fade-in p-2 flex flex-col items-center">
            <img
              className="w-20 h-20 min-w-[5rem]"
              src="TAILWIND_icon.png"
              alt=""
            />
            <p className="-mt-2 mb-2">Tailwind</p>
          </div>
          <div className="fade-in p-2 flex flex-col items-center">
            <img
              className="w-20 h-20 min-w-[5rem]"
              src="SASS_icon.png"
              alt=""
            />
            <p className="-mt-2 mb-2">SASS</p>
          </div>
          <div className="fade-in p-2 flex flex-col items-center">
            <img
              className="w-20 h-20 min-w-[5rem]"
              src="JQUERY_icon.png"
              alt=""
            />
            <p className="-mt-2 mb-2">jQuery</p>
          </div>
          <div className="fade-in p-2 flex flex-col items-center">
            <img
              className="w-20 h-20 min-w-[5rem]"
              src="BOOTSTRAP_icon.png"
              alt=""
            />
            <p className="-mt-2 mb-2">Bootstrap</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
