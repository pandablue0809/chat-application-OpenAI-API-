import React from 'react';

interface Props {
  messages: string[];
}

const ChatWindow: React.FC<Props> = ({ messages }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg">
      {messages.map((message, index) => (
        <div key={index} className="mb-2">
          <p className="text-gray-800">{message}</p>
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;
