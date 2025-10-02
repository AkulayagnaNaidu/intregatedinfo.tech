import React, { useState } from 'react';

const TestimonialsSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Create form data for submission
    const formDataToSubmit = new FormData();
    formDataToSubmit.append('access_key', '847e8f1a-05c4-4dee-a211-417985e4b222');
    formDataToSubmit.append('name', formData.name);
    formDataToSubmit.append('email', formData.email);
    formDataToSubmit.append('mobile', formData.mobile);
    formDataToSubmit.append('message', formData.message);

    try {
      // Submit the form
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSubmit
      });

      if (response.ok) {
        // Clear the form after successful submission
        setFormData({
          name: '',
          email: '',
          mobile: '',
          message: ''
        });
        alert('Message sent successfully!');
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <section className="py-5" style={{background:'#111', color:'#fff'}}>
      <div className="container">
        <h2 className="text-center fw-bold mb-4" style={{background: 'linear-gradient(90deg, #FFD600, #FFEA00, #FF1744)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize:'2.5rem'}}>Contact Us</h2>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <form onSubmit={handleSubmit} className="p-4 shadow" style={{background:'#fff', color:'#222', borderRadius:'1.5rem'}}>
              <div className="mb-4">
                <label htmlFor="name" className="form-label" style={{fontWeight:'500', color:'#222'}}>Name</label>
                <input 
                  type="text" 
                  className="form-control" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                  placeholder="Enter your name" 
                  style={{borderRadius:'0.7rem', border:'1px solid #e0e0e0', fontSize:'1.1rem', padding:'0.8rem'}} 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="form-label" style={{fontWeight:'500', color:'#222'}}>Email</label>
                <input 
                  type="email" 
                  className="form-control" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                  placeholder="Enter your email" 
                  style={{borderRadius:'0.7rem', border:'1px solid #e0e0e0', fontSize:'1.1rem', padding:'0.8rem'}} 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="mobile" className="form-label" style={{fontWeight:'500', color:'#222'}}>Mobile Number</label>
                <input 
                  type="tel" 
                  className="form-control" 
                  id="mobile" 
                  name="mobile" 
                  value={formData.mobile}
                  onChange={handleInputChange}
                  pattern="[0-9]{10}" 
                  maxLength={10} 
                  required 
                  placeholder="Enter your mobile number" 
                  style={{borderRadius:'0.7rem', border:'1px solid #e0e0e0', fontSize:'1.1rem', padding:'0.8rem'}} 
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="form-label" style={{fontWeight:'500', color:'#222'}}>Message</label>
                <textarea 
                  className="form-control" 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5} 
                  required 
                  placeholder="Enter your message" 
                  style={{borderRadius:'0.7rem', border:'1px solid #e0e0e0', fontSize:'1.1rem', padding:'0.8rem'}}
                ></textarea>
              </div>
              <button type="submit" className="btn w-100" style={{backgroundColor: '#0b30eaff', color: '#fff', borderRadius: '80px', border: 'none', padding: '12px 24px', fontSize: '1.1rem', fontWeight: '500'}}>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
