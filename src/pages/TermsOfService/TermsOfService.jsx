import React, { useEffect, useRef, useState } from 'react';
import { useMutation } from "@apollo/client";
import { CREATE_TOS } from "../TermsOfService/graphql/addTermsOfService";
import { useNavigate } from 'react-router-dom';

function TermsOfService() {
    const termsRef = useRef(null);
    const [createTos, { data: tosData, loading: tosLoading }] = useMutation(CREATE_TOS);
    const navigate = useNavigate(); // Use useNavigate for navigation
    const [termsAccepted, setTermsAccepted] = useState(false); // Define and initialize termsAccepted

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    termsRef.current.style.opacity = 1;
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.5,
            }
        );
        if (termsRef.current) {
            observer.observe(termsRef.current);
        }
        return () => {
            if (termsRef.current) {
                observer.unobserve(termsRef.current);
            }
        };
    }, []);

    const handleTermsAcceptance = async () => {
        try {
            await createTos();
            setTermsAccepted(true);
            navigate('/AcceptedTermsOfService'); // Navigate to the "AcceptedTermsOfService" page
        } catch (error) {
            console.error(error);
        }
    };

    const paragraphs = [
        ...Array.from({ length: 10 }).map((_, i) => ({
            title: `Sample Title ${i + 1}`,
            content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
        })),
    ];

    return (
        <div style={{ fontFamily: '"Trebuchet MS", Helvetica, sans-serif' }}>
            <div
                ref={termsRef}
                style={{
                    opacity: 1,
                    transition: 'opacity 0.5s ease-in-out',
                    display: 'flex', // Use flexbox
                    flexDirection: 'column',
                    justifyContent: 'center', // Center vertically
                    alignItems: 'center', // Center horizontally
                    height: '100vh',
                    fontSize: '1rem',
                    padding: '20px',
                    backgroundColor: '#000',
                }}
            >
                <p style={{ color: 'white', fontSize: '1.2rem', marginBottom: '20px', fontWeight: 'bold' }}>Just some stuff that we need you to accept</p>
                <div style={{
                    height: '80%',
                    width: '80%',
                    overflowY: 'scroll',
                    border: '1px solid white',
                    padding: '10px',
                    marginBottom: '20px',
                    color: 'white',
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    lineHeight: '1.6',
                    textShadow: '1px 1px 2px rgba(0, 0, 0, 0.2)',
                    '@media (max-width: 600px)': {
                        width: '95%',
                        fontSize: '0.9rem',
                    },
                }}>
                    {paragraphs.map((paragraph, index) => (
                        <div key={index} style={{ marginBottom: '20px' }}>
                            <h3 style={{
                                color: 'white',
                                fontSize: '1.8rem',
                                letterSpacing: '1.5px',
                                textTransform: 'uppercase',
                                '@media (max-width: 600px)': {
                                    fontSize: '1.5rem',
                                },
                            }}>
                                {paragraph.title}
                            </h3>
                            <p style={{ color: 'grey' }}>{paragraph.content}</p>
                        </div>
                    ))}
                </div>
                <p style={{ color: 'white', marginBottom: '10px', fontStyle: 'italic', textAlign: 'center' }}>
                    By clicking the "Agree" button, you acknowledge that you have read, understood, and agree to be bound by the terms and conditions stated in this agreement.
                </p>
                <button
                    style={{
                        backgroundColor: 'green',
                        color: 'white',
                        padding: '10px 20px',
                        borderRadius: '5px',
                        cursor: 'pointer',
                        border: 'none',
                        fontSize: '1.1rem',
                        boxShadow: '0 4px 8px rgba(0, 128, 0, 0.4)',
                        transition: 'all 0.3s ease',
                    }}
                    onMouseOver={e => {
                        e.currentTarget.style.boxShadow = '0 6px 12px rgba(0, 128, 0, 0.6)';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                    }}
                    onMouseOut={e => {
                        e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 128, 0, 0.4)';
                        e.currentTarget.style.transform = 'translateY(0)';
                    }}
                    onClick={handleTermsAcceptance} // Call the handler when the button is clicked
                    disabled={termsAccepted} // Disable the button if terms are already accepted
                >
                    {termsAccepted ? 'Accepted' : 'I Agree'}
                </button>

            </div>
        </div>
    );
}

export default TermsOfService;
