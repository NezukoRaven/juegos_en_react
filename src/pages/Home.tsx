import React from 'react';

const Home: React.FC<{
    onNavigateToSpiderBall?: () => void;
    onNavigateToNexusBall?: () => void;
}> = ({
    onNavigateToSpiderBall = () => { },
    onNavigateToNexusBall = () => { }
}) => {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100 dark:bg-gray-900 w-full absolute inset-0">
            <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-center text-2xl font-bold mb-6 text-gray-800">Selecciona un Juego</h1>
                <div className="flex justify-center space-x-6">
                    <div 
                        onClick={onNavigateToSpiderBall}
                        className="w-64 h-80 bg-blue-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                    >
                        <div className="h-2/3 bg-blue-200 rounded-t-lg flex items-center justify-center">
                            <span className="text-blue-600 text-4xl">🕷️</span>
                        </div>
                        <div className="p-4 text-center">
                            <h2 className="text-xl font-bold text-blue-800">SpiderBall</h2>
                            <p className="text-sm text-gray-600">Juego de habilidad y precisión</p>
                        </div>
                    </div>

                    <div 
                        onClick={onNavigateToNexusBall}
                        className="w-64 h-80 bg-green-100 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                    >
                        <div className="h-2/3 bg-green-200 rounded-t-lg flex items-center justify-center">
                            <span className="text-green-600 text-4xl">🔗</span>
                        </div>
                        <div className="p-4 text-center">
                            <h2 className="text-xl font-bold text-green-800">NexusBall</h2>
                            <p className="text-sm text-gray-600">Juego de estrategia y conexión</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;