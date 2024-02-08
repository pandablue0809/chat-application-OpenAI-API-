import React from 'react';

interface MicToggleProps {
    isListening: boolean;
    onToggle: () => void;
}

const MicToggle: React.FC<MicToggleProps> = ({ isListening, onToggle }) => {
    return (
        <div className="flex items-center justify-center">
            <button onClick={onToggle} className="p-2 rounded-full bg-blue-500 text-white">
                {isListening ? 'Stop Microphone' : 'Start Microphone'}
            </button>
        </div>
    );
};

export default MicToggle;
