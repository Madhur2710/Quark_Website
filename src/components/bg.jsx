import React from "react";
import Quarklogo from "../assets/Quark_25_Logo-removebg-preview 1.svg"
import glitch from "../assets/glitcheff (1) 1.svg"
import Astronaut from "../assets/Astronaut.svg"
import Background from "../assets/realbg.png"
export default function home(){
    return(
        <div className=" w-screen h-screen justify-center ">
            {/* <video src={glitch}></video> */}
            <img src={Background} className="absolute w-full h-full z-[-1] "></img>
            <img src={Quarklogo} className="absolute z-1 mx-[14%] mt-[3%]  "></img>
            <img src={Astronaut} className="absolute h-[88.6%] mt-[5.4%] mx-[23%]"></img>
        </div>
    )
}