import React, { useState } from "react";
import "./ServiceCard.scss";
import nest1 from "../../../assets/img/product/nest1.png";
import ServiceDetail from "./ServiceDetail";

function ServiceCard({ productName, handleOpenServiceDetail }) {
  return (
    <div className="product-card">
      <div className="product-card-item">
        <h1 className="product-card-heading text-3 text__700">
          {productName || "Product Name"}
        </h1>
        <img src={nest1} className="product-card-img" alt="" />
        <div className="product-card-price">
          <h1 className="product-card-price heading-7 heading__600">
            Airpods 1/2
          </h1>
        </div>
        <div className="product-card-text text-4 text__400">
          3 gói vệ sinh. Giá chỉ từ:
        </div>
      </div>

      <div className="product-card-button">
        {/* <button className="product-card-button button button-white">
          Buy now <ShoppingFilled />
        </button> */}
        <button
          className="product-card-button button button-green"
          onClick={() => handleOpenServiceDetail(productName)}
        >
          Xem chi tiết
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
