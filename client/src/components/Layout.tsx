import React from "react";
import "../scss/layout/main.scss";

import { Header } from "./Header";
import { SideBar } from "./SideBar";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { Breadcrumbs } from "./Breadcrumbs";

import IconView from "../assets/Frame.png";

export const Layout = () => {
  return (
    <>
      <Header />
      <div className="main">
        <div className="sidebar">
          <SideBar />
        </div>
        <div className="button-switches">
          <button></button>
        </div>
        <div className="content">
          <div className="content-panel">
            <Breadcrumbs />

            <button className="button-view">
              <img src={IconView} alt="view change"></img>
            </button>
          </div>
          <Content />
        </div>
      </div>
      <Footer />
    </>
  );
};
