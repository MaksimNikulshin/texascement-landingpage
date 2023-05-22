//Import components
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { tabEdit } from "../../store/slices/main";
//Import images
import checkCircleGreen from "@images/check-circle-green.svg";
//Import styles
import "@styles/components/stepThree.scss";

export default function StepThree() {
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => {
      dispatch(
        tabEdit({
          tab: null,
          step: 0,
        })
      );
    }, 5000);
  }, [dispatch]);

  return (
    <div className="step-three">
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
      <div className="content-three">
        <img src={checkCircleGreen} alt="check-circle" />
        <h3>
          Your request has been successfully sent. We will contact you within 24
          hours
        </h3>
      </div>
    </div>
  );
}
