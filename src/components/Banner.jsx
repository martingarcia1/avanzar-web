import logo from '../assets/1.png';

const Banner = () => {
    return (
        <div className="w-full min-h-screen bg-gradient-to-r from-gray-900 to-gray-800 text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    {/* Logo Section */}
                    <div className="w-full md:w-1/2 flex justify-center">
                        <img
                            src={logo}
                            alt="Avanzar Group Logo"
                            className="w-full max-w-md h-auto object-contain"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Banner;
