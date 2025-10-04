import React, { useState } from 'react';

const courses = [
  { 
    name: 'Full Stack Developer', 
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    details: {
      duration: '6 Months',
      mode: 'Online ',
      certification: 'Industry Recognized Certificate',
      fee: '₹15,000',
      description: 'Master both frontend and backend development with comprehensive training in modern web technologies, version control systems, and collaborative tools.',
      curriculum: [
        'HTML5, CSS3, JavaScript ES6+',
        'React.js & Redux',
        'Node.js & Express.js',
        'MongoDB & SQL Databases',
        'RESTful APIs & GraphQL',
        'Git & GitHub',
        'Bitbucket & Version Control',
        'JIRA for Project Management',
        'Slack & Microsoft Teams',
        'VS Code & Development Tools',
        'Deployment & Cloud Services',
        'Testing & Debugging'
      ],
      tools: [
        'Visual Studio Code',
        'Git & GitHub',
        'Bitbucket',
        'JIRA',
        'Slack',
        'Microsoft Teams',
        'Postman',
        'Chrome DevTools'
      ],
      prerequisites: 'Basic computer knowledge',
      careerOutcome: 'Full Stack Developer, Frontend Developer, Backend Developer, Web Developer',
      salary: '₹3-8 LPA for fresher'
    }
  },
  { 
    name: 'iOS Developer', 
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg',
    details: {
      duration: '3 Months',
      mode: 'Online ',
      certification: 'Apple Certified Developer',
      fee: '₹15,000',
      description: 'Learn to build native iOS applications using Swift and Objective-C with professional development tools and collaboration platforms.',
      curriculum: [
        'Swift Programming',
        'Objective-C Fundamentals',
        'Xcode IDE Mastery',
        'UIKit & SwiftUI',
        'Core Data & Realm',
        'Networking & APIs',
        'App Store Guidelines',
        'Git & GitHub for iOS',
        'Bitbucket Integration',
        'JIRA for Bug Tracking',
        'Slack & Teams Communication',
        'TestFlight & App Distribution',
        'Testing & Debugging'
      ],
      tools: [
        'Xcode',
        'Swift Playgrounds',
        'Git & GitHub',
        'Bitbucket',
        'JIRA',
        'Slack',
        'Microsoft Teams',
        'TestFlight',
        'Instruments'
      ],
      prerequisites: 'Basic programming knowledge',
      careerOutcome: 'iOS Developer, Mobile App Developer',
      salary: '₹4-10 LPA for fresher'
    }
  },
  { 
    name: 'React Native Developer', 
    img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    details: {
      duration: '4 Months',
      mode: 'Online ',
      certification: 'React Native Certificate',
      fee: '₹15,000',
      description: 'Build cross-platform mobile applications using React Native framework with modern development tools and team collaboration systems.',
      curriculum: [
        'React Native Fundamentals',
        'JavaScript & ES6+',
        'React Navigation',
        'State Management (Redux)',
        'Native Modules Integration',
        'React Native CLI & Expo',
        'Git & GitHub Workflow',
        'Bitbucket for Teams',
        'JIRA Project Management',
        'Slack & Teams Integration',
        'App Store & Play Store Publishing',
        'Performance Optimization',
        'Testing & Debugging'
      ],
      tools: [
        'React Native CLI',
        'Expo',
        'VS Code',
        'Android Studio',
        'Xcode (for iOS)',
        'Git & GitHub',
        'Bitbucket',
        'JIRA',
        'Slack',
        'Microsoft Teams',
        'Firebase Console'
      ],
      prerequisites: 'React.js knowledge preferred',
      careerOutcome: 'React Native Developer, Mobile App Developer, Cross-Platform Developer',
      salary: '₹3-7 LPA for fresher'
    }
  },
];

