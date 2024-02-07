import React, { useState } from 'react';

const MicrophoneToggle: React.FC = () => {
  const [isListening, setIsListening] = useState<boolean>(false);
  const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [recordedChunks, setRecordedChunks] = useState<Blob[]>([]);

  const toggleMicrophone = async () => {
    if (!isListening) {
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        setMediaStream(stream);
        const recorder = new MediaRecorder(stream);
        setMediaRecorder(recorder);

        recorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            setRecordedChunks([...recordedChunks, event.data]);
          }
        };

        recorder.onstop = () => {
          const audioBlob = new Blob(recordedChunks, { type: 'audio/wav' });
          // Do something with the recorded audio, like sending it to an API for speech recognition
          console.log(audioBlob);
        };

        recorder.start();
        setIsListening(true);
      } catch (error) {
        console.error('Error accessing microphone:', error);
      }
    } else {
      if (mediaRecorder) {
        mediaRecorder.stop();
        setIsListening(false);
      }
      if (mediaStream) {
        mediaStream.getTracks().forEach((track) => {
          track.stop();
        });
        setMediaStream(null);
      }
      setRecordedChunks([]);
    }
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      onClick={toggleMicrophone}
    >
      {isListening ? 'Stop Microphone' : 'Start Microphone'}
    </button>
  );
};

export default MicrophoneToggle;
