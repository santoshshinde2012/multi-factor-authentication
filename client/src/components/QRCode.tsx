interface IQRCode {
    qr: string,
    secret: string
};

const QRCode: React.FC<IQRCode> = ({qr, secret}) => {

    const copyToClipboard = (text: string) => {
        navigator.clipboard.writeText(text);
    };

    return (
        <div className="flex flex-col items-center">
            <div className="mb-4">
                <img src={qr} alt="" className="w-40 h-40" />
            </div>
            <div className="flex items-center">
                <span className="bg-yellow-200 px-1 mr-2">{secret}</span>
                <button
                    onClick={() => {
                        copyToClipboard(secret)
                    }}
                    className="bg-blue-500 text-white p-2 rounded-full flex items-center justify-center hover:bg-blue-600"
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M15 7a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7zm0 0V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v2"
                        />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 11l5 5m0 0l5-5m-5 5V6" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default QRCode;
