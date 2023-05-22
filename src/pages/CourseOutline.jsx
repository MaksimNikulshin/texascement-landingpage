//Import components
import React from "react";
import CourseOutlineSliders from "@components/CourseOutlineSlider";
//Import styles
import "@styles/App/courseOutline.scss";

export default function CourseOutline() {
  return (
    <section id="course-outline">
      <CourseOutlineSliders />
    </section>
  );
}
