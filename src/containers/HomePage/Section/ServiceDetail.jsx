import React from "react";
import "./ServiceDetail.scss";
import nest1 from "../../../assets/img/product/nest1.png";

function ServiceDetail({ productName }) {
  return (
    <>
      <div className="service-detail">
        <h1 className="service-detail-heading text-3 text__700 text-center">
          {productName || "Product Name"}
        </h1>
        <div className="flex">
          <div className="service-detail__item">
            <h1 className="service-detail__item-price heading-7 heading__600">
              130.000đ
            </h1>
            <div className="service-detail__item-heading text-secondary text__600">
              Gói vệ sinh cơ bản
            </div>
            <div className="service-detail__item-text text-4 text__400">
              <p>Loại bỏ bụi bẩn và mồ hôi bám trên tai nghe </p>
              <p>Đánh bóng phần vỏ ngoài</p>
              <p>
                Phù hợp với tai nghe còn mới hoặc ít sử dụng, chưa bị trầy xước
                nhiều
              </p>
            </div>
          </div>
          <div className="service-detail__item scale-110">
            <h1 className="service-detail__item-price heading-7 heading__600">
              130.000đ
            </h1>
            <div className="service-detail__item-heading text-secondary text__600">
              Gói vệ sinh cơ bản
            </div>
            <div className="service-detail__item-text text-4 text__400">
              <p>Loại bỏ bụi bẩn và mồ hôi bám trên tai nghe </p>
              <p>Đánh bóng phần vỏ ngoài</p>
              <p>
                Phù hợp với tai nghe còn mới hoặc ít sử dụng, chưa bị trầy xước
                nhiều
              </p>
            </div>
          </div>
          <div className="service-detail__item">
            <h1 className="service-detail__item-price heading-7 heading__600">
              130.000đ
            </h1>
            <div className="service-detail__item-heading text-secondary text__600">
              Gói vệ sinh cơ bản
            </div>
            <div className="service-detail__item-text text-4 text__400">
              <p>Loại bỏ bụi bẩn và mồ hôi bám trên tai nghe </p>
              <p>Đánh bóng phần vỏ ngoài</p>
              <p>
                Phù hợp với tai nghe còn mới hoặc ít sử dụng, chưa bị trầy xước
                nhiều
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceDetail;
