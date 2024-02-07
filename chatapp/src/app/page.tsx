"use client"
import React, { useState } from 'react';
import ChatWindow from './components/ChatWindow';
import LiveWordDisplay from './components/LiveWordDisplay';
import MicrophoneToggle from './components/MicrophoneToggle';
import { sendMessageToOpenAI } from './api/openai';
import { sendTextToElevenLabs } from './api/elevenlabs';

const Home: React.FC = () => {
  const [messages, setMessages] = useState<string[]>([]);
  const [liveWords, setLiveWords] = useState<string>('');
  const [isListening, setIsListening] = useState<boolean>(false);

  const handleSendMessage = async (message: string) => {
    try {
      const openaiResponse = await sendMessageToOpenAI(message);
      const elevenlabsResponse = await sendTextToElevenLabs(openaiResponse);
      setMessages([...messages, message, openaiResponse, elevenlabsResponse]);
    } catch (error) {
      console.error('Error handling message:', error);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Chat Application</h1>
      <ChatWindow messages={messages} />
      <LiveWordDisplay liveWords={liveWords} />
      <MicrophoneToggle />
    </div>
  );
};

export default Home;
