import { useContext, useEffect } from "react";
import GlobalContext from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const { email } = useContext(GlobalContext);

    useEffect(() => {
        if(!email) {
            navigate("/login");
        }
    }, [email]);

    return (
        <div className="bg-gray-100 min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl font-bold mb-8">Welcome to Home Page</h1>
            <div className="container mx-auto flex justify-center">
                <a href="https://twitter.com/shindesan2012" className="mx-2">
                    <img src="https://img.shields.io/badge/shindesan2012-black?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter Badge" className="h-8" />
                </a>
                <a href="https://www.linkedin.com/in/shindesantosh/" className="mx-2">
                    <img src="https://img.shields.io/badge/shindesantosh-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge" className="h-8" />
                </a>
                <a href="https://blog.santoshshinde.com/" className="mx-2">
                    <img src="https://img.shields.io/badge/Blog-black?style=for-the-badge&logo=medium&logoColor=white" alt="Medium Badge" className="h-8" />
                </a>
                <a href="https://www.buymeacoffee.com/santoshshin" target="_blank" className="mx-2">
                    <img src="https://cdn.buymeacoffee.com/buttons/default-black.png" alt="Buy Me A Coffee" height="28" width="100" />
                </a>
            </div>
            <p className="text-lg text-gray-700 mb-4">Multi-factor authentication using Node JS and React JS</p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-md shadow-lg transition duration-300">Get Started</button>
        </div>
    );
};

export default Home;
