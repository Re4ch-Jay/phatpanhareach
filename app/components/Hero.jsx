import React from 'react';

export default function Hero() {
  const age = Math.floor((new Date() - new Date("2003-10-18")) / (365.25 * 24 * 60 * 60 * 1000));
  return (
    <div className="p-8 rounded-lg shadow-lg mx-auto max-w-screen-lg mt-20">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-5">
        <div className="text-white text-2xl max-w-md text-center">
          <h1 className="text-4xl font-extrabold">Phat Panhareach</h1>
          <h4 className="text-2xl font-semibold">Software Engineer</h4>
          <a href="mailto:panhareach.phat.2050@gmail.com" className="text-base hover:underline">panhareach.phat.2050@gmail.com</a>
          <br />
          <br />
          <p className="text-lg">
          I'm a {age} years old, enthusiastic learner who thrives on exploring novel technologies. My journey has led me to captivating projects, and I'm an active creator and contributor to open-source initiatives.
          </p>
        </div>
        <div className="w-52 h-52 md:w-96 md:h-96 lg:w-128 lg:h-128 relative flex items-center justify-center">
          <img className="w-full h-full rounded-full" src="https://avatars.githubusercontent.com/u/111555521?v=4" alt="Phat Panhareach Profile" />
        </div>
      </div>
    </div>
  );
}
