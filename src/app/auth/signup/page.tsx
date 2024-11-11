"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumb from "@/components/Breadcrumbs/Breadcrumb";
import DefaultLayout from "@/components/Layouts/DefaultLayout";
import axios from "axios";

const SignUp = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [strength, setStrength] = useState(0);
  const [message, setMessage] = useState("");

  const [validation, setValidation] = useState({
    length: false,
    uppercase: false,
    lowercase: false,
    digit: false,
    specialChar: false,
  });

  const regex = {
    length: /.{8,}/,
    uppercase: /[A-Z]/,
    lowercase: /[a-z]/,
    digit: /\d/,
    specialChar: /[@#$%^&*]/,
    email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Email regex for validation
  };

  const handlePasswordChange = (e) => {
    const newPassword = e.target.value;
    setPassword(newPassword);
    evaluateStrength(newPassword);
  };

  const evaluateStrength = (password) => {
    let score = 0;
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/[0-9]/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    setStrength(score);
    setValidation({
      length: regex.length.test(password),
      uppercase: regex.uppercase.test(password),
      lowercase: regex.lowercase.test(password),
      digit: regex.digit.test(password),
      specialChar: regex.specialChar.test(password),
    });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const validateEmail = () => {
    return regex.email.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Email validation check
    if (!validateEmail()) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
    } else if (strength < 3) {
      setError("Password is too weak. Ensure it has a mix of letters, digits, and special characters.");
    } else {
      setError("");
      const formData = new FormData();
      formData.append("password", password);
      formData.append("email", email);

      axios
        .post(`${process.env.NEXT_PUBLIC_API_URL}/start_auth`, formData, {
          headers: { "Content-Type": "application/json" },
        })
        .then((res) => {
          if (res.data) {
            setMessage(res.data.message);
            window.location.href = `/auth/verify_auth`; // Redirect on success
          }
        })
        .catch((error) => {
          console.error("Error during authentication:", error);
          setError("There was an issue with the authentication process.");
        });
    }
  };

  const getStrengthColor = () => {
    if (strength === 0) return "bg-red-500"; // Weak
    if (strength === 1) return "bg-orange-500"; // Fair
    if (strength === 2) return "bg-yellow-500"; // Good
    if (strength >= 3) return "bg-green-500"; // Strong
    return "bg-gray-300"; // Default
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName="Sign Up" />

      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-col items-center">
          <div className="hidden w-full xl:block xl:w-1/2">
            <Link className="mb-5.5 inline-block" href="/">
              <Image
                className="hidden dark:block"
                src={"/images/logo/logo.png"}
                alt="Logo"
                width={176}
                height={32}
              />
              <Image
                className="dark:hidden"
                src={"/images/logo/logo.png"}
                alt="Logo"
                width={176}
                height={32}
              />
            </Link>
          </div>

          <div className="w-full xl:w-1/2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                Sign Up to Engaging Smile
              </h2>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    required
                  />
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    required
                  />
                  {!validateEmail() && email && (
                    <div className="text-red-500 mt-2">Invalid email format.</div>
                  )}
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Enter your password"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    required
                  />
                  <div className="mt-2">
                    <ul className="text-sm text-gray-600 dark:text-gray-300">
                      <li className={validation.length ? "text-green-500" : "text-red-500"}>
                        At least 8 characters
                      </li>
                      <li className={validation.uppercase ? "text-green-500" : "text-red-500"}>
                        At least 1 uppercase letter
                      </li>
                      <li className={validation.lowercase ? "text-green-500" : "text-red-500"}>
                        At least 1 lowercase letter
                      </li>
                      <li className={validation.digit ? "text-green-500" : "text-red-500"}>
                        At least 1 digit
                      </li>
                      <li className={validation.specialChar ? "text-green-500" : "text-red-500"}>
                        At least 1 special character
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Password Strength Bar */}
                <div className="mt-2">
                  <div className="w-full h-2 rounded-full bg-gray-300">
                    <div
                      className={`h-full rounded-full ${getStrengthColor()}`}
                      style={{ width: `${(strength / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder="Confirm your password"
                    className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
                    required
                  />
                </div>

                {error && <div className="text-red-500">{error}</div>}

                {message && <div className="text-green-500">{message}</div>}

                <div className="mt-8">
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-primary py-4 text-base font-semibold text-white hover:bg-opacity-80 focus:outline-none"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default SignUp;
