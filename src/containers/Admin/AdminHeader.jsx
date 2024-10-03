import { Avatar, Button, Dropdown, Input, Space } from "antd";
import React, { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
import "./AdminHeader.scss";
import logo4 from "../../assets/img/logo-4.svg";
import userIcon from "../../assets/img/user-icon.svg";
import {
  DownOutlined,
  IdcardOutlined,
  LogoutOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../actions/auth";

function AdminHeader() {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
    window.location.reload();
  };

  useEffect(() => {
    if (!isLoggedIn) navigate("/login");
  }, []);

  const items = [
    {
      label: (
        <a href="">
          <IdcardOutlined /> Edit Profile
        </a>
      ),
      key: "0",
    },
    {
      label: (
        <button href="" onClick={() => handleLogout()}>
          <LogoutOutlined /> Logout
        </button>
      ),
      key: "1",
    },
  ];

  return (
    <>
      {isLoggedIn ? (
        <header className="header-admin">
          <Link to="/">
            <img src={logo4} alt="woso logo" className="header-admin--logo" />
          </Link>
          <Dropdown menu={{ items }} trigger={["click"]}>
            <a onClick={(e) => e.preventDefault()}>
              <Space>
                <div className="user-nav">
                  <div className="user-nav__user">
                    <img
                      src={userIcon}
                      alt="User photo"
                      className="user-nav__user-photo"
                    />
                  </div>
                  <span className="user-nav__user-name text-tertiary">
                    {user.data ? user.data.username : "Admin"}
                  </span>
                  <DownOutlined />
                </div>
              </Space>
            </a>
          </Dropdown>
        </header>
      ) : (
        ""
      )}
    </>
  );
}

export default AdminHeader;
