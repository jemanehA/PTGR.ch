import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const VerifyEmail = () => {
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();  // Use useNavigate instead of useHistory
    const location = useLocation();

    // Extract token and user_id from URL query parameters
    const queryParams = new URLSearchParams(location.search);
    const token = queryParams.get('token');
    const userId = queryParams.get('user_id');

    useEffect(() => {
        if (token && userId) {
            // Send verification request to backend
            verifyEmail(token, userId);
        } else {
            setMessage('Invalid request.');
            setLoading(false);
        }
    }, [token, userId]);

    // Function to call the backend API for email verification
    const verifyEmail = async (token, userId) => {
        try {
            const response = await fetch('https://email.ptgr-test.com/verifyme.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token, user_id: userId }),
            });

            const data = await response.json();

            if (data.success) {
                setMessage(data.message);
                // Redirect to login page after successful verification
                setTimeout(() => navigate('/login'), 3000);  // Use navigate instead of history.push
            } else {
                setMessage(data.message);
            }
        } catch (error) {
            setMessage('An error occurred. Please try again later.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="verify-email-container">
            {loading ? (
                <p>Loading...</p>
            ) : (
                <div>
                    <p>{message}</p>
                    {!loading && message === 'Your email has been successfully verified.' && (
                        <a href="/login">Click here to login</a>
                    )}
                </div>
            )}
        </div>
    );
};

export default VerifyEmail;
