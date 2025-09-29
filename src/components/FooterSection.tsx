import React from 'react';

const FooterSection: React.FC = () => (
  <footer className="pt-5 pb-3" style={{background:'#111'}}>
    <div className="container">
      <div className="row mb-4">
        <div className="col-md-4 mb-3">
          <h4 className="fw-bold mb-3" style={{background: 'linear-gradient(90deg, #FFD600, #FFEA00, #FF1744)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Address</h4>
          <p className="mb-1 fw-bold" style={{color:'#ff1744'}}>Career Bridge IT Services</p>
          <p className="mb-1" style={{color:'#fff'}}>HIG - 209, 3rd Floor, Above Punjab National Bank,<br />Road No. 5, Rythu Bazar Road, Near Post Office,<br />KPHB Phase -1, KPHB, Hyderabad - 500072.</p>
          <p className="mb-1" style={{color:'#fff'}}>Ph: +91 81430 90660, +91 83092 69142</p>
          <p className="mb-1" style={{color:'#fff'}}>Email: trainings@careerbridgeit.in</p>
          <p className="mb-1" style={{color:'#fff'}}>Website: www.careerbridgeit.in</p>
        </div>
        <div className="col-md-4 mb-3">
          <h4 className="fw-bold mb-3" style={{background: 'linear-gradient(90deg, #FFD600, #FFEA00, #FF1744)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Location Map</h4>
          <div style={{borderRadius:8, overflow:'hidden'}}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.217232625992!2d78.3995473148777!3d17.48485798802459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e2e2e2e2e3%3A0x2e2e2e2e2e2e2e2e!2sCareer%20Bridge%20IT%20Services%20And%20Overseas%20Education!5e0!3m2!1sen!2sin!4v1633073073073!5m2!1sen!2sin"
              width="100%"
              height="180"
              style={{border:0}}
              allowFullScreen={true}
              loading="lazy"
              title="Career Bridge IT Services Location"
            ></iframe>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <h4 className="fw-bold mb-3" style={{background: 'linear-gradient(90deg, #FFD600, #FFEA00, #FF1744)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>About Us</h4>
          <p style={{color:'#fff'}}>Our comprehensive software training courses are designed according to industry needs by real-time professionals associated with leading startups and MNCs. Well-equipped labs, real-time project-oriented training, and placement assistance programs have made Career Bridge IT Services one of the best IT/Software training institutions in Hyderabad.</p>
        </div>
      </div>
      <div className="d-flex justify-content-between align-items-center pt-3 border-top border-secondary">
        <span style={{color:'#fff'}}>©2024. All Rights Reserved. Powered by <b style={{color:'#ff1744'}}>Career Bridge IT Services</b></span>
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
