"use client"
import React, { useState } from 'react';
import axios from 'axios';
import DefaultLayout from '@/components/Layouts/DefaultLayout';

const OtpPage = () => {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState(null);
  const [message, setMessage] = useState("")

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("otp", otp);
    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/verify_auth`, formData, {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        if (res.data) {
          setMessage(res.data.message);
          window.location.href = `/`;
        }
        else {
          setError(res.data.data.message)
        }
      })

  };

  return (
    <DefaultLayout>
      <div className="flex flex-col min-h-screen">
        <div className="flex-grow flex items-center justify-center bg-gray-100 py-10">
          <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
            <h2 className="text-2xl font-semibold text-center mb-6">Enter OTP</h2>
            <form onSubmit={handleOtpSubmit} className="space-y-4">
              <input
                type="text"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
                placeholder="Enter your OTP"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                type="submit"
                className="w-full py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-150"
              >
                Verify OTP
              </button>
            </form>
            {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
            {message && <p className="mt-4 text-red-500 text-center">{message}</p>}
          </div>
        </div>

      </div>
    </DefaultLayout>
  );
};

export default OtpPage;
