import React, { useEffect, useState } from "react";
import Loader from "../components/global/Loader";
import Navbar from "../components/global/Navbar";
import logo from "../assets/logo.png";
import { BiSolidDonateBlood } from "react-icons/bi";
import { useSearchParams } from "react-router-dom";
// import About from "../components/Mainpages/About";
// import HomeText from "../components/Mainpages/HomeText";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowUp } from "react-icons/io";

import { ScrollArea } from "@mantine/core";
import Card from "../components/Donors/Card";
import Wave from "../assets/Wave.png";

const Recepients = () => {
  const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useSearchParams();
  const [active, setActive] = useState(params.get("active") || "details");

  useEffect(() => {
    const getDonors = async () => {
      setLoading(true);
      const res = await fetch("http://localhost:4000/getRecipients");
      const data = await res.json();
      setDonors(data.recordset);
      console.log(data.recordset);
      setLoading(false);
    };
    getDonors();
  }, []);

  return (
    <div className="w-screen h-screen">
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
          <div className="h-[80%] max-md:w-[90%] max-[500px]:w-[100%] w-full flex flex-col relative">
            <div className="w-[80%] self-center absolute h-full justify-center items-center flex">
              <img className="w-full opacity-30" src={Wave} alt="Wave" />
            </div>

            <div className="flex h-full justify-center items-start">
              <div className="w-[80%] h-full">
                <ScrollArea
                  className="w-full h-[90%] pr-3"
                  type="auto"
                  styles={(theme) => ({
                    thumb: {
                      backgroundColor: "white",
                    },
                  })}
                >
                  <div className="w-[95%] h-full grid-cols-3 grid max-md:grid-cols-2 max-sm:grid-cols-2 gap-20">
                    {donors.map((donor, index) => {
                      return <Card key={index} details={donor} page="Recepients" date={donor.Date} />;
                    })}
                  </div>
                </ScrollArea>
              </div>
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
                <div className="w-10 h-10 border border-white border-solid justify-center flex items-center">
                  <IoIosArrowDown color="white" size={30} />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Recepients;
