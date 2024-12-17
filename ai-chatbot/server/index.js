const axios = require('axios');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON requests
// console.log("API Key from newest .env:", process.env.OPENAI_API_KEY);

// console.log("API Key in use:", process.env.OPENAI_API_KEY);


// console.log("Current Environment Variables:");
// console.log(process.env);

app.post('/api/chat', async (req, res) => {
    const { prompt } = req.body;

    try {
        const response = await axios.post(
            'https://api.openai.com/v1/chat/completions',
            {
                model: "gpt-3.5-turbo",
                messages: [{"role": "user", "content": prompt}],
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
                },
            }
        );
        //console.log("Full response data:", response.data);
        //console.log("Full response data:", JSON.stringify(response.data, null, 2));
        console.log("AI response message:", response.data.choices[0].message.content);
        console.log("API Key:", process.env.OPENAI_API_KEY);
        //const message = response.data.choices[0].message;
        //console.log("message object: ", message);

        res.json({ response: response.data.choices[0].message.content })
    } catch (error) {
        console.error('Error message:', error.message);
        console.error('Error response:', error.response ? error.response.data : 'No response data');
        console.error('Error config:', error.config);
        
        res.status(500).json({ error: 'Error connecting to OpenAI API' });
    }
});

app.get('/', async => {
    try {
        console.log("Hello world!")
    } catch(error) {
        console.error("Error");
        // res.status(69).json({ error: 'Error' })
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });