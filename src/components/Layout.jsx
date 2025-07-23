import React from "react";
import "../styles/global.css"; // Add responsive rules here

const Layout = ({ children }) => {
  return <div className="global-container">{children}</div>;
};

export default Layout;
