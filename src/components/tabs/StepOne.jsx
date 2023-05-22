//Import components
import { useDispatch } from "react-redux";
import { tabEdit } from "../../store/slices/main";
//Import images
import basic from "@images/basic.jpg";
import basicHover from "@images/basicHover.jpg";
import standard from "@images/standard.jpg";
import standardHover from "@images/standardHover.jpg";
import premium from "@images/premium.jpg";
import premiumHover from "@images/premiumHover.jpg";
//Import styles
import "@styles/components/stepOne.scss";

export default function StepOne() {
  const dispatch = useDispatch();
  return (
    <div className="step-one">
      <div className="steps-line">
        <div className="steps-manager">
          <div className="circles">
            <div className="circle">
              <p>Step 1</p>
            </div>
            <div className="circle">
              <p>Step 2</p>
            </div>
            <div className="circle">
              <p>Finish</p>
            </div>
          </div>
        </div>
      </div>
      <div className="content-main">
        <h2>Choose your package</h2>
        <h5>
          We are pleased to introduce our CDL call driver training school, which
          offers a 2-week training and safety course for aspiring call drivers.
          Our training center is located in Dallas, Texas, and features
          state-of-the-art facilities and real call trucks for hands-on
          training.
        </h5>
        <div className="cards">
          <div className="card">
            <img className="img-static" src={basic} alt="basic-img" />
            <h4>Basic</h4>
            <div className="rate-background"></div>
            <div className="description">
              <p>• All course materials</p>
              <p>• Hands-on training with real cement trucks</p>
              <button
                onClick={() => {
                  dispatch(
                    tabEdit({
                      step: 2,
                      tab: {
                        name: "Basic",
                        price: "$2500",
                        img: basic,
                        imgHover: basicHover,
                        paragraphOne: "• All course materials",
                        paragraphTwo:
                          "• Hands-on training with real cement trucks",
                        paragraphThree: "",
                        className: "rate-background",
                      },
                    })
                  );
                }}
              >
                BUY <b>$2500</b>
              </button>
              <div className="description-background"></div>
            </div>
          </div>
          <div className="card">
            <img className="img-static" src={standard} alt="standard-img" />
            <h4>Standard</h4>
            <div className="rate-background"></div>
            <div className="description">
              <p>• Includes all Basic features</p>
              <p>• Accommodations for out-of-town students</p>
              <p>• Additional job placement assistance</p>
              <button
                onClick={() => {
                  dispatch(
                    tabEdit({
                      step: 2,
                      tab: {
                        name: "Standard",
                        price: "$3500",
                        img: standard,
                        imgHover: standardHover,
                        paragraphOne: "• Includes all Basic features",
                        paragraphTwo:
                          "• Accommodations for out-of-town students",
                        paragraphThree: "• Additional job placement assistance",
                        className: "yellowBackground",
                        buttonStandard: "button-standard",
                      },
                    })
                  );
                }}
              >
                BUY <b>$3500</b>
              </button>
              <div className="description-background"></div>
            </div>
          </div>
          <div className="card">
            <img className="img-static" src={premium} alt="premium-img" />
            <h4>Premium</h4>
            <div className="rate-background"></div>
            <div className="description">
              <p>• Includes all Standard features</p>
              <p>• A 1-year job placement guarantee</p>
              <p>• Additional business training for self-employed operators</p>
              <button
                onClick={() => {
                  dispatch(
                    tabEdit({
                      step: 2,
                      tab: {
                        name: "Premium",
                        price: "$5000",
                        img: premium,
                        imgHover: premiumHover,
                        paragraphOne: "• Includes all Standard features",
                        paragraphTwo: "• A 1-year job placement guarantee",
                        paragraphThree:
                          "• Additional business training for self-employed operators",
                        className: "rate-background",
                      },
                    })
                  );
                }}
              >
                BUY <b>$5000</b>
              </button>
              <div className="description-background"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
