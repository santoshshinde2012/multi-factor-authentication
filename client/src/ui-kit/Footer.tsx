const Footer = () => {
    return (
        <footer className="bg-gray-200 py-4">
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
        </footer>

    );
};

export default Footer;
