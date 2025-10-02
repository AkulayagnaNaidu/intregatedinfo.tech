import React, { useState } from 'react';

const Navbar: React.FC = () => {
  const [showBatchModal, setShowBatchModal] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 100; // Fixed navbar height + padding
      const elementPosition = element.offsetTop - navbarHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  // Generate batch dates - every 2 weeks starting from next Monday
  const generateBatchDates = () => {
    const batches = [];
    const today = new Date();
    const nextMonday = new Date(today);
    
    // Find next Monday
    const daysUntilMonday = (1 + 7 - today.getDay()) % 7;
    if (daysUntilMonday === 0 && today.getDay() !== 1) {
      nextMonday.setDate(today.getDate() + 7);
    } else {
      nextMonday.setDate(today.getDate() + (daysUntilMonday === 0 ? 7 : daysUntilMonday));
    }

    // Generate 6 batch dates (3 months worth)
    for (let i = 0; i < 6; i++) {
      const batchDate = new Date(nextMonday);
      batchDate.setDate(nextMonday.getDate() + (i * 14)); // Every 2 weeks
      
      batches.push({
        date: batchDate.toLocaleDateString('en-GB', {
          weekday: 'long',
          day: '2-digit',
          month: 'long',
          year: 'numeric'
        }),
        shortDate: batchDate.toLocaleDateString('en-GB'),
        batchNumber: i + 1
      });
    }
    return batches;
  };

  const batchDates = generateBatchDates();

  return (
    <nav className="navbar navbar-expand-lg fixed-top" style={{background:'#111', boxShadow:'0 2px 8px rgba(0,0,0,0.1)', zIndex: 1030}}>
      <div className="container">
        <button 
          className="navbar-brand fw-bold d-flex align-items-center" 
          onClick={scrollToTop}
          style={{
            fontSize: '2rem', 
            background: 'none', 
            border: 'none', 
            cursor: 'pointer',
            textDecoration: 'none'
          }}
        >
          <img src="/logo.png" style={{height:32, marginRight:8}} />
          <span style={{
            background: 'linear-gradient(90deg, #FFD600 60%, #FF1744 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight:'bold',
            letterSpacing:'1px'
          }}>
            INTEGRATED INFOTECH
          </span>
        </button>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" style={{filter:'invert(1)'}}></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            <li className="nav-item">
              <button 
                className="nav-link btn btn-link" 
                onClick={scrollToTop}
                style={{
                  color:'#fff', 
                  fontWeight:'bold', 
                  background: 'none', 
                  border: 'none', 
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                HOME
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link btn btn-link" 
                onClick={() => scrollToSection('about-section')}
                style={{
                  color:'#fff', 
                  fontWeight:'bold', 
                  background: 'none', 
                  border: 'none', 
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                ABOUT US
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link btn btn-link" 
                onClick={() => scrollToSection('services-section')}
                style={{
                  color:'#fff', 
                  fontWeight:'bold', 
                  background: 'none', 
                  border: 'none', 
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                SERVICES
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link btn btn-link" 
                onClick={() => scrollToSection('courses-section')}
                style={{
                  color:'#fff', 
                  fontWeight:'bold', 
                  background: 'none', 
                  border: 'none', 
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                COURSES
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link btn btn-link" 
                onClick={() => setShowBatchModal(true)}
                style={{
                  color:'#fff', 
                  fontWeight:'bold', 
                  background: 'none', 
                  border: 'none', 
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                NEW BATCHES
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link btn btn-link" 
                onClick={() => scrollToSection('clients-section')}
                style={{
                  color:'#fff', 
                  fontWeight:'bold', 
                  background: 'none', 
                  border: 'none', 
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                CLIENTS
              </button>
            </li>
            <li className="nav-item">
              <button 
                className="nav-link btn btn-link" 
                onClick={() => scrollToSection('contact-section')}
                style={{
                  color:'#fff', 
                  fontWeight:'bold', 
                  background: 'none', 
                  border: 'none', 
                  textDecoration: 'none',
                  cursor: 'pointer'
                }}
              >
                CONTACT US
              </button>
            </li>
          </ul>
        </div>
      </div>

      {/* Batch Dates Modal */}
      {showBatchModal && (
        <div 
          className="modal show d-block" 
          style={{backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050}}
          onClick={() => setShowBatchModal(false)}
        >
          <div className="modal-dialog modal-dialog-centered modal-lg" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content" style={{borderRadius: '15px', border: 'none'}}>
              <div className="modal-header" style={{background: 'linear-gradient(90deg, #FFD600, #FF1744)', borderRadius: '15px 15px 0 0'}}>
                <h5 className="modal-title fw-bold d-flex align-items-center" style={{color: '#fff'}}>
                  <i className="bi bi-calendar-event me-2"></i>
                  New Batch Schedule
                </h5>
                <button 
                  type="button" 
                  className="btn-close btn-close-white" 
                  onClick={() => setShowBatchModal(false)}
                ></button>
              </div>
              <div className="modal-body p-4">
                <div className="text-center mb-4">
                  <p className="lead mb-3" style={{color: '#666'}}>
                    🚀 Join our upcoming batches and kickstart your tech career!
                  </p>
                  <p className="text-muted">
                    New batches start every <strong>2 weeks</strong> on Mondays
                  </p>
                </div>
                
                <div className="row g-3">
                  {batchDates.map((batch, index) => (
                    <div key={index} className="col-md-6">
                      <div 
                        className="card h-100 border-0 shadow-sm"
                        style={{
                          borderRadius: '12px',
                          background: index === 0 ? 'linear-gradient(135deg, #FFD600, #FF1744)' : '#f8f9fa',
                          color: index === 0 ? '#fff' : '#333',
                          transform: 'translateY(0)',
                          transition: 'transform 0.2s'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'translateY(-2px)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'translateY(0)';
                        }}
                      >
                        <div className="card-body text-center p-4">
                          {index === 0 && (
                            <div className="badge bg-white text-dark mb-2" style={{fontSize: '0.8rem'}}>
                              NEXT BATCH
                            </div>
                          )}
                          <h6 className="fw-bold mb-2">Batch #{batch.batchNumber}</h6>
                          <h5 className="fw-bold mb-1">{batch.shortDate}</h5>
                          <p className="mb-3" style={{fontSize: '0.9rem', opacity: 0.9}}>
                            {batch.date}
                          </p>
                          <div className="d-flex justify-content-center gap-2">
                            <button 
                              className="btn btn-sm"
                              style={{
                                background: index === 0 ? '#fff' : '#FF1744',
                                color: index === 0 ? '#FF1744' : '#fff',
                                border: 'none',
                                borderRadius: '20px',
                                padding: '6px 16px',
                                fontSize: '0.8rem',
                                fontWeight: 'bold'
                              }}
                              onClick={() => {
                                setShowBatchModal(false);
                                scrollToSection('courses-section');
                              }}
                            >
                              Enroll Now
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="text-center mt-4 p-3" style={{background: '#f8f9fa', borderRadius: '10px'}}>
                  <h6 className="fw-bold mb-2" style={{color: '#FF1744'}}>
                    📋 Batch Timings
                  </h6>
                  <div className="row">
                    <div className="col-md-6">
                      <p className="mb-1"><strong>Morning:</strong> 9:00 AM - 12:00 PM</p>
                      <p className="mb-1"><strong>Afternoon:</strong> 1:00 PM - 4:00 PM</p>
                    </div>
                    <div className="col-md-6">
                      <p className="mb-1"><strong>Evening:</strong> 5:00 PM - 8:00 PM</p>
                      <p className="mb-1"><strong>Weekend:</strong> Sat & Sun</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer justify-content-center">
                <button
                  type="button"
                  className="btn btn-lg px-4"
                  style={{
                    background: 'linear-gradient(90deg, #FFD600, #FF1744)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '25px',
                    fontWeight: 'bold'
                  }}
                  onClick={() => {
                    setShowBatchModal(false);
                    scrollToSection('contact-section');
                  }}
                >
                  <i className="bi bi-telephone-fill me-2"></i>
                  Contact for More Info
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
