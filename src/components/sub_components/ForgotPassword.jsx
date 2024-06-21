import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import Otp from './Otp'; // Assuming you have an OTP component
import axios from 'axios';

function ForgotPassword() {
  const [showOtpModal, setShowOtpModal] = useState(false);
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  function modalHandler() {
    setShowOtpModal(!showOtpModal);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    if (!email) {
      toast.error('Please enter your email address');
      return;
    }

    setLoading(true);
    try{
    const response = await axios.post('http://localhost:5000/forgot-password', { email })
      
        setLoading(false);

        if (response.data) {
          toast.success('OTP sent to your email address');
          modalHandler();
        } else {
          toast.error('Failed to send OTP, please try again');
        }
      }
      catch(error) {
        setLoading(false);
        toast.error('An error occurred while sending the OTP');
      };
  }

  return (
    <div>
        <ToastContainer />  
      {showOtpModal ? <Otp modelToggler={modalHandler} email={email}/> : null}
      <div className="space-y-6 text-center">
        <h1>Forgot Password</h1>
        <p>Enter your email address and we will send you an OTP to reset your password on your email address</p>
        <form onSubmit={handleSubmit} className="flex justify-center space-x-10">
          <div className="w-60 h-12 relative flex rounded-xl">
            <input
              className="peer w-full bg-transparent outline-none px-4 text-base rounded-xl bg-white border border-[#4070f4] focus:shadow-md"
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label
              className="absolute top-1/2 translate-y-[-50%] bg-white left-4 px-2 peer-focus:top-0 peer-focus:left-3 font-light text-base peer-focus:text-sm peer-focus:text-[#4070f4] peer-valid:-top-0 peer-valid:left-3 peer-valid:text-sm peer-valid:text-[#4070f4] duration-150"
              htmlFor="address"
            >
              Email Address
            </label>
          </div>
          <button className="text-white bg-blue-500 rounded-xl px-4 hover:bg-blue-400" type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ForgotPassword;
