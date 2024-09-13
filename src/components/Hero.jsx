"use client"

import React from "react";

import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Asolin_Resume (1).pdf'; 
    link.download = 'Asolin_Resume (1).pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-7 text-center sm:text-left">

          <h1 className="text-[18px] lg:text-2xl font-semibold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500  via-yellow-500 to-orange-500 text-4xl">Hello, I'm </span><span className="text-4xl text-white">A.Asolin Maso</span>
            <br />
            <TypeAnimation className="mt-3 block  text-white"
              sequence={[
                'MERN Stack Developer',
                1000,
              ]}
              wrapper="span"
              speed={50}
              style={{ fontSize: '2em', display: 'inline-block' }}
              repeat={Infinity}
            />
          </h1>
          <p className="text-lg lg:text-xl text-[#ADB7BE]">
           Bachelor of Commerce - 2021
          </p>
          <div>

            <button onClick={handleDownloadCV} className="px-1 py-1 rounded-full w-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 sm:w-fit bg-transparent text-white hover:bg-slate-800 mt-3">
              <span className="bg-black rounded-full block px-5 py-2">Download CV</span>
            </button>
          </div>
        </div>
        {/* <div className="col-span-5 place-self-center mt-4">
          <Image
            className="text-white rounded-lg" 
            src={profile}
            width={340}
            height={340}
            alt="profile"
          />
       
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
