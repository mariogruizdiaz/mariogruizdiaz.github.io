import React, { Component } from "react";

import Header from "../components/Header/header";
import Hero from "../components/HeroSection/HeroSectionInnerPage";
import Breadcrumb from "../components/Breadcrumb";
import Blog from "../components/Blog/blogRightSidebar";
import Footer from "../components/Footer";

class Theme extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="main">
          <Hero pageTitle={"Blog Right Sidebar"} />
          <Breadcrumb name={"Blog Right Sidebar"} />
          <Blog />
        </div>
        <Footer withoutNewsletter={true} />
      </React.Fragment>
    );
  }
}

export default Theme;
