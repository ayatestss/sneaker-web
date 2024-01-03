import React, { useState, useEffect } from 'react';

function AcceptedTermsOfService() {
    const [animationStyles, setAnimationStyles] = useState({
        transform: 'translateY(100%)',
        opacity: 0,
    });

    useEffect(() => {
        // Apply animation after a short delay (e.g., 100ms) to allow for rendering
        const animationTimeout = setTimeout(() => {
            setAnimationStyles({
                transform: 'translateY(0)',
                opacity: 1,
                transition: 'transform 1s ease, opacity 1s ease',
            });
        }, 100);

        return () => clearTimeout(animationTimeout);
    }, []);

    return (
        <div
            style={{
                fontFamily: '"Trebuchet MS", Helvetica, sans-serif',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
                backgroundColor: 'black', // Customize the background color
                color: 'white', // Customize the text color
                padding: '20px',
                ...animationStyles, // Apply the slide-up animation styles
            }}
        >
            <div
                style={{
                    textAlign: 'center', // Center the text
                    marginBottom: '20px', // Add some spacing
                }}
            >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                        width: '80px', // Adjust the size of the icon
                        height: '80px',
                        marginBottom: '10px', // Add some spacing
                    }}
                >
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="16 12 12 8 8 12" />
                </svg>
            </div>
            <p
                style={{
                    fontSize: '1.2rem',
                    fontWeight: 'bold',
                    marginTop: '20px',
                    textAlign: 'center', // Center the text
                }}
            >
                Thank you for accepting our terms and conditions.
            </p>
            {/* Add any additional content or components for the accepted terms UI */}
        </div>
    );
}

export default AcceptedTermsOfService;
