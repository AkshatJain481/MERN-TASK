import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    // Function to retrieve token from cookie
    const getTokenFromCookie = () => {
      const cookies = document.cookie.split(';');
      for (let cookie of cookies) {
        const [name, value] = cookie.split('=');
        if (name.trim() === 'token') {
          console.log(value);
          return value;
        }
      }
      return null;
    };

    // Retrieve token from cookie
    const token = getTokenFromCookie();
    console.log(token);
    // If token exists, fetch user data
    if (token) {
      const fetchUserData = async () => {
        try {
          const response = await axios.get('http://localhost:5000/user', {
            headers: { Authorization: `Bearer ${token}` }
          });
          const { _id, email, username } = response.data;
          setUser({ _id, email, username, token });
        } catch (error) {
          console.error('Error fetching user data:', error);
          // Handle error, e.g., redirect to login page
        } finally {
          setLoading(false); // Update loading state regardless of success or failure
        }
      };

      fetchUserData();
    } else {
      setLoading(false); // No token, set loading to false
    }
  }, []);

  const login = async (formData) => {
    try {
      const response = await axios.post('http://localhost:5000/login', formData);
      const { _id, email, username, token } = response.data;
      // Set token in cookie
      document.cookie = `token=${token}; max-age=3600; path=/`; // Expires in 1 hour
      setUser({ _id, email, username, token });
    } catch (error) {
      throw new Error('Invalid email or password');
    }
  };

  const logout = () => {
    // Remove token from cookie
    document.cookie = 'token=; max-age=0; path=/'; // Delete cookie
    toast.success('Logged out successfully');
    setUser(null);
  };

  // Wait for user data to be fetched before rendering children
  if (loading) {
    return <div>Loading...</div>; // You can customize this loading indicator
  }

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);
