// import React from 'react'
import "./Loader.css";

const Loader = () => {
  return (
    <div className="w-screen h-screen z-50 bg-black absolute top-0 left-0 flex justify-center items-center">
      <div className="heart-rate">
        <svg
          version="1.0"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          x="0px"
          y="0px"
          width="550px"
          height="73px"
          viewBox="0 0 552 73"
          enable-background="new 0 0 550 73"
          xml:space="preserve"
        >
          <polyline
            fill="none"
            stroke="red"
            stroke-width="3"
            stroke-miterlimit="25"
            points="0,45.486 116.542,45.486 134.37,33.324 152.198,45.486 173.313,45.486 188.514,55.622 215.938,9 240.201,63.729 252.366,45.486 292.892,45.486 310.72,40.419 331.764,45.486 375,45.486"
          />
        </svg>
        <div className="fade-in"></div>
        <div className="fade-out"></div>
      </div>
    </div>
  );
};

export default Loader;
