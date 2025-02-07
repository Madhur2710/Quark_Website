import firstRect from "../assets/bottomFirst.svg"
import secondRect from "../assets/bottomSecond.svg"
import thirdRect from "../assets/bottomThird.svg"
import fourthRect from "../assets/bottomFourth.svg"
import bottomCLine from "../assets/bottomCenterLine.svg"
import bottomRLine from "../assets/bottomLeftLine.svg"
import bottomLLine from "../assets/bottomRightLine.svg"
import bottomLBlock from "../assets/bottomLeftBlock.svg"
import bottomRBlock from "../assets/bottomRightBlock.svg"
import React from "react";
import { useNavigate } from 'react-router-dom'

export default function bottomNavbar(){
    const Navigate = useNavigate();
    
    return (
        <div className="absolute h-screen w-screen">
            <h1 className="absolute cursor-default bottom-[103.5%] left-[6.9%] z-1 text-md md:text-lg lg:text-xl font-bold font-[robot_invaders]">GUEST LECTURES</h1>
            <h1 className="absolute cursor-default bottom-[101%] left-[24.2%] z-1 text-sm md:text-md lg:text-lg font-bold font-[Robot_Invaders]">MEDIA PARTNERS</h1>
            <h1 className="absolute cursor-default bottom-[101%] left-[65%] z-1 text-sm md:text-md lg:text-lg font-bold font-[Robot_Invaders]" onClick={(e)=>{Navigate("/sponsors")}}>SPONSORS</h1>
            <h1 className="absolute cursor-default bottom-[103.5%] left-[81.5%] z-1 text-md md:text-lg lg:text-xl font-bold font-[Robot_Invaders]">OUR TEAM</h1>
            <img src={firstRect} draggable="false" className="absolute bottom-[102%] left-[2.5%] w-[23%]"></img>
            <img src={secondRect} draggable="false" className="absolute bottom-[101%] left-[22%] w-[18%]"></img>
            <img src={thirdRect} draggable="false" className="absolute bottom-[101%] left-[60.5%] w-[18%]" onClick={(e)=>{Navigate("/sponsors")}}></img>
            <img src={fourthRect} draggable="false" className="absolute bottom-[102%] left-[75%] w-[23%]"></img>
            <img src={bottomCLine} draggable="false" className=" absolute bottom-[100%] left-[20%] w-[60%] z-[-1]"></img>
            <img src={bottomLLine} draggable="false" className=" absolute rotate-180 bottom-[108.5%] left-[0%] w-[25.5%] z-[-1]"></img>
            <img src={bottomRLine} draggable="false" className=" absolute rotate-180 bottom-[108.5%] left-[75%] w-[26%] z-[-1]"></img>
            <img src={bottomLBlock} draggable="false" className=" absolute bottom-[110%] left-[0%] w-[5%] z-[-1]"></img>
            <img src={bottomRBlock} draggable="false" className=" absolute bottom-[110%] left-[95%] w-[5%] z-[-1]"></img>
        </div>
    )
}