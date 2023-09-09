// import React from 'react'
import { useState } from "react";
import Loader from "../components/global/Loader";
import Navbar from "../components/global/Navbar";
import logo from "../assets/logo.png";
import { BiSolidDonateBlood } from "react-icons/bi";
import { useParams } from "react-router-dom";
import About from "../components/Mainpages/About";
import HomeText from "../components/Mainpages/HomeText";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const { active } = useParams();
  setTimeout(() => {
    setLoading(false);
  }, 3000);
  return (
    <div className="w-screen h-screen">
      {loading ? (
        <Loader />
      ) : (
        <div className="w-full h-full flex items-center bg-black">
          <Navbar active={active === undefined ? "Home" : active} />
          <div className="min-h-[80%] w-full items-center flex flex-col">
            <div className="w-[80%] h-fit flex justify-between">
              <div className="flex gap-2 items-center">
                <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
                <p className="m-0 text-white font-sans">
                  Vignana Bharathi Institute of Technology
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="rounded-full">
                  <BiSolidDonateBlood color="yellow" size={30} />
                </div>
                <p className="m-0 text-white font-sans">Donate life</p>
              </div>
            </div>
            {active === undefined || active === "Main" ? (
              <HomeText />
            ) : active === "About" ? (
              <About />
            ) : (
              <Home />
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
