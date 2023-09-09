// import React from 'react'
import Donor from "../../assets/Donor.jpg";
import Request from "../../assets/Recpient.jpg";
import Card from "../Pages/Card";
import Wave from "../../assets/Wave.png";
const Pages = () => {
  return (
    <div className="w-full min-h-full flex flex-1 justify-center items-center rounded-md">
      <div className="w-full h-full flex justify-center items-center">
        <img
          className="w-[90%] h-36 opacity-20 bg-gradient-to-r from-transparent via-opacity-50 to-transparent"
          src={Wave}
          alt="Wave"
        />
      </div>
      <div className="flex w-full h-full absolute top-0 left-0 justify-center items-center">
        <div className="flex gap-10 max-sm:gap-5 max-sm:justify-center w-[50%] max-lg:w-[70%] max-md:w-[80%] max-sm:w-[90%] max-[580px]:flex-col h-full justify-between items-center">
          <Card
            text="Donors"
            image={Donor}
            description="We owe an eternal debt of gratitude to these extraordinary individuals whose gifts of blood and organs save countless lives. Their actions deserve our respect, admiration, and support."
          />
          <Card
            text="Recipients"
            image={Request}
            description="We the  recipients who accept blood and organs from donors experience an overwhelming sense of gratitude, relief, and a renewed appreciation for life. Our profound emotions often lead to a lifelong commitment to honoring the gift we have received and advocating for the importance of organ and blood donation."
          />
        </div>
      </div>
    </div>
  );
};

export default Pages;
