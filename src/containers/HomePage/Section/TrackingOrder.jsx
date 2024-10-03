import { Button, Input, Space } from "antd";
import Search from "antd/es/input/Search";
import React from "react";
import "./TrackingOrder.scss";

function TrackingOrder() {
  return (
    <div className="tracking-section">
      <h1 className="heading-5">Theo dõi đơn hàng của bạn</h1>
      <div className="tracking-section__content">
        <Space direction="horizontal">
          <Input
            className="tracking-section__content--search"
            placeholder="Nhập mã đơn hàng cần tra cứu"
            style={{ width: "40vw" }}
            size="large"
          />
          <Button size="large">Tra cứu</Button>
        </Space>
      </div>
    </div>
  );
}

export default TrackingOrder;
