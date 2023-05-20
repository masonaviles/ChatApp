import React, { useState } from 'react';

const ChatApp = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={`flex flex-col h-screen ${darkMode ? 'bg-gray-800 text-white' : ''}`}>
      <div className="flex-grow p-4 bg-gray-100">
        {/* Messages */}
        <div className="flex flex-col gap-4">
          {/* Individual messages */}
          <div className="flex">
            <div className="max-w-xs p-2 text-white bg-blue-500 rounded-lg">
              Hello!
            </div>
          </div>
          <div className="flex justify-end">
            <div className="max-w-xs p-2 text-white bg-green-500 rounded-lg">
              Hi!
            </div>
          </div>
        </div>
      </div>
      <div className="p-4">
        {/* Input area */}
        <input
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          type="text"
          placeholder="Type your message..."
        />
      </div>
      <button
        className="fixed p-2 text-gray-800 bg-gray-300 rounded-full bottom-4 left-4 hover:bg-gray-400 hover:text-gray-900"
        onClick={toggleDarkMode}
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default ChatApp;
