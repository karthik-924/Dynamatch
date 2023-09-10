import React from "react";
import Wave from "../../assets/Wave.png";

const Request = () => {
  return (
    <div className="w-full min-h-full relative flex justify-center items-center">
      <div className="w-[80%] max-md:w-[90%] max-[500px]:[100%] h-full relative flex justify-center items-center">
        <div className="w-full absolute h-full justify-center items-center flex">
          <img className="w-full opacity-30" src={Wave} alt="Wave" />
        </div>
      </div>
    </div>
  );
};

export default Request;
