import React from "react";
import brandIcon1 from "../../../assets/img/brand-icon/brand-icon-1.png";
import brandIcon2 from "../../../assets/img/brand-icon/brand-icon-2.png";
import brandIcon3 from "../../../assets/img/brand-icon/brand-icon-3.png";
import "./BrandCharacteristics.scss";

function BrandCharacteristics() {
  return (
    <div className="brand">
      <h1 className="brand-slogan heading heading-5 heading__700">
        Swiftlet nests from the HEART <br />
        Product selected from the reputable swiflet farm.
      </h1>
      <div className="brand-content text">
        <img
          src={brandIcon1}
          className="brand-content__icon"
          alt="brandIcon1"
        />
        <div className="brand-content__intro">
          <h1 className="brand-content__heading">High Quality</h1>
          <h1 className="brand-content__text text-4 text__400">
            Ensure all bird nests are free from contaminants and impurities,
            tested in accredited laboratories, and meet food safety standards.
          </h1>
        </div>
        <img
          src={brandIcon2}
          className="brand-content__icon"
          alt="brandIcon2"
        />
        <div className="brand-content__intro">
          <h1 className="brand-content__heading">Sustainability</h1>
          <h1 className="brand-content__text text-4 text__400">
            Harvest bird nests ethically without harming bird populations or
            habitats, and comply with wildlife protection laws.
          </h1>
        </div>
        <img
          src={brandIcon3}
          className="brand-content__icon"
          alt="brandIcon3"
        />
        <div className="brand-content__intro">
          <h1 className="brand-content__heading">Trust</h1>
          <h1 className="brand-content__text text-4 text__400">
            Provide clear product descriptions, authenticity certificates, and a
            satisfaction guarantee to build and maintain customer confidence.
          </h1>
        </div>
      </div>
    </div>
  );
}

export default BrandCharacteristics;
