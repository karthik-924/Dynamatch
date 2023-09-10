import React from "react";
import {BsCalendar} from "react-icons/bs"
const Card = (props) => {
  const {
    Name,
    Age,
    Gender,
    Bloodgroup,
    Type,
    Phoneno,
    Fatalhealth,
    Email,
    Reason,
  } = props.details;
  const { page, date } = props;
  const formatTime = (timestamp) => {
    // const timestamp = "2023-09-30T06:30:00.331Z";

    // Create a Date object from the timestamp
    const dateObj = new Date(timestamp);

    // Define months in abbreviated form
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    // Extract the date and time components
    const day = dateObj.getDate();
    const month = months[dateObj.getMonth()];
    const hours = dateObj.getHours();
    const minutes = dateObj.getMinutes();

    // Determine AM or PM
    const amOrPm = hours >= 12 ? "PM" : "AM";

    // Convert hours to 12-hour format
    const formattedHours = hours % 12 || 12;

    // Format the date and time
    const formattedDate = `${day} ${month}, ${formattedHours}:${
      minutes < 10 ? "0" : ""
      }${minutes} ${amOrPm}`;
    
    return formattedDate
  };
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
          <b>Type :</b> {Type}
        </p>
        <p className="text-sm m-0">
          <b>Phone no :</b> {Phoneno}
        </p>
        <p className="text-sm m-0">
          <b>Email :</b> {Email}
        </p>
        {page === "Recepients" ? (
          <>
            <p className="text-sm m-0">
              <b>Reason :</b> {Reason}
            </p>
            <p className="text-sm m-0 mt-2 text-gray-700 items-center flex">
              <span className="mr-2"><BsCalendar/></span>
              {formatTime(date)}
            </p>
          </>
        ) : (
          <p className="text-sm m-0">
            <b>Fatalhealth :</b> {Fatalhealth}
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
