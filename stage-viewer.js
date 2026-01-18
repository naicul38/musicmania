(function() {
    'use strict';
    
    // ==========================================================================
    // Configuration - Check if stream is live
    // ==========================================================================
    
    // In a real app, this would check an API endpoint
    // For now, we'll check localStorage as a simple demo
    const LIVE_STATUS_KEY = 'vicetream_live_status';
    const LIVE_STREAM_KEY = 'vicetream_live_stream';
    const LIVE_DJ_NAME_KEY = 'vicetream_dj_name';
    
    // ==========================================================================
    // DOM Elements
    // ==========================================================================
    
    const elements = {
        liveFeed: null,
        liveAudio: null,
        emptyStage: null,
        statusBadge: null,
        statusText: null,
        djName: null,
        djNameText: null,
        backBtn: null,
        equalizer: null,
        eqBars: null
    };
    
    // ==========================================================================
    // State
    // ==========================================================================
    
    let state = {
        isLive: false,
        audioContext: null,
        analyser: null,
        animationFrameId: null,
        checkInterval: null
    };
    
    // ==========================================================================
    // Initialization
    // ==========================================================================
    
    function init() {
        cacheElements();
        checkLiveStatus();
        
        // Check for live status every 10 seconds
        state.checkInterval = setInterval(checkLiveStatus, 10000);
    }
    
    function cacheElements() {
        elements.liveFeed = document.getElementById('liveFeed');
        elements.liveAudio = document.getElementById('liveAudio');
        elements.emptyStage = document.getElementById('emptyStage');
        elements.statusBadge = document.getElementById('statusBadge');
        elements.statusText = elements.statusBadge?.querySelector('.stage-status-text');
        elements.djName = document.getElementById('djName');
        elements.djNameText = document.getElementById('djNameText');
        elements.backBtn = document.getElementById('backBtn');
        elements.equalizer = document.getElementById('equalizer');
        elements.eqBars = elements.equalizer?.querySelectorAll('.stage-eq-bar');
    }
    
    // ==========================================================================
    // Check Live Status
    // ==========================================================================
    
    function checkLiveStatus() {
        // In production, this would be an API call
        // For demo purposes, checking localStorage
        const isLive = localStorage.getItem(LIVE_STATUS_KEY) === 'true';
        
        if (isLive) {
            const streamUrl = localStorage.getItem(LIVE_STREAM_KEY);
            const djName = localStorage.getItem(LIVE_DJ_NAME_KEY) || 'Live DJ';
            showLivePerformance(streamUrl, djName);
        } else {
            showEmptyStage();
        }
    }
    
    // ==========================================================================
    // Show Empty Stage
    // ==========================================================================
    
    function showEmptyStage() {
        if (state.isLive) {
            stopViewing();
        }
        
        state.isLive = false;
        elements.emptyStage.style.display = 'flex';
        elements.backBtn.style.display = 'none';
        elements.djName.style.display = 'none';
        elements.statusBadge.classList.remove('live');
        elements.statusText.textContent = 'OFFLINE';
    }
    
    // ==========================================================================
    // Show Live Performance
    // ==========================================================================
    
    function showLivePerformance(streamUrl, djName) {
        if (state.isLive) return; // Already viewing
        
        state.isLive = true;
        
        // Hide empty stage
        elements.emptyStage.style.display = 'none';
        elements.backBtn.style.display = 'flex';
        
        // Show DJ name
        elements.djName.style.display = 'block';
        elements.djNameText.textContent = djName;
        
        // Update status
        elements.statusBadge.classList.add('live');
        elements.statusText.textContent = 'LIVE';
        
        // Load audio stream
        if (streamUrl) {
            elements.liveAudio.src = streamUrl;
            elements.liveAudio.play().catch(err => {
                console.warn('Autoplay blocked:', err);
            });
            
            // Initialize visualizer
            initAudioVisualizer();
        }
        
        // Note: In a real app, you'd connect to a WebRTC stream or similar
        // for the camera feed. For now, we'll just show the overlay.
    }
    
    // ==========================================================================
    // Stop Viewing
    // ==========================================================================
    
    function stopViewing() {
        // Stop audio
        elements.liveAudio.pause();
        elements.liveAudio.src = '';
        
        // Stop visualizer
        stopAudioVisualizer();
    }
    
    // ==========================================================================
    // Audio Visualizer
    // ==========================================================================
    
    function initAudioVisualizer() {
        try {
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            state.audioContext = new AudioContextClass();
            
            state.analyser = state.audioContext.createAnalyser();
            state.analyser.fftSize = 256;
            state.analyser.smoothingTimeConstant = 0.8;
            
            const source = state.audioContext.createMediaElementSource(elements.liveAudio);
            source.connect(state.analyser);
            state.analyser.connect(state.audioContext.destination);
            
            visualize();
        } catch (error) {
            console.error('Failed to initialize visualizer:', error);
        }
    }
    
    function visualize() {
        if (!state.isLive || !state.analyser) return;
        
        const bufferLength = state.analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        
        function draw() {
            if (!state.isLive) return;
            
            state.animationFrameId = requestAnimationFrame(draw);
            state.analyser.getByteFrequencyData(dataArray);
            
            const barsCount = elements.eqBars.length;
            const step = Math.floor(bufferLength / barsCount);
            
            elements.eqBars.forEach((bar, index) => {
                const value = dataArray[index * step];
                const percent = value / 255;
                const height = 30 + (percent * 70);
                bar.style.height = height + 'px';
            });
        }
        
        draw();
    }
    
    function stopAudioVisualizer() {
        if (state.animationFrameId) {
            cancelAnimationFrame(state.animationFrameId);
            state.animationFrameId = null;
        }
        
        if (state.audioContext) {
            state.audioContext.close();
            state.audioContext = null;
            state.analyser = null;
        }
        
        elements.eqBars?.forEach(bar => {
            bar.style.height = '30px';
        });
    }
    
    // ==========================================================================
    // Cleanup
    // ==========================================================================
    
    window.addEventListener('beforeunload', () => {
        if (state.checkInterval) {
            clearInterval(state.checkInterval);
        }
        stopViewing();
    });
    
    // ==========================================================================
    // Bootstrap
    // ==========================================================================
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
})();
