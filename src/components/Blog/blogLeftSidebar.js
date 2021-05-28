import React, { Component } from "react";

class Blog extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    /**
     * Your ajax will goes here to get data then call setState
     */
  }

  render() {
    return (
      <React.Fragment>
        <div className="module ptb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-4">
                        <div className="sidebar-left pr-4">

                            <aside className="widget widget-search">
                                <form>
                                    <input className="form-control" type="search" placeholder="Type Search Words" />
                                    <button className="search-button" type="submit"><span className="ti-search"></span></button>
                                </form>
                            </aside>

                            <aside className="widget widget-categories">
                                <div className="widget-title">
                                    <h6>Categories</h6>
                                </div>
                                <ul>
                                    <li><a href="/#">Journey <span className="float-right">112</span></a></li>
                                    <li><a href="/#">Development <span className="float-right">86</span></a></li>
                                    <li><a href="/#">Sport <span className="float-right">10</span></a></li>
                                    <li><a href="/#">Photography <span className="float-right">144</span></a></li>
                                    <li><a href="/#">Symphony <span className="float-right">18</span></a></li>
                                </ul>
                            </aside>

                            <aside className="widget widget-recent-entries-custom">
                                <div className="widget-title">
                                    <h6>Recent Posts</h6>
                                </div>
                                <ul>
                                    <li className="clearfix">
                                        <div className="wi"><a href="/#"><img src="assets/img/blog/1.jpg" alt="recent post" className="img-fluid rounded" /></a></div>
                                        <div className="wb"><a href="/#">Map where your photos were taken and discover local points.</a><span className="post-date">May 8, 2016</span></div>
                                    </li>
                                    <li className="clearfix">
                                        <div className="wi"><a href="/#"><img src="assets/img/blog/2.jpg" alt="recent post" className="img-fluid rounded" /></a></div>
                                        <div className="wb"><a href="/#">Map where your photos were taken and discover local points.</a><span className="post-date">May 8, 2016</span></div>
                                    </li>
                                    <li className="clearfix">
                                        <div className="wi"><a href="/#"><img src="assets/img/blog/3.jpg" alt="recent post" className="img-fluid rounded" /></a></div>
                                        <div className="wb"><a href="/#">Map where your photos were taken and discover local points.</a><span className="post-date">May 8, 2016</span></div>
                                    </li>
                                </ul>
                            </aside>

                            <aside className="widget widget-categories">
                                <div className="widget-title">
                                    <h6>Newsletter</h6>
                                </div>
                                <p>Enter your email address below to subscribe to my newsletter</p>
                                <form action="/#" method="post" className="d-none d-md-block d-lg-block">
                                    <input type="text" className="form-control input" id="email-footer" name="email" placeholder="info@yourdomain.com" />
                                    <button type="submit" className="btn btn-brand-02 btn-block btn-not-rounded mt-3">Subscribe</button>
                                </form>
                            </aside>

                            <aside className="widget widget-tag-cloud">
                                <div className="widget-title">
                                    <h6>Tags</h6>
                                </div>
                                <div className="tag-cloud"><a href="/#">e-commerce</a><a href="/#">portfolio</a><a href="/#">responsive</a><a href="/#">bootstrap</a><a href="/#">business</a><a href="/#">corporate</a></div>
                            </aside>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-8">

                        <article className="post">
                            <div className="post-preview"><a href="/#"><img src="assets/img/blog/2-w.jpg" alt="blog" /></a></div>
                            <div className="post-wrapper">
                                <div className="post-header">
                                    <h2 className="post-title"><a href="blog-single.html">Objectively communicate business core competencies </a></h2>
                                    <ul className="post-meta">
                                        <li>November 18, 2016</li>
                                        <li><a href="/#">Branding</a>, <a href="/#">Design</a></li>
                                        <li><a href="/#">3 Comments</a></li>
                                    </ul>
                                </div>
                                <div className="post-content">
                                    <p>Just then her head struck against the roof of the hall in fact she was now more than nine feet high and she at once took up the little golden key and hurried off to the garden door. The first question of course was, how to get dry again: they had a consultation about this, and after a few minutes it seemed quite natural to Alice to find herself talking familiarly with them.</p>
                                </div>
                                <div className="post-more pt-4 align-items-center d-flex"><a href="/#" className="btn btn-brand-02">Read more <span className="ti-arrow-right"></span></a></div>
                            </div>
                        </article>

                        <article className="post">
                            <div className="post-preview"><a href="/#"><img src="assets/img/blog/3-w.jpg" alt="blog" /></a></div>
                            <div className="post-wrapper">
                                <div className="post-header">
                                    <h2 className="post-title"><a href="blog-single.html">Objectively communicate business core competencies </a></h2>
                                    <ul className="post-meta">
                                        <li>November 18, 2016</li>
                                        <li><a href="/#">Branding</a>, <a href="/#">Design</a></li>
                                        <li><a href="/#">3 Comments</a></li>
                                    </ul>
                                </div>
                                <div className="post-content">
                                    <p>Just then her head struck against the roof of the hall in fact she was now more than nine feet high and she at once took up the little golden key and hurried off to the garden door. The first question of course was, how to get dry again: they had a consultation about this, and after a few minutes it seemed quite natural to Alice to find herself talking familiarly with them.</p>
                                </div>
                                <div className="post-more pt-4 align-items-center d-flex"><a href="/#" className="btn btn-brand-02">Read more <span className="ti-arrow-right"></span></a></div>
                            </div>
                        </article>

                        <article className="post">
                            <div className="post-preview"><a href="/#"><img src="assets/img/blog/4-w.jpg" alt="blog" /></a></div>
                            <div className="post-wrapper">
                                <div className="post-header">
                                    <h2 className="post-title"><a href="blog-single.html">Objectively communicate business core competencies </a></h2>
                                    <ul className="post-meta">
                                        <li>November 18, 2016</li>
                                        <li><a href="/#">Branding</a>, <a href="/#">Design</a></li>
                                        <li><a href="/#">3 Comments</a></li>
                                    </ul>
                                </div>
                                <div className="post-content">
                                    <p>Just then her head struck against the roof of the hall in fact she was now more than nine feet high and she at once took up the little golden key and hurried off to the garden door. The first question of course was, how to get dry again: they had a consultation about this, and after a few minutes it seemed quite natural to Alice to find herself talking familiarly with them.</p>
                                </div>
                                <div className="post-more pt-4 align-items-center d-flex"><a href="/#" className="btn btn-brand-02">Read more <span className="ti-arrow-right"></span></a></div>
                            </div>
                        </article>

                        <div className="row">
                            <div className="col-md-12">
                                <nav className="custom-pagination-nav">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item"><a className="page-link" href="/#"><span className="ti-angle-left"></span></a></li>
                                        <li className="page-item active"><a className="page-link" href="/#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="/#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="/#">3</a></li>
                                        <li className="page-item"><a className="page-link" href="/#">4</a></li>
                                        <li className="page-item"><a className="page-link" href="/#"><span className="ti-angle-right"></span></a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Blog;
