import React from "react";

import { LandingData } from "../../content/landing";

const Landing = () =>{
    return (
        <div className="flex justify-center items-center bg-metalic-img h-[100vh]">
        <div className="py-20 font-[#1a1a1a] text-7xl">{LandingData.chains}</div>

        </div>
    )
}

export default Landing