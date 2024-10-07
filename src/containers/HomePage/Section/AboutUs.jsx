import React from "react";
import "./AboutUs.scss";

function AboutUs() {
  return (
    <div>
      <h1 className="heading-5 text-center">Về đội ngũ chúng mình</h1>
      <div className="about-us__item">
        <div className="about-us__icon heading-6">
          <i className="fa-solid fa-gears"></i>
        </div>
        <div className="about-us__icon">
          <h1 className="text-secondary">Quy trình rõ ràng minh bạch</h1>
          <h1 className="text-4">Some text here</h1>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
