import React from "react";
import "../scss/layout/main.scss";

import { Header } from "./Header";
import { SideBar } from "./sidebar/";
import { Content } from "./content/";
import { Footer } from "./Footer";
import { Breadcrumbs } from "./content/Breadcrumbs";

export const Layout = () => {
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="button-switches">
          <button></button>
        </div>
        <div className="content">
          <Breadcrumbs />
          <Content />
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </>
  );
};
