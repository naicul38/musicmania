#!/usr/bin/env node

/**
 * Build Configuration Script
 * Reads environment variables and embeds them directly into JavaScript files
 * Run this script before deploying: node build-config.js
 */

const fs = require('fs');
const path = require('path');

// Load .env file if it exists
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    envContent.split('\n').forEach(line => {
        const trimmed = line.trim();
        if (trimmed && !trimmed.startsWith('#')) {
            const [key, ...valueParts] = trimmed.split('=');
            const value = valueParts.join('=');
            if (key && value) {
                process.env[key] = value;
            }
        }
    });
}

// Read environment variables and encode them
const config = {
    streams: {
        1: process.env.STREAM_URL_LOUNGE || '',
        2: process.env.STREAM_URL_COOL || '',
        3: process.env.STREAM_URL_ROCK || '',
        4: process.env.STREAM_URL_PARTY || '',
        5: process.env.STREAM_URL_CHILL || ''
    },
    channels: {
        1: process.env.CHANNEL_ID_LOUNGE || '',
        2: process.env.CHANNEL_ID_COOL || '',
        3: process.env.CHANNEL_ID_ROCK || '',
        4: process.env.CHANNEL_ID_PARTY || '',
        5: process.env.CHANNEL_ID_CHILL || ''
    },
    live: {
        streamEndpoint: process.env.LIVE_STREAM_ENDPOINT || '',
        webrtcSignalingServer: process.env.LIVE_WEBRTC_SIGNALING_SERVER || '',
        storageKey: process.env.LIVE_STORAGE_KEY || 'vicetream_live_status'
    }
};

// Encode config to base64 for obfuscation
const configJson = JSON.stringify(config);
const configEncoded = Buffer.from(configJson).toString('base64');

// Config injection code
const configInjection = `    // CONFIG_PLACEHOLDER_START - Auto-injected by build-config.js
    var CONFIG = JSON.parse(atob('${configEncoded}'));
    // CONFIG_PLACEHOLDER_END`;

// Files to inject config into
const filesToInject = ['playback.js', 'stage.js', 'stage-viewer.js'];

filesToInject.forEach(filename => {
    const filePath = path.join(__dirname, filename);
    
    if (!fs.existsSync(filePath)) {
        console.warn(`⚠️  File not found: ${filename}`);
        return;
    }
    
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace the config placeholder section
    const regex = /\/\/ CONFIG_PLACEHOLDER_START[\s\S]*?\/\/ CONFIG_PLACEHOLDER_END/;
    
    if (regex.test(content)) {
        content = content.replace(regex, configInjection.trim());
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`✅ Injected config into: ${filename}`);
    } else {
        console.warn(`⚠️  No config placeholder found in: ${filename}`);
    }
});

console.log('\n✅ Configuration embedded successfully!');
console.log('📦 Config is now obfuscated and embedded in JS files');

// Validate that all required URLs are present
const missingVars = [];
Object.entries(config.streams).forEach(([key, value]) => {
    if (!value) missingVars.push(`STREAM_URL for station ${key}`);
});
Object.entries(config.channels).forEach(([key, value]) => {
    if (!value) missingVars.push(`CHANNEL_ID for station ${key}`);
});

if (missingVars.length > 0) {
    console.warn('\n⚠️  Warning: Missing environment variables:');
    missingVars.forEach(v => console.warn(`   - ${v}`));
    console.warn('\nCheck your .env file and make sure all variables are set.');
}
