// import React from 'react'

import { useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const { active } = props;
  const navigate = useNavigate()
  console.log(active);
  const handleNavigation = useCallback((path) => {
    navigate(path);
  }, [navigate]);
  return (
    <div className="absolute right-0 top-10 z-50">
      <div className="flex flex-col items-end gap-4">
        <div onClick={() => { handleNavigation("/")}} className={`cursor-pointer pr-1 pl-2 flex gap-2 ${active==="Main"?'p-1 bg-gray-600 items-center rounded-l-lg':'items-center'}`}>
          <p className={`m-0 text-md text-white ${active !== "Main" ? "hidden" : "block"}`}>
            Home
          </p>
          <div className={`w-2 h-2 ${active !== "Main" ? "bg-gray-600" : "bg-white"} rounded-full`}></div>
        </div>
        <div onClick={() => { handleNavigation("/?active=details")}} className={`cursor-pointer pl-2 pr-1 flex gap-2 ${active==="details"?'p-1 bg-gray-600 items-center rounded-l-lg':'items-center'}`}>
          <p className={`m-0 text-md text-white ${active !== "details" ? "hidden" : "block"}`}>
            Details
          </p>
          <div className={`w-2 h-2 ${active !== "details" ? "bg-gray-600" : "bg-white"} rounded-full`}></div>
        </div>
        <div onClick={() => { handleNavigation("/?active=facts")}} className={`cursor-pointer pl-2 pr-1 flex gap-2 ${active==="facts"?'p-1 bg-gray-600 items-center rounded-l-lg':'items-center'}`}>
          <p className={`m-0 text-md text-white ${active !== "facts" ? "hidden" : "block"}`}>
            Facts
          </p>
          <div className={`w-2 h-2 ${active !== "facts" ? "bg-gray-600" : "bg-white"} rounded-full`}></div>
        </div>
        <div onClick={() => { handleNavigation("/?active=gallery")}} className={`cursor-pointer pl-2 pr-1 flex gap-2 ${active==="gallery"?'p-1 bg-gray-600 items-center rounded-l-lg':'items-center'}`}>
          <p className={`m-0 text-md text-white ${active !== "gallery" ? "hidden" : "block"}`}>
            Gallery
          </p>
          <div className={`w-2 h-2 ${active !== "gallery" ? "bg-gray-600" : "bg-white"} rounded-full`}></div>
        </div>
        <div onClick={() => { handleNavigation("/?active=team")}} className={`cursor-pointer pl-2 pr-1 flex gap-2 ${active==="team"?'p-1 bg-gray-600 items-center rounded-l-lg':'items-center'}`}>
          <p className={`m-0 text-md text-white ${active !== "team" ? "hidden" : "block"}`}>
            Team
          </p>
          <div className={`w-2 h-2 ${active !== "team" ? "bg-gray-600" : "bg-white"} rounded-full`}></div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
