import React from "react";
import "./BlogCard.scss";
import { ArrowRightOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Badge } from "antd";

function BlogCard({ img }) {
  return (
    <div className="blog-card">
      <img src={img} alt="" className="blog-card-img" />
      <h1 className="blog-card-title text-3 text__700">Blog title</h1>
      <div className="blog-card-info">
        <div className="blog-card-info flex">
          <Badge dot color="#52C41A" offset={[-4, 3]}>
            <Avatar
              size="default"
              icon={<UserOutlined />}
              className=""
              style={{ backgroundColor: "#43494D" }}
            />
          </Badge>
          <p className="blog-card-info__name text-tertiary text__500">Admin</p>
        </div>
        <p className="text-4 text__400">Jun 28, 2024</p>
      </div>
      <p className="blog-card-text text-4 text__400">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut...
      </p>
      <div className="blog-card-container">
        <button className="blog-card-button button button-green">
          View post <ArrowRightOutlined />
        </button>
      </div>
    </div>
  );
}

export default BlogCard;
