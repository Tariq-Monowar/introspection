import "./nav.scss";
import { IoArrowBack, IoNotificationsOutline } from "react-icons/io5";
import { TbClockHour3 } from "react-icons/tb";
import { TiPinOutline } from "react-icons/ti";
import { MdOutlineSearch } from "react-icons/md";
import image from "../../assets/images.jpg";
import { FaBars } from "react-icons/fa6";
import { useState } from "react";
import { drowerItems } from "../../constants/DrowerData";
import { NavLink } from "react-router-dom";
import appLogo from "../../assets/Ck-temp-logo-white2.webp";
import { RxCross2 } from "react-icons/rx";

const Nav = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <nav className="nav-container">
        <FaBars className="bar" onClick={toggleSidebar} />
        <div className="left">
          <IoArrowBack className="icon" />
          <p>Document Approvals</p>
        </div>
        {/* <h1>Hello</h1> */}
        <div className="right">
          <div className="search">
            <MdOutlineSearch className="search-icon" />
            <input type="text" name="" id="" />
          </div>

          <TiPinOutline className="r-icon pin" />
          <TbClockHour3 className="r-icon" />
          <IoNotificationsOutline className="r-icon" />

          <img className="image" src={image} alt="" />
        </div>
      </nav>

      <div className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sode-header">
        <RxCross2  onClick={toggleSidebar} className="close-btn"/>
 
          <img src={appLogo} alt="App Logo" />
        </div>

        <div className="element">
          {drowerItems.map((item, index) => (
            <NavLink to={item.path} className="item" key={index}>
              {item.icon}
              <p>{item.name}</p>
            </NavLink>
          ))}
        </div>
      </div>
      {isSidebarOpen && (
        <div className="backdrop" onClick={toggleSidebar}></div>
      )}
    </>
  );
};

export default Nav;
