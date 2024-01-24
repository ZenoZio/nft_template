"use client";

import { NavBar, Footer } from "../components/componentsindex";
// import {React} from "react";
import "../app/globals.css";

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <head></head>
      <body>
        <div>
          <NavBar />
          {children}
          <Footer />
        </div>
      </body>
      
    </html>
  );
};

export default RootLayout;
