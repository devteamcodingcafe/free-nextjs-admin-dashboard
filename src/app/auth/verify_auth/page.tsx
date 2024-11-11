"use client"
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DefaultLayout from '@/components/Layouts/DefaultLayout';

const OtpPage = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState(null);
  // const navigate = useNavigate();

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://api.engagingsmiles.com/swagger/#/default/post_verify_auth', { otp });
      
      if (response.data.success) {
        window.location.href='/dashboard'; // Redirect to the dashboard on success
      } else {
        setError(response.data.message);
      }
    } catch (err) {
      setError("");
    }
  };

  return (
    <>
    <DefaultLayout>
    <div>
      <h2>Enter OTP</h2>
      <form onSubmit={handleOtpSubmit}>
        <input
          type="text"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          placeholder="Enter your OTP"
          required
        />
        <button type="submit">Verify OTP</button>
      </form>
      {error && <p>{error}</p>}
    </div>
    </DefaultLayout >
    </>
  );
};

export default OtpPage;
