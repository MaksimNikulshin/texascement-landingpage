//Import components
import AdvantagesSlider from "@components/Pages/PageAdvantagesSlider";
//import images
import starIcon from "@images/starIcon.svg";
//Import styles
import "@styles/Pages/advantages.scss";

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
