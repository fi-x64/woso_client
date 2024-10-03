import React from "react";
import "./ContactUs.scss";
import Content from "../../../assets/img/contact-us/content.png";
import { ArrowRightOutlined, CheckOutlined } from "@ant-design/icons";

function ContactUs() {
  return (
    <div className="contact-us">
      <div className="contact-us-content">
        <h1 className="contact-us-content__heading heading heading-5 heading__700">
          Partner with Us for Bird Nest Excellence!
        </h1>
        <div className="text">
          <h1 className="contact-us-content__text text-tertiary text__500">
            We seek cooperation and sustainable development
          </h1>
          <ul className="contact-us-content__list text-tertiary text__500">
            <li>
              <CheckOutlined /> We commit to adhering to rigorous processes from
              harvesting to processing swiftlet nests, certified by the FDA of
              the United States.
            </li>
            <li>
              <CheckOutlined /> Providing the best possible prices & bonus
              policy to establish longlasting partnerships.
            </li>
            <li>
              <CheckOutlined /> Become an exclusive distributor in the region,
              enjoying privileges in terms of website, social media channels,
              and advertising campaigns
            </li>
          </ul>
          <button className="button button-white">
            Contact Us Now! <ArrowRightOutlined />
          </button>
        </div>
      </div>
      <img src={Content} className="contact-us-img" />
    </div>
  );
}

export default ContactUs;
