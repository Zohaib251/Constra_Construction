import React from 'react'
import Navbar from "../../header/navbar.jsx";
import Topbar from "../../header/topbar.jsx";
import Bg_Image from "../../main/bg_Image.jsx";
import ProjectCategories from "../../main/ProjectCategories.jsx";
import AboutUS from "../../footer/aboutUS.jsx";
import Footer from "../../footer/footer.jsx";
const projectAll = () => {
  return (
    <div>
        <Topbar/>
        <Navbar/>
        <Bg_Image mainText="PROJECT" subText="HOME / PROJECT / ALL PROJECTS" />
        <ProjectCategories/>
        <AboutUS/>
        <Footer/>
    </div>
  )
}

export default projectAll
