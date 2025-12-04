import React from 'react';
import { FcAndroidOs } from "react-icons/fc";
import apple from '../icon/apple.png';
import windows from '../icon/windows.png';

const PlatformsComingSoon = () => {
  return (
    <>
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-2 mt-30">
          Bald verfügbar sei einer der Ersten!
        </h1>
        <p className="text-xl text-center font-bold mt-2">
          Melde dich jetzt an und teste CHOSEN vor dem offiziellen Start.
        </p>
      </div>

      <div
        className="rounded-2xl w-full max-w-3xl mx-auto 
                shadow-xl
                
                font-sans text-center bg-gray-200 p-6 md:p-10 lg:p-12  my-10 border-none">

        <div className="flex justify-center items-center text-lg md:text-xl font-medium space-x-4 divide-x divide-white/50">
          <div className="flex items-center space-x-2 pr-4">
            <img src={apple} alt="Apple" className="w-10 h-10 md:w-14 md:h-14" />
            <span>iOS</span>
          </div>
          <div className="flex items-center space-x-2 px-4">
            <FcAndroidOs className="w-14 h-12 md:w-16 md:h-16" />
            <span>Android</span>
          </div>

          <div className="flex items-center space-x-2 pl-4">
            <img src={windows} alt="Windows" className="w-10 h-10 md:w-14 md:h-14" />
            <span> Windows</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlatformsComingSoon;