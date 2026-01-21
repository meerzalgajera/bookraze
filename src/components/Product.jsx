import React from "react";
import Slider from "react-slick";

import Container from "react-bootstrap/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faHeart,
  faEye
} from "@fortawesome/free-solid-svg-icons";

import "./Product.css";
import { faStar } from "@fortawesome/free-solid-svg-icons";

import book from "../assets/book.jpg";
import book1 from "../assets/book2.jpg";
import book2 from "../assets/book3.jpg";
import book3 from "../assets/book4.jpg";
import book4 from "../assets/book5.jpg";

const products = [
  { img: book, title: "Tales of the Great Detectives", price: "$32.00" },
  { img: book1, title: "Change Your World", price: "$50.00" },
  { img: book2, title: "Crazy Deadly Beautiful Love", price: "$22.00" },
  { img: book3, title: "My Dark Desire", price: "$29.00" },
  { img: book4, title: "Disloyal: A Memoir", price: "$49.00" }
];

const Product = () => {
  const settings = {
    arrows: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 700,
    slidesToShow: 5,
    slidesToScroll: 1,
    accessibility: false,
    pauseOnHover: false,
    pauseOnFocus: false,
    swipeToSlide: true,

    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 4 } },
      { breakpoint: 992, settings: { slidesToShow: 3 } },
      {
        breakpoint: 768,
        settings: { slidesToShow: 2, arrows: false }
      },
      {
        breakpoint: 576,
        settings: { slidesToShow: 1, arrows: false }
      }
    ]
  };

  return (
    <section className="product-section">
      <Container>
        <div className="product-slider">
          <Slider {...settings}>
            {products.map((item, i) => (
              <div key={i} className="product-card">
                <div className="img-wrapper">
                  <img src={item.img} alt={item.title} />

                  <div className="hover-icons">
                    <span><FontAwesomeIcon icon={faCartShopping} /></span>
                    <span><FontAwesomeIcon icon={faHeart} /></span>
                    <span><FontAwesomeIcon icon={faEye} /></span>
                  </div>
                </div>

                <h6>{item.title}</h6>
                <div className="rating">
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                  <FontAwesomeIcon icon={faStar} />
                </div>
                <span className="price">{item.price}</span>
              </div>
            ))}
          </Slider>
        </div>
      </Container>
    </section>
  );
};

export default Product;
