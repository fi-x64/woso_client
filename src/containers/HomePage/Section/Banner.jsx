import { Carousel } from "antd";
import React from "react";
import banner1 from "../../../assets/img/banner/banner1.png";
import "./Banner.scss";

const contentStyle = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

function Banner() {
  return (
    <div>
      <Carousel className="banner-carousel">
        <div>
          <img src={banner1} alt="" />
        </div>
        <div>
          <h3 style={contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={contentStyle}>4</h3>
        </div>
      </Carousel>
    </div>
  );
}

export default Banner;
