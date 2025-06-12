import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();
    const [countdown, setCountdown] = useState(3); // A timer to redirect

    useEffect(() => {
        const interval = setInterval(() => {
            setCountdown(prev => {
                if (prev === 1) {
                    clearInterval(interval);
                    navigate('/');
                }
                return prev - 1;
            });
        }, 1000);

        return () => clearInterval(interval); 
    }, [navigate]);

    return (
        <div className="flex flex-col items-center dark:bg-slate-700 min-h-screen justify-center h-full text-center space-y-6 py-20">
            <h1 className="text-6xl font-bold text-blue-900 dark:text-blue-100">404</h1>
            <p className="text-xl text-blue-700 dark:text-blue-300">Oops! Page not found.</p>
            <p className="text-sm text-gray-500 dark:text-gray-300">
                You will be automatically redirected to home page in <span className="font-semibold">{countdown}</span> second{countdown !== 1 && 's'}...
            </p>
            <button
                onClick={() => navigate('/')}
                className="mt-4 px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
            >
                Go to Home Page Now
            </button>
        </div>
    );
};

export default NotFound;
