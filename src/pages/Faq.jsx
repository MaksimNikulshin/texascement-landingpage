//Import components
import React, { useState } from "react";
//Import images
import arrowQuestion from "@images/arrowQuestion.svg";
import helpCircle from "@images/helpCircle.svg";
//import styles
import "@styles/App/faq.scss";

const faqData = [
  {
    question: "How much does course cost?",
    answer:
      "We provide 3 tiers of pricing options: Basic $2500, Standard $3500, Premium $5000",
  },
  {
    question: "How long is the course?",
    answer:
      "Texas Cement Driver Academy offers 2-week training and safity course that will cover all aspects of cement truck operation",
  },
  {
    question: "Can you help me find a job after graduation?",
    answer:
      "As a graduate of our program, you will receive job placement assistance, including immediate job placement opportunities and guaranteed job placement for a year.",
  },
  {
    question: "Is student housing available?",
    answer:
      "We also provide accommodation for out-of-town students, making our facility a one-stop destination for CDL driver training.",
  },
  {
    question: "Do I need a CDL permit before starting training?",
    answer:
      "No. Actually, most of our students rarely have any prior truck driving experience.",
  },
  {
    question: "What should I wear to the training?",
    answer:
      "Delegates should be neatly attired, with comfortable shoes for driving.",
  },
  {
    question: "How many yards of concrete are in a mixer truck?",
    answer:
      "A concrete mixer truck usually carries about 8 cubic yards of concrete, though that number can increase to 10 cubic yards if the machine is fully loaded.",
  },
  {
    question: "How long does it take to empty a concrete mixer truck?",
    answer:
      "Generally, it takes about six minutes to unload a yard of concrete.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };
  return (
    <div id="faq">
      <h3 className="title">
        <img src={helpCircle} alt="help-circle" />
        FAQ
      </h3>
      {faqData.map((item, index) => (
        <div className="question" key={index}>
          <h4 onClick={() => toggleAnswer(index)}>
            {item.question}
            <img
              style={{
                transform:
                  openIndex === index ? "rotate(90deg)" : "rotate(0deg)",
              }}
              src={arrowQuestion}
              alt="arrow"
            />
          </h4>
          <div
            style={{
              maxHeight: openIndex === index ? "1500px" : "0",
            }}
            className={`answer ${openIndex === index ? "open" : ""}`}
          >
            <p>{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
