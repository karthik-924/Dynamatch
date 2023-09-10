import React from 'react'
import { useEffect, useState } from "react";
import Loader from "../global/Loader";
import { useSearchParams } from "react-router-dom";
import { ScrollArea } from "@mantine/core";

import Wave from "../../assets/Wave.png";
import Card from '../Feedbacks/Card';



const Feedbacks = () => {
    const [donors, setDonors] = useState([]);
  const [loading, setLoading] = useState(false);
  const [params, setParams] = useSearchParams();
  const [active, setActive] = useState(params.get("active") || "details");

  useEffect(() => {
    const updateDonors = async () => {
      setLoading(true);
      const res = await fetch("http://localhost:4000/getReviews");
      const data = await res.json();
      setDonors(data.recordset);
      console.log(data.recordset);
      setInterval(() => setLoading(false), 2000);
    };
    updateDonors();
  }, []);
  return (
    <div className="w-screen h-screen">
      {loading ? (
        <Loader />
      ) : (
        <div className="w-full h-full flex items-center bg-black">
          <div className="h-[80%] max-md:w-[90%] max-[500px]:w-[100%] w-full flex flex-col relative">
            <div className="w-[80%] self-center absolute h-full justify-center items-center flex">
              <img className="w-full opacity-30" src={Wave} alt="Wave" />
            </div>

            <div className="flex h-full justify-center items-start">
              <div className="w-[80%] h-full">
                <ScrollArea
                  className="w-full h-[90%] pr-3"
                  type="auto"
                  styles={() => ({
                    thumb: {
                      backgroundColor: "white",
                    },
                  })}
                >
                  <div className="w-[95%] h-full grid-cols-3 grid max-md:grid-cols-2 max-sm:grid-cols-2 gap-20">
                    {donors.map((donor, index) => {
                      return <Card key={index} details={donor} />;
                    })}
                  </div>
                </ScrollArea>
              </div>
            </div>
            
          </div>
        </div>
      )}
    </div>
  )
}

export default Feedbacks
