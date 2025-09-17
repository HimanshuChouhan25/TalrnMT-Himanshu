import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header style={{
      background: '#fff',
      boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
      position: 'fixed',
      top: 0,
      width: '100%',
      zIndex: 1000
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 20px'
      }}>
        <Link to="/" style={{
          fontSize: '24px',
          fontWeight: 'bold',
          color: '#007bff',
          textDecoration: 'none'
        }}>
          Talrn
        </Link>
        <nav style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>
          <a href="#" style={{ textDecoration: 'none', color: '#333' }}>Jobs</a>
          <a href="#" style={{ textDecoration: 'none', color: '#333' }}>Companies</a>
          <a href="#" style={{ textDecoration: 'none', color: '#333' }}>Resources</a>
          <Link to="/join" className="btn btn-primary">Join Now</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;