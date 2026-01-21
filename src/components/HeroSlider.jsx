import Carousel from "react-bootstrap/Carousel";
import Button from "react-bootstrap/Button";
import "./HeroSlider.css";


import banner from "../assets/main-banner-1.webp";
import banner1 from "../assets/main-banner-2.webp";

const HeroSlider = () => {
  return (
    <section className="hero-slider">
      <Carousel fade indicators={false} className="hero-carousel">
        <Carousel.Item>
          <img
            className="d-block w-100 hero-img"
            src={banner}
            alt="Hero Banner 1"
          />

          <Carousel.Caption className="hero-caption">
            <p className="hero-price">Starting At Only $89.96</p>

            <h2 className="hero-title">
              The All Souls Trilogy <br />
              <span className="hero-author">By Deborah Harkness</span>
            </h2>

            <Button className="hero-btn">Shop Now</Button>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block w-100 hero-img"
            src={banner1}
            alt="Hero Banner 2"
          />

          <Carousel.Caption className="hero-caption">
            <p className="hero-price">Starting At Only $51.99</p>

            <h2 className="hero-title">
              101 Essays That Will <br />
              Change The Way You Think
            </h2>

            <Button className="hero-btn">Shop Now</Button>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default HeroSlider;
