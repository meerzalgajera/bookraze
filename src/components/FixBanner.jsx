// FixBanner.jsx
import React from "react";
import './FixBanner.css';
import Button from "react-bootstrap/Button";
// import fix from '../assets/fixbanner.webp';

const FixBanner = () => {
  return (
    <section className="fix-banner">
      <div className="fix-banner-overlay">
        <div className="fix-banner-content" data-aos="fade-up">
          <p className="price-text">Starting At Only $99.99</p>
          <h2>
            Identity Theft Secrets <br />
            Exposing The Tricks Of The Trade!
          </h2>
          <Button className="shop-btn">Shop Now</Button>
        </div>
      </div>
    </section>
  );
};

export default FixBanner;
