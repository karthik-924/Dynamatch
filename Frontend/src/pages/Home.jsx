// import React from 'react'
import { useEffect, useState } from "react";
import Loader from "../components/global/Loader";
import Navbar from "../components/global/Navbar";
import logo from "../assets/logo.png";
import { BiSolidDonateBlood } from "react-icons/bi";
import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import About from "../components/Mainpages/About";
import HomeText from "../components/Mainpages/HomeText";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";
import Pages from "../components/Mainpages/Pages";
import Facts from "../components/Mainpages/Facts";
import Gallery from "../components/Mainpages/Gallery";
import Team from "../components/Mainpages/Team";
import Donation from "../components/Mainpages/Donation";
import Request from "../components/Mainpages/Request";
import Review from "../components/Mainpages/Review";
import Feedbacks from "../components/Mainpages/Feedbacks";
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [params, setParams] = useSearchParams();
  const [active, setActive] = useState(params.get("active") || "Main");
  const navigate = useNavigate();
  console.log(params, active);
  const pages = [
    "Main",
    "details",
    "facts",
    "gallery",
    "team",
    "donate",
    "request",
    "Review",
    "feedbacks",
  ];
  useEffect(() => {
    setLoading(true);
    setActive(params.get("active") || "Main");
    setInterval(() => setLoading(false), 2000);
  }, [params]);
  // useEffect(() => {
  //   // Function to handle wheel events (scrolling)
  //   const handleWheel = (event) => {
  //     console.log("scroll");
  //     console.log(pages.indexOf(active),active);
  //     if (pages.indexOf(active) === pages.length - 1) {
  //       setActive(pages[0]);
  //       console.log(active);
  //       navigate(`/?active=${pages[0]}`);
  //     }
  //     else {
  //       setActive(pages[(pages.indexOf(active) + 1)]);
  //       console.log(active);
  //       navigate(`/?active=${pages[(pages.indexOf(active) + 1) % pages.length]}`);
  //     }
  //   };

  //   // Attach the wheel event listener when the component mounts
  //   window.addEventListener("wheel", handleWheel);

  //   // Remove the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("wheel", handleWheel);
  //   };
  // }, [navigate,active]);
  // setTimeout(() => {
  //   setLoading(false);
  // }, 3000);
  return (
    <div className="w-screen h-screen" onScroll={() => console.log("Scrolled")}>
      {loading ? (
        <Loader />
      ) : (
        <div className="w-full h-full flex items-center bg-black">
          <Navbar
            active={active === undefined || active === null ? "Main" : active}
          />
          <div className="w-screen absolute top-4 z-20 flex">
            <div className="w-[85%] ml-5 flex justify-between">
              <div className="flex gap-2 items-center">
                <img src={logo} alt="logo" className="w-10 h-10 rounded-full" />
                <p className="m-0 text-gray-400 font-sans">
                  Vignana Bharathi Institute of Technology
                </p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="rounded-full">
                  <BiSolidDonateBlood color="yellow" size={30} />
                </div>
                <p className="m-0 text-gray-400 font-sans">
                  Your donation, big or small, makes a difference
                </p>
              </div>
            </div>
          </div>
          <div className="min-h-[80%] w-full flex flex-col relative">
            <div className="content flex flex-1">
              {active === undefined || active === null || active === "Main" ? (
                <HomeText />
              ) : active === "details" ? (
                <Pages />
              ) : active === "facts" ? (
                <Facts />
              ) : active === "gallery" ? (
                <Gallery />
              ) : active === "team" ? (
                <Team />
              ) : active === "donate" ? (
                <Donation />
              ) : active === "request" ? (
                <Request />
              ) : active === "Review" ? (
                <Review/>
              ): active === "feedbacks" ? (
                <Feedbacks/>
              ):(
                <HomeText />
              )}
            </div>
            <div className="absolute w-full bottom-0 left-0 flex justify-center items-center">
              <div className="w-[80%] flex justify-between items-center">
                <div className="flex flex-col">
                  <p className="text-gray-400 font-sans text-md m-0">
                    Made with ❤️ by
                  </p>
                  <p className="text-white font-sans text-lg m-0">
                    Madhuri Devasani
                  </p>
                </div>
                <div className="flex">
                  {active !== "Main" ? (
                    <div
                      onClick={() =>
                        navigate(`/?active=${pages[pages.indexOf(active) - 1]}`)
                      }
                      className="cursor-pointer w-10 h-10 border border-white border-solid justify-center flex items-center"
                    >
                      <IoIosArrowUp color="white" size={30} />
                    </div>
                  ) : null}
                  {active !== "feedback" ? (
                    <div
                      onClick={() =>
                        navigate(`/?active=${pages[pages.indexOf(active) + 1]}`)
                      }
                      className="cursor-pointer w-10 h-10 border border-white border-solid justify-center flex items-center"
                    >
                      <IoIosArrowDown color="white" size={30} />
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
