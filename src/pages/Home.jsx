import React, { useEffect } from 'react';
import './Home.css';
import { Container, Row, Col, Button } from "react-bootstrap";

import HeroSlider from "../components/HeroSlider";
import Product from "../components/Product";
import FixBanner from "../components/FixBanner";

import subbanner1 from '../assets/sub-banner-1.webp';
import subbanner2 from '../assets/sub-banner-2.webp'; 
import subbanner3 from '../assets/sub-banner-3.webp';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck, faPiggyBank, faHeadphones, faMoneyBill1 } from '@fortawesome/free-solid-svg-icons';

import AOS from 'aos';
import 'aos/dist/aos.css';

function Home() {
  useEffect(() => {
    AOS.init({  
      duration: 1000,
      once: true,
      offset: 50,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div>

      {/* Hero Slider */}
      <div data-aos="fade-up">
        <HeroSlider />
      </div>

      {/* Features Section */}
      <Container className="my-5">
        <Row>
          {[ 
            { icon: faTruck, title: "WORLDWIDE SHIPPING", desc: "Fast & secure delivery worldwide" },
            { icon: faPiggyBank, title: "MONEY BACK GUARANTEE", desc: "Get your money back easily" },
            { icon: faMoneyBill1, title: "OFFER AND DISCOUNTS", desc: "Exciting deals every week" },
            { icon: faHeadphones, title: "24/7 SUPPORT", desc: "Always here to help you" },
          ].map((item, i) => (
            <Col sm={12} md={6} lg={3} key={i} data-aos="fade-up" data-aos-delay={i * 150}>
              <div className="feature-box">
                <div className="feature-icon-wrapper">
                  <FontAwesomeIcon icon={item.icon} size="3x" style={{marginBottom:'20px'}} />
                </div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>

      {/* Sub-Banners */}
      <Container fluid className="my-5">
        <Row className="gy-4">
          <Col lg={3} md={6} sm={12} data-aos="zoom-in">
            <div className="sub-banner">
              <img src={subbanner1} alt="Banner 1" />
              <div className="sub-banner-content">
                <p className="small-text">Trusted By The Best</p>
                <h3>Best Books of The <br /> Year Sale</h3>
                <Button className="sub-btn">Shop Now</Button>
              </div>
            </div>
          </Col>

          <Col lg={6} md={12} sm={12} data-aos="zoom-in">
            <div className="sub-banner">
              <img src={subbanner2} alt="Banner 2" />
              <div className="sub-banner-content center">
                <p className="small-text">Flat 30% Off</p>
                <h3>The Biggest New <br /> Funny Books</h3>
                <Button className="sub-btn">Shop Now</Button>
              </div>
            </div>
          </Col>

          <Col lg={3} md={6} sm={12} data-aos="zoom-in">
            <div className="sub-banner">
              <img src={subbanner3} alt="Banner 3" />
              <div className="sub-banner-content">
                <p className="small-text">Biggest New Books</p>
                <h3>Sunrise On The <br /> Reaping</h3>
                <Button className="sub-btn">Shop Now</Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* Latest Products */}
      <Container>
        <h2 style={{textAlign:"center"}} data-aos="fade-up">LATEST PRODUCTS</h2>
        <div data-aos="fade-up">
          <Product />
        </div>

        <h2 style={{textAlign:"center"}} data-aos="fade-up">FEATURED PRODUCTS</h2>
        <div data-aos="fade-down">
          <Product />
        </div>
      </Container>

      {/* Fixed Background Banner */}
      <FixBanner />

    </div>
  );
}

export default Home;
