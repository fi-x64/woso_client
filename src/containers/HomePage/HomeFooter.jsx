import React from "react";
import "./HomeFooter.scss";
import { Button, Input, Space } from "antd";
import fbIcon from "../../assets/img/social/fb-icon.svg";
import instaIcon from "../../assets/img/social/insta-icon.svg";
import Subscribe from "../../components/atom/Subscribe/Subscribe";

function HomeFooter() {
  return (
    <footer className="footer">
      <div className="footer-about-us">
        <p className="footer-heading text-ano text-tertiary text__700">
          About Us
        </p>
        <ul className="footer-text text text-4">
          <li>Our Story</li>
          <li>The True Nest Promise</li>
          <li>Blogs</li>
          <li>Reviews</li>
        </ul>
      </div>
      <div className="footer-support">
        <p className="footer-heading text-ano text-tertiary text__700">
          Support
        </p>
        <ul className="footer-text text text-4">
          <li>Contact us</li>
          <li>FAQs</li>
          <li>Guarantee Policy</li>
        </ul>
      </div>
      <div className="footer-website">
        <p className="footer-heading text-ano text-tertiary text__700">
          The True Nest
        </p>
        <ul className="footer-text text text-4">
          <li>Email: CS@wosocleaning.com</li>
          <li>
            Address: International Solutions Consliting Ltd., 148 Hung Vuong
            St.ward 2 District 10 Ho Chi Minh city Vietnam
          </li>
          <li>Phone: +84 833131326</li>
        </ul>
      </div>
      <div className="footer-newsletter">
        <p className="footer-heading text-ano text-tertiary text__700">
          Newsletter
        </p>
        <div className="text">
          <div className="footer-text text-4">
            Subscribe now for discounts and special offers
          </div>
          {/* <Space.Compact>
            <Input placeholder="Input your email" className="footer-input" />
            <Button type="primary" className="footer-button">
              Subscribe
            </Button>
          </Space.Compact> */}
          <Subscribe />
          <div className="footer-text footer-follow text-4">
            <p>Follow Us:</p>
            <img src={fbIcon} alt="" />
            <img src={instaIcon} alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default HomeFooter;
