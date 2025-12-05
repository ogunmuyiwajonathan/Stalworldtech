// components/NotFound.jsx
import { useState, useEffect } from 'react';
import { Link } from 'wouter';

const NotFound = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [imageError, setImageError] = useState(false);
  const [countdown, setCountdown] = useState(5);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Countdown for redirect
  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      window.location.href = '/home';
    }
  }, [countdown]);

  const handleImageError = () => {
    setImageError(true);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  const timeString = currentTime.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: true
  });

  const dateString = currentTime.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-900 to-black text-white flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-4xl mx-auto">
        {/* Header with current time */}
        <div className="mb-8">
          <div className="inline-block bg-gray-800/50 backdrop-blur-sm px-6 py-3 rounded-2xl border border-gray-700">
            <div className="text-3xl md:text-4xl font-mono font-bold text-blue-400">{timeString}</div>
            <div className="text-gray-300 text-sm mt-1">{dateString}</div>
          </div>
        </div>

        {/* Main content */}
        <div className="mb-12">
          <h1 className="text-7xl md:text-9xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-purple-500">
              404
            </span>
          </h1>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Oops! Page Not Found</h2>
          
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            The page you're looking for seems to have wandered off into the digital void.
            {!imageLoaded && !imageError && " Our trusty robot is searching for it..."}
            {imageError && " Even our robot couldn't find it!"}
          </p>

          {/* Robot/Image Section */}
          <div className="relative mb-12">
            <div className="w-64 h-64 mx-auto relative">
              {imageError ? (
                <div className="w-full h-full flex items-center justify-center bg-gray-800/50 rounded-2xl border-2 border-dashed border-gray-700">
                  <div className="text-center">
                    <div className="text-5xl mb-2">🤖</div>
                    <p className="text-gray-400">Robot took a coffee break</p>
                    <p className="text-sm text-gray-500 mt-1">Error loading at {currentTime.toLocaleTimeString()}</p>
                  </div>
                </div>
              ) : (
                <>
                  <img
                    src="https://images.unsplash.com/photo-1589256469067-ea99122bbdc4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Lost robot searching"
                    className={`w-full h-full object-cover rounded-2xl transition-all duration-500 ${
                      imageLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                    }`}
                    onError={handleImageError}
                    onLoad={handleImageLoad}
                  />
                  {!imageLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-800/50 rounded-2xl">
                      <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-2"></div>
                        <p className="text-gray-400">Loading robot explorer...</p>
                      </div>
                    </div>
                  )}
                </>
              )}
            </div>
            
            {/* Animated dots */}
            <div className="flex justify-center space-x-2 mt-6">
              {[1, 2, 3].map((dot) => (
                <div
                  key={dot}
                  className="w-3 h-3 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse"
                  style={{ animationDelay: `${dot * 0.2}s` }}
                />
              ))}
            </div>
          </div>

          {/* Stats/info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
            <div className="bg-gray-800/30 p-4 rounded-xl border border-gray-700">
              <div className="text-2xl font-bold text-blue-400">{countdown}</div>
              <div className="text-gray-400">Seconds until redirect</div>
            </div>
            <div className="bg-gray-800/30 p-4 rounded-xl border border-gray-700">
              <div className="text-2xl font-bold text-green-400">404</div>
              <div className="text-gray-400">Error Status</div>
            </div>
            <div className="bg-gray-800/30 p-4 rounded-xl border border-gray-700">
              <div className="text-2xl font-bold text-purple-400">
                {navigator.onLine ? 'Online' : 'Offline'}
              </div>
              <div className="text-gray-400">Connection Status</div>
            </div>
          </div>

          {/* Navigation buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <a className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25">
                Back to Landing
              </a>
            </Link>
            
            <Link href="/">
              <a className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                Go to Home
              </a>
            </Link>
            
            <button
              onClick={() => window.history.back()}
              className="px-8 py-4 bg-gray-800 hover:bg-gray-700 border border-gray-600 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105"
            >
              Go Back
            </button>
          </div>

          {/* Redirect message */}
          <div className="mt-8 p-4 bg-gray-800/30 rounded-xl border border-gray-700">
            <p className="text-gray-300">
              Automatically redirecting to Home page in{' '}
              <span className="font-bold text-yellow-400">{countdown}</span> seconds...
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <p className="text-gray-500 text-sm">
            If this error persists, please check the URL or contact support.
            <br />
            Current server time: {currentTime.toISOString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default NotFound;