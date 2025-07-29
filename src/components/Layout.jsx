import React from "react";
import Footer from "./Footer"; 
import Navbar from "./Navbar"; 

const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      {/* Optional: Navbar */}
      <main className="layout-content">
        {children}
      </main>
      <Footer />

      <style jsx global>{`
        html, body, #__next {
          height: 100%;
          margin: 0;
        }

        .layout-wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .layout-content {
          flex: 1;
        }
      `}</style>
    </div>
  );
};

export default Layout;
