
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import CoursesSection from './components/CoursesSection';
import TestimonialsSection from './components/TestimonialsSection';
import FooterSection from './components/FooterSection';

function App() {
  const [showResumeModal, setShowResumeModal] = useState(false);
  const [showMockInterviewModal, setShowMockInterviewModal] = useState(false);
  const [resumeFormData, setResumeFormData] = useState({
    name: '',
    mobile: '',
    email: '',
    qualification: '',
    passOutYear: '',
    technology: '',
    resume: null as File | null,
    comments: ''
  });
  const [mockInterviewFormData, setMockInterviewFormData] = useState({
    name: '',
    mobile: '',
    technology: '',
    batch: '',
    mockType: '',
    date: '',
    prepared: ''
  });

  const handleResumeInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, files } = e.target as HTMLInputElement;
    if (name === 'resume' && files) {
      const file = files[0];
      if (file && file.type === 'application/pdf') {
        setResumeFormData(prev => ({ ...prev, resume: file }));
      } else {
        alert('Please select a PDF file only.');
        (e.target as HTMLInputElement).value = '';
      }
    } else {
      setResumeFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleMockInterviewInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setMockInterviewFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleResumeSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show loading state
    const submitButton = e.currentTarget.querySelector('button[type="submit"]') as HTMLButtonElement;
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Submitting...';
    submitButton.disabled = true;

    const formData = new FormData();
    formData.append('access_key', '847e8f1a-05c4-4dee-a211-417985e4b222');
    formData.append('name', resumeFormData.name);
    formData.append('mobile', resumeFormData.mobile);
    formData.append('email', resumeFormData.email);
    formData.append('qualification', resumeFormData.qualification);
    formData.append('passOutYear', resumeFormData.passOutYear);
    formData.append('technology', resumeFormData.technology);
    formData.append('comments', resumeFormData.comments);
    
    if (resumeFormData.resume) {
      formData.append('file', resumeFormData.resume);
    }

    formData.append('message', `Resume Submission Request

Name: ${resumeFormData.name}
Mobile: ${resumeFormData.mobile}
Email: ${resumeFormData.email}
Qualification: ${resumeFormData.qualification}
Pass-Out Year: ${resumeFormData.passOutYear}
Technology: ${resumeFormData.technology}
Comments: ${resumeFormData.comments}

The candidate has submitted their resume for review. Please process the application accordingly.`);
    formData.append('subject', 'Resume Submission Request');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Reset form and close modal
        setResumeFormData({ 
          name: '', 
          mobile: '', 
          email: '', 
          qualification: '', 
          passOutYear: '', 
          technology: '', 
          resume: null, 
          comments: '' 
        });
        setShowResumeModal(false);
        alert('Resume submitted successfully! We will contact you shortly to discuss opportunities.');
      } else {
        console.error('Server response:', result);
        alert(`Submission failed: ${result.message || 'Note: File uploads require Pro plan. Your details have been saved, please email your resume separately.'}`);
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Network error occurred. Please check your internet connection and try again.');
    } finally {
      // Reset button state
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }
  };

  const handleMockInterviewSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Show loading state
    const submitButton = e.currentTarget.querySelector('button[type="submit"]') as HTMLButtonElement;
    const originalText = submitButton.textContent;
    submitButton.textContent = 'Submitting...';
    submitButton.disabled = true;

    const formData = new FormData();
    formData.append('access_key', '847e8f1a-05c4-4dee-a211-417985e4b222');
    formData.append('name', mockInterviewFormData.name);
    formData.append('mobile', mockInterviewFormData.mobile);
    formData.append('technology', mockInterviewFormData.technology);
    formData.append('batch', mockInterviewFormData.batch);
    formData.append('mockType', mockInterviewFormData.mockType);
    formData.append('date', mockInterviewFormData.date);
    formData.append('prepared', mockInterviewFormData.prepared);
    formData.append('message', `Mock Interview Schedule Request

Name: ${mockInterviewFormData.name}
Mobile: ${mockInterviewFormData.mobile}
Technology: ${mockInterviewFormData.technology}
Batch: ${mockInterviewFormData.batch}
Mock Type: ${mockInterviewFormData.mockType}
Preferred Date: ${mockInterviewFormData.date}
Preparation Status: ${mockInterviewFormData.prepared}

The candidate has requested to schedule a mock interview. Please contact them to confirm the details and finalize the schedule.`);
    formData.append('subject', 'Mock Interview Schedule Request');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (response.ok && result.success) {
        // Reset form and close modal
        setMockInterviewFormData({ 
          name: '', 
          mobile: '', 
          technology: '', 
          batch: '', 
          mockType: '', 
          date: '', 
          prepared: '' 
        });
        setShowMockInterviewModal(false);
        alert('Mock interview request submitted successfully! We will contact you shortly to confirm the schedule.');
      } else {
        console.error('Server response:', result);
        alert(`Submission failed: ${result.message || 'Please check your internet connection and try again.'}`);
      }
    } catch (error) {
      console.error('Network error:', error);
      alert('Network error occurred. Please check your internet connection and try again.');
    } finally {
      // Reset button state
      submitButton.textContent = originalText;
      submitButton.disabled = false;
    }
  };

  return (
    <div style={{paddingTop: '80px'}}>
      <div className="py-2 small text-center d-flex align-items-center justify-content-center flex-wrap" style={{background:'#f8f8f8ff', color:'#050505ff', gap:'2rem'}}>
        <span style={{fontWeight:'500', fontSize:'1.1rem'}}>📞 +91 8328418521, +91 9553786393</span>
        <span style={{fontWeight:'500', fontSize:'1.1rem'}}>✉️ intregatedinfotech.com</span>
        <span 
          style={{fontWeight:'500', fontSize:'1.1rem', cursor:'pointer', color:'#FF1744'}} 
          onClick={() => setShowResumeModal(true)}
        >
          Submit Resume
        </span>
        <span style={{fontWeight:'500', fontSize:'1.1rem', color:'#050505ff'}}>|</span>
        <span 
          style={{fontWeight:'500', fontSize:'1.1rem', cursor:'pointer', color:'#FF1744'}} 
          onClick={() => setShowMockInterviewModal(true)}
        >
          Mock Interview Schedule
        </span>
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
      <section id="about-section" className="w-100 py-5" style={{paddingTop: '100px', marginTop: '-80px'}} >
        <div className="container text-center">
          <h2 className="fw-bold mb-4" style={{
            fontSize:'2.3rem',
            background: 'linear-gradient(90deg, #FFD600 60%, #FF1744 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontWeight: 'bold',
            letterSpacing: '1px',
            display: 'inline-block',
            textShadow: '0 2px 8px rgba(1, 1, 1, 0.08)',
            marginTop: '3rem'
          }}>About </h2>
          <p style={{fontSize:'1.2rem', color:'#444', lineHeight:'1.7', maxWidth:'900px', margin:'0 auto', textAlign: 'justify' , marginTop: '3rem'}}>
            INTEGRATED INFOTECH was founded to provide the most direct route to a successful career in the IT industry. Our training is designed for today's job market, with courses developed by experts from top companies. We provide the tools and environment—from modern labs to project-based learning—that enable you to build a portfolio of work before you even graduate. Combined with our dedicated placement support, we are quickly becoming the preferred training institute for aspiring software professionals in Hyderabad.
          </p>
          <div className="row mt-5" style={{marginTop: '3rem'}}>
            <div className="col-md-4 mb-3">
              <div className="card border-0 shadow-sm h-100" style={{borderRadius: '15px'}}>
                <div className="card-body text-center p-4">
                  <i className="bi bi-bullseye text-primary mb-3" style={{fontSize: '2.5rem'}}></i>
                  <h5 className="fw-bold mb-3" style={{color: '#FF1744'}}>Our Mission</h5>
                  <p className="text-muted">To bridge the skills gap in the IT industry by providing world-class training and placement assistance to aspiring professionals.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card border-0 shadow-sm h-100" style={{borderRadius: '15px'}}>
                <div className="card-body text-center p-4">
                  <i className="bi bi-eye text-success mb-3" style={{fontSize: '2.5rem'}}></i>
                  <h5 className="fw-bold mb-3" style={{color: '#FF1744'}}>Our Vision</h5>
                  <p className="text-muted">To become the leading IT training institute that transforms lives through quality education and career opportunities.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <div className="card border-0 shadow-sm h-100" style={{borderRadius: '15px'}}>
                <div className="card-body text-center p-4">
                  <i className="bi bi-award text-warning mb-3" style={{fontSize: '2.5rem'}}></i>
                  <h5 className="fw-bold mb-3" style={{color: '#FF1744'}}>Our Values</h5>
                  <p className="text-muted">Excellence in education, innovation in teaching methods, and commitment to student success in their career journey.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      </header>


      {/* Skills Gap Section */}
      <section id="services-section" className="w-100 py-5 observe" style={{background:'#040404ff', boxShadow:'0 2px 12px rgba(0,0,0,0.08)', padding:'2rem'}}>
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
                  background: '#0b0b0bff',
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
      <div id="courses-section">
        <CoursesSection />
      </div>

      {/* Testimonials Section */}
      <div id="contact-section">
        <TestimonialsSection />
      </div>

      {/* Footer Section */}
      <FooterSection />

      {/* Resume Submission Modal */}
      {showResumeModal && (
        <div 
          className="modal show d-block" 
          style={{backgroundColor: 'rgba(0,0,0,0.5)'}}
          onClick={() => setShowResumeModal(false)}
        >
          <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content" style={{borderRadius: '15px', border: 'none'}}>
              <div className="modal-header" style={{background: 'linear-gradient(90deg, #FFD600, #FF1744)', borderRadius: '15px 15px 0 0'}}>
                <h5 className="modal-title fw-bold" style={{color: '#fff'}}>
                  Submit Resume
                </h5>
                <button 
                  type="button" 
                  className="btn-close btn-close-white" 
                  onClick={() => setShowResumeModal(false)}
                ></button>
              </div>
              <div className="modal-body p-4">
                <form onSubmit={handleResumeSubmit}>
                  <div className="mb-3">
                    <label htmlFor="resumeName" className="form-label fw-bold">Full Name <span style={{color: '#FF1744'}}>*</span></label>
                    <input
                      type="text"
                      className="form-control"
                      id="resumeName"
                      name="name"
                      value={resumeFormData.name}
                      onChange={handleResumeInputChange}
                      required
                      placeholder="Enter your full name"
                      style={{borderRadius: '8px', border: '2px solid #e0e0e0', padding: '10px'}}
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="resumeMobile" className="form-label fw-bold">Mobile <span style={{color: '#FF1744'}}>*</span></label>
                    <input
                      type="tel"
                      className="form-control"
                      id="resumeMobile"
                      name="mobile"
                      value={resumeFormData.mobile}
                      onChange={handleResumeInputChange}
                      required
                      placeholder="Enter your mobile number"
                      pattern="[0-9]{10}"
                      maxLength={10}
                      style={{borderRadius: '8px', border: '2px solid #e0e0e0', padding: '10px'}}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="resumeEmail" className="form-label fw-bold">Email <span style={{color: '#FF1744'}}>*</span></label>
                    <input
                      type="email"
                      className="form-control"
                      id="resumeEmail"
                      name="email"
                      value={resumeFormData.email}
                      onChange={handleResumeInputChange}
                      required
                      placeholder="Enter your email address"
                      style={{borderRadius: '8px', border: '2px solid #e0e0e0', padding: '10px'}}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="resumeQualification" className="form-label fw-bold">Qualification <span style={{color: '#FF1744'}}>*</span></label>
                    <select
                      className="form-control"
                      id="resumeQualification"
                      name="qualification"
                      value={resumeFormData.qualification}
                      onChange={handleResumeInputChange}
                      required
                      style={{borderRadius: '8px', border: '2px solid #e0e0e0', padding: '10px'}}
                    >
                      <option value="">—Please choose an option—</option>
                      <option value="B.Tech/B.E">B.Tech/B.E</option>
                      <option value="MCA">MCA</option>
                      <option value="BCA">BCA</option>
                      <option value="M.Tech">M.Tech</option>
                      <option value="BSc Computer Science">BSc Computer Science</option>
                      <option value="MSc Computer Science">MSc Computer Science</option>
                      <option value="Diploma">Diploma</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="resumePassOutYear" className="form-label fw-bold">Pass-Out Year <span style={{color: '#FF1744'}}>*</span></label>
                    <select
                      className="form-control"
                      id="resumePassOutYear"
                      name="passOutYear"
                      value={resumeFormData.passOutYear}
                      onChange={handleResumeInputChange}
                      required
                      style={{borderRadius: '8px', border: '2px solid #e0e0e0', padding: '10px'}}
                    >
                      <option value="">—Please choose an option—</option>
                      {Array.from({length: 10}, (_, i) => new Date().getFullYear() - i).map(year => (
                        <option key={year} value={year.toString()}>{year}</option>
                      ))}
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="resumeTechnology" className="form-label fw-bold">Technology <span style={{color: '#FF1744'}}>*</span></label>
                    <select
                      className="form-control"
                      id="resumeTechnology"
                      name="technology"
                      value={resumeFormData.technology}
                      onChange={handleResumeInputChange}
                      required
                      style={{borderRadius: '8px', border: '2px solid #e0e0e0', padding: '10px'}}
                    >
                      <option value="">—Please choose an option—</option>
                      <option value="Java Full Stack">Java Full Stack</option>
                      <option value="Python Full Stack">IOS</option>
                      <option value="Python Full Stack">Python Full Stack</option>
                      <option value="MERN Stack">MERN Stack</option>
                      <option value="React JS">React JS</option>
                      <option value="Node JS">Node JS</option>
                      <option value="Angular">Angular</option>
                      <option value="DevOps">DevOps</option>
                      <option value="Data Science">Data Science</option>
                      <option value="Machine Learning">Machine Learning</option>
                      <option value="Cloud Computing">Cloud Computing</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="resumeFile" className="form-label fw-bold">Upload Resume <span style={{color: '#FF1744'}}>*</span></label>
                    <input
                      type="file"
                      className="form-control"
                      id="resumeFile"
                      name="resume"
                      onChange={handleResumeInputChange}
                      accept=".pdf,.doc,.docx"
                      required
                      style={{borderRadius: '8px', border: '2px solid #e0e0e0', padding: '10px'}}
                    />
                    <small className="text-muted">No file chosen</small>
                  </div>

                  <div className="mb-4">
                    <label htmlFor="resumeComments" className="form-label fw-bold">Comments</label>
                    <textarea
                      className="form-control"
                      id="resumeComments"
                      name="comments"
                      value={resumeFormData.comments}
                      onChange={handleResumeInputChange}
                      rows={3}
                      placeholder="Any additional comments..."
                      style={{borderRadius: '8px', border: '2px solid #e0e0e0', padding: '10px'}}
                    />
                  </div>
                  <div className="d-flex gap-2">
                    <button
                      type="button"
                      className="btn btn-secondary flex-fill"
                      onClick={() => setShowResumeModal(false)}
                      style={{borderRadius: '25px', padding: '10px'}}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn flex-fill"
                      style={{
                        backgroundColor: '#000',
                        color: '#fff',
                        borderRadius: '25px',
                        border: 'none',
                        padding: '10px',
                        fontWeight: '500'
                      }}
                    >
                      Submit Resume
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mock Interview Modal */}
      {showMockInterviewModal && (
        <div 
          className="modal show d-block" 
          style={{backgroundColor: 'rgba(0,0,0,0.5)'}}
          onClick={() => setShowMockInterviewModal(false)}
        >
          <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content" style={{borderRadius: '15px', border: 'none'}}>
              <div className="modal-header" style={{background: 'linear-gradient(90deg, #FFD600, #FF1744)', borderRadius: '15px 15px 0 0'}}>
                <h5 className="modal-title fw-bold" style={{color: '#fff'}}>
                  Mock Interview Schedule
                </h5>
                <button 
                  type="button" 
                  className="btn-close btn-close-white" 
                  onClick={() => setShowMockInterviewModal(false)}
                ></button>
              </div>
              <div className="modal-body p-4">
                <form onSubmit={handleMockInterviewSubmit}>
                  <div className="mb-3">
                    <label htmlFor="mockName" className="form-label fw-bold">Full Name <span style={{color: '#FF1744'}}>*</span></label>
                    <input
                      type="text"
                      className="form-control"
                      id="mockName"
                      name="name"
                      value={mockInterviewFormData.name}
                      onChange={handleMockInterviewInputChange}
                      required
                      placeholder="Enter your full name"
                      style={{borderRadius: '8px', border: '2px solid #e0e0e0', padding: '10px'}}
                    />
                  </div>
                  
                  <div className="mb-3">
                    <label htmlFor="mockMobile" className="form-label fw-bold">Mobile <span style={{color: '#FF1744'}}>*</span></label>
                    <input
                      type="tel"
                      className="form-control"
                      id="mockMobile"
                      name="mobile"
                      value={mockInterviewFormData.mobile}
                      onChange={handleMockInterviewInputChange}
                      required
                      placeholder="Enter your mobile number"
                      pattern="[0-9]{10}"
                      maxLength={10}
                      style={{borderRadius: '8px', border: '2px solid #e0e0e0', padding: '10px'}}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="mockTechnology" className="form-label fw-bold">Technology <span style={{color: '#FF1744'}}>*</span></label>
                    <select
                      className="form-control"
                      id="mockTechnology"
                      name="technology"
                      value={mockInterviewFormData.technology}
                      onChange={handleMockInterviewInputChange}
                      required
                      style={{borderRadius: '8px', border: '2px solid #e0e0e0', padding: '10px'}}
                    >
                      <option value="">—Please choose an option—</option>
                      <option value="Java Full Stack">Java Full Stack</option>
                      <option value="Python Full Stack">Python Full Stack</option>
                      <option value="MERN Stack">MERN Stack</option>
                      <option value="React JS">React JS</option>
                      <option value="Node JS">Node JS</option>
                      <option value="Angular">Angular</option>
                      <option value="DevOps">DevOps</option>
                      <option value="Data Science">Data Science</option>
                      <option value="Machine Learning">Machine Learning</option>
                      <option value="Cloud Computing">Cloud Computing</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="mockBatch" className="form-label fw-bold">Batch <span style={{color: '#FF1744'}}>*</span></label>
                    <select
                      className="form-control"
                      id="mockBatch"
                      name="batch"
                      value={mockInterviewFormData.batch}
                      onChange={handleMockInterviewInputChange}
                      required
                      style={{borderRadius: '8px', border: '2px solid #e0e0e0', padding: '10px'}}
                    >
                      <option value="">—Please choose an option—</option>
                      <option value="Morning Batch (9:00 AM - 12:00 PM)">Morning Batch (9:00 AM - 12:00 PM)</option>
                      <option value="Afternoon Batch (1:00 PM - 4:00 PM)">Afternoon Batch (1:00 PM - 4:00 PM)</option>
                      <option value="Evening Batch (5:00 PM - 8:00 PM)">Evening Batch (5:00 PM - 8:00 PM)</option>
                      <option value="Weekend Batch">Weekend Batch</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="mockType" className="form-label fw-bold">Mock Type <span style={{color: '#FF1744'}}>*</span></label>
                    <select
                      className="form-control"
                      id="mockType"
                      name="mockType"
                      value={mockInterviewFormData.mockType}
                      onChange={handleMockInterviewInputChange}
                      required
                      style={{borderRadius: '8px', border: '2px solid #e0e0e0', padding: '10px'}}
                    >
                      <option value="">—Please choose an option—</option>
                      <option value="Technical Interview">Technical Interview</option>
                      <option value="HR Interview">HR Interview</option>
                      <option value="Full Interview (Technical + HR)">Full Interview (Technical + HR)</option>
                      <option value="Group Discussion">Group Discussion</option>
                      <option value="Coding Assessment">Coding Assessment</option>
                    </select>
                  </div>

                  <div className="mb-3">
                    <label htmlFor="mockDate" className="form-label fw-bold">Date <span style={{color: '#FF1744'}}>*</span></label>
                    <input
                      type="date"
                      className="form-control"
                      id="mockDate"
                      name="date"
                      value={mockInterviewFormData.date}
                      onChange={handleMockInterviewInputChange}
                      required
                      min={new Date().toISOString().split('T')[0]}
                      style={{borderRadius: '8px', border: '2px solid #e0e0e0', padding: '10px'}}
                    />
                    <small className="text-muted">dd/mm/yyyy</small>
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-bold">Are you prepared well? <span style={{color: '#FF1744'}}>*</span></label>
                    <div className="mt-2">
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="prepared"
                          id="mockPreparedYes"
                          value="Yes"
                          checked={mockInterviewFormData.prepared === 'Yes'}
                          onChange={handleMockInterviewInputChange}
                          required
                        />
                        <label className="form-check-label" htmlFor="mockPreparedYes">
                          Yes
                        </label>
                      </div>
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="radio"
                          name="prepared"
                          id="mockPreparedNo"
                          value="No"
                          checked={mockInterviewFormData.prepared === 'No'}
                          onChange={handleMockInterviewInputChange}
                          required
                        />
                        <label className="form-check-label" htmlFor="mockPreparedNo">
                          No
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="d-flex gap-2">
                    <button
                      type="button"
                      className="btn btn-secondary flex-fill"
                      onClick={() => setShowMockInterviewModal(false)}
                      style={{borderRadius: '25px', padding: '10px'}}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="btn flex-fill"
                      style={{
                        backgroundColor: '#000',
                        color: '#fff',
                        borderRadius: '25px',
                        border: 'none',
                        padding: '10px',
                        fontWeight: '500'
                      }}
                    >
                      Schedule Mock Interview
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
