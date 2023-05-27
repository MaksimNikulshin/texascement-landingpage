//Import components
import { tabEdit } from "../store/slices/main";
import { useDispatch } from "react-redux";
//Import images
import basic from "@images/basic.jpg";
import standard from "@images/standard.jpg";
import premium from "@images/premium.jpg";
//Import styles
import "@styles/Pages/main.scss";

export default function Main() {

  const dispatch = useDispatch();

  return (
    <section id="main">
      <div className="content-main">
        <h2>Upgrade in 2 weeks</h2>
        <h1>
          We offer CDL on-call driver training for novice drivers in Texas with
          state-of-the-art equipment and real trucks for practical training.
        </h1>
        <h3>Choose your package</h3>
        <div className="cards">
          <div className="card">
            <img className="img-static" src={basic} alt="basic-truck" />
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
                        paragraphOne: "• All course materials",
                        paragraphTwo: "• Hands-on training with real cement trucks",
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
            <img className="img-static" src={standard} alt="standard-truck" />
            <h4>Standard</h4>
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
                        paragraphOne: "• Includes all Basic features",
                        paragraphTwo:
                          "• Accommodations for out-of-town students",
                        paragraphThree: "• Additional job placement assistance",
                        className: "yellowBackground",
                      },
                    })
                  );
                }}
              >
                BUY <b>$3500</b>
              </button>
            </div>
          </div>
          <div className="card">
            <img
              className="img-static"
              src={premium}
              alt="premium-truck"
            />
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
    </section>
  );
}
