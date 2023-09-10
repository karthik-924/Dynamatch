// import React from 'react'
// import { Tabs } from "@mantine/core";

import { useState } from "react";
import Fact from "../../assets/Facts.webp";

const Facts = () => {
  const [activeTab, setActiveTab] = useState("Facts");
  return (
    <div className="w-full mt-10 h-full flex flex-col gap-10 justify-center items-center">
      <div className="w-full h-full absolute top-0 left-0 flex justify-center items-center">
        <img className="w-screen h-screen opacity-40" src={Fact} alt="facts" />
      </div>
      <div className="w-[60%] max-md:w-[80%] max-sm:w-[95%] z-10 h-full justify-between flex">
        <div
          className="cursor-pointer flex flex-col justify-center items-center"
          onClick={() => setActiveTab("Facts")}
        >
          <p
            className={`text-2xl max-md:text-xl max-sm:text-lg font-sans ${
              activeTab === "Facts" ? "text-white mb-2" : "text-gray-600"
            } m-0`}
          >
            Facts
          </p>
          <div
            className={`${
              activeTab === "Facts"
                ? "border-t border-b-0 border-l-0 border-r-0 border-solid border-white w-[180%]"
                : "hidden"
            }`}
          />
        </div>
        <div
          className="cursor-pointer flex flex-col justify-center items-center"
          onClick={() => setActiveTab("Myths")}
        >
          <p
            className={`text-2xl max-md:text-xl max-sm:text-lg font-sans ${
              activeTab === "Myths" ? "text-white mb-2" : "text-gray-600"
            } m-0`}
          >
            Myths
          </p>
          <div
            className={`${
              activeTab === "Myths"
                ? "border-t border-b-0 border-l-0 border-r-0 border-solid border-white w-[180%]"
                : "hidden"
            }`}
          />
        </div>
        <div
          className="cursor-pointer flex flex-col justify-center items-center"
          onClick={() => setActiveTab("SA")}
        >
          <p
            className={`text-2xl max-md:text-xl max-sm:text-lg font-sans ${
              activeTab === "SA" ? "text-white mb-2" : "text-gray-600"
            } m-0`}
          >
            Social Awareness
          </p>
          <div
            className={`${
              activeTab === "SA"
                ? "border-t border-b-0 border-l-0 border-r-0 border-solid border-white w-[180%]"
                : "hidden"
            }`}
          />
        </div>
      </div>
      <div className="w-[70%] max-md:w-[85%] max-sm:w-[95%] min-h-full z-10 text-white flex justify-center">
        {activeTab === "Facts" ? (
          <p className="m-0 text-lg max-sm:text-sm font-sans">
            Organ and blood donation are vital acts of compassion and generosity
            that have a profound impact on healthcare and individual&apos;s
            lives
            <br />
            In the case of organ donation, there is a constant shortage of
            available organs for transplantation, leading to long waiting lists
            and tragic outcomes for some
            <br />
            On the other hand, blood donation is an ongoing necessity to support
            medical procedures, surgeries, and trauma care.
          </p>
        ) : activeTab === "Myths" ? (
          <p className="m-0 text-lg font-sans">
              Myths surrounding organ and blood donation persist and can hinder potential donors from contributing to life-saving causes
              <br />
              One common misconception is that organ donors are treated less intensively by medical professionals, but in reality, every effort is made to save a donor&apos;s life, and organ recovery only occurs when death is confirmed
              <br />
              Regarding blood donation, many believe that the process is painful or causes significant weakness, whereas in reality, it is a quick, relatively painless procedure with only minor side effects.
          </p>
        ) : activeTab === "SA" ? (
          <p className="m-0 text-lg font-sans">
                Social awareness of organ and blood donation is critical for fostering a culture of compassion and lifesaving generosity within communities
                <br />
                It involves educating the public about the pressing need for both organs and blood in healthcare, dispelling misconceptions, and promoting the altruistic act of donation
                <br />
                Ultimately, social awareness of organ and blood donation is a catalyst for building healthier, more resilient communities where the gift of life is celebrated and readily shared.
          </p>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Facts;
