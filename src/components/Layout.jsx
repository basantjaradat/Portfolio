import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar"; // if you use it

const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      {/* Optional Navbar */}
      <Navbar />

      <div className="container">
        <main className="layout-content">
          {children}
        </main>
        <Footer />
      </div>

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
          width: 100%;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          width: 100%;
          padding: 2rem 1rem;
        }

        .layout-content {
          flex: 1;
        }
      `}</style>
    </div>
  );
};

export default Layout;
