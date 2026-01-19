# Vicetream FM

A modern, pop-art inspired web radio player with live DJ performance capabilities.

## Setup

### 1. Configure Environment Variables

Copy the example environment file:
```bash
cp .env.example .env
```

Edit `.env` and add your actual stream URLs and configuration:
```bash
# Radio Station Stream URLs
STREAM_URL_LOUNGE=https://your-stream-url-1.mp3
STREAM_URL_COOL=https://your-stream-url-2.mp3
# ... etc

# Live Performance Settings
LIVE_STREAM_ENDPOINT=https://your-streaming-server.com/live
LIVE_WEBRTC_SIGNALING_SERVER=wss://your-signaling-server.com
```

### 2. Generate Configuration File

Run the build script to generate `config.js` from your environment variables:

```bash
node build-config.js
```

This will create a `config.js` file with your configuration. This file is git-ignored and should never be committed to version control.

### 3. Deploy

When deploying to production (e.g., GitHub Pages, Netlify, Vercel):

**Option A: Use Deployment Platform Environment Variables**
- Set the environment variables in your deployment platform's dashboard
- Add a build command: `node build-config.js`
- The config will be generated during deployment

**Option B: Manual Build**
- Run `node build-config.js` locally with production credentials
- Deploy the generated `config.js` file (only for this deployment)
- Make sure to regenerate for each deployment

## File Structure

```
.
├── .env                    # Your local environment variables (git-ignored)
├── .env.example           # Template for environment variables
├── build-config.js        # Script to generate config.js from env vars
├── config.js              # Generated configuration (git-ignored)
├── index.html             # Main radio player page
├── playback.js            # Radio player logic
├── stage.html             # Live performance viewer page
├── stage-viewer.js        # Viewer logic
├── broadcaster.html       # DJ broadcasting studio
├── stage.js               # Broadcaster logic
└── ...
```

## Security Notes

- **Never commit** `.env` or `config.js` files to version control
- Stream URLs in `config.js` will be visible to users (client-side JavaScript)
- For true security, use a backend API to proxy streams
- The environment variable approach prevents URLs from being indexed by search engines and makes them less discoverable

## Development

1. Set up your `.env` file with development/test URLs
2. Run `node build-config.js`
3. Open `index.html` in your browser or use a local server:
   ```bash
   python -m http.server 8000
   # or
   npx serve
   ```

## License

MIT