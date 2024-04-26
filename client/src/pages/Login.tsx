// Login.tsx
import React, { useContext, useEffect, useState } from 'react';
import GlobalContext from '../context/GlobalContext';
import { useNavigate } from 'react-router-dom';
import { ready } from '../services/apis';

const Login = () => {
    const { email, setEmail } = useContext(GlobalContext);
    const [emailInput, setEmailInput] = useState(email);
    const navigate = useNavigate();

    useEffect(() => {
        if (email) {
            navigate("/");
        }
    }, [email]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const response = await ready({ id: emailInput })
            console.log(`response - ${JSON.stringify(response)}`)
        } catch(error) {
            console.error(`${JSON.stringify(error)}`)
        }
        setEmail(emailInput);
        navigate("/setup");
        // navigate("/verify");
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-bold mb-4">Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={emailInput}
                            onChange={(e) => setEmailInput(e.target.value)}
                            className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring focus:border-blue-500"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-6 py-3 rounded-md shadow-lg hover:bg-blue-600 transition duration-300"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
