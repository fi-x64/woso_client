import React, { useEffect, useState } from "react";
import "./AdminPage.scss";
import {
  LayoutOutlined,
  QrcodeOutlined,
  AppstoreOutlined,
  FileTextOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { Link, useLocation, useNavigate } from "react-router-dom";
import BatchManager from "./BatchManager";
import { useSelector } from "react-redux";

const menuItems = [
  {
    id: 1,
    name: "Dashboard",
    icon: <LayoutOutlined className="side-nav__icon" />,
    page: "",
    link: "/dashboard",
  },
  {
    id: 2,
    name: "Batch Information",
    icon: <QrcodeOutlined className="side-nav__icon" />,
    page: <BatchManager />,
    link: "/batchinfo",
  },
  {
    id: 3,
    name: "Customizers",
    icon: <AppstoreOutlined className="side-nav__icon" />,
    page: "",
    link: "/customizer",
  },
  {
    id: 4,
    name: "Blogs",
    icon: <FileTextOutlined className="side-nav__icon" />,
    page: "",
    link: "/blogs",
  },
  {
    id: 5,
    name: "Marketing email",
    icon: <MailOutlined className="side-nav__icon" />,
    page: "",
    link: "/marketingmail",
  },
  {
    id: 6,
    name: "Settings",
    icon: <SettingOutlined className="side-nav__icon" />,
    page: "",
    link: "/settings",
  },
];

function AdminPage() {
  const { isLoggedIn, user } = useSelector((state) => state.auth);
  const [currentPageId, setCurrentPageId] = useState();
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    let checkIdExist = 0;
    if (isLoggedIn) {
      menuItems.map((item) => {
        if (
          item.link.includes(location.pathname) &&
          location.pathname !== "/"
        ) {
          checkIdExist = 1;
          setCurrentPageId(item.id);
        }
      });

      if (!checkIdExist) {
        navigate("/dashboard");
        setCurrentPageId(1);
      }
    }
  }, [location]);

  return (
    <div className="content">
      <nav className="sidebar">
        <ul className="side-nav">
          {menuItems.map((item) => {
            return (
              <li
                key={item.id}
                className={
                  item.id == currentPageId
                    ? "side-nav__item side-nav__item--active"
                    : "side-nav__item side-nav__item"
                }
              >
                <Link to={item.link} className="side-nav__link">
                  {item.icon}
                  <span>{item.name}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
      <div className="manager-view">
        {menuItems.map((item) => {
          if (currentPageId == item.id)
            return <div key={item.id}>{item.page}</div>;
        })}
      </div>
    </div>
  );
}

export default AdminPage;
