import React from "react";
import { createStyles, getStylesRef } from "@mantine/core";
import Convenor1 from "../../assets/Convenor33.jpg";
import Convenor2 from "../../assets/Convenor22.jpg";
import Convenor3 from "../../assets/Convenor11.jpg";
import Convenor4 from "../../assets/Convenor4.jpg";
import Convenor5 from "../../assets/Convenor5.jpg";
import "./Team.css";
import { Carousel } from "@mantine/carousel";

const Team = () => {
  const convenors = [Convenor1, Convenor2, Convenor3];
  const WebTeam = [];
  const useStyles = createStyles(() => ({
    controls: {
      ref: getStylesRef("controls"),
      transition: "opacity 150ms ease",
      opacity: 0,
    },

    root: {
      "&:hover": {
        [`& .${getStylesRef("controls")}`]: {
          opacity: 1,
        },
      },
    },
  }));
  const classes = useStyles();
  return (
    <div className="w-full h-full flex flex-col gap-12">
      <div className="flex flex-col justify-center items-center gap-10">
        <p className="btn-shine text-3xl font-bold max-md:text-xl max-sm:text-lg font-sans text-white m-0">
          CONVENORS
        </p>
        <Carousel
          height={150}
          className="w-[80%] max-md:w-[90%] max-sm:w-[95%]"
          slideSize="18.5%"
          slideGap="md"
          align="start"
          loop
          dragFree
          classNames={classes}
          breakpoints={[
            { maxWidth: 'lg', slideSize: '24.5%' },
            { maxWidth: 'md', slideSize: '33%' },
            { maxWidth: 'sm', slideSize: '50%' },
          ]}
        >
          {convenors.map((convenor, index) => (
            <Carousel.Slide key={index}>
              <img src={convenor} className="w-full h-full" alt="Gallery" />
            </Carousel.Slide>
          ))}

          {/* ...other slides */}
        </Carousel>
          </div>
          <div className="flex flex-col justify-center items-center gap-10">
        <p className="btn-shine text-3xl font-bold max-md:text-xl max-sm:text-lg font-sans text-white m-0">
          WEB TEAM
        </p>
        <Carousel
          height={150}
          className="w-[80%] max-md:w-[90%] max-sm:w-[95%]"
          slideSize="18.5%"
          slideGap="md"
          align="start"
          loop
          dragFree
          classNames={classes}
          breakpoints={[
            { maxWidth: 'lg', slideSize: '24.5%' },
            { maxWidth: 'md', slideSize: '33%' },
            { maxWidth: 'sm', slideSize: '50%' },
          ]}
        >
          {WebTeam.map((convenor, index) => (
            <Carousel.Slide key={index}>
              <img src={convenor} className="w-full h-full" alt="Gallery" />
            </Carousel.Slide>
          ))}

          {/* ...other slides */}
        </Carousel>
      </div>
    </div>
  );
};

export default Team;
