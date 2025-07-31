import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar"; // Optional

const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      {/* Optional Navbar */}
      <main className="layout-content responsive-container">
        {children}
      </main>
      <Footer />

      <style jsx global>{`
        html,
        body,
        #__next {
          height: 100%;
          margin: 0;
          padding: 0;
          font-family: 'Nunito', sans-serif;
          background: #fef3e7;
        }

        .layout-wrapper {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }

        .layout-content {
          flex: 1;
          padding: 2rem 1rem;
        }

        /* Reuse from global.css */
        .responsive-container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default Layout;
