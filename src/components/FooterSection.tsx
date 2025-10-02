import React from 'react';

const FooterSection: React.FC = () => (
  <footer className="pt-5 pb-3" style={{background:'#111'}}>
    <div className="container">
      <div className="row mb-4 justify-content-center">
        <div className="col-md-6 mb-3 text-center">
          <h4 className="fw-bold mb-3" style={{background: 'linear-gradient(90deg, #FFD600, #FFEA00, #FF1744)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Address</h4>
          <p className="mb-1 fw-bold" style={{color:'#ff1744'}}>intregatedinfotech</p>
          <p className="mb-1" style={{color:'#fff'}}>KPHB, Hyderabad - 500072</p>
          <p className="mb-1" style={{color:'#fff'}}>Ph: +91 8328418521, +91 9553786393</p>
          <p className="mb-1" style={{color:'#fff'}}>Email: IntegratedInfoTech@gmail.com</p>
          <p className="mb-1" style={{color:'#fff'}}>Website: Intregrateinfotech.com</p>
        </div>
      </div>
      <div className="d-flex justify-content-center align-items-center pt-3 border-top border-secondary flex-column">
        <span style={{color:'#fff'}} className="mb-2">©2025. All Rights Reserved. Powered by <b style={{color:'#ff1744'}}>intregatedinfotech</b></span>
        <span>
          <a href="#" className="me-3" style={{color:'#FFD600'}}><i className="bi bi-facebook"></i></a>
          <a href="#" className="me-3" style={{color:'#FFD600'}}><i className="bi bi-instagram"></i></a>
          <a href="#" className="me-3" style={{color:'#FFD600'}}><i className="bi bi-linkedin"></i></a>
          <a href="#" className="me-3" style={{color:'#FFD600'}}><i className="bi bi-google"></i></a>
          <a href="#" style={{color:'#FFD600'}}><i className="bi bi-youtube"></i></a>
        </span>
      </div>
    </div>
  </footer>
);

export default FooterSection;
