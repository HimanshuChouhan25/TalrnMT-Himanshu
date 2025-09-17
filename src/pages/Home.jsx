import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';

const Home = () => {
  return (
    <div>
      <Header />
      
      {/* Hero Section */}
      <section style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: 'white',
        padding: '120px 0 80px',
        textAlign: 'center'
      }}>
        <div className="container">
          <h1 style={{
            fontSize: '3.5rem',
            marginBottom: '20px',
            fontWeight: '700'
          }}>
            Find Your Next Opportunity
          </h1>
          <p style={{
            fontSize: '1.3rem',
            marginBottom: '40px',
            opacity: '0.9'
          }}>
            Connect with top companies and discover your dream job
          </p>
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center' }}>
            <Link to="/join" className="btn btn-primary" style={{
              padding: '15px 30px',
              fontSize: '18px'
            }}>
              Get Started
            </Link>
            <button className="btn btn-outline" style={{
              padding: '15px 30px',
              fontSize: '18px',
              background: 'rgba(255,255,255,0.1)',
              border: '2px solid rgba(255,255,255,0.3)',
              color: 'white'
            }}>
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section style={{ padding: '80px 0', background: '#f8f9fa' }}>
        <div className="container">
          <h2 style={{
            textAlign: 'center',
            fontSize: '2.5rem',
            marginBottom: '60px',
            color: '#333'
          }}>
            Why Choose Talrn?
          </h2>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '40px'
          }}>
            <div style={{
              background: 'white',
              padding: '40px',
              borderRadius: '10px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#007bff' }}>
                Top Companies
              </h3>
              <p>Connect with leading companies across various industries</p>
            </div>
            <div style={{
              background: 'white',
              padding: '40px',
              borderRadius: '10px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#007bff' }}>
                Smart Matching
              </h3>
              <p>AI-powered job matching based on your skills and preferences</p>
            </div>
            <div style={{
              background: 'white',
              padding: '40px',
              borderRadius: '10px',
              boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
              textAlign: 'center'
            }}>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '15px', color: '#007bff' }}>
                Career Growth
              </h3>
              <p>Resources and tools to accelerate your career development</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{
        background: '#007bff',
        color: 'white',
        padding: '60px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <h2 style={{ fontSize: '2.5rem', marginBottom: '20px' }}>
            Ready to Start Your Journey?
          </h2>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px' }}>
            Join thousands of professionals who found their dream jobs
          </p>
          <Link to="/join" className="btn" style={{
            background: 'white',
            color: '#007bff',
            padding: '15px 30px',
            fontSize: '18px'
          }}>
            Join Talrn Today
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer style={{
        background: '#333',
        color: 'white',
        padding: '40px 0',
        textAlign: 'center'
      }}>
        <div className="container">
          <p>&copy; 2024 Talrn. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;