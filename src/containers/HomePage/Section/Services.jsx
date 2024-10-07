import React, { useState } from "react";
import "./Services.scss";
import ServiceCard from "./ServiceCard";
import ServiceDetail from "./ServiceDetail";

function Services() {
  const [isServiceDetailOpen, setIsServiceDetailOpen] = useState(false);
  const [serviceName, setServiceName] = useState("");

  const handleOpenServiceDetail = (serviceName) => {
    setIsServiceDetailOpen(!isServiceDetailOpen);
    setServiceName(serviceName);
  };

  return (
    <div className="product">
      <div className="product-heading heading heading-5 heading__700">
        Bảng giá vệ sinh
      </div>
      <div className="product-item text">
        <ServiceCard
          productName={"Airpods 1/2/3/4"}
          handleOpenServiceDetail={handleOpenServiceDetail}
        />
        <ServiceCard
          productName={"Airpods Pro/Pro 2"}
          handleOpenServiceDetail={handleOpenServiceDetail}
        />
        <ServiceCard
          productName={"Airpods Max"}
          handleOpenServiceDetail={handleOpenServiceDetail}
        />
        <ServiceCard
          productName={"Khác"}
          handleOpenServiceDetail={handleOpenServiceDetail}
        />
      </div>
      {isServiceDetailOpen ? <ServiceDetail /> : ""}
    </div>
  );
}

export default Services;
