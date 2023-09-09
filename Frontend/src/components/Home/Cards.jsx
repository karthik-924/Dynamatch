// import React from 'react'
import "./Cards.css";

const Cards = (props) => {
    const {text} = props
  return (
    <div data_back="Go" className="w-48 btn-flip h-12 rounded-lg justify-center items-center flex border-white border border-solid cursor-pointer">
        <p className="m-0 text-white font-sans text-xl">{text}</p>
    </div>
  )
}

export default Cards
