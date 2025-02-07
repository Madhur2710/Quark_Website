import React from "react";
import Bg from "../components/bg.jsx";
import TopNavbar from "../components/topNavbar.jsx";
import BottomNavbar from "../components/bottomNavbar.jsx";

export default function Homepage(){
    return (
        <div className="absolute h-screen w-screen overflow-hidden">
            <TopNavbar />
            <Bg />
            <BottomNavbar />
        </div>
    );
}