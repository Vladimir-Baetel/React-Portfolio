import React from "react";

const Project_2 = () => {
  return (
    <>
      <div className="w-full h-fit flex flex-col bg-white/20 rounded-lg shadow-lg border border-black/50 dark:border-white/50 relative">
        <div className="p-1.5 flex gap-1.5 absolute top-0 left-0">
          <div className="w-3 h-3 rounded-full bg-gradient-to-b from-red-400 to-red-600 border border-red-600"></div>
          <div className="w-3 h-3 rounded-full bg-gradient-to-b from-yellow-400 to-yellow-600 border border-yellow-600"></div>
          <div className="w-3 h-3 rounded-full bg-gradient-to-b from-green-400 to-green-600 border border-green-600"></div>
        </div>
        <p className="bg-gradient-to-b from-white dark:from-gray-800 to-gray-300 dark:to-black border-b border-black/50 dark:border-white/50 dark:bg-black text-center rounded-t-lg">
          React Portfolio
        </p>
        <img className="rounded-b-lg" src="React_Portfolio.jpg" alt="" />
      </div>
    </>
  );
};

export default Project_2;
