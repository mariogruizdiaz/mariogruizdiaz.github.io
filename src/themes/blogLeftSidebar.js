import React, { Component } from "react";

import Header from "../components/Header/header";
import Hero from "../components/HeroSection/HeroSectionInnerPage";
import Breadcrumb from "../components/Breadcrumb";
import Blog from "../components/Blog/blogLeftSidebar";
import Footer from "../components/Footer";

class Theme extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="main">
          <Hero pageTitle={"Blog Left Sidebar"} />
          <Breadcrumb name={"Blog Left Sidebar"} />
          <Blog />
        </div>
        <Footer withoutNewsletter={true} />
      </React.Fragment>
    );
  }
}

export default Theme;
