
import React from 'react';
import Navbar from './components/Navbar';
import CoursesSection from './components/CoursesSection';
import TestimonialsSection from './components/TestimonialsSection';
import FooterSection from './components/FooterSection';
function App() {
  return (
    <div>
      <div className="py-2 small text-center d-flex align-items-center justify-content-center flex-wrap" style={{background:'#f8f8f8ff', color:'#050505ff', gap:'2rem'}}>
        <span style={{fontWeight:'500', fontSize:'1.1rem'}}>📞 +91 8328418521, +91 9553786393</span>
        <span style={{fontWeight:'500', fontSize:'1.1rem'}}>✉️ intregatedinfotech.com</span>
        <span style={{fontWeight:'500', fontSize:'1.1rem'}}>Submit Your Resume | Mock Interview Schedule</span>
        <span>
          <a href="#" className="text-white ms-2"><i className="bi bi-facebook"></i></a>
          <a href="#" className="text-white ms-2"><i className="bi bi-instagram"></i></a>
          <a href="#" className="text-white ms-2"><i className="bi bi-google"></i></a>
          <a href="#" className="text-white ms-2"><i className="bi bi-youtube"></i></a>
        </span>
      </div>
      <Navbar />
      <header className="container-fluid py-5 text-center" style={{background:'#040404ff', color:'#fff'}}>
        <h1 className="display-4 fw-bold mt-5 mb-5" style={{
          background: 'linear-gradient(90deg, #FFD600 60%, #FF1744 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          fontWeight: 'bold',
          letterSpacing: '1px',
          display: 'inline-block',
          textShadow: '0 2px 8px rgba(226, 223, 223, 0.08)'
        }}>
          Learning is a Journey...<br />Not a Destination.
        </h1>
          <div className="d-flex justify-content-center mb-4">
            <a
              href="#"
              className="btn btn-lg"
              style={{
                background: '#fff',
                border: 'none',
                fontWeight: 'bold',
                fontSize: '1.3rem',
                color: 'transparent',
                backgroundClip: 'padding-box',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundImage: 'linear-gradient(90deg, #f7f6f2ff 60%, #FF1744 100%)',
                boxShadow: '0 2px 8px rgba(226, 223, 223, 0.08)',
                padding: '0.7em 2em',
                borderRadius: '0.5em',
                letterSpacing: '1px',
                transition: 'box-shadow 0.2s'
              }}
            >
              Enroll Now
            </a>
          </div>
        <div className="row mt-5 justify-content-center">
          {[{num:'100%', label:'Success Rate'}, {num:'100+', label:'Faculties'}, {num:'20000+', label:'Students'}, {num:'75+', label:'Courses'}].map((stat, idx) => (
            <div className={`col-md-2 col-6 mb-3`} key={stat.label}>
              <div className="card border-0 text-center" style={{background:'transparent'}}>
                <div className="card-body">
                  <h2 className="fw-bold" style={{
                    background: 'linear-gradient(90deg, #FFD600 60%, #FF1744 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    fontWeight: 'bold',
                    fontSize: '2.2rem',
                    letterSpacing: '1px',
                    marginBottom: '0.5rem'
                  }}>{stat.num}</h2>
                  <p style={{
                    color: '#fff',
                    fontWeight: 'bold',
                    fontSize: '1.1rem',
                    margin: 0,
                    textShadow: '0 2px 8px #8e7979ff'
                  }}>{stat.label}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* About Section */}
      <section className="w-100  pt-5 " >
        <div className="container">
          <h2 className="fw-bold mb-4" style={{
            fontSize:'2.3rem',
            background: 'linear-gradient(90deg, #FFD600 60%, #FF1744 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold',
            letterSpacing: '1px',
            display: 'inline-block',
            textShadow: '0 2px 8px rgba(1, 1, 1, 0.08)'
          }}>About</h2>
          <p style={{fontSize:'1.2rem', color:'#444', lineHeight:'1.7', maxWidth:'900px', margin:'0 auto'}}>
            INTEGRATED INFOTECH was founded to provide the most direct route to a successful career in the IT industry. Our training is designed for today's job market, with courses developed by experts from top companies. We provide the tools and environment—from modern labs to project-based learning—that enable you to build a portfolio of work before you even graduate. Combined with our dedicated placement support, we are quickly becoming the preferred training institute for aspiring software professionals in Hyderabad.
          </p>
        </div>
      </section>

      </header>


      {/* Skills Gap Section */}
      <section className="w-100 py-5 observe" style={{background:'#040404ff', boxShadow:'0 2px 12px rgba(0,0,0,0.08)', padding:'2rem'}}>
        <div className="row align-items-center ">
          <div className="col-md-7">
            <div>
              <h2 className="fw-bold mb-3" style={{
                fontSize:'2.2rem',
                background: 'linear-gradient(90deg, #FFD600 60%, #FF1744 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                fontWeight: 'bold',
                letterSpacing: '1px',
                display: 'inline-block',
                textShadow: '0 2px 8px rgba(226, 223, 223, 0.08)'
              }}>Bridging the Skills Gap in the Tech Industry</h2>
              
              <p className="mb-4 text-secondary" style={{fontSize:'1.1rem'}}>
                INTEGRATED INFOTECH is a best place for Software Training, Placement Services  founded in Vissannapeta by a software techie in 2025. At INTEGRATED INFOTECH, we aim to impart the best industrial knowledge to shape the careers for job seekers and make them industry-ready. Our wide range of training services caters to college students, fresh graduates, and working professionals with best-in-class training experience.
              </p>
              <a
                href="#"
                className="btn btn-lg px-4 d-inline-flex align-items-center"
                style={{
                  background: '#0c0c0cff',
                  border: 'none',
                  fontWeight: 'bold',
                  fontSize: '1.3rem',
                  color: '#fff',
                  backgroundClip: 'padding-box',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'inherit',
                  backgroundImage: 'linear-gradient(90deg, #f3f3efff 60%, #FF1744 100%)',
                  boxShadow: '0 2px 8px rgba(252, 249, 249, 0.08)',
                  padding: '0.7em 2em',
                  borderRadius: '0.5em',
                  letterSpacing: '1px',
                  transition: 'box-shadow 0.2s'
                }}
              >
                <i className="bi bi-book me-2"></i>Read More
              </a>
            </div>
          </div>
          <div className="col-md-5 text-center">
            <div style={{maxWidth:'400px',margin:'0 auto'}}>
              <img src="/y.png" alt="Skills Section" style={{width:'100%', borderRadius:'20%', boxShadow:'0 4px 24px rgba(0,0,0,0.35)'}} />
            </div>
          </div>
        </div>
      </section>

      

      {/* Courses Section */}
      <CoursesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Footer Section */}
      <FooterSection />
    </div>
  );
}

export default App;
