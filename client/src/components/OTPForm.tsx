import React, { useState } from 'react';

interface IOTPForm { 
    loading: boolean, 
    handleSubmit: Function 
};

const OTPForm : React.FC<IOTPForm> = ({ loading, handleSubmit }) => {
    const [code, setCode] = useState('');
    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        handleSubmit(code)
    }
    return (
        <div className="flex justify-center items-center">
            <form onSubmit={onSubmit} className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-xl font-semibold mb-4">Verification</h2>
                <div className="mb-4">
                    <label htmlFor="code" className="block text-gray-700 font-semibold mb-2">
                        Enter 6-digit code
                    </label>
                    <input
                        type="text"
                        id="code"
                        name="code"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        maxLength={6}
                        minLength={6}
                        className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                        required
                    />
                </div>
                <button
                    type="submit"
                    className={`bg-blue-500 text-white px-4 py-2 rounded-md transition duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
                        }`}
                    disabled={loading}
                >
                    {loading ? (
                        <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A8.001 8.001 0 014.7 4.7L2.3 7.1M22 12c0-6.627-5.373-12-12-12v4c4.418 0 8 3.582 8 8h4zm-2 5.291A8.001 8.001 0 0119.3 19.3l2.4-2.4"
                            ></path>
                        </svg>
                    ) : (
                        'Submit'
                    )}
                </button>
            </form>
        </div>
    );
};

export default OTPForm;
