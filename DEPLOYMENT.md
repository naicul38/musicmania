# Deployment Guide

## Environment Variables Setup

Your stream URLs and live performance settings are now configured via environment variables for better security and maintainability.

### Local Development

1. **Copy the example environment file:**
   ```bash
   cp .env.example .env
   ```

2. **Edit `.env` with your actual URLs:**
   ```bash
   # Example:
   STREAM_URL_LOUNGE=https://your-actual-stream-url.mp3
   STREAM_URL_COOL=https://another-stream-url.mp3
   # ... etc
   ```

3. **Generate config.js:**
   ```bash
   node build-config.js
   ```

4. **Open in browser:**
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Or using npx
   npx serve
   ```

---

## Deployment Options

### Option 1: GitHub Pages with GitHub Actions (Recommended)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Generate config from secrets
      env:
        STREAM_URL_LOUNGE: ${{ secrets.STREAM_URL_LOUNGE }}
        STREAM_URL_COOL: ${{ secrets.STREAM_URL_COOL }}
        STREAM_URL_ROCK: ${{ secrets.STREAM_URL_ROCK }}
        STREAM_URL_PARTY: ${{ secrets.STREAM_URL_PARTY }}
        STREAM_URL_CHILL: ${{ secrets.STREAM_URL_CHILL }}
        CHANNEL_ID_LOUNGE: ${{ secrets.CHANNEL_ID_LOUNGE }}
        CHANNEL_ID_COOL: ${{ secrets.CHANNEL_ID_COOL }}
        CHANNEL_ID_ROCK: ${{ secrets.CHANNEL_ID_ROCK }}
        CHANNEL_ID_PARTY: ${{ secrets.CHANNEL_ID_PARTY }}
        CHANNEL_ID_CHILL: ${{ secrets.CHANNEL_ID_CHILL }}
        LIVE_STREAM_ENDPOINT: ${{ secrets.LIVE_STREAM_ENDPOINT }}
        LIVE_WEBRTC_SIGNALING_SERVER: ${{ secrets.LIVE_WEBRTC_SIGNALING_SERVER }}
        LIVE_STORAGE_KEY: ${{ secrets.LIVE_STORAGE_KEY }}
      run: node build-config.js
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./
```

**Set up secrets in GitHub:**
1. Go to your repo → Settings → Secrets and variables → Actions
2. Add each environment variable as a secret
3. Push to main branch to trigger deployment

---

### Option 2: Netlify

#### Using Netlify UI:
1. Connect your GitHub repo to Netlify
2. **Build command:** `node build-config.js`
3. **Publish directory:** `./`
4. **Environment variables:** Add in Site Settings → Environment Variables:
   - `STREAM_URL_LOUNGE`
   - `STREAM_URL_COOL`
   - `STREAM_URL_ROCK`
   - `STREAM_URL_PARTY`
   - `STREAM_URL_CHILL`
   - `CHANNEL_ID_LOUNGE`
   - `CHANNEL_ID_COOL`
   - `CHANNEL_ID_ROCK`
   - `CHANNEL_ID_PARTY`
   - `CHANNEL_ID_CHILL`
   - `LIVE_STREAM_ENDPOINT`
   - `LIVE_WEBRTC_SIGNALING_SERVER`
   - `LIVE_STORAGE_KEY`

#### Using `netlify.toml`:
```toml
[build]
  command = "node build-config.js"
  publish = "."

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

---

### Option 3: Vercel

#### Using Vercel CLI:
```bash
vercel
```

Then add environment variables in the Vercel dashboard:
1. Go to your project → Settings → Environment Variables
2. Add all variables from `.env.example`

#### Using `vercel.json`:
```json
{
  "buildCommand": "node build-config.js",
  "outputDirectory": ".",
  "routes": [
    { "handle": "filesystem" },
    { "src": "/(.*)", "dest": "/index.html" }
  ]
}
```

---

### Option 4: Manual Deployment (Any Static Host)

For any static hosting provider (Cloudflare Pages, AWS S3, etc.):

1. **Build locally:**
   ```bash
   # Set production environment variables
   export STREAM_URL_LOUNGE="https://..."
   export STREAM_URL_COOL="https://..."
   # ... etc
   
   # Generate config
   node build-config.js
   ```

2. **Deploy all files** including the generated `config.js`

3. **Important:** Never commit `config.js` to git, but do deploy it with your site

---

## Security Considerations

### ⚠️ Important Notes:

1. **Client-Side Exposure:** 
   - URLs in `config.js` will be visible to users (JavaScript is client-side)
   - This approach obfuscates URLs but doesn't make them truly private
   - For real security, use a backend API to proxy streams

2. **Benefits of Environment Variables:**
   - URLs not directly in source code
   - Not indexed by search engines
   - Easy to rotate/update without code changes
   - Different URLs for dev/staging/production

3. **Best Practice for Production:**
   - Use a backend server to proxy streams
   - Implement rate limiting
   - Add authentication if needed
   - Monitor usage

---

## Troubleshooting

### Config not loading:
- Check browser console for errors
- Verify `config.js` exists and is accessible
- Ensure `build-config.js` ran successfully

### Environment variables not found:
- Verify variables are set in deployment platform
- Check variable names match exactly (case-sensitive)
- Rebuild after adding/changing variables

### Streams not playing:
- Check CORS headers on stream URLs
- Verify URLs are publicly accessible
- Test URLs directly in browser

---

## Quick Deployment Checklist

- [ ] Copy `.env.example` to `.env`
- [ ] Fill in actual stream URLs in `.env`
- [ ] Run `node build-config.js` to test
- [ ] Test locally
- [ ] Choose deployment platform
- [ ] Set up environment variables in platform
- [ ] Configure build command: `node build-config.js`
- [ ] Deploy
- [ ] Verify `config.js` is generated during build
- [ ] Test live site

---

## Need Help?

- Check that `config.js` exists in your deployed site
- Verify environment variables are set correctly
- Test the build script locally first
- Check browser console for JavaScript errors
