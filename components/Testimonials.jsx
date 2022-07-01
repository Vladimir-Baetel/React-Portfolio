import React from "react";

const Testimonials = () => {
  return (
    <div className="lg:w-full w-2/3 mx-auto h-full p-8 flex flex-col justify-between gap-8 bg-white/75 dark:bg-black/75 rounded-lg shadow-lg backdrop-blur-sm">
      <div className="flex items-center">
        <img
          className="w-12 h-12 rounded-full shadow-lg"
          src="My_Mom.jpg"
          alt=""
        />
        <p className="ml-2 text-lg">My mom</p>
      </div>
      <q className="text-lg italic text-justify text-gray-500 dark:text-gray-400">
        Vladimir is the best son I could ever ask for! He is the smartest person
        I know. Whenever I have trouble with my phone or TV he helps me fix them
        right away. I love him so much!
      </q>
      <p className="text-right">22 July 2022</p>
    </div>
  );
};

export default Testimonials;
