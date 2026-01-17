(function() {
    'use strict';
    
    // Stream sources - SomaFM reliable streams
    var sources = [
        "https://ice1.somafm.com/lush-128-mp3",        // Lounge - sensuous & mellow vocals
        "https://ice1.somafm.com/groovesalad-128-mp3", // Cool - ambient/downtempo grooves
        "https://ice1.somafm.com/metal-128-mp3",       // Rock - heavy metal
        "https://ice1.somafm.com/beatblender-128-mp3", // Party - electronic/dance beats
        "https://ice1.somafm.com/dronezone-128-mp3"    // Chill - ambient/space music
    ];
    
    // State
    var playingIndex = 0;
    var playing = false;
    var music = null;
    var playbackButton = null;
    
    // Cache DOM element reference
    function getPlaybackButton() {
        if (!playbackButton) {
            playbackButton = document.getElementById('playbackButton');
        }
        return playbackButton;
    }
    
    // Update play/pause icon
    function setIcon(isPlaying) {
        var btn = getPlaybackButton();
        if (btn) {
            btn.className = isPlaying ? 'icon fa-pause' : 'icon fa-play';
        }
    }
    
    // Load and play a stream
    function loadStream(index) {
        if (index < 0 || index >= sources.length) return;
        
        // Clean up existing stream
        if (music) {
            destroyStream();
        }
        
        music = new Audio();
        music.preload = 'none'; // Don't preload until play
        
        // Error handling
        music.addEventListener('error', function(e) {
            console.warn('Stream error:', e);
            setIcon(false);
            playing = false;
        });
        
        // Update state when playing starts
        music.addEventListener('playing', function() {
            setIcon(true);
            playing = true;
        });
        
        // Handle stream ending/stalling
        music.addEventListener('stalled', function() {
            console.warn('Stream stalled, attempting recovery...');
        });
        
        music.src = sources[index];
        playingIndex = index;
        
        // Modern browsers require user interaction for autoplay
        var playPromise = music.play();
        if (playPromise !== undefined) {
            playPromise.then(function() {
                setIcon(true);
                playing = true;
            }).catch(function(error) {
                console.warn('Autoplay prevented:', error);
                setIcon(false);
                playing = false;
            });
        }
    }
    
    // Stop and clean up stream
    function destroyStream() {
        if (music) {
            music.pause();
            music.src = '';
            music.load(); // Reset the audio element
        }
        setIcon(false);
        playing = false;
    }
    
    // Toggle playback
    function changePlayback() {
        if (playing) {
            destroyStream();
        } else {
            loadStream(playingIndex);
        }
    }
    
    // Initialize when DOM is ready
    function init() {
        setIcon(false);
        
        // Event delegation for stream buttons
        document.addEventListener('click', function(e) {
            var btn = e.target.closest('.stream-btn');
            if (btn) {
                var streamIndex = parseInt(btn.dataset.stream, 10);
                if (!isNaN(streamIndex)) {
                    loadStream(streamIndex);
                }
                return;
            }
            
            // Playback button
            if (e.target.closest('#playbackButton')) {
                e.preventDefault();
                changePlayback();
            }
        });
        
        // Keyboard controls
        document.addEventListener('keydown', function(e) {
            // Space bar to toggle playback (only if not in input)
            if (e.code === 'Space' && !e.target.matches('input, textarea, button')) {
                e.preventDefault();
                changePlayback();
            }
        });
    }
    
    // Run init when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // Expose for any external needs
    window.loadStream = loadStream;
    window.changePlayback = changePlayback;
})();
