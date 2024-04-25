import { useState } from 'react';
import axios from 'axios';
import OTPForm from '../components/OTPForm';
import { useNavigate } from 'react-router-dom';

const Validation = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (code: number) => {
        setError('');
        setLoading(true);
        navigate("/");
        try {
            const response = await axios.post('YOUR_API_ENDPOINT', { code });
            console.log(response.data); 
        } catch (error) {
            setError('Error submitting code');
            console.error(error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <div className="flex justify-center items-center h-screen">
            <OTPForm
                handleSubmit={handleSubmit}
                error={error}
                loading={loading}
            />
        </div>
    );
};

export default Validation;
