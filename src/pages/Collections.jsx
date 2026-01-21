import React, { useEffect } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import AOS from 'aos'
import 'aos/dist/aos.css'

import coll1 from '../assets/coll1.jpg'
import coll2 from '../assets/coll2.jpg'
import coll3 from '../assets/coll3.jpg'
import coll4 from '../assets/coll4.jpg'
import coll5 from '../assets/coll5.jpg'
import coll6 from '../assets/coll6.jpg'
import coll8 from '../assets/coll8.jpg'
import coll9 from '../assets/coll9.jpg'
import probanner from '../assets/breadcrumb.jpg'

const collections = [
  { img: coll1, title: 'Fiction Books' },
  { img: coll2, title: 'History Books' },
  { img: coll3, title: 'Romance Books' },
  { img: coll4, title: 'Children Books' },
  { img: coll5, title: 'Religious Books' },
  { img: coll6, title: 'Biography Books' },
  { img: coll8, title: 'Educational Books' },
  { img: coll9, title: 'Fantasy Books' },
]

function Collections() {

  /* ===== Initialize AOS ===== */
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
      offset: 100,
    })
  }, [])

  return (
    <div>
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
            Collections
          </h1>
          <p style={{ margin: 0, fontSize: 16 }}>
            Home / Collections
          </p>
        </div>
      </div>

      {/* ================= Collections Grid ================= */}
      <Container className="py-5">
        <Row className="g-4">
          {collections.map((item, index) => (
            <Col
              key={index}
              xl={3}
              lg={4}
              md={6}
              sm={12}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-center">
                {/* Image Wrapper */}
                <div
                  style={{
                    width: '100%',
                    height: '220px',
                    overflow: 'hidden',
                    borderRadius: '6px',
                  }}
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block',
                      transition: 'transform 0.4s ease',
                    }}
                    onMouseOver={(e) =>
                      (e.currentTarget.style.transform =
                        'scale(1.08)')
                    }
                    onMouseOut={(e) =>
                      (e.currentTarget.style.transform =
                        'scale(1)')
                    }
                  />
                </div>

                {/* Text Below Image */}
                <h5 className="mt-3 mb-0">
                  {item.title}
                </h5>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default Collections
