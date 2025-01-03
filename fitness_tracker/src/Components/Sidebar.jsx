import React from "react";
import { FaHome, FaHeartbeat, FaChartBar, FaUser } from "react-icons/fa";
import './Sidebar.css';

const Sidebar = () => {
  return (
    <aside className="sidebar text-center" > <br />
      <h4>Healthy</h4>
      <ul style={{listStyleType:"none",}}>
        <li >
          <FaHome /> 
        </li>
        <li>
          <FaHeartbeat /> 
        </li>
        <li>
          <FaChartBar /> 
        </li>
        <li>
          <FaUser /> 
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;