import React, { Component } from 'react';

import sky from '../assets/img/presentation-page/nuk-pro-back-sky.jpg';
import buildings from '../assets/img/presentation-page/nuk-pro-buildings.png';


class Home extends Component {
  render() {
    return (
      <div className="presentation-page">
        <div className="wrapper">
          <div className="page-header clear-filter">
            <div className="rellax-header rellax-header-sky" data-rellax-speed="-8">
              <div className="page-header-image" style={{backgroundImage: "url("+sky+")"}}>
              </div>
            </div>
            <div className="rellax-header rellax-header-buildings" data-rellax-speed="0">
              <div className="page-header-image page-header-city" style={{backgroundImage: "url("+buildings+")"}}>
              </div>
            </div>
            <div className="rellax-text-container rellax-text">
              <h1 className="h1-seo" data-rellax-speed="-2">DApp</h1>
            </div>
            <h3 className="h3-description rellax-text" data-rellax-speed="-1">Coming Soon...</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;
