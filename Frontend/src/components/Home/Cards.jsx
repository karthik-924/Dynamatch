// import React from 'react'
import { useNavigate } from "react-router-dom";
import "./Cards.css";

const Cards = (props) => {
  const { text } = props
  const navigate = useNavigate()
  return (
    <div onClick={()=> navigate(`${text==="Donate"?'/?active=donate':'/?active=request'}`)} className="w-48 btn-flip h-12 rounded-lg justify-center items-center flex border-white border border-solid cursor-pointer">
        <p className="m-0 text-white font-sans text-xl">{text}</p>
    </div>
  )
}

export default Cards
