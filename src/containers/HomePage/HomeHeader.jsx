import { Avatar, Button, Dropdown, Input, Space } from "antd";
import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import "./HomeHeader.scss";
import cartIcon from "../../assets/img/SVG/shopping-cart.svg";
import logo1 from "../../assets/img/logo-1.svg";
import {
  MailOutlined,
  MenuOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import { Link } from "react-router-dom";

const { Search } = Input;

function HomeHeader() {
  const onSearch = (value, _e, info) => console.log(info?.source, value);

  return (
    <div className="header-section">
      <div className="topheader">
        <div className="topheader__item text-tertiary">
          <div className="topheader__item-email">
            <MailOutlined />
            support@woso.com
          </div>
          <div className="topheader__item-social">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-twitter"></i>
            <i className="fa-brands fa-tiktok"></i>
          </div>
        </div>
      </div>
      <header className="header">
        <div className="navigation">
          <input
            type="checkbox"
            className="navigation__checkbox"
            id="navi-toggle"
          />

          <label htmlFor="navi-toggle" className="navigation__button">
            <span className="navigation__icon">&nbsp;</span>
          </label>
        </div>
        <Link to="/">
          <div className="header-logo"></div>
        </Link>

        <div className="nav">
          <nav className="nav-menu">
            <ul className="nav-menu--box text text-secondary text__500">
              <li>
                <a href="#" className="nav-menu--box__item">
                  Dịch vụ
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="nav-menu--box__item">
                  Tra cứu
                </a>
              </li>
              <li>
                {" "}
                <a href="#" className="nav-menu--box__item">
                  Quy trình
                </a>
              </li>
              <li>
                <a href="#" className="nav-menu--box__item">
                  Liên hệ
                </a>
              </li>
            </ul>
          </nav>
          <form action="#" className="search">
            <Search
              placeholder="Tìm kiếm..."
              onSearch={onSearch}
              className="search-bar"
              enterButton
              size="middle"
            />
          </form>
        </div>
      </header>
      <form action="#" className="search-res">
        <Search
          placeholder="Tìm kiếm..."
          onSearch={onSearch}
          className="search-bar-res"
          enterButton
          size="middle"
        />
      </form>
    </div>
  );
}

export default HomeHeader;
