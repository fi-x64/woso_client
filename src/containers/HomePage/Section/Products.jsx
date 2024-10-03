import { Carousel } from "antd";
import React from "react";
import "./Products.scss";
import ProductCard from "./ProductCard";

function Products() {
  return (
    <div className="product">
      <div className="product-heading heading heading-5 heading__700">
        Bảng giá vệ sinh
      </div>
      <div className="product-item text">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </div>
  );
}

export default Products;
