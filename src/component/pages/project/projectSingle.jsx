import React from 'react'
import Navbar from "../../header/navbar.jsx";
import Topbar from "../../header/topbar.jsx";
import Bg_Image from "../../main/bg_Image.jsx";
import ProjectCard from './projectCard.jsx';
import AboutUS from "../../footer/aboutUS.jsx";
import Footer from "../../footer/footer.jsx";

const projectSingle = () => {
  return (
    <div>
       <Topbar/>
        <Navbar/>
        <Bg_Image mainText="PROJECT" subText="HOME / PROJECT / PROJECTS SINGLE" />
        <ProjectCard />
        <AboutUS/>
        <Footer/>
    </div>
  )
}

export default projectSingle
