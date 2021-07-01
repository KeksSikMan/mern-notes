import React from "react";
import "../styles/scss/layout/main.scss";

import { Header } from "./header/Header";
import { SideBar } from "./sidebar/";
import { Content } from "./content/";
import { Footer } from "./Footer";
import { Breadcrumbs } from "./content/Breadcrumbs";

export const Layout = () => {
  const [sidebar, setSidebar] = React.useState(true);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <div className="header">
        <Header />
      </div>
      <div className="main">
        <div className={sidebar ? "sidebar" : "sidebar-hide"}>
          <SideBar active={sidebar} />
        </div>

        <div className="button-switches">
          <button onClick={showSidebar}></button>
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
