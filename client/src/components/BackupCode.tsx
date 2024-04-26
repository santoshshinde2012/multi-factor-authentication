import { HiClipboardCopy } from "react-icons/hi";

interface IBackupCode {
    code: string,
    next: Function
}
const BackupCode: React.FC<IBackupCode> = ({ code, next }) => {

    const downloadTextAsFile = (text: string) => {
        const element = document.createElement('a');
        const file = new Blob([text], { type: 'text/plain' });
        element.href = URL.createObjectURL(file);
        element.download = 'text.txt';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
        next();
    };

    return (
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-md">
            <h4 className="mb-1">Backup Code <span className="text-xs">(Next, click on the copy button.)</span></h4>
            <div className="flex items-center justify-between bg-gray-200 p-4 rounded-md">
                <span>{code}</span>
                <button
                    onClick={() => { downloadTextAsFile(code) }}
                    className="flex items-center justify-center bg-blue-500 text-white w-8 h-8 rounded-md hover:bg-blue-600"
                >
                    <HiClipboardCopy />
                </button>
            </div>
        </div>
    )
}

export default BackupCode;