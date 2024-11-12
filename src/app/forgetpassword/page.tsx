"use client"
import DefaultLayout from '@/components/Layouts/DefaultLayout';
import axios from 'axios';
import React, { useState } from 'react'

const forgotpassword = () => {
    const [email, setEmail] = useState()
    const [message, setMessage] = useState('')
    const [error, setError] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append("email", email);
        axios
            .post(`${process.env.NEXT_PUBLIC_API_URL}/verify_auth`, {
                headers: { "Content-Type": "application/json" },
            })
            .then((res) => {
                if (res.data) {
                    setMessage(res.data.message);
                    setTimeout(() => {
                        window.location.href = `/`;
                    }, 3000);
                } else {
                    setError(res.data.message)
                }
            })
    };
    return (
        <DefaultLayout>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="w-full max-w-md p-8 space-y-6 bg-white shadow-lg rounded-lg">
                    <h2 className="text-2xl font-bold text-center text-gray-800">Forgot Password</h2>
                    <p className="text-sm text-gray-600 text-center">Enter your email to receive a reset link</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="block w-full px-4 py-2 mt-1 text-gray-700 bg-gray-100 border border-gray-300 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
                                placeholder="your-email@example.com"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full px-4 py-2 font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        >
                            Send Reset Link
                        </button>
                    </form>

                    {message && <p className="mt-4 text-center text-green-600">{message}</p>}
                </div>
            </div>
        </DefaultLayout>
    )
}

export default forgotpassword
