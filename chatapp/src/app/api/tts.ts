import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

const ELEVENLABS_API_KEY = process.env.ELEVENLABS_API_KEY;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const { text } = req.body;

    try {
      const response = await axios.post(
        'https://api.eleven-labs.com/voice/synthesize',
        {
          text,
          output: 'audio',
          voice: 'en-US',
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${ELEVENLABS_API_KEY}`,
          },
          responseType: 'blob',
        }
      );

      res.status(200).send(response.data);
    } catch (error) {
      console.error('Error fetching data from ElevenLabs:', error);
      res.status(500).json({ error: 'Failed to fetch data from ElevenLabs' });
    }
  } else {
    res.status(405).json({ error: 'Method Not Allowed' });
  }
};

export default handler;
