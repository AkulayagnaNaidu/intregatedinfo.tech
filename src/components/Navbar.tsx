import React from 'react';

const Navbar: React.FC = () => (
  <nav className="navbar navbar-expand-lg" style={{background:'#111', boxShadow:'0 2px 8px rgba(0,0,0,0.1)'}}>
    <div className="container">
      <a className="navbar-brand fw-bold d-flex align-items-center" href="/" style={{fontSize: '2rem'}}>
        <img src="/logo.png"  style={{height:32, marginRight:8}} />
        <span style={{
          background: 'linear-gradient(90deg, #FFD600 60%, #FF1744 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight:'bold',
          letterSpacing:'1px'
        }}>
          INTEGRATED INFOTECH
        </span>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" style={{filter:'invert(1)'}}></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
          <li className="nav-item"><a className="nav-link" href="/" style={{color:'#fff', fontWeight:'bold'}}>HOME</a></li>
          <li className="nav-item"><a className="nav-link" href="/about" style={{color:'#fff' , fontWeight:'bold'}}>ABOUT US</a></li>
          <li className="nav-item"><a className="nav-link" href="/services" style={{color:'#fff', fontWeight:'bold'}}>SERVICES</a></li>
          <li className="nav-item"><a className="nav-link" href="/courses" style={{color:'#fff' , fontWeight:'bold'}}>COURSES</a></li>
          <li className="nav-item"><a className="nav-link" href="/new-batches" style={{color:'#fff', fontWeight:'bold'}}>NEW BATCHES</a></li>
          <li className="nav-item"><a className="nav-link" href="/clients" style={{color:'#fff', fontWeight:'bold'}}>CLIENTS</a></li>
          <li className="nav-item"><a className="nav-link" href="/contact" style={{color:'#fff', fontWeight:'bold'}}>CONTACT US</a></li>
        </ul>
      </div>
    </div>
  </nav>
);

export default Navbar;
