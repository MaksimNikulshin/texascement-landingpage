//Import components
import Slider from "react-slick";
//Import images
import illustration from "@images/Illustration.png";
import truckCourse from "@images/truckCourse.png";
//Import styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@styles/Pages/courseOutline.scss";

export default function CourseOutlineSlider() {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: "custom-dots",
    adaptiveHeight: true,
  };

  return (
    <div>
      <Slider {...settings}>
        <div className="slide-one">
          <img className="truck-img" src={truckCourse} alt="truck-course" />
          <div className="course">
            <img
              className="illustration"
              src={illustration}
              alt="illustration"
            />
            <div className="slide-one-description">
              <h3 className="title">Course outline</h3>
              <p>Loading and Unloading</p>
              <p>Cement Truck Operation</p>
              <p>Safety Procedures</p>
              <p>Communication and Customer Service</p>
              <p>CDL Class A and B Training</p>
              <p>State Regulations and Laws</p>
              <p>Job placement assistance</p>
              <p>Business Practices for Self-Employed Operators: </p>
            </div>
          </div>
        </div>
        <div className="slide-two">
          <div className="course">
            <img
              className="illustration"
              src={illustration}
              alt="illustration"
            />
            <div>
              <h3 className="title">Course outline</h3>
              <p>Loading and Unloading</p>
              <p>Cement Truck Operation</p>
              <p>Safety Procedures</p>
              <p>Communication and Customer Service</p>
              <p>CDL Class A and B Training</p>
              <p>State Regulations and Laws</p>
              <p>Job placement assistance</p>
              <p>Business Practices for Self-Employed Operators: </p>
            </div>
            <div className="description">
              <p>
                how to safely and efficiently load and unload cement, including
                how to properly secure the load.
              </p>
              <p>
                Hands-on training on real cement trucks, teaching them how to
                operate the vehicle safely and efficiently.
              </p>
              <p>
                safety practices for themselves and others, including how to
                handle emergencies and accidents
              </p>
              <p>
                how to communicate effectively with dispatchers, customers, and
                other workers on the job site
              </p>
              <p>
                about invoicing, record-keeping, and other aspects of running a
                successful business
              </p>
              <p>
                are required for operating different types of vehicles,
                including cement trucks.
              </p>
              <p>
                we partner with construction companies and cement suppliers to
                offer employment opportunities for our graduates.
              </p>
              <p>
                state regulations and laws that pertain to their work. We will
                teach students about these regulations, including weight limits,
                hours of service, and other important rules
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}
