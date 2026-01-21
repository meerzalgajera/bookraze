import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Footer() {
  const hoverStyle = {
    color: "#bfbfbf",
    cursor: "pointer",
    transition: "color 0.3s ease"
  };

  const handleMouseEnter = (e) => {
    e.target.style.color = "#ffb400";
  };

  const handleMouseLeave = (e) => {
    e.target.style.color = "#bfbfbf";
  };

  return (
    <footer style={{ backgroundColor: "#1c1c1c", color: "#bfbfbf" }}>
      <Container fluid className="px-4 px-md-5 py-5">
        {/* TOP FOOTER */}
        <Row className="gy-4">
          {/* Store Info */}
          <Col xs={12} md={6} lg={3}>
            <h6 className="text-white mb-3">STORE INFORMATION</h6>
            <p className="mb-1">Bookraze - Book Store</p>
            <p className="mb-1">507-Union Trade Ipsum Doler</p>
            <p className="mb-1">Centre France</p>
            <p
              className="mb-1"
              style={hoverStyle}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              hello@blocks.com
            </p>
            <p>(+91) 9876-543-210</p>
          </Col>

          {/* Find Product */}
          <Col xs={12} md={6} lg={3}>
            <h6 className="text-white mb-3">FIND PRODUCT</h6>
            {[
              "Privacy Policy",
              "Refund Policy",
              "Shipping Policy",
              "Terms of Service",
              "Policy for Buyers",
              "Policy for Sellers",
            ].map((item, i) => (
              <p
                key={i}
                className="mb-2"
                style={hoverStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {item}
              </p>
            ))}
          </Col>

          {/* Useful Links */}
          <Col xs={12} md={6} lg={3}>
            <h6 className="text-white mb-3">USEFUL LINKS</h6>
            {[
              "About Us",
              "FAQs",
              "Shipping",
              "Shipping & Refund",
              "Sitemap",
              "Size Chart",
            ].map((item, i) => (
              <p
                key={i}
                className="mb-2"
                style={hoverStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {item}
              </p>
            ))}
          </Col>

          {/* Newsletter */}
          <Col xs={12} md={6} lg={3}>
            <h6 className="text-white mb-3">OUR NEWSLETTER</h6>
            <p>
              Subscribe to our latest newsletter to get news about special
              discounts.
            </p>
            <Form.Control
              type="email"
              placeholder="Email"
              className="mb-3"
            />
            <Button
              style={{
                backgroundColor: "#ffb400",
                border: "none",
                color: "#000",
                fontWeight: "600",
              }}
            >
              SUBSCRIBE
            </Button>
          </Col>
        </Row>

        {/* BOTTOM FOOTER */}
        <Row
          className="mt-5 pt-3 border-top align-items-center"
          style={{ borderColor: "#333" }}
        >
          <Col xs={12} md={8} className="text-center text-md-start mb-2 mb-md-0">
            <small>
              © 2026, Bookraze - Book Store 
            </small>
          </Col>
          <Col xs={12} md={4} className="text-center text-md-end">
            <small>VISA • MASTERCARD • AMEX • PAYPAL • DISCOVER</small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
