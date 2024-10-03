import React from "react";
import "./Certs.scss";
import certIcon1 from "../../../assets/img/cert-icon/cert-icon-1.png";
import certIcon2 from "../../../assets/img/cert-icon/cert-icon-2.png";
import certIcon3 from "../../../assets/img/cert-icon/cert-icon-3.png";
import frame1 from "../../../assets/img/cert-frame/frame-1.png";
import frame2 from "../../../assets/img/cert-frame/frame-2.png";

import { Button } from "antd";

function Cert() {
  return (
    <>
      <div className="cert">
        <img src={frame1} className="cert-frame-topleft" alt="" />
        <img src={frame2} className="cert-frame-bottomright" alt="" />
        <h1 className="cert-heading heading heading-5 heading__700">
          Licenses and Quality Certificates
        </h1>
        <div className="text">
          <p className="cert-subheading text-tertiary text__500">
            True Nest is the brand name of bird nest product, belonging to
            International Solutions Consulting Ltd. Company
          </p>
          <ul className="cert-brand">
            <li className="cert-brand__item">
              <img src={certIcon1} className="item-image" />
              <p className="item-text">Food and Drug Administration</p>
            </li>
            <li className="cert-brand__item">
              <img src={certIcon2} className="item-image" />
              <p className="item-text">TTP Inspection Certification</p>
            </li>
            <li className="cert-brand__item">
              <img src={certIcon3} className="item-image" />
              <p className="item-text">Avatek</p>
            </li>
          </ul>
          <div className="cert-footer">
            <button className="cert-footer-button button button-green">
              Shop Now!
            </button>
            <a href="#" className="cert-help text-4 text__600">
              Need Help? Get Bird Nest Advice Now!
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cert;
