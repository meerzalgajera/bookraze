import React from 'react'
import probanner from '../assets/breadcrumb.jpg'
function Blog() {
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
           Blog
          </h1>
          <p style={{ margin: 0, fontSize: 16 }}>
            Home / Blog
          </p>
        </div>
      </div>
    </div>
  )
}

export default Blog
