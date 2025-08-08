# 🛡️ CyberDefence - React Cybersecurity Chatbot

A beautiful, modern React-based web application that provides personalized cybersecurity guidance through an AI-powered chatbot. Built with Vite and deployed on Vercel.

## ✨ Features

- **🤖 AI-Powered Chatbot**: Powered by GROQ's Llama 3.1-70B model
- **⚛️ Modern React**: Built with React 18, Vite, and modern hooks
- **🎨 Beautiful UI**: Clean, aesthetic design with soft pastel colors
- **📱 Fully Responsive**: Works perfectly on all devices
- **⚡ Fast & Lightweight**: Optimized for performance
- **🔒 Cybersecurity Focus**: Specialized in personal cybersecurity education
- **💬 Real-time Chat**: Smooth typing indicators and message animations

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Local Development

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Start Development Server**
   ```bash
   npm run dev
   ```

3. **Open in Browser**
   ```
   http://localhost:3000
   ```

### Build for Production
```bash
npm run build
```

## 🌐 Deploy to Vercel

### Option 1: Deploy with Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow the prompts** and your app will be live!

### Option 2: Deploy via GitHub

1. **Push to GitHub**
   - Create a new repository
   - Push all files to your repository

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect the React app
   - Deploy!

## 🛠️ Project Structure

```
cyberdefence-react/
├── src/
│   ├── App.jsx              # Main React component
│   ├── App.css              # Component styles
│   ├── main.jsx             # React entry point
│   └── index.css            # Global styles
├── api/
│   └── chat.js              # Vercel serverless function
├── public/
│   └── shield.svg           # App icon
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
├── vercel.json             # Vercel configuration
└── README.md               # This file
```

## 🎯 Features

### Chat Interface
- **Real-time messaging** with smooth animations
- **Typing indicators** when AI is responding
- **Message history** with timestamps
- **Responsive design** for all screen sizes

### AI Assistant
- **CyberSafe Buddy** - Your personal cybersecurity guide
- **Beginner-friendly** explanations
- **Step-by-step instructions** for security measures
- **Practical advice** for everyday users

### Security Topics Covered
- 🔐 Password security and 2FA
- 📱 Social media account protection
- 🎣 Phishing scam recognition
- 💻 Device and Wi-Fi security
- 🏦 Safe online banking and shopping
- 📧 Email security best practices

## 🎨 Design Features

- **Soft Pastel Colors**: Easy on the eyes
- **Modern Typography**: Inter font family
- **Smooth Animations**: Fade-in effects and transitions
- **Clean Layout**: Minimalist, focused design
- **Accessibility**: ARIA labels and keyboard navigation

## 🔧 Customization

### Change Colors
Edit `src/index.css`:
```css
:root {
  --primary-color: #667eea;    /* Main brand color */
  --secondary-color: #f093fb;  /* Accent color */
  --bg-primary: #fafbfc;      /* Background color */
}
```

### Modify Chatbot Behavior
Edit `api/chat.js` - modify the `SYSTEM_PROMPT` variable

### Add Features
- Add new components in `src/`
- Enhance styling in `src/App.css`
- Add new API endpoints in `api/`

## 🧪 Testing

Test these questions once deployed:
- "How do I secure my WhatsApp?"
- "What is 2FA and why do I need it?"
- "How can I spot phishing emails?"
- "How do I create a strong password?"

## 📱 Responsive Design

The app is fully responsive and works on:
- 📱 Mobile phones
- 📱 Tablets
- 💻 Desktop computers
- 🖥️ Large screens

## 🚀 Performance

- **Fast Loading**: Optimized with Vite
- **Lightweight**: Minimal dependencies
- **SEO Friendly**: Proper meta tags
- **PWA Ready**: Can be converted to PWA

## 🔒 Security

- **Input Validation**: Sanitized user inputs
- **Error Handling**: Graceful error messages
- **CORS Protection**: Configured for web deployment
- **API Security**: Serverless function security

## 🐛 Troubleshooting

### Common Issues

1. **Build Errors**
   ```bash
   npm install
   npm run build
   ```

2. **API Errors**
   - Check GROQ API key validity
   - Verify account has sufficient credits

3. **Deployment Issues**
   - Ensure all files are committed
   - Check Vercel build logs

### Debug Mode
```bash
npm run dev
```

## 📝 License

MIT License - feel free to use and modify!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For issues or questions:
- Check the troubleshooting section
- Review the console for error messages
- Ensure all dependencies are installed

---

**Built with ❤️ for cybersecurity education**
