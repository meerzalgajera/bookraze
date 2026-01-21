import React, { useEffect } from "react";
import { Container, Row, Col, Card, Form, Badge, Button } from "react-bootstrap";
import { FaHeart, FaEye, FaShoppingCart, FaStar } from "react-icons/fa";

import AOS from "aos";
import "aos/dist/aos.css";

import book from "../assets/book.jpg";
import book1 from "../assets/book2.jpg";
import book2 from "../assets/book3.jpg";
import book3 from "../assets/book4.jpg";
import book4 from "../assets/book5.jpg";
import probanner from "../assets/breadcrumb.jpg";

const books = [
  {
    id: 1,
    title: "Attitude Is Everything",
    author: "Jeff Keller",
    price: 35,
    rating: 4,
    image: book,
  },
  {
    id: 2,
    title: "Change Your World",
    author: "John C. Maxwell",
    price: 50,
    rating: 5,
    image: book1,
  },
  {
    id: 3,
    title: "Cinder",
    author: "Marissa Meyer",
    oldPrice: 12,
    price: 9,
    rating: 5,
    discount: "-25%",
    image: book2,
  },
  {
    id: 4,
    title: "Crazy Beautiful Love",
    author: "Penny Dee",
    oldPrice: 28,
    price: 22,
    rating: 3,
    discount: "-21%",
    image: book3,
  },
  {
    id: 5,
    title: "Crush It!",
    author: "Gary Vee",
    oldPrice: 55,
    price: 42,
    rating: 5,
    image: book4,
  },
];

function Shop() {

  /* ===== AOS INIT ===== */
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: "ease-in-out",
      offset: 100,
    });
  }, []);

  return (
    <>
      {/* ================= Banner Section ================= */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '260px',
        }}
      >
        <img
          src={probanner}
          alt="Collections Banner"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />

        {/* Overlay */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.4)',
          }}
        />

        {/* Center Text */}
        <div
          data-aos="fade-up"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            color: '#fff',
            zIndex: 2,
          }}
        >
          <h1 style={{ fontWeight: 700, marginBottom: 6 }}>
           Products
          </h1>
          <p style={{ margin: 0, fontSize: 16 }}>
            Home / Products
          </p>
        </div>
      </div>


      {/* ================= Shop Content ================= */}
      <Container fluid className="py-4">
        <Row>
          {/* Sidebar */}
          <Col lg={3} md={4} className="mb-4" data-aos="fade-right">
            <div className="border p-3 rounded">
              <h5 className="mb-3">Filter</h5>

              <h6>Availability</h6>
              <Form.Check label="In stock" />
              <Form.Check label="Out of stock" />

              <hr />

              <h6>Languages</h6>
              <Form.Check label="English" />
              <Form.Check label="Hindi" />
              <Form.Check label="Marathi" />
              <Form.Check label="Tamil" />
              <Form.Check label="Telugu" />

              <hr />

              <h6>Product Type</h6>
              <Form.Check label="Biography" />
              <Form.Check label="Fantasy" />
              <Form.Check label="History" />
              <Form.Check label="Romance" />
            </div>
          </Col>

          {/* Products */}
          <Col lg={9} md={8}>
            <Row className="g-4">
              {books.map((book, index) => (
                <Col
                  xl={3}
                  lg={4}
                  sm={6}
                  xs={12}
                  key={book.id}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <Card className="h-100 shadow-sm border-0 position-relative product-card">
                    {book.discount && (
                      <Badge
                        bg="danger"
                        className="position-absolute top-0 start-0 m-2"
                      >
                        {book.discount}
                      </Badge>
                    )}

                    <div className="icon-group">
                      <Button variant="light" size="sm">
                        <FaHeart />
                      </Button>
                      <Button variant="light" size="sm">
                        <FaEye />
                      </Button>
                      <Button variant="light" size="sm">
                        <FaShoppingCart />
                      </Button>
                    </div>

                    <Card.Img
                      src={book.image}
                      style={{ height: "260px", objectFit: "cover" }}
                    />

                    <Card.Body className="text-center">
                      <small className="text-muted">{book.author}</small>

                      <Card.Title className="fs-6 mt-2">
                        {book.title}
                      </Card.Title>

                      <div className="mb-2 text-warning">
                        {[...Array(5)].map((_, i) => (
                          <FaStar
                            key={i}
                            color={i < book.rating ? "#ffc107" : "#e4e5e9"}
                          />
                        ))}
                      </div>

                      <div>
                        {book.oldPrice && (
                          <span className="text-muted text-decoration-line-through me-2">
                            ${book.oldPrice}
                          </span>
                        )}
                        <strong>${book.price}</strong>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Col>
        </Row>

        {/* Styles */}
        <style>{`
          .product-card {
            overflow: hidden;
          }

          .icon-group {
            position: absolute;
            top: 50%;
            right: -50px;
            transform: translateY(-50%);
            display: flex;
            flex-direction: column;
            gap: 8px;
            transition: 0.3s ease;
            z-index: 2;
          }

          .product-card:hover .icon-group {
            right: 10px;
          }

          .icon-group button {
            border-radius: 50%;
          }
        `}</style>
      </Container>
    </>
  );
}

export default Shop;
