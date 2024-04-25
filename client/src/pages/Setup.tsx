import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import OTPForm from "../components/OTPForm";
import QRCode from "../components/QRCode";
import BackupCode from "../components/BackupCode";

const qr = "data:image/png;base64,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";
const secret = 'test';
const code = 'test';

const Setup = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (code: number) => {
        setError('');
        setLoading(true);
        navigate("/verify");
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

    const next = () => {
        navigate("/verify");
    }


    return (
        <div className="flex flex-col items-center">
            <div className="mb-1">
                <QRCode qr={qr} secret={secret} />
            </div>
            <div className="mb-1">
                <OTPForm
                    handleSubmit={handleSubmit}
                    error={error}
                    loading={loading}
                />
            </div>
            <div className="mb-1">
                <BackupCode code={code} next={next} />
            </div>
        </div>
    );
};

export default Setup;
