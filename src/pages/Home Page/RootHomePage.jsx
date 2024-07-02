import React, { useState } from 'react';
import SharedLayout from './SharedLayout';
import AlumniPublic from '../Alumni Pages/alumni_for_public';
import HomePage from "./Home_front";
import AboutPage from "./About";

const RootHomePage = () => {
    const [child,setChild] = useState("home");
    let pageComponent;

    if (child === "home") {
        pageComponent = <HomePage />;
    } else if (child === "about") {
        pageComponent = <AboutPage />;
    } else if (child === "alumni") {
        pageComponent = <AlumniPublic />;
    }
  return (
        <>
            <SharedLayout setChild={setChild}/>
            {pageComponent}
        </>
  );
}

export default RootHomePage;
