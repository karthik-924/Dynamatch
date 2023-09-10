import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";

const Card = (props) => {
  const { text, image, description } = props;
  console.log(props);
  
  return (
    <div className="flip-card" >
      <div className="flip-card-inner max-lg:w-[250px] max-lg:h-[250px] max-sm:w-[220px] max-sm:h-[220px]">
        <div className="flip-card-front rounded-md max-lg:w-[250px] max-lg:h-[250px] max-sm:w-[220px] max-sm:h-[220px]">
          <img
            src={image}
            alt="Avatar"
            className="w-[300px] h-[300px] max-lg:w-[250px] max-lg:h-[250px] max-sm:w-[220px] max-sm:h-[220px] rounded-md"
          />
        </div>
        <div className="flip-card-back bg-transparent w-full h-full rounded-md max-lg:w-[250px] max-lg:h-[250px] max-sm:w-[220px] max-sm:h-[220px]">
          <p className="text-xl font-bold text-white max-lg:text-lg font-sans m-0 mt-2 mb-2">
            {text}
          </p>
          <p className="text-md font-sans m-0 text-white max-lg:text-sm w-full">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
