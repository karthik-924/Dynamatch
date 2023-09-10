import React from "react";
import {BsCalendar} from "react-icons/bs"
const Card = (props) => {
  const {
    Name,
    Age,
    Gender,
    Bloodgroup,
    Type,
    Review,
  } = props.details;
  
  return (
    <div className="w-full justify-center items-center p-5 h-fit rounded-lg relative flex flex-col bg-white font-sans">
      <div className=" border-t-8 absolute top-0 border-r-0 border-l-0 border-b-0 w-full border-yellow-500 rounded-t-lg border-solid"></div>
      <div className="w-full flex justify-between items-center mb-4">
        <div className="flex flex-col">
          <p className="text-xl font-semibold m-0 mb-1 mt-2">{Name}</p>
          <p className="text-sm m-0 text-gray-400">
            {Age}, {Gender}
          </p>
        </div>
        <p className="text-xl font-medium m-0">{Bloodgroup}</p>
      </div>
      <div className="w-full">
        
              <p className="text-sm m-0">
                  {Review}
              </p>
              
      </div>
    </div>
  );
};

export default Card;
