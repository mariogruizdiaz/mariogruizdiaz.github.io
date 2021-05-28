import React, { Component } from "react";

import Header from "../components/Header/header";
import Hero from "../components/HeroSection/HeroSectionInnerPage";
import Breadcrumb from "../components/Breadcrumb";
import BlogNoSidebar from "../components/Blog/blogNoSidebar";
import Footer from "../components/Footer";

class Theme extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div className="main">
          <Hero pageTitle={"Blog No Sidebar"} />
          <Breadcrumb name={"Blog No Sidebar"} />
          <BlogNoSidebar />
        </div>
        <Footer withoutNewsletter={true} />
      </React.Fragment>
    );
  }
}

export default Theme;