const CoursesSection: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [showEnrollmentModal, setShowEnrollmentModal] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<any>(null);
  const [enrollmentData, setEnrollmentData] = useState({
    name: '',
    email: '',
    phone: '',
    course: '',
    fee: ''
  });
  const [emailError, setEmailError] = useState('');
  const [phoneError, setPhoneError] = useState('');

  const handleCourseClick = (course: any) => {
    setSelectedCourse(course);
    setShowModal(true);
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const handleEnrollClick = (course: any) => {
    setSelectedCourse(course);
    setEnrollmentData(prev => ({ 
      ...prev, 
      course: course.name, 
      fee: course.details.fee 
    }));
    setShowModal(false);
    setShowEnrollmentModal(true);
  };

  const handleEnrollmentInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEnrollmentData(prev => ({ ...prev, [name]: value }));
    
    // Real-time validation
    if (name === 'email') {
      if (value === '') {
        setEmailError('');
      } else if (!validateEmail(value)) {
        setEmailError('Please enter a valid email address (e.g., user@example.com)');
      } else {
        setEmailError('');
      }
    }
    
    if (name === 'phone') {
      if (value === '') {
        setPhoneError('');
      } else if (!validatePhone(value)) {
        setPhoneError('Please enter a valid 10-digit phone number');
      } else {
        setPhoneError('');
      }
    }
  };

  const handleProceedToPayment = () => {
    // Reset any previous errors
    setEmailError('');
    setPhoneError('');
    
    // Check if all fields are filled
    if (!enrollmentData.name.trim() || !enrollmentData.email.trim() || !enrollmentData.phone.trim()) {
      alert('Please fill all required fields');
      return;
    }
    
    // Validate email
    if (!validateEmail(enrollmentData.email)) {
      setEmailError('Please enter a valid email address (e.g., user@example.com)');
      alert('Please enter a valid email address');
      return;
    }
    
    // Validate phone
    if (!validatePhone(enrollmentData.phone)) {
      setPhoneError('Please enter a valid 10-digit phone number');
      alert('Please enter a valid 10-digit phone number');
      return;
    }
    
    setShowEnrollmentModal(false);
    setShowPaymentModal(true);
  };

  const handlePaymentSuccess = () => {
    setPaymentSuccess(true);
    setShowPaymentModal(false);
    
    // After 3 seconds, redirect to Google Form
    setTimeout(() => {
      const googleFormURL = 'https://docs.google.com/forms/d/e/1FAIpQLSdqVlounarOSUxlUmLvc_aPsHNbAimdP0Mi3b_PEOf63wDnJw/viewform?usp=header';
      window.open(googleFormURL, '_blank');
      
      // Reset all states
      setPaymentSuccess(false);
      setEnrollmentData({
        name: '',
        email: '',
        phone: '',
        course: '',
        fee: ''
      });
      setEmailError('');
      setPhoneError('');
    }, 3000);
  };

  return (
    <>
      <section className="py-5" style={{background:'#040404ff'}}>
        <div className="container">
          <h2 className="text-center fw-bold mb-4" style={{
            background: 'linear-gradient(90deg, #FFD600 60%, #FF1744 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize:'2.5rem',
           
          }}>Choose Your Course</h2>
          <div className="row g-4 justify-content-center">
            {courses.map((course, idx) => (
              <div className="col-12 col-md-4" key={idx}>
                <div className="card border-0 shadow text-center p-4" style={{minHeight:320, background:'#fff', borderRadius:'1.5rem', boxShadow:'0 4px 24px rgba(0,0,0,0.12)', border:'3px solid #FFD600'}}>
                  <img src={course.img} alt={course.name} style={{height:60, objectFit:'contain', marginBottom:16}} />
                  <h3 className="fw-bold mb-3" style={{color:'#222'}}>{course.name}</h3>
                  <ul className="list-unstyled mb-4" style={{color:'#555', fontSize:'1.05rem'}}>
                    {course.name === 'Full Stack Developer' && (
                      <>
                        <li>Frontend & Backend</li>
                        <li>Database Integration</li>
                        <li>Deployment & DevOps</li>
                      </>
                    )}
                    {course.name === 'iOS Developer' && (
                      <>
                        <li>Swift & Objective-C</li>
                        <li>App Store Deployment</li>
                        <li>UI/UX for iOS</li>
                      </>
                    )}
                    {course.name === 'React Native Developer' && (
                      <>
                        <li>Cross-platform Apps</li>
                        <li>Native Modules</li>
                        <li>App Publishing</li>
                      </>
                    )}
                  </ul>
                  <button 
                    onClick={() => handleCourseClick(course)}
                    className="btn btn-lg w-75 mx-auto" 
                    style={{
                      background: '#111',
                      color:'#fff',
                      fontWeight:'bold',
                      fontSize:'1.1rem',
                      border:'none',
                      borderRadius:'2em',
                      boxShadow:'0 2px 8px rgba(44,62,80,0.08)',
                      marginTop:'1.5rem',
                      cursor: 'pointer'
                    }}
                  >
                    Review this Course
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Details Modal */}
      {showModal && selectedCourse && (
        <div 
          className="modal show d-block" 
          style={{backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050}}
          onClick={() => setShowModal(false)}
        >
          <div className="modal-dialog modal-lg modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content" style={{borderRadius: '15px', border: 'none', maxHeight: '90vh', overflowY: 'auto'}}>
              <div className="modal-header" style={{background: 'linear-gradient(90deg, #FFD600, #FF1744)', borderRadius: '15px 15px 0 0'}}>
                <h5 className="modal-title fw-bold" style={{color: '#fff'}}>
                  <i className="bi bi-mortarboard me-2"></i>
                  {selectedCourse.name} - Course Details
                </h5>
                <button 
                  type="button" 
                  className="btn-close btn-close-white" 
                  onClick={() => setShowModal(false)}
                ></button>
              </div>
              <div className="modal-body p-4">
                <div className="row">
                  <div className="col-md-8">
                    <div className="mb-4">
                      <h6 className="fw-bold text-primary mb-2">Course Description</h6>
                      <p className="text-muted">{selectedCourse.details.description}</p>
                    </div>

                    <div className="mb-4">
                      <h6 className="fw-bold text-primary mb-3">Course Curriculum</h6>
                      <div className="row">
                        {selectedCourse.details.curriculum.map((item: string, index: number) => (
                          <div key={index} className="col-md-6 mb-2">
                            <div className="d-flex align-items-center">
                              <i className="bi bi-check-circle-fill text-success me-2"></i>
                              <span style={{fontSize: '0.95rem'}}>{item}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h6 className="fw-bold text-primary mb-3">Development Tools & Platforms</h6>
                      <div className="row">
                        {selectedCourse.details.tools.map((tool: string, index: number) => (
                          <div key={index} className="col-md-6 mb-2">
                            <div className="d-flex align-items-center">
                              <i className="bi bi-tools text-warning me-2"></i>
                              <span style={{fontSize: '0.95rem'}}>{tool}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="col-md-4">
                    <div className="card border-0" style={{backgroundColor: '#f8f9fa', borderRadius: '10px'}}>
                      <div className="card-body">
                        <h6 className="fw-bold mb-3 text-center" style={{color: '#FF1744'}}>Course Information</h6>
                        
                        <div className="mb-3">
                          <div className="d-flex align-items-center mb-1">
                            <i className="bi bi-tag-fill text-success me-2"></i>
                            <strong>Course Fee:</strong>
                          </div>
                          <span className="text-success fw-bold fs-5">{selectedCourse.details.fee}</span>
                        </div>

                        <div className="mb-3">
                          <div className="d-flex align-items-center mb-1">
                            <i className="bi bi-clock text-primary me-2"></i>
                            <strong>Duration:</strong>
                          </div>
                          <span className="text-muted">{selectedCourse.details.duration}</span>
                        </div>

                        <div className="mb-3">
                          <div className="d-flex align-items-center mb-1">
                            <i className="bi bi-laptop text-primary me-2"></i>
                            <strong>Mode:</strong>
                          </div>
                          <span className="text-muted">{selectedCourse.details.mode}</span>
                        </div>

                        <div className="mb-3">
                          <div className="d-flex align-items-center mb-1">
                            <i className="bi bi-award text-primary me-2"></i>
                            <strong>Certification:</strong>
                          </div>
                          <span className="text-muted">{selectedCourse.details.certification}</span>
                        </div>

                        <div className="mb-3">
                          <div className="d-flex align-items-center mb-1">
                            <i className="bi bi-book text-primary me-2"></i>
                            <strong>Prerequisites:</strong>
                          </div>
                          <span className="text-muted">{selectedCourse.details.prerequisites}</span>
                        </div>

                        <div className="mb-3">
                          <div className="d-flex align-items-center mb-1">
                            <i className="bi bi-briefcase text-primary me-2"></i>
                            <strong>Career Outcome:</strong>
                          </div>
                          <span className="text-muted" style={{fontSize: '0.9rem'}}>{selectedCourse.details.careerOutcome}</span>
                        </div>

                        <div className="mb-3">
                          <div className="d-flex align-items-center mb-1">
                            <i className="bi bi-currency-rupee text-success me-2"></i>
                            <strong>Expected Salary:</strong>
                          </div>
                          <span className="text-success fw-bold">{selectedCourse.details.salary}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer" style={{borderTop: '1px solid #dee2e6', padding: '1rem'}}>
                <div className="d-flex gap-2 w-100">
                  <button
                    type="button"
                    className="btn btn-secondary flex-fill"
                    onClick={() => setShowModal(false)}
                    style={{borderRadius: '25px', padding: '10px'}}
                  >
                    Close
                  </button>
                  <button
                    type="button"
                    className="btn flex-fill"
                    style={{
                      backgroundColor: '#FF1744',
                      color: '#fff',
                      borderRadius: '25px',
                      border: 'none',
                      padding: '10px',
                      fontWeight: '500'
                    }}
                    onClick={() => handleEnrollClick(selectedCourse)}
                  >
                    <i className="bi bi-person-plus me-2"></i>
                    Enroll Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enrollment Modal */}
      {showEnrollmentModal && selectedCourse && (
        <div 
          className="modal show d-block" 
          style={{backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050}}
          onClick={() => setShowEnrollmentModal(false)}
        >
          <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content" style={{borderRadius: '15px', border: 'none'}}>
              <div className="modal-header" style={{background: 'linear-gradient(90deg, #FFD600, #FF1744)', borderRadius: '15px 15px 0 0'}}>
                <h5 className="modal-title fw-bold" style={{color: '#fff'}}>
                  <i className="bi bi-person-plus me-2"></i>
                  Enroll for {selectedCourse.name}
                </h5>
                <button 
                  type="button" 
                  className="btn-close btn-close-white" 
                  onClick={() => setShowEnrollmentModal(false)}
                ></button>
              </div>
              <div className="modal-body p-4">
                <div className="alert alert-info mb-4" style={{borderRadius: '10px'}}>
                  <div className="d-flex align-items-center">
                    <i className="bi bi-info-circle me-2"></i>
                    <div>
                      <strong>Course:</strong> {selectedCourse.name} <br />
                      <strong>Fee:</strong> <span className="text-success fw-bold">{selectedCourse.details.fee}</span>
                    </div>
                  </div>
                </div>

                <form>
                  <div className="mb-3">
                    <label htmlFor="enrollName" className="form-label fw-bold">Full Name <span style={{color: '#FF1744'}}>*</span></label>
                    <input
                      type="text"
                      className="form-control"
                      id="enrollName"
                      name="name"
                      value={enrollmentData.name}
                      onChange={handleEnrollmentInputChange}
                      required
                      placeholder="Enter your full name"
                      style={{borderRadius: '8px', border: '2px solid #e0e0e0', padding: '10px'}}
                    />
                  </div>

                  <div className="mb-3">
                    <label htmlFor="enrollEmail" className="form-label fw-bold">Email Address <span style={{color: '#FF1744'}}>*</span></label>
                    <input
                      type="email"
                      className={`form-control ${emailError ? 'is-invalid' : enrollmentData.email && !emailError ? 'is-valid' : ''}`}
                      id="enrollEmail"
                      name="email"
                      value={enrollmentData.email}
                      onChange={handleEnrollmentInputChange}
                      required
                      placeholder="Enter your email address (e.g., user@example.com)"
                      style={{
                        borderRadius: '8px', 
                        border: emailError ? '2px solid #dc3545' : enrollmentData.email && !emailError ? '2px solid #28a745' : '2px solid #e0e0e0', 
                        padding: '10px'
                      }}
                    />
                    {emailError && (
                      <div className="invalid-feedback d-block" style={{fontSize: '0.875rem', color: '#dc3545'}}>
                        <i className="bi bi-exclamation-circle me-1"></i>
                        {emailError}
                      </div>
                    )}
                    {enrollmentData.email && !emailError && (
                      <div className="valid-feedback d-block" style={{fontSize: '0.875rem', color: '#28a745'}}>
                        <i className="bi bi-check-circle me-1"></i>
                        Valid email address
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    <label htmlFor="enrollPhone" className="form-label fw-bold">Phone Number <span style={{color: '#FF1744'}}>*</span></label>
                    <input
                      type="tel"
                      className={`form-control ${phoneError ? 'is-invalid' : enrollmentData.phone && !phoneError ? 'is-valid' : ''}`}
                      id="enrollPhone"
                      name="phone"
                      value={enrollmentData.phone}
                      onChange={handleEnrollmentInputChange}
                      required
                      placeholder="Enter your 10-digit phone number"
                      pattern="[0-9]{10}"
                      maxLength={10}
                      style={{
                        borderRadius: '8px', 
                        border: phoneError ? '2px solid #dc3545' : enrollmentData.phone && !phoneError ? '2px solid #28a745' : '2px solid #e0e0e0', 
                        padding: '10px'
                      }}
                    />
                    {phoneError && (
                      <div className="invalid-feedback d-block" style={{fontSize: '0.875rem', color: '#dc3545'}}>
                        <i className="bi bi-exclamation-circle me-1"></i>
                        {phoneError}
                      </div>
                    )}
                    {enrollmentData.phone && !phoneError && (
                      <div className="valid-feedback d-block" style={{fontSize: '0.875rem', color: '#28a745'}}>
                        <i className="bi bi-check-circle me-1"></i>
                        Valid phone number
                      </div>
                    )}
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <div className="d-flex gap-2 w-100">
                  <button
                    type="button"
                    className="btn btn-secondary flex-fill"
                    onClick={() => setShowEnrollmentModal(false)}
                    style={{borderRadius: '25px', padding: '10px'}}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="btn flex-fill"
                    onClick={handleProceedToPayment}
                    style={{
                      backgroundColor: '#28a745',
                      color: '#fff',
                      borderRadius: '25px',
                      border: 'none',
                      padding: '10px',
                      fontWeight: '500'
                    }}
                  >
                    <i className="bi bi-credit-card me-2"></i>
                    Proceed to Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Payment Modal */}
      {showPaymentModal && selectedCourse && (
        <div 
          className="modal show d-block" 
          style={{backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050}}
          onClick={() => setShowPaymentModal(false)}
        >
          <div className="modal-dialog modal-dialog-centered" onClick={(e) => e.stopPropagation()}>
            <div className="modal-content" style={{borderRadius: '15px', border: 'none'}}>
              <div className="modal-header" style={{background: 'linear-gradient(90deg, #28a745, #20c997)', borderRadius: '15px 15px 0 0'}}>
                <h5 className="modal-title fw-bold" style={{color: '#fff'}}>
                  <i className="bi bi-phone me-2"></i>
                  UPI Payment
                </h5>
                <button 
                  type="button" 
                  className="btn-close btn-close-white" 
                  onClick={() => setShowPaymentModal(false)}
                ></button>
              </div>
              <div className="modal-body p-4">
                <div className="row">
                  <div className="col-md-6">
                    <h6 className="fw-bold mb-3">Course Details</h6>
                    <div className="card border-0" style={{backgroundColor: '#f8f9fa', borderRadius: '10px'}}>
                      <div className="card-body">
                        <p><strong>Student:</strong> {enrollmentData.name}</p>
                        <p><strong>Course:</strong> {selectedCourse.name}</p>
                        <p><strong>Duration:</strong> {selectedCourse.details.duration}</p>
                        <p className="mb-0"><strong>Amount:</strong> <span className="text-success fw-bold fs-5">{selectedCourse.details.fee}</span></p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="col-md-6">
                    <h6 className="fw-bold mb-3">Payment Details</h6>
                    <div className="card border-0" style={{backgroundColor: '#e8f5e8', borderRadius: '10px', border: '2px solid #28a745'}}>
                      <div className="card-body text-center">
                        <h6 className="fw-bold text-success mb-2">
                          <i className="bi bi-phone me-2"></i>
                          UPI Payment Only
                        </h6>
                        <div className="mb-3">
                          <small className="text-muted d-block">Pay to UPI ID:</small>
                          <div 
                            className="p-2 bg-white rounded border"
                            style={{fontFamily: 'monospace', fontSize: '1rem', fontWeight: 'bold', color: '#28a745'}}
                          >
                            8328418521-2@ybl
                          </div>
                        </div>
                        <button 
                          className="btn btn-success w-100"
                          onClick={handlePaymentSuccess}
                          style={{borderRadius: '10px', padding: '12px', fontWeight: 'bold'}}
                        >
                          <i className="bi bi-check-circle me-2"></i>
                          I have completed the payment
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="alert alert-warning mt-3" style={{borderRadius: '12px', padding: '1rem', fontSize: '1.1rem', fontWeight: '500', border: '2px solid #ffc107'}}>
                  <i className="bi bi-exclamation-triangle-fill text-warning me-2" style={{fontSize: '1.3rem'}}></i>
                  <strong style={{fontSize: '1.2rem'}}>IMPORTANT NOTICE:</strong> 
                  <div style={{fontSize: '1rem', marginTop: '0.5rem', lineHeight: '1.5'}}>
                    ✅ Pay ONLY to UPI ID: <strong>8328418521-2@ybl</strong><br/>
                    ✅ After payment, click confirmation button above<br/>
                    ✅ Our team will verify payment within 24 hours<br/>
                    ✅ Keep payment screenshot ready for verification
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Payment Success Modal */}
      {paymentSuccess && (
        <div 
          className="modal show d-block" 
          style={{backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1050}}
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content" style={{borderRadius: '15px', border: 'none'}}>
              <div className="modal-body p-5 text-center">
                <div className="mb-4">
                  <i className="bi bi-check-circle-fill text-success" style={{fontSize: '4rem'}}></i>
                </div>
                <h4 className="fw-bold text-success mb-3">Payment Confirmed!</h4>
                <p className="text-muted mb-4">
                  Thank you for enrolling in <strong>{selectedCourse?.name}</strong>. 
                  <br />Our team will contact you soon. You will be redirected to complete a Google Form for final details.
                </p>
                <div className="alert alert-info" style={{borderRadius: '10px'}}>
                  <i className="bi bi-info-circle me-2"></i>
                  <strong>Next Step:</strong> Please fill the Google Form that will open in a new tab.
                </div>
                <div className="spinner-border text-primary" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-2 text-muted">Redirecting to Google Form...</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CoursesSection;
