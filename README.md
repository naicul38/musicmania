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

### 2. Embed Configuration

Run the build script to embed your environment variables directly into the JavaScript files:

```bash
node build-config.js
```

This will inject base64-encoded configuration directly into `playback.js`, `stage.js`, and `stage-viewer.js`. The configuration is obfuscated and not visible as a separate file in browser sources.

### 3. Deploy

When deploying to production (e.g., GitHub Pages, Netlify, Vercel):

**Option A: Use Deployment Platform Environment Variables**
- Set the environment variables in your deployment platform's dashboard
- Add a build command: `node build-config.js`
- The config will be generated during deployment

**Option B: Manual Build**
- Run `node build-config.js` locally with production credentials
- Deploy the modified JavaScript files with embedded config
- Make sure to regenerate for each deployment

## File Structure

```
.
├── .env                    # Your local environment variables (git-ignored)
├── build-config.js        # Script to embed config into JS files
├── index.html             # Main radio player page
├── playback.js            # Radio player logic (config embedded)
├── stage.html             # Live performance viewer page
├── stage-viewer.js        # Viewer logic (config embedded)
├── broadcaster.html       # DJ broadcasting studio
├── stage.js               # Broadcaster logic (config embedded)
└── ...
```

## Security Notes

- **Never commit** `.env` file to version control
- Configuration is base64-encoded and embedded directly in JavaScript files during build
- While obfuscated, determined users can still decode the config (it's client-side JavaScript)
- For true security, use a backend API to proxy streams
- The embedded approach prevents URLs from being easily visible in browser sources and makes them harder to discover

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