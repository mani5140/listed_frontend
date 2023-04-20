import React from "react";
import "./Homepage.css";
import { FaUserCircle } from "react-icons/fa";
import Linechart from "./Linechart";
import logo1 from "./images/dashboard_icon.png";
import logo2 from "./images/transaction_icon.png";
import logo3 from "./images/schedule_icon.png";
import logo4 from "./images/user_icon.png";
import logo5 from "./images/setting_icon.png";
import logo6 from "./images/Vector.png";
import Piechart from "./Piechart";

const Homepage = () => {
  return (
    <div className="container">
      <div className="menu">
        <h1>Board.</h1>
        
        <span><img src={logo1} />   Dashboard</span><br />
        
        <span><img src={logo2} />   Transactions</span><br />
        
        <span><img src={logo3} />  Schedules</span><br />
        
        <span><img src={logo4} />  Users</span><br />
        
        <span><img src={logo5} />   Settings</span><br />
        <div className="menu-bottom">
          <h4>Help</h4>
          <h4>Contact Us</h4>
        </div>
      </div>
      <div className="options">
        <div className="navbar">
          <div className="nav-left">
            <p>Dashboard</p>
          </div>
          <div className="nav-right">
            <input type="text" placeholder="Search.." />
            <img src={logo6} />
            <FaUserCircle />
          </div>
        </div>
        <div className="details">
          <div className="details1">
            <p>Total Revenues</p>
            <h4>$3,24,903</h4>
          </div>
          <div className="details2">
            <p>Total Transaction</p>
            <h4>1,500</h4>
          </div>
          <div className="details3">
            <p>Total Likes</p>
            <h4>10,000</h4>
          </div>
          <div className="details4">
            <p>Total Users</p>
            <h4>999</h4>
          </div>
        </div>
        <div className="org-line">
          <Linechart />
        </div>
        <div className="org-pie">
          <Piechart />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
