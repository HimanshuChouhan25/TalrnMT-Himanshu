 import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

const Join = () => {
  const [step, setStep] = useState(1);
  
  useEffect(() => {
    emailjs.init('bWluoa39pds01O4XM'); // Initialize with your public key
  }, []);
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    password: '',
    otp: ''
  });
  const [generatedOTP, setGeneratedOTP] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const generateOTP = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const sendOTP = async () => {
    if (!validateEmail(formData.email)) {
      setErrors({ email: 'Please enter a valid email address' });
      return;
    }

    setLoading(true);
    const otp = generateOTP();
    setGeneratedOTP(otp);

    try {
      await emailjs.send(
        'service_424j3ze', //  EmailJS service ID
        'template_lrow0tf', // EmailJS template ID
        {
          to_email: formData.email,
          otp_code: otp,
          user_name: formData.firstName || 'User'
        },
        // Public key 
      );
      setStep(2);
      setErrors({});
    } catch (error) {
      setErrors({ email: 'Failed to send OTP. Please try again.' });
    }
    setLoading(false);
  };

  const verifyOTP = () => {
    if (formData.otp !== generatedOTP) {
      setErrors({ otp: 'Invalid OTP. Please try again.' });
      return;
    }
    setStep(3);
    setErrors({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setStep(4);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa' }}>
      {/* Header */}
      <header style={{
        background: 'white',
        boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
        padding: '15px 0'
      }}>
        <div className="container" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <Link to="/" style={{
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#007bff',
            textDecoration: 'none'
          }}>
            Talrn
          </Link>
          <Link to="/" style={{ textDecoration: 'none', color: '#666' }}>
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: 'calc(100vh - 80px)',
        padding: '40px 20px'
      }}>
        <div style={{
          background: 'white',
          padding: '40px',
          borderRadius: '10px',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          width: '100%',
          maxWidth: '400px'
        }}>
          {step === 1 && (
            <div>
              <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>
                Join Talrn
              </h2>
              <div style={{ marginBottom: '20px' }}>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '16px'
                  }}
                />
                {errors.email && (
                  <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
                    {errors.email}
                  </p>
                )}
              </div>
              <button
                onClick={sendOTP}
                disabled={loading}
                className="btn btn-primary"
                style={{ width: '100%', padding: '12px' }}
              >
                {loading ? 'Sending...' : 'Send OTP'}
              </button>
            </div>
          )}

          {step === 2 && (
            <div>
              <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#333' }}>
                Verify Email
              </h2>
              <p style={{ textAlign: 'center', marginBottom: '30px', color: '#666' }}>
                Enter the OTP sent to {formData.email}
              </p>
              <div style={{ marginBottom: '20px' }}>
                <input
                  type="text"
                  name="otp"
                  placeholder="Enter 6-digit OTP"
                  value={formData.otp}
                  onChange={handleInputChange}
                  maxLength="6"
                  style={{
                    width: '100%',
                    padding: '12px',
                    border: '2px solid #ddd',
                    borderRadius: '6px',
                    fontSize: '16px',
                    textAlign: 'center'
                  }}
                />
                {errors.otp && (
                  <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
                    {errors.otp}
                  </p>
                )}
              </div>
              <button
                onClick={verifyOTP}
                className="btn btn-primary"
                style={{ width: '100%', padding: '12px' }}
              >
                Verify OTP
              </button>
            </div>
          )}

          {step === 3 && (
            <div>
              <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#333' }}>
                Complete Registration
              </h2>
              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #ddd',
                      borderRadius: '6px',
                      fontSize: '16px'
                    }}
                  />
                  {errors.firstName && (
                    <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
                      {errors.firstName}
                    </p>
                  )}
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #ddd',
                      borderRadius: '6px',
                      fontSize: '16px'
                    }}
                  />
                  {errors.lastName && (
                    <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
                      {errors.lastName}
                    </p>
                  )}
                </div>
                <div style={{ marginBottom: '20px' }}>
                  <input
                    type="password"
                    name="password"
                    placeholder="Password (min 6 characters)"
                    value={formData.password}
                    onChange={handleInputChange}
                    style={{
                      width: '100%',
                      padding: '12px',
                      border: '2px solid #ddd',
                      borderRadius: '6px',
                      fontSize: '16px'
                    }}
                  />
                  {errors.password && (
                    <p style={{ color: 'red', fontSize: '14px', marginTop: '5px' }}>
                      {errors.password}
                    </p>
                  )}
                </div>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ width: '100%', padding: '12px' }}
                >
                  Complete Registration
                </button>
              </form>
            </div>
          )}

          {step === 4 && (
            <div style={{ textAlign: 'center' }}>
              <div style={{
                background: '#d4edda',
                color: '#155724',
                padding: '20px',
                borderRadius: '6px',
                marginBottom: '20px'
              }}>
                <h2 style={{ marginBottom: '10px' }}>Registration Successful!</h2>
                <p>Welcome to Talrn, {formData.firstName}!</p>
              </div>
              <p style={{ marginBottom: '20px', color: '#666' }}>
                Your account has been created successfully. You can now start exploring opportunities.
              </p>
              <Link to="/" className="btn btn-primary">
                Go to Dashboard
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Join;