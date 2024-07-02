import React, { useEffect, useState } from "react";
import VictoryCard from "./VictoryCard.js";
import InfoCards from "./InfoCards.js";
import FeatureCard from "./FeathuredCard.js";
import SideDrawer from "../SideDrawer.js";
import Search from "../../../assets/search.png"
import Notif from "../../../assets/notif.png"
import Profile from "../../../assets/profile.png"
import Navbar from "../Navbar.js";
// import {useLoaderData} from "react-router-dom";


function StudentPortal({setLogin}) {
  // const tp = useLoaderData();
  return (
    <>
    <div className="flex flex-row">      
      <div className="app" style={{ position: "relative" , backgroundColor : 'white', zIndex : '100'}}>
        <SideDrawer setLogin={setLogin}/>
      </div>
      
      <div className="flex flex-col pt-5 pl-52 pr-32">
        <Navbar/>

        <div className="flex flex-row space-x-48">
          <div className="flex flex-col">
          <div className="flex flex-col pt-16">
          <h1 className="text-4xl font-robot font-bold">Overview</h1>
          <div className="flex flex-row">
            <InfoCards />
          </div>
            
          </div>
          <div className="flex flex-col pt-20">
          <h1 className="text-4xl font-bold font-robot">Analytics</h1>
          <svg viewBox="0 0 450 350">
            <VictoryCard/>
          </svg>
          </div>
          </div>
          <div className="inline-block space-y-8 border-l-2 border-l-black pl-24 w-fit">
        <h1 className="text-4xl font-bold mt-5 mb-5  font-robot">Opportunities</h1>
        <FeatureCard oncampus />
        <FeatureCard offcampus />
      </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default StudentPortal;