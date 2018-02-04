import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg bg-white fixed-top navbar-transparent" color-on-scroll="500">
        <div className="container">
          <div className="navbar-translate">
            <a className="navbar-brand" href="/" rel="tooltip" title="Designed by Invision. Coded by Creative Tim" data-placement="bottom" target="_blank">
              DApp
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navigation" aria-controls="navigation-index" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-bar bar1"></span>
              <span className="navbar-toggler-bar bar2"></span>
              <span className="navbar-toggler-bar bar3"></span>
            </button>
          </div>
          <div className="collapse navbar-collapse" data-nav-image="./assets/img/blurred-image-1.jpg" data-color="orange">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item dropdown">
                <a href="#" className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown">
                  <i className="now-ui-icons design_image" aria-hidden="true"></i>
                  <p>Pages</p>
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                  <a className="dropdown-item" href="./examples/about-us.html">
                    <i className="now-ui-icons business_bulb-63"></i> About-us
                  </a>
                  <a className="dropdown-item" href="./examples/blog-post.html">
                    <i className="now-ui-icons text_align-left"></i> Blog Post
                  </a>
                  <a className="dropdown-item" href="./examples/blog-posts.html">
                    <i className="now-ui-icons design_bullet-list-67"></i> Blog Posts
                  </a>
                  <a className="dropdown-item" href="./examples/contact-us.html">
                    <i className="now-ui-icons location_pin"></i> Contact Us
                  </a>
                  <a className="dropdown-item" href="./examples/landing-page.html">
                    <i className="now-ui-icons education_paper"></i> Landing Page
                  </a>
                  <a className="dropdown-item" href="./examples/login-page.html">
                    <i className="now-ui-icons users_circle-08"></i> Login Page
                  </a>
                  <a className="dropdown-item" href="./examples/pricing.html">
                    <i className="now-ui-icons business_money-coins"></i> Pricing
                  </a>
                  <a className="dropdown-item" href="./examples/ecommerce.html">
                    <i className="now-ui-icons shopping_shop"></i> Ecommerce Page
                  </a>
                  <a className="dropdown-item" href="./examples/product-page.html">
                    <i className="now-ui-icons shopping_bag-16"></i> Product Page
                  </a>
                  <a className="dropdown-item" href="./examples/profile-page.html">
                    <i className="now-ui-icons users_single-02"></i> Profile Page
                  </a>
                  <a className="dropdown-item" href="./examples/signup-page.html">
                    <i className="now-ui-icons tech_mobile"></i> Signup Page
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header;
