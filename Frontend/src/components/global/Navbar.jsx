// import React from 'react'

import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const { active } = props;
  const navigate = useNavigate();
  console.log(active);
  const handleNavigation = useCallback(
    (path) => {
      navigate(path);
    },
    [navigate]
  );
  return (
    <div className="absolute right-0 top-10 z-50">
      <div className="flex flex-col items-end gap-4">
        <div
          onClick={() => {
            handleNavigation("/");
          }}
          className={`cursor-pointer pr-1 pl-2 flex gap-2 w-20 h-5 ${
            active === "Main"
              ? "p-1 bg-gray-600 items-center rounded-l-lg"
              : "items-center"
          }`}
        >
          <div
            className={`w-2 h-2 ${
              active !== "Main" ? "bg-gray-600" : "bg-white"
            } rounded-full`}
          ></div>
          <p
            className={`m-0 text-md text-white ${
              active !== "Main" ? "hidden" : "block"
            }`}
          >
            Home
          </p>
        </div>
        <div
          onClick={() => {
            handleNavigation("/?active=details");
          }}
          className={`cursor-pointer pl-2 pr-1 flex gap-2 w-20 h-5 ${
            active === "details"
              ? "p-1 bg-gray-600 items-center rounded-l-lg"
              : "items-center"
          }`}
        >
          <div
            className={`w-2 h-2 ${
              active !== "details" ? "bg-gray-600" : "bg-white"
            } rounded-full`}
          ></div>
          <p
            className={`m-0 text-md text-white ${
              active !== "details" ? "hidden" : "block"
            }`}
          >
            Details
          </p>
        </div>
        <div
          onClick={() => {
            handleNavigation("/?active=facts");
          }}
          className={`cursor-pointer pl-2 pr-1 flex gap-2 w-20 h-5 ${
            active === "facts"
              ? "p-1 bg-gray-600 items-center rounded-l-lg"
              : "items-center"
          }`}
        >
          <div
            className={`w-2 h-2 ${
              active !== "facts" ? "bg-gray-600" : "bg-white"
            } rounded-full`}
          ></div>
          <p
            className={`m-0 text-md text-white ${
              active !== "facts" ? "hidden" : "block"
            }`}
          >
            Facts
          </p>
        </div>
        <div
          onClick={() => {
            handleNavigation("/?active=gallery");
          }}
          className={`cursor-pointer pl-2 pr-1 flex gap-2 w-20 h-5 ${
            active === "gallery"
              ? "p-1 bg-gray-600 items-center rounded-l-lg"
              : "items-center"
          }`}
        >
          <div
            className={`w-2 h-2 ${
              active !== "gallery" ? "bg-gray-600" : "bg-white"
            } rounded-full`}
          ></div>
          <p
            className={`m-0 text-md text-white ${
              active !== "gallery" ? "hidden" : "block"
            }`}
          >
            Gallery
          </p>
        </div>
        <div
          onClick={() => {
            handleNavigation("/?active=team");
          }}
          className={`cursor-pointer pl-2 pr-1 flex gap-2 w-20 h-5 ${
            active === "team"
              ? "p-1 bg-gray-600 items-center rounded-l-lg"
              : "items-center"
          }`}
        >
          <div
            className={`w-2 h-2 ${
              active !== "team" ? "bg-gray-600" : "bg-white"
            } rounded-full`}
          ></div>
          <p
            className={`m-0 text-md text-white ${
              active !== "team" ? "hidden" : "block"
            }`}
          >
            Team
          </p>
        </div>
        <div
          onClick={() => {
            handleNavigation("/?active=donate");
          }}
          className={`cursor-pointer pl-2 pr-1 flex gap-2 w-20 h-5 ${
            active === "donate"
              ? "p-1 bg-gray-600 items-center rounded-l-lg"
              : "items-center"
          }`}
        >
          <div
            className={`w-2 h-2 ${
              active !== "donate" ? "bg-gray-600" : "bg-white"
            } rounded-full`}
          ></div>
          <p
            className={`m-0 text-md text-white ${
              active !== "donate" ? "hidden" : "block"
            }`}
          >
            Donate
          </p>
        </div>
        <div
          onClick={() => {
            handleNavigation("/?active=request");
          }}
          className={`cursor-pointer pl-2 pr-1 flex gap-2 w-20 h-5 ${
            active === "request"
              ? "p-1 bg-gray-600 items-center rounded-l-lg"
              : "items-center"
          }`}
        >
          <div
            className={`w-2 h-2 ${
              active !== "request" ? "bg-gray-600" : "bg-white"
            } rounded-full`}
          ></div>
          <p
            className={`m-0 text-md text-white ${
              active !== "request" ? "hidden" : "block"
            }`}
          >
            Request
          </p>{" "}
        </div>
         <div
          onClick={() => {
            handleNavigation("/?active=Review");
          }}
          className={`cursor-pointer pl-2 pr-1 flex gap-2 w-20 h-5 ${
            active === "Review"
              ? "p-1 bg-gray-600 items-center rounded-l-lg"
              : "items-center"
          }`}
        >
          <div
            className={`w-2 h-2 ${
              active !== "Review" ? "bg-gray-600" : "bg-white"
            } rounded-full`}
          ></div>
          <p
            className={`m-0 text-md text-white ${
              active !== "Review" ? "hidden" : "block"
            }`}
          >
            Review
          </p>
        </div>
        <div
          onClick={() => {
            handleNavigation("/?active=feedback");
          }}
          className={`cursor-pointer pl-2 pr-1 flex gap-2 w-20 h-5 ${
            active === "feedback"
              ? "p-1 bg-gray-600 items-center rounded-l-lg"
              : "items-center"
          }`}
        >
          <div
            className={`w-2 h-2 ${
              active !== "feedback" ? "bg-gray-600" : "bg-white"
            } rounded-full`}
          ></div>
          <p
            className={`m-0 text-md text-white ${
              active !== "feedback" ? "hidden" : "block"
            }`}
          >
            Feedback
          </p>
        </div>
       
      </div>
    </div>
  );
};

export default Navbar;
