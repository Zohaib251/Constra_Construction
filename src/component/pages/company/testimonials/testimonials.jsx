import React from "react";
import Navbar from "../../../header/navbar.jsx";
import Topbar from "../../../header/topbar.jsx";
import Bg_Image from "../../../main/bg_Image.jsx";
import TeamMember from "./teamMember.jsx";
import AboutUS from "../../../footer/aboutUS.jsx";
import Footer from "../../../footer/footer.jsx";
import team1 from "../../../../images/main/team/team1.jpg";
import team2 from "../../../../images/main/team/team2.jpg";
import team3 from "../../../../images/main/team/team3.jpg";

const testimonials = () => {
  return (
    <div>
      <Topbar />
      <Navbar />
      <Bg_Image
        mainText="TESTIMONIALS"
        subText="HOME / COMPANY / TESTIMONIALS"
      />
      <div className="my-12">
        <p className="text-center text-4xl font-bold mb-10 z-10">
          WHAT PEOPLE SAID
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 justify-center ">
          <TeamMember
            text="Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid."
            imageUrl={team3}
            name="GABRIEL DENIS"
            title="Chairman, Okt Industries"
          />
          <TeamMember
            text="Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid."
            imageUrl={team2}
            name="WELDON CASH"
            title="CEO, First Choice Group"
          />
          <TeamMember
            text="Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid."
            imageUrl={team1}
            name="HYRAM IZZY"
            title="Director, AKT Group"
          />
        </div>
      </div>
      <AboutUS />
      <Footer />
    </div>
  );
};

export default testimonials;
