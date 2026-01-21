import React, { useEffect } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { FaHome, FaPhoneAlt, FaEnvelope, FaInfoCircle } from 'react-icons/fa'

import AOS from 'aos'
import 'aos/dist/aos.css'

import probanner from '../assets/breadcrumb.jpg'

function Contact() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
      offset: 100,
    })
  }, [])

  return (
    <Container fluid className="py-5">
      {/* ================= Banner ================= */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '260px',
        }}
      >
        <img
          src={probanner}
          alt="Contact Banner"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />

        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundColor: 'rgba(0,0,0,0.4)',
          }}
        />

        <div
          data-aos="fade-down"
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
            Contact
          </h1>
          <p style={{ margin: 0, fontSize: 16 }}>
            Home / Contact
          </p>
        </div>
      </div>

      {/* ================= Form + Info ================= */}
      <Row className="g-4 mt-5">
        {/* Contact Form */}
        <Col lg={7} md={12} data-aos="fade-right">
          <div className="border p-4 h-100">
            <h3 className="mb-4">Do You Have Any Questions?</h3>

            <Form>
              <Row className="mb-3">
                <Col md={6}>
                  <Form.Control type="text" placeholder="Name" />
                </Col>
                <Col md={6}>
                  <Form.Control type="email" placeholder="Email *" />
                </Col>
              </Row>

              <Form.Group className="mb-3">
                <Form.Control type="text" placeholder="Phone number" />
              </Form.Group>

              <Form.Group className="mb-4">
                <Form.Control
                  as="textarea"
                  rows={6}
                  placeholder="Comment"
                />
              </Form.Group>

              <Button
                style={{
                  backgroundColor: '#ffb400',
                  border: 'none',
                  padding: '10px 30px',
                  fontWeight: '500',
                }}
              >
                SEND
              </Button>
            </Form>
          </div>
        </Col>

        {/* Contact Info */}
        <Col lg={5} md={12} data-aos="fade-left">
          <div className="border p-4 h-100">
            <h3 className="mb-4">Get In Touch With Us</h3>

            <div className="d-flex mb-4">
              <FaHome size={22} className="me-3 mt-1" />
              <div>
                <strong>Address:</strong>
                <p className="mb-0">
                  33 New Montgomery St.<br />
                  Ste 750 San Francisco,<br />
                  CA, USA 94105
                </p>
              </div>
            </div>

            <div className="d-flex mb-4">
              <FaPhoneAlt size={20} className="me-3 mt-1" />
              <div>
                <strong>Contact No.:</strong>
                <p className="mb-0">(+91) 9876-543-210</p>
              </div>
            </div>

            <div className="d-flex mb-4">
              <FaEnvelope size={20} className="me-3 mt-1" />
              <div>
                <strong>Email:</strong>
                <p className="mb-0">bookraze@exampledemo.com</p>
              </div>
            </div>

            <div className="d-flex">
              <FaInfoCircle size={20} className="me-3 mt-1" />
              <div>
                <strong>Store Info:</strong>
                <p className="mb-0">
                  Monday – Friday 10 AM – 8 PM
                </p>
              </div>
            </div>
          </div>
        </Col>
      </Row>

      {/* ================= Map ================= */}
     {/* ================= MAP SECTION ================= */}
   <div style={{ width: '100%', height: '450px', marginTop: '50px' }}>
      <iframe
        src="https://www.google.com/maps?q=Ahmedabad&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        title="map"
      ></iframe>
    </div>

    </Container>
  )
}

export default Contact
