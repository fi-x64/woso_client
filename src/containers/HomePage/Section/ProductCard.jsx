import { Carousel } from "antd";
import React from "react";
import "./ProductCard.scss";
import nest1 from "../../../assets/img/product/nest1.png";
import {
  CheckOutlined,
  ShoppingCartOutlined,
  ShoppingFilled,
} from "@ant-design/icons";

function ProductCard({ productName }) {
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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </div>
        <div className="product-card-type text-5 text__500">
          <CheckOutlined />
          50 grams packaged in plastic boxes
        </div>
        <div className="product-card-type text-5 text__500">
          <CheckOutlined />
          50 grams packaged in plastic boxes
        </div>
        <div className="product-card-type text-5 text__500">
          <CheckOutlined />
          50 grams packaged in plastic boxes
        </div>
      </div>

      <div className="product-card-button">
        <button className="product-card-button button button-white">
          Buy now <ShoppingFilled />
        </button>
        <button className="product-card-button button button-green">
          Add to cart <ShoppingCartOutlined />
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
