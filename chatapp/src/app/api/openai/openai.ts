import axios from 'axios';


export async function sendMessage(message: string): Promise<string> {
    try {
        const response = await axios.post('https://api.openai.com/v1/chat/completions', {
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: message }],
        }, {
            headers: {
                'Authorization': `Bearer ${OPENAI_API_KEY}`,
                'Content-Type': 'application/json',
            },
        });
        return response.data.choices[0].text.trim();
    } catch (error) {
        console.error('Error sending message:', error.response?.data || error.message);
        throw new Error('Failed to send message');
    }
}
