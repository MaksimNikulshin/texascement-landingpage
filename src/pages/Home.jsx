//Import components
import Main from "./Main.jsx";
import Advantages from "./Advantages.jsx";
import CourseOutline from "./CourseOutline.jsx";
import Faq from "./Faq.jsx";
import AboutUs from "./AboutUs.jsx";
import StepOne from "@components/tabs/StepOne.jsx";
import StepTwo from "@components/tabs/StepTwo.jsx";
import StepThree from "@components/tabs/StepThree.jsx";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
//Import styles
import "@styles/App/home.scss";

export default function Home() {
  const currentTab = useSelector((state) => state.mainReducer.currentTab);
  const [activeTab, setActiveTab] = useState(null);

  useEffect(() => {
    setActiveTab(
      {
        0: <Main />,
        1: <StepOne />,
        2: <StepTwo />,
        3: <StepThree />,
      }[currentTab.step]
    );
  }, [currentTab]);
  return (
    <>
      {activeTab}
      <div className="clouds-background">
        <Advantages />
        <CourseOutline />
        <Faq />
      </div>
      <AboutUs />
    </>
  );
}
