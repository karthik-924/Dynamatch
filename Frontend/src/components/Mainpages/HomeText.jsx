// import React from 'react';
import Wave from "../../assets/Wave.png";
import Cards from "../Home/Cards";
import "./HomeText.css";


const HomeText = () => {
  return (
    <div className="min-h-full w-full relative">
      <div className="w-full h-full flex justify-center items-center">
        <img
          className="w-[90%] h-36 opacity-20 bg-gradient-to-r from-transparent via-opacity-50 to-transparent"
          src={Wave}
          alt="Wave"
        />
      </div>
      <div className="w-full h-full justify-center items-center flex flex-col absolute top-0 left-0">
        <p className="main-btn-shine max-[500px]:text-7xl">Dynamatch</p>
        <p className="text-gray-400 tracking-widest font-sans text-2xl m-0">
          Life saver
        </p>
        <div className="flex w-[35%] mt-16 max-xl:w-[40%] max-lg:w-[50%] max-md:w-[60%] max-sm:w-[80%] max-[500px]:flex-col max-[500px]:gap-10 justify-between items-center">
          <Cards text="Donate" />
          <Cards text="Request" />
        </div>
        {/* <Cards text="Donate" /> */}
      </div>
    </div>
  );
};

export default HomeText;
