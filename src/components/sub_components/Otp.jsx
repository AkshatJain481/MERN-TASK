import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import {useNavigate} from 'react-router-dom';
function Otp({ modeltoggler, email }) {
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await axios.post('http://localhost:5000/reset-password', {
        email,
        otp,
        newPassword,
      });

      setLoading(false);
      console.log(response.data.message);
      console.log(response.data.message === 'Password reset successfully')
      if (response.data.message === 'Password reset successfully') {
        toast.success('Password reset successfully');
        setTimeout(() => {navigate('/')} , 3000)
        // Close the modal after successful password reset
      } else {
        toast.error('Failed to reset password');
      }
    } catch (error) {
      setLoading(false);
      toast.error('An error occurred while resetting password');
    }
  };

  const handleChangeOtp = (e) => {
    setOtp(e.target.value);

    
  };

  return (
    <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
      <form className='otp-Form' onSubmit={handleSubmit}>
        <span className='mainHeading'>Enter OTP</span>
        <p className='otpSubheading'>We have sent a verification code to your email address</p>
        <div className='inputContainer'>
          <input
            required
            maxLength='6'
            type='text'
            className='border-2 border-gray-300 p-2 w-full rounded-lg'
            value={otp}
            onChange={handleChangeOtp}
            placeholder='Enter OTP'
          />
        </div>
        <input
          type='text'
          name='newPassword'
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className='border-2 border-gray-300 p-2 w-full rounded-lg mt-4'
          placeholder='New Password'
          required
        />
        <button className='verifyButton' type='submit' disabled={loading}>
          {loading ? 'Verifying...' : 'Verify'}
        </button>
       
      </form>
    </div>
  );
}

export default Otp;
