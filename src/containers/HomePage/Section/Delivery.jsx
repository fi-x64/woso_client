import { Divider, Steps } from "antd";
import React from "react";
import "./Delivery.scss";

function Delivery() {
  const description = "This is a description.";
  return (
    <div className="delivery-section">
      <h1 className="heading-5">Quy trình xử lý</h1>
      <Steps
        // current={current}
        // onChange={onChange}
        direction="vertical"
        style={{ height: "80vh" }}
        items={[
          {
            title: "Step 1",
            description,
          },
          {
            title: "Step 2",
            description,
          },
          {
            title: "Step 3",
            description,
          },
        ]}
      />
    </div>
  );
}

export default Delivery;
