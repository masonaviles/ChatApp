import React, { useState } from 'react';

const ChatApp = () => {
  const [inputText, setInputText] = useState('');
  const [chatHistory, setChatHistory] = useState([]);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (inputText.trim() === '') {
      return;
    }

    // Make an API call to ChatGPT and get the response
    const response = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ message: inputText }),
    });

    if (response.ok) {
      const data = await response.json();
      const reply = data.reply;

      // Update the chat history with user input and model reply
      setChatHistory((prevHistory) => [
        ...prevHistory,
        { message: inputText, isUser: true },
        { message: reply, isUser: false },
      ]);

      setInputText('');
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="flex-grow p-4 bg-gray-100">
        <div className="flex flex-col gap-4">
          {/* Display chat messages */}
          {chatHistory.map((chat, index) => (
            <div
              key={index}
              className={`flex ${
                chat.isUser ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`bg-${
                  chat.isUser ? 'green' : 'blue'
                }-500 text-white rounded-lg p-2 max-w-xs`}
              >
                {chat.message}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="p-4">
        {/* Input area */}
        <form onSubmit={handleFormSubmit}>
          <input
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            type="text"
            value={inputText}
            onChange={handleInputChange}
            placeholder="Type something..."
          />
          <button type="submit" className="mt-2">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatApp;
