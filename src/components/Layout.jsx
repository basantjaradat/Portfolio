import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar"; // if used

const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <Navbar />

      <main className="layout-content">
        {children}
      </main>

      <Footer />

      <style jsx global>{`
        html, body, #__next {
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
          display: flex;
          flex-direction: column;
        }

        /* Keep page content centered as you wanted */
        .layout-content > * {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          padding: 2rem 1rem;
        }
      `}</style>
    </div>
  );
};

export default Layout;
