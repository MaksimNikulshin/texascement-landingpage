//Import images
import helpCircle from "@images/helpCircle.svg";
import checkSquare from "@images/check-square.svg";
import checkCircle from "@images/check-circle.svg";
import home from "@images/home.svg";
//Import styles
import "@styles/App/aboutUs.scss";

export default function AboutUs() {
  return (
    <div id="about-us">
      <h3>
        <img src={helpCircle} alt="help-circle" />
        About us
      </h3>
      <p className="description">
        Our CDL Call Driver School has become a comprehensive training center
        for individuals interested in a call driver career.
      </p>
      <div className="about">
        <div>
          <img src={checkCircle} alt="check-circle" />
          <p className="fact">
            We also provide accommodation for out-of-town students.
          </p>
        </div>
        <div>
          <img src={home} alt="home" />
          <p className="fact">
            Our training center has modern equipment with classrooms, a practice
            area and real trucks for practical training.
          </p>
        </div>
        <div>
          <img src={checkSquare} alt="check-square" />
          <p className="fact">No need a CDL permit before starting training</p>
        </div>
      </div>
      <h4>
        We offer a two-week training and safety course that covers all aspects
        of on-call truck operation, from shipping and securing loads to driving
        and safety.
      </h4>
    </div>
  );
}
