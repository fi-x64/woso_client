import React from "react";
import "./Blogs.scss";
import BlogCard from "./BlogCard";
import banner1 from "../../../assets/img/blog/banner-1.png";
import banner2 from "../../../assets/img/blog/banner-2.png";
import banner3 from "../../../assets/img/blog/banner-3.png";

function Blogs() {
  return (
    <div className="blog">
      <div className="blog-content">
        <h1 className="blog-content-heading heading heading-5 heading__700">
          Our Blogs
        </h1>
        <p className="blog-content-text text text-tertiary text__500">
          Transform your health and beauty with us!
        </p>
      </div>
      <div className="blog-item text">
        <BlogCard img={banner1} />
        <BlogCard img={banner2} />
        <BlogCard img={banner3} />
      </div>
    </div>
  );
}

export default Blogs;
