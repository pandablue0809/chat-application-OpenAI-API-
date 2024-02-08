import React, { useState } from 'react';

interface MessageInputProps {
    onSubmit: (text: string) => void;
}

const MessageInput: React.FC<MessageInputProps> = ({ onSubmit }) => {
    const [inputText, setInputText] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputText.trim() !== '') {
            onSubmit(inputText);
            setInputText('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex mt-4">
            <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                className="flex-1 border rounded-l-md p-2"
                placeholder="Type your message..."
            />
            <button type="submit" className="bg-blue-500 text-white rounded-r-md px-4">
                Send
            </button>
        </form>
    );
};

export default MessageInput;
