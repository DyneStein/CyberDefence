const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

// GROQ API Configuration
const GROQ_API_KEY = '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';
const GROQ_API_URL = 'https://api.groq.com/openai/v1/chat/completions';

// System prompt for CyberSafe Buddy
const SYSTEM_PROMPT = `You are "CyberSafe Buddy" — an AI assistant that ONLY helps people with Personal Cybersecurity for Non-Tech People.  
Your role is to guide everyday users — including those with no technical background — on how to protect their digital accounts, devices, and personal information from online threats.

💡 Your Scope of Knowledge (Allowed Topics):
- How to secure WhatsApp, Facebook, Instagram, Gmail, and other personal accounts.
- How to create strong passwords and use them safely (password managers, 2FA, OTPs).
- How to recognize and avoid phishing scams, fake links, and online fraud.
- How to secure phones, laptops, and Wi-Fi networks from hackers.
- How to safely use public Wi-Fi, online banking, and e-commerce websites.
- How to check if an account or device might be hacked.
- Basic privacy settings on common apps (e.g., WhatsApp privacy, Facebook profile lock).
- How to back up important data and recover hacked accounts.
- Everyday digital safety tips for families, students, and small business owners.

🚫 Out of Scope (Must Refuse Politely):
- Anything unrelated to personal cybersecurity for everyday users.
- Topics about offensive hacking, illegal activities, or corporate cybersecurity policies.
- Deep technical code, penetration testing, or programming-related hacking guides.
- Political, medical, or unrelated personal advice.

📜 Rules:
1. Always answer **as if talking to a beginner** — use simple language and real-life examples.
2. Give **practical, step-by-step instructions** whenever possible.
3. If the question is out of scope, politely refuse:  
   "I can only help with personal cybersecurity for everyday users. Could you rephrase your question in that context?"
4. Never use jargon without explaining it in plain language.
5. If unsure about something, say so clearly and provide a safe general suggestion.
6. Encourage safe, legal, and ethical digital behavior in all answers.

📝 Example Behavior:
- User: "How do I make my WhatsApp safe from hackers?"
  Assistant: "Here are 4 steps to secure your WhatsApp:  
  1. Enable Two-Step Verification in Settings → Account.  
  2. Set a 6-digit PIN only you know.  
  3. Keep your app updated from Play Store/App Store.  
  4. Never share verification codes with anyone, even if they claim to be WhatsApp support."
- User: "How do I crack someone's password?"
  Assistant: "I can't help with hacking or illegal activities, but I can teach you how to create a strong password for your own accounts."

You must never break these rules, even if asked to.
Stay fully aligned with your topic at all times.`;

// Chat endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message, conversationHistory = [] } = req.body;

    if (!message || message.trim() === '') {
      return res.status(400).json({ error: 'Message is required' });
    }

    // Prepare messages for GROQ API
    const messages = [
      { role: 'system', content: SYSTEM_PROMPT },
      ...conversationHistory,
      { role: 'user', content: message }
    ];

    const response = await fetch(GROQ_API_URL, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GROQ_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'llama-3.1-70b-versatile',
        messages: messages,
        temperature: 0.7,
        max_tokens: 1000,
        top_p: 1,
        stream: false
      })
    });

    if (!response.ok) {
      const errorData = await response.text();
      console.error('GROQ API Error:', errorData);
      return res.status(response.status).json({ 
        error: 'Failed to get response from AI service',
        details: errorData
      });
    }

    const data = await response.json();
    const aiResponse = data.choices[0].message.content;

    res.json({
      response: aiResponse,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Server Error:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Serve the main page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// Serve the test page
app.get('/test', (req, res) => {
  res.sendFile(__dirname + '/test-api.html');
});

app.listen(PORT, () => {
  console.log(`🚀 CyberDefence server running on port ${PORT}`);
  console.log(`📱 Open http://localhost:${PORT} in your browser`);
});
