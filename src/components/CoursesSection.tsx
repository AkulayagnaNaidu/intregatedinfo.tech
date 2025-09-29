import React from 'react';

const courses = [
  { name: 'Full Stack Developer', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'iOS Developer', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apple/apple-original.svg' },
  { name: 'React Native Developer', img: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
];

const CoursesSection: React.FC = () => (
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
              <a href="#" className="btn btn-lg w-75 mx-auto" style={{
                background: '#111',
                color:'#fff',
                fontWeight:'bold',
                fontSize:'1.1rem',
                border:'none',
                borderRadius:'2em',
                boxShadow:'0 2px 8px rgba(44,62,80,0.08)',
                marginTop:'1.5rem'
              }}>Review this Course</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default CoursesSection;
