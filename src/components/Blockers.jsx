import React, { useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';

export const Blockers = () => {
    const { user, loading } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if (!loading) {
            // Handle cases where user is undefined or not authenticated
            if (!user) {
                console.log('navigate to login cinve no user')
                if (location.pathname !== '/login') {
                    navigate('/login'); // Redirect to login if user is not authenticated
                }
                return;
            }

            // Handle new user redirection to signup
            if (user.isNewUser === true) {
                console.log('navigation to signup')
                if (location.pathname !== '/signup') {
                    navigate('/signup');
                }
            } 
            // Handle authenticated users and prevent access to login/signup
            else {
                if (location.pathname === '/login' || location.pathname === '/signup') {
                    console.log('navigating to dashboard')
                    navigate('/dashboard'); // Redirect authenticated users away from login/signup
                }
            }
        }
    }, [loading, user, navigate, location.pathname]);

    // No need to render anything; the component is purely for redirection
    return null;
};
