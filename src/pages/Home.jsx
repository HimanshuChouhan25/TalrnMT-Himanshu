import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentCard, setCurrentCard] = useState(0);
  
  const developers = [
    { name: 'Sarah Chen', role: 'Senior iOS Developer', experience: '5+ years', skills: 'Swift, SwiftUI, Core Data', image: '👩‍💻', rating: 4.9 },
    { name: 'Alex Rodriguez', role: 'iOS Developer', experience: '3+ years', skills: 'Swift, UIKit, Firebase', image: '👨‍💻', rating: 4.8 },
    { name: 'Emily Johnson', role: 'Lead iOS Developer', experience: '7+ years', skills: 'Swift, Objective-C, ARKit', image: '👩‍💼', rating: 5.0 },
    { name: 'Michael Kim', role: 'iOS Developer', experience: '4+ years', skills: 'Swift, SwiftUI, Combine', image: '👨‍💼', rating: 4.7 }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((prev) => (prev + 1) % developers.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {/* Header */}
      <header style={{
        background: '#fff',
        padding: '15px 0',
        borderBottom: '1px solid #e5e5e5'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            fontSize: '28px',
            fontWeight: 'bold',
            color: '#2563eb'
          }}>
            Talrn
          </div>
          <nav style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
            <a href="#" style={{ textDecoration: 'none', color: '#374151', fontWeight: '500' }}>Find Talent</a>
            <a href="#" style={{ textDecoration: 'none', color: '#374151', fontWeight: '500' }}>How it Works</a>
            <a href="#" style={{ textDecoration: 'none', color: '#374151', fontWeight: '500' }}>Pricing</a>
            <Link to="/join" style={{
              background: '#2563eb',
              color: 'white',
              padding: '10px 20px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontWeight: '500'
            }}>
              Hire Developers
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
        color: 'white',
        padding: '80px 0',
        minHeight: '600px'
      }}>
        <div className="container" style={{ display: 'flex', alignItems: 'center', gap: '60px' }}>
          {/* Left Content */}
          <div style={{ flex: '1', maxWidth: '500px' }}>
            <h1 style={{
              fontSize: '3.5rem',
              fontWeight: '800',
              marginBottom: '24px',
              lineHeight: '1.1'
            }}>
              Find & Hire iOS Developers with Ease
            </h1>
            <p style={{
              fontSize: '1.2rem',
              marginBottom: '16px',
              opacity: '0.9',
              lineHeight: '1.6'
            }}>
              Bring the right talent to your team effortlessly with Talrn
            </p>
            <p style={{
              fontSize: '1.1rem',
              marginBottom: '40px',
              opacity: '0.8',
              lineHeight: '1.6'
            }}>
              Hire pre-vetted remote iOS developers with strong technical & communication skills within 48 hours.
            </p>
            
            {/* Search Bar */}
            <div style={{
              background: 'white',
              borderRadius: '12px',
              padding: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '24px'
            }}>
              <input
                type="text"
                placeholder="Search for iOS developers..."
                style={{
                  flex: '1',
                  border: 'none',
                  padding: '12px 16px',
                  fontSize: '16px',
                  outline: 'none',
                  color: '#374151'
                }}
              />
              <button style={{
                background: '#2563eb',
                color: 'white',
                border: 'none',
                padding: '12px 24px',
                borderRadius: '8px',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                Search
              </button>
            </div>
            
            <Link to="/join" style={{
              background: 'rgba(255,255,255,0.2)',
              color: 'white',
              padding: '16px 32px',
              borderRadius: '8px',
              textDecoration: 'none',
              fontWeight: '600',
              fontSize: '18px',
              border: '2px solid rgba(255,255,255,0.3)'
            }}>
              Start Hiring Now
            </Link>
          </div>
          
          {/* Right Content - Developer Cards */}
          <div style={{ 
            flex: '1', 
            position: 'relative', 
            height: '400px',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{
              position: 'relative',
              width: '280px',
              height: '350px'
            }}>
              {developers.map((dev, index) => {
                const position = (index - currentCard + developers.length) % developers.length;
                let transformStyle = '';
                let opacity = 0;
                let zIndex = 0;
                
                if (position === 0) {
                  // Front card - center position
                  transformStyle = 'translateX(0) translateY(0) scale(1)';
                  opacity = 1;
                  zIndex = 4;
                } else if (position === 1) {
                  // Second card - slightly behind and smaller
                  transformStyle = 'translateX(0) translateY(60px) scale(0.95)';
                  opacity = 0.8;
                  zIndex = 3;
                } else if (position === 2) {
                  // Third card - further behind and smaller
                  transformStyle = 'translateX(0) translateY(120px) scale(0.9)';
                  opacity = 0.6;
                  zIndex = 2;
                } else if (position === 3) {
                  // Entering card - comes from right side
                  transformStyle = 'translateX(300px) translateY(180px) scale(0.85)';
                  opacity = 0;
                  zIndex = 1;
                } else {
                  // Exiting card - goes to top
                  transformStyle = 'translateX(0) translateY(-400px) scale(1.1)';
                  opacity = 0;
                  zIndex = 0;
                }
                
                return (
                  <div
                    key={`${dev.name}-${index}`}
                    style={{
                      position: 'absolute',
                      top: '0',
                      left: '0',
                      transform: transformStyle,
                      background: 'white',
                      borderRadius: '16px',
                      padding: '20px',
                      width: '280px',
                      boxShadow: position === 0 ? '0 20px 40px rgba(0,0,0,0.15)' : '0 10px 20px rgba(0,0,0,0.1)',
                      transition: 'all 0.8s cubic-bezier(0.4, 0, 0.2, 1)',
                      opacity: opacity,
                      zIndex: zIndex
                    }}
                  >
                    <div style={{ textAlign: 'center', marginBottom: '12px' }}>
                      <div style={{ fontSize: '50px', marginBottom: '8px' }}>{dev.image}</div>
                      <h3 style={{ color: '#111827', fontSize: '18px', fontWeight: '700', marginBottom: '4px' }}>
                        {dev.name}
                      </h3>
                      <p style={{ color: '#6b7280', fontSize: '13px', marginBottom: '6px' }}>{dev.role}</p>
                      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px' }}>
                        <span style={{ color: '#fbbf24' }}>⭐</span>
                        <span style={{ color: '#374151', fontSize: '13px', fontWeight: '600' }}>{dev.rating}</span>
                      </div>
                    </div>
                    <div style={{ marginBottom: '12px' }}>
                      <p style={{ color: '#6b7280', fontSize: '11px', marginBottom: '2px' }}>Experience</p>
                      <p style={{ color: '#111827', fontSize: '13px', fontWeight: '600' }}>{dev.experience}</p>
                    </div>
                    <div style={{ marginBottom: '16px' }}>
                      <p style={{ color: '#6b7280', fontSize: '11px', marginBottom: '2px' }}>Skills</p>
                      <p style={{ color: '#111827', fontSize: '12px' }}>{dev.skills}</p>
                    </div>
                    <button style={{
                      width: '100%',
                      background: '#2563eb',
                      color: 'white',
                      border: 'none',
                      padding: '8px',
                      borderRadius: '6px',
                      fontWeight: '600',
                      fontSize: '13px',
                      cursor: 'pointer'
                    }}>
                      View Profile
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section style={{ padding: '80px 0', background: '#f9fafb' }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            textAlign: 'center'
          }}>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: '800', color: '#2563eb', marginBottom: '8px' }}>500+</div>
              <div style={{ color: '#6b7280', fontSize: '18px' }}>iOS Developers</div>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: '800', color: '#2563eb', marginBottom: '8px' }}>48hrs</div>
              <div style={{ color: '#6b7280', fontSize: '18px' }}>Average Hire Time</div>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: '800', color: '#2563eb', marginBottom: '8px' }}>200+</div>
              <div style={{ color: '#6b7280', fontSize: '18px' }}>Companies Served</div>
            </div>
            <div>
              <div style={{ fontSize: '3rem', fontWeight: '800', color: '#2563eb', marginBottom: '8px' }}>98%</div>
              <div style={{ color: '#6b7280', fontSize: '18px' }}>Client Satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '100px 0', background: 'white' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{
              fontSize: '3rem',
              fontWeight: '800',
              color: '#111827',
              marginBottom: '16px'
            }}>
              Why Choose Talrn?
            </h2>
            <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '600px', margin: '0 auto' }}>
              We connect talented professionals with amazing opportunities
            </p>
          </div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '40px'
          }}>
            <div style={{
              padding: '40px',
              borderRadius: '12px',
              border: '1px solid #e5e7eb',
              textAlign: 'center'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: '#dbeafe',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                fontSize: '24px'
              }}>🏢</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#111827', marginBottom: '16px' }}>
                Top Companies
              </h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                Connect with industry-leading companies and startups looking for talented professionals like you
              </p>
            </div>
            <div style={{
              padding: '40px',
              borderRadius: '12px',
              border: '1px solid #e5e7eb',
              textAlign: 'center'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: '#dbeafe',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                fontSize: '24px'
              }}>🎯</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#111827', marginBottom: '16px' }}>
                Smart Matching
              </h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                Our AI-powered platform matches you with jobs that fit your skills, experience, and career goals
              </p>
            </div>
            <div style={{
              padding: '40px',
              borderRadius: '12px',
              border: '1px solid #e5e7eb',
              textAlign: 'center'
            }}>
              <div style={{
                width: '60px',
                height: '60px',
                background: '#dbeafe',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 24px',
                fontSize: '24px'
              }}>📈</div>
              <h3 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#111827', marginBottom: '16px' }}>
                Career Growth
              </h3>
              <p style={{ color: '#6b7280', lineHeight: '1.6' }}>
                Access resources, mentorship, and tools to accelerate your career development and success
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: '#1e40af',
        color: 'white',
        padding: '80px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '16px' }}>
            Ready to Find Your Next Role?
          </h2>
          <p style={{ fontSize: '1.25rem', marginBottom: '40px', opacity: '0.9' }}>
            Join thousands of professionals who've found their dream jobs through Talrn
          </p>
          <Link to="/join" style={{
            background: 'white',
            color: '#1e40af',
            padding: '16px 32px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: '600',
            fontSize: '18px'
          }}>
            Start Your Journey
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#111827',
        color: 'white',
        padding: '60px 0 30px'
      }}>
        <div className="container">
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '40px',
            marginBottom: '40px'
          }}>
            <div>
              <div style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Talrn</div>
              <p style={{ color: '#9ca3af', lineHeight: '1.6' }}>
                Connecting talented professionals with amazing opportunities worldwide.
              </p>
            </div>
            <div>
              <h4 style={{ fontWeight: '600', marginBottom: '16px' }}>For Job Seekers</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Browse Jobs</a>
                <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Career Resources</a>
                <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Resume Builder</a>
              </div>
            </div>
            <div>
              <h4 style={{ fontWeight: '600', marginBottom: '16px' }}>For Employers</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Post Jobs</a>
                <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Find Talent</a>
                <a href="#" style={{ color: '#9ca3af', textDecoration: 'none' }}>Pricing</a>
              </div>
            </div>
          </div>
          <div style={{
            borderTop: '1px solid #374151',
            paddingTop: '30px',
            textAlign: 'center',
            color: '#9ca3af'
          }}>
            <p>&copy; 2024 Talrn. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;