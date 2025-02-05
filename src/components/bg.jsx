import React from "react";
import Quarklogo from "../assets/Quark_25_Logo-removebg-preview 1.svg"
import glitch from "../assets/glitcheff (1) 1.svg"
import Astronaut from "../assets/Astronaut.svg"
import Background from "../assets/realbg.png"
export default function home(){
    return(
        <div className=" w-screen overflow-hidden h-screen ">
            {/* <video src={glitch}></video> */}
            <img src={Background} draggable="false" className="absolute w-full h-full z-[-1] "></img>
            <img src={Quarklogo} draggable="false" className="absolute z-1 w-[100%] mt-[3%] md:w-[80%] md:mx-[10%] lg:w-[68%] lg:mx-[16%]  "></img>
            <img src={Astronaut} draggable="false" className="absolute w-[100%] md:w-[80%] md:mx-[10%] lg:w-[68%] lg:mx-[16%] bottom-[0%]"></img>
        </div>
    )
}