import React from 'react';

const TestimonialsSection: React.FC = () => (
  <section className="py-5" style={{background:'#111', color:'#fff'}}>
    <div className="container">
      <h2 className="text-center fw-bold mb-4" style={{background: 'linear-gradient(90deg, #FFD600, #FFEA00, #FF1744)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', fontSize:'2.5rem'}}>Contact Us</h2>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <form action="https://api.web3forms.com/submit" method="POST" className="p-4 shadow" style={{background:'#fff', color:'#222', borderRadius:'1.5rem'}}>
            <input type="hidden" name="access_key" value="063cee1e-4785-4240-9a91-a694d59d4f45" />
            <div className="mb-4">
              <label htmlFor="name" className="form-label" style={{fontWeight:'500', color:'#222'}}>Name</label>
              <input type="text" className="form-control" id="name" name="name" required placeholder="Enter your name" style={{borderRadius:'0.7rem', border:'1px solid #e0e0e0', fontSize:'1.1rem', padding:'0.8rem'}} />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="form-label" style={{fontWeight:'500', color:'#222'}}>Email</label>
              <input type="email" className="form-control" id="email" name="email" required placeholder="Enter your email" style={{borderRadius:'0.7rem', border:'1px solid #e0e0e0', fontSize:'1.1rem', padding:'0.8rem'}} />
            </div>
            <div className="mb-4">
              <label htmlFor="mobile" className="form-label" style={{fontWeight:'500', color:'#222'}}>Mobile Number</label>
              <input type="tel" className="form-control" id="mobile" name="mobile" pattern="[0-9]{10}" maxLength={10} required placeholder="Enter your mobile number" style={{borderRadius:'0.7rem', border:'1px solid #e0e0e0', fontSize:'1.1rem', padding:'0.8rem'}} />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="form-label" style={{fontWeight:'500', color:'#222'}}>Message</label>
              <textarea className="form-control" id="message" name="message" rows={5} required placeholder="Enter your message" style={{borderRadius:'0.7rem', border:'1px solid #e0e0e0', fontSize:'1.1rem', padding:'0.8rem'}}></textarea>
            </div>
            <button type="submit" className="btn btn-primary w-100">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
