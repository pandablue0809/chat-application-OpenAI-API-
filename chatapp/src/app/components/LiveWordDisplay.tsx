import React from 'react';

interface Props {
  liveWords: string;
}

const LiveWordDisplay: React.FC<Props> = ({ liveWords }) => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg mt-4">
      <p className="text-gray-800">{liveWords}</p>
    </div>
  );
};

export default LiveWordDisplay;
