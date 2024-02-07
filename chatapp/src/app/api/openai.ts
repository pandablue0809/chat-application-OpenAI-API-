import axios from 'axios';

export const sendMessageToOpenAI = async (message: string): Promise<string> => {
  try {
    const response = await axios.post(
      'https://api.openai.com/v1/completions',
      {
        model: 'text-davinci-002',
        prompt: message,
        max_tokens: 150,
        temperature: 0.7,
        stop: '\n',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        },
      }
    );

    return response.data.choices[0].text.trim();
  } catch (error) {
    console.error('Error sending message to OpenAI:', error);
    throw new Error('Failed to send message to OpenAI');
  }
};
