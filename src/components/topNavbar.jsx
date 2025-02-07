import firstRect from "../assets/topFirstRectangle.svg"
import secondRect from "../assets/topSecondRectangle.svg"
import thirdRect from "../assets/topThirdRectangle.svg"
import fourthRect from "../assets/topFourthRectangle.svg"
import fifthRect from "../assets/topFifthRectangle.svg"
import topCLine from "../assets/topCenterLine.svg"
import topRLine from "../assets/topLeftLine.svg"
import topLLine from "../assets/topRightLine.svg"
import topLBlock from "../assets/topLeftBlock.svg"
import topRBlock from "../assets/topRightBlock.svg"
import React from "react";
import {useNavigate } from "react-router-dom"

export default function topNavbar(){
    const Navigate = useNavigate()
    return (
        <div className="absolute h-screen w-screen">
            <h1 className="absolute cursor-default top-[2%] left-[8%] z-1 text-md md:text-lg lg:text-xl font-bold font-[Robot_Invaders]">NIGHTS</h1>
            <h1 className="absolute cursor-default top-[0%] left-[27.4%] z-1 text-sm md:text-md lg:text-lg font-bold font-[Robot_Invaders]">EVENTS</h1>
            <h1 className="absolute cursor-default top-[3%] left-[45.9%] z-1 text-lg md:text-xl lg:text-2xl font-bold font-[Robot_Invaders]"/* onClick={window.location.assign('http://register.bitsquark.in')} */>REGISTER</h1>
            <h1 className="absolute cursor-default top-[0%] left-[64.2%] z-1 text-sm md:text-md lg:text-lg font-bold font-[Robot_Invaders]">WORKSHOPS</h1>
            <h1 className="absolute cursor-default top-[2%] left-[83.4%] z-1 text-md md:text-lg lg:text-xl font-bold font-[Robot_Invaders]">EXHIBITIONS</h1>
            <img src={firstRect} draggable="false" className="absolute top-[1%] left-[3%] w-[18%]"></img>
            <img src={secondRect} draggable="false" className="absolute top-[0%] left-[22%] w-[18%]"></img>
            <img src={thirdRect} draggable="false" className="absolute top-[1%] left-[37.55%] w-[25%]" /* onClick={window.location.assign('http://register.bitsquark.in')} */></img>
            <img src={fourthRect} draggable="false" className="absolute top-[0%] left-[60%] w-[18%]"></img>
            <img src={fifthRect} draggable="false" className="absolute top-[1%] left-[80%] w-[18%]"></img>
            <img src={topCLine} draggable="false" className=" absolute top-[0%] left-[20%] w-[60%] z-[-1]"></img>
            <img src={topLLine} draggable="false" className=" absolute top-[6%] left-[0%] w-[22%] z-[-1]"></img>
            <img src={topRLine} draggable="false" className=" absolute top-[6%] left-[79%] w-[22%] z-[-1]"></img>
            <img src={topLBlock} draggable="false" className=" absolute top-[8%] left-[0%] w-[4.5%] z-[-1]"></img>
            <img src={topRBlock} draggable="false" className=" absolute top-[8%] left-[95.5%] w-[4.5%] z-[-1]"></img>
        </div>
    )
}