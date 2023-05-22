//Import components
import React from "react";
import AdvantagesSlider from "@components/AdvantagesSlider";
//import images
import starIcon from "@images/starIcon.svg";
//Import styles
import "@styles/App/advantages.scss";

export default function Advantages() {
  return (
    <section id="advantages">
      <div className="content-advantages">
        <h2>
          <img src={starIcon} alt="star-icon" /> Advantages
        </h2>
        <AdvantagesSlider name="test" />
      </div>
    </section>
  );
}
