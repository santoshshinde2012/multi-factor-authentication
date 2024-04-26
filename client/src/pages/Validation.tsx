import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StatusCodes } from 'http-status-codes';
import OTPForm from '../components/OTPForm';
import { validate } from '../services/apis';
import GlobalContext from '../context/GlobalContext';

const Validation = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const { email } = useContext(GlobalContext);

    const handleSubmit = async (otp: number) => {
        setError('');
        setLoading(true);
        try {
            const response = await validate({ id: email, otp })
            if (response?.status === StatusCodes.OK) {
                navigate("/");
            } else {
                throw new Error('Something went wrong');
            }
        } catch (error) {
            setError('Error submitting code');
        } finally {
            setLoading(false);
        }
    };

    const handleRefresh = () => {
        navigate("/login");
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <div className="mb-1">
                <OTPForm
                    handleSubmit={handleSubmit}
                    loading={loading}
                />
            </div>
            {
                error && (
                    <div className="mb-1">
                        <div className="text-red-500 text-center">
                            <p>{error}</p>
                            <button onClick={handleRefresh} className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
                                Refresh
                            </button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Validation;
