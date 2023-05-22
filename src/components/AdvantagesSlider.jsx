//Import components
import Slider from "react-slick";
//Import images
import advantagesSlideImg from "@images/advantagesSlideImg.jpg";
import healt from "@images/healt.svg";
import security from "@images/security.svg";
import arrowDownRight from "@images/arrowDownRight.svg";
import dollar from "@images/dollar.svg";
//Import styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@styles/App/advantages.scss";

export default function AdvantagesSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "custom-dots",
    adaptiveHeight: true,
  };
  return (
      <Slider {...settings}>
        <div className="slide-one">
          <p>
            Overall, becoming a cement truck operator in Texas can provide you
            with health benefits, job security, cost of living savings, and
            financial advantages. It's a career path that offers flexibility and
            opportunity for growth, and it's a great way to build a stable and
            rewarding career in the construction industry.
          </p>
          <div>
            <img src={advantagesSlideImg} alt="advantages-slide" />
          </div>
        </div>
        <div className="slide-two">
          <div className="advantages">
            <img src={healt} alt="healt-icon" />
            <p>
              <b className="titles">Health Benefits </b>
              As a cement truck operator, you won't be behind the wheel of an
              18-wheeler for long hours. This means that you'll have more
              opportunities to move around and be active.
            </p>
          </div>
          <div className="advantages">
            <img src={security} alt="security-icon" />
            <p>
              <b className="titles">Job Security </b>
              Cement is an essential component of the construction industry, and
              cement truck operators are always in demand. This means that you
              can enjoy job security and stability.
            </p>
          </div>
          <div className="advantages">
            <img src={arrowDownRight} alt="arrow-down-right-icon" />
            <p>
              <b className="titles">Cost of Living Savings </b>
              Texas is known for its low cost of living, and Texas is one of
              only a handful of states that doesn't have a state income tax.
            </p>
          </div>
          <div className="advantages">
            <img src={dollar} alt="dollar-icon" />
            <p>
              <b className="titles">Flexibility </b>
              Working as a cement truck operator can offer flexibility in terms
              of scheduling and job location. You can work for a cement delivery
              company or be self-employed.
            </p>
          </div>
        </div>
      </Slider>
  );
}
