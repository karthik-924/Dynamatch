// import React from "react";
// import gallery from '../../assets/Gallery.jpg'
import Wave from "../../assets/Wave.png";
import { Carousel } from "@mantine/carousel";
import Gallery1 from "../../assets/Gallery1.jpg";
import Gallery2 from "../../assets/Gallery2.png";
import Gallery3 from "../../assets/Gallery3.jpg";
import "./Gallery.css";

const Gallery = () => {
  return (
    <div className="w-full min-h-full flex gap-10 justify-center items-center">
      <div className="flex absolute justify-center items-center">
        <img
          className="w-[90%] max-sm:w-[100%] max-md:w-[90%] h-full opacity-40"
          src={Wave}
          alt="facts"
        />
      </div>
      <div className="flex w-full gap-10 justify-center">
        <div className="flex gap-16 flex-col w-[80%]">
          <p className="btn-shine text-3xl font-bold max-md:text-xl max-sm:text-lg font-sans text-white m-0">
            Gallery
          </p>
          <Carousel
            withIndicators
            height={250}
            slideSize="33.333333%"
            slideGap="md"
            align="start"
            slidesToScroll={1}
            dragFree
            withControls
            breakpoints={[
              { maxWidth: 'md', slideSize: '50%' },
              { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
            ]}
          >
            <Carousel.Slide>
              <img src={Gallery1} className="w-full h-full" alt="Gallery" />
            </Carousel.Slide>
            <Carousel.Slide>
              <img src={Gallery2} className="w-full h-full" alt="Gallery" />
            </Carousel.Slide>
            <Carousel.Slide>
              <img src={Gallery3} className="w-full h-full" alt="Gallery" />
            </Carousel.Slide>
            {/* ...other slides */}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
