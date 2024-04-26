import { useContext, useEffect, useState } from "react";
import { StatusCodes } from "http-status-codes";
import { useNavigate } from "react-router-dom";
import OTPForm from "../components/OTPForm";
import QRCode from "../components/QRCode";
import BackupCode from "../components/BackupCode";
import { generate, verify } from "../services/apis";
import GlobalContext from "../context/GlobalContext";

const Setup = () => {

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [qrInfo, setQRInfo] = useState({ qrcode: '', secret: '' });
    const [backupCode, setBackupCode] = useState('');

    const { email } = useContext(GlobalContext);
    const navigate = useNavigate();

    useEffect(() => {
        const generateQRCode = async () => {
            try {
                setError('');
                const response = await generate({ id: email })
                if (response?.status === StatusCodes.OK) {
                    const { secret, qrcode } = response?.data;
                    setQRInfo({ qrcode, secret });
                } else {
                    throw new Error('Something went wrong');
                }
            } catch (error) {
                setError('Something went wrong')
            }
        };

        generateQRCode();

        return () => { };

    }, []);

    const handleSubmit = async (otp: number) => {
        setError('');
        setLoading(true);
        try {
            const response = await verify({ id: email, secret: qrInfo.secret, otp })
            if (response?.status === StatusCodes.OK) {
                const { code } = response?.data;
                setBackupCode(code);
            } else {
                throw new Error('Something went wrong');
            }
        } catch (error) {
            setError('Error submitting code');
        } finally {
            setLoading(false);
        }
    };

    const next = () => {
        navigate("/verify");
    }

    const handleRefresh = () => {
        navigate("/login");
    }

    return (
        <div className="flex flex-col items-center">
            {
                !backupCode && qrInfo?.qrcode && qrInfo?.secret && (
                    <>
                        <div className="mb-1">
                            <QRCode qr={qrInfo?.qrcode} secret={qrInfo?.secret} />
                        </div>
                        <div className="mb-1">
                            <OTPForm
                                handleSubmit={handleSubmit}
                                loading={loading}
                            />
                        </div>
                    </>
                )
            }
            {
                backupCode && (
                    <div className="mb-1">
                        <BackupCode code={backupCode} next={next} />
                    </div>
                )
            }
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

export default Setup;
