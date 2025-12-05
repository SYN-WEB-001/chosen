import React from "react";
import { DiAndroid } from "react-icons/di";
import { FaApple } from "react-icons/fa";
import { BsWindows } from "react-icons/bs";

const platforms = [
  { icon: FaApple, label: "iOS" },
  { icon: DiAndroid, label: "Android" },
  { icon: BsWindows, label: "Windows" },
];

const PlatformsComingSoon = ({ scrollToCTA }) => {
  return (
    <>
      <div className="text-center mt-30">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">
          Bald verfügbar sei einer der Ersten!
        </h1>
        <p className="text-xl font-bold mt-2">
          Melde dich jetzt an und teste CHOSEN vor dem offiziellen Start.
        </p>
      </div>

      <div className="rounded-2xl w-full max-w-3xl mx-auto shadow-xl bg-gray-200 p-6 md:p-10 lg:p-12 my-10">
        <div className="flex justify-center items-center text-lg md:text-xl font-medium space-x-4 divide-x divide-white/50">
          {platforms.map(({ icon: Icon, label }, i) => (
            <div
              key={label}
              className={`flex items-center space-x-2 ${i === 0 ? "pr-4" : i === platforms.length - 1 ? "pl-4" : "px-4"
                }`}
            >
              <Icon className="w-10 h-10 md:w-14 md:h-14 text-black" />
              <span className="text-black">{label}</span>
            </div>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={scrollToCTA}
        className="btn text-lg font-bold text-white border-none px-6 py-4 rounded-xl shadow-lg mx-auto flex justify-center items-center mb-10"
        style={{
          background: "linear-gradient(145deg,#8a5ee0,#cc69e7)",
          boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
        }}
      >
        JETZT REGISTRIEREN
      </button>
    </>
  );
};

export default PlatformsComingSoon;
