import React from 'react'
import Link from 'next/link'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
            <footer className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between">

                    {/* Navigation Links */}
                    <div className="mb-6 md:mb-0">
                        <h4 className="text-lg font-semibold mb-4">Navigation</h4>
                        <ul className="space-y-2">
                            <li><Link href="/about-us">About Us</Link></li>
                            <li><Link href="/privacy-policy">Privacy Policy</Link></li>
                            <li><Link href="/terms-of-service">Terms of Service</Link></li>
                            <li><Link href="/help-center">Help Center</Link></li>
                        </ul>
                    </div>

                    {/* Contact Information */}
                    <div className="mb-6 md:mb-0">
                        <h4 className="text-lg font-semibold mb-4">Contact Information</h4>
                        <p>Email: info@example.com</p>
                        <p>Phone: +1 (123) 456-7890</p>
                        <p>Address: 123 Main St, City, State, 12345</p>
                    </div>

                    {/* Social Media Icons */}
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook className="text-2xl" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter className="text-2xl" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram className="text-2xl" />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                                <FaLinkedin className="text-2xl" />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center mt-6 border-t border-gray-700 pt-4">
                    <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Footer
