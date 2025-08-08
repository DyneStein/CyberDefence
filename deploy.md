# 🚀 Quick Deployment Guide

## Option 1: Vercel (Recommended - Free)

### Step 1: Install Vercel CLI
```bash
npm install -g vercel
```

### Step 2: Deploy
```bash
vercel
```

### Step 3: Follow Prompts
- Link to existing project or create new
- Set build command: `npm install`
- Set output directory: `public`
- Set install command: `npm install`

### Step 4: Set Environment Variables
In Vercel dashboard:
- Go to your project settings
- Add environment variable: `GROQ_API_KEY`
- Value: `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`

## Option 2: Netlify

### Step 1: Create netlify.toml
```toml
[build]
  command = "npm install"
  publish = "public"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Step 2: Deploy via Netlify Dashboard
- Connect your GitHub repository
- Set build command: `npm install`
- Set publish directory: `public`

## Option 3: Railway

### Step 1: Connect Repository
- Link your GitHub repository to Railway
- Railway will auto-detect Node.js

### Step 2: Set Environment Variables
- Add `GROQ_API_KEY` in Railway dashboard
- Value: `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`

## Local Testing

### Step 1: Install Dependencies
```bash
npm install
```

### Step 2: Create .env File
```bash
cp env.example .env
```

### Step 3: Start Server
```bash
npm start
```

### Step 4: Open Browser
```
http://localhost:3000
```

## Troubleshooting

### Common Issues:
1. **Port in use**: Change PORT in .env file
2. **API errors**: Check GROQ API key validity
3. **Build fails**: Ensure all files are committed

### Debug Mode:
```bash
DEBUG=* npm start
```

---

**Your CyberDefence app should now be live! 🎉**
