import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar"; 

const Layout = ({ children }) => {
  return (
    <div className="layout-wrapper">
      <Navbar />

      <main className="layout-content">
        <div className="container">
          {children}
        </div>
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
          width: 100%;
        }

        .container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 2rem 1rem;
          width: 100%;
        }
      `}</style>
    </div>
  );
};

export default Layout;
