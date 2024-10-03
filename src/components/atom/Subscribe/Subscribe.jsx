import React from "react";
import "./Subscribe.scss";
import { Button, Input, Space } from "antd";

function Subscribe({ size = "middle", width = "30rem", buttonColor = "gray" }) {
  return (
    <div>
      <Space.Compact size={size}>
        <Input
          placeholder="Input your email"
          className={`search-bar-input w-[${width}]`}
        />
        <Button type="primary" className={`search-bar-button-${buttonColor}`}>
          Subscribe
        </Button>
      </Space.Compact>
    </div>
  );
}

export default Subscribe;
