"use client"
import { useState } from 'react';
import { sendMessage } from './api/openai/openai';

export default function ChatPage() {
  const [inputMessage, setInputMessage] = useState('');
  const [chatLog, setChatLog] = useState<string[]>([]);

  const sendMessageToAI = async () => {
    if (!inputMessage.trim()) return;

    try {
      const response = await sendMessage(inputMessage);
      setChatLog(prevChatLog => [...prevChatLog, inputMessage, response]);
      setInputMessage('');
    } catch (error) {
      console.error('Failed to send message:', error.message);
    }
  };

  return (
    <div>
      <div>
        {chatLog.map((message, index) => (
          <div key={index}>{message}</div>
        ))}
      </div>
      <input type="text" value={inputMessage} onChange={(e) => setInputMessage(e.target.value)} />
      <button onClick={sendMessageToAI}>Send</button>
    </div>
  );
}
