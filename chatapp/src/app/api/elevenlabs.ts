import axios from 'axios';

export const sendTextToElevenLabs = async (text: string): Promise<string> => {
  try {
    const response = await axios.post(
      'ELEVENLABS_TTS_API_ENDPOINT',
      { text },
      {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ELEVENLABS_API_KEY',
        },
      }
    );

    return response.data.audioUrl;
  } catch (error) {
    console.error('Error sending text to ElevenLabs TTS service:', error);
    throw new Error('Failed to send text to ElevenLabs TTS service');
  }
};
