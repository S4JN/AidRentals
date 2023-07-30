import React, { useEffect, useState } from 'react';
import { Navigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoute = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(false);


  const checkLoggedIn = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };

        const { data } = await axios.get('http://localhost:8000/api/v1/auth/current-user', config);
        if (data?.success) {
          setLoggedIn(true);
        }
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    checkLoggedIn();
  }, []);

  if (loading) {
    // You can show a loading indicator here while checking the login status.
    return <div>Loading...</div>;
  }

  if (loggedIn) {
    // If the user is logged in, render the protected children.
    return <React.Fragment>{children}</React.Fragment>;
  } else {
    // If the user is not logged in, redirect to the login page.
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
