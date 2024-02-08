import React from 'react';

interface ChatWindowProps {
  messages: Message[];
}

const ChatWindow: React.FC<ChatWindowProps> = ({ messages }) => {
  return (
    <div className="flex flex-col h-full overflow-y-auto p-4">
      {messages.map((message, index) => (
        <div key={index} className="mb-4">
          <span className="font-bold">{message.user}:</span> {message.text}
        </div>
      ))}
    </div>
  );
};

interface Message {
  user: string;
  text: string;
}

export default ChatWindow;
