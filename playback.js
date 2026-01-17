(function() {
    'use strict';
    
    // ==========================================================================
    // Configuration
    // ==========================================================================
    
    var stations = [
        { 
            name: 'Lounge', 
            theme: 'lounge',
            url: 'https://ice1.somafm.com/lush-128-mp3'
        },
        { 
            name: 'Cool', 
            theme: 'cool',
            url: 'https://ice1.somafm.com/groovesalad-128-mp3'
        },
        { 
            name: 'Rock', 
            theme: 'rock',
            url: 'https://ice1.somafm.com/metal-128-mp3'
        },
        { 
            name: 'Party', 
            theme: 'party',
            url: 'https://ice1.somafm.com/beatblender-128-mp3'
        },
        { 
            name: 'Chill', 
            theme: 'chill',
            url: 'https://ice1.somafm.com/dronezone-128-mp3'
        }
    ];
    
    // ==========================================================================
    // State
    // ==========================================================================
    
    var currentStationIndex = 0;
    var isPlaying = false;
    var audioElement = null;
    
    // ==========================================================================
    // DOM References (cached after init)
    // ==========================================================================
    
    var elements = {
        playBtn: null,
        stationName: null,
        floppyDisks: null,
        html: null
    };
    
    // ==========================================================================
    // Theme Management
    // ==========================================================================
    
    function setTheme(themeName) {
        elements.html.setAttribute('data-theme', themeName);
    }
    
    function updateActiveState(index) {
        // Remove active class from all disks
        elements.floppyDisks.forEach(function(disk) {
            disk.classList.remove('active');
        });
        
        // Add active class to selected disk
        if (elements.floppyDisks[index]) {
            elements.floppyDisks[index].classList.add('active');
        }
        
        // Update station name display
        if (elements.stationName) {
            elements.stationName.textContent = stations[index].name;
        }
        
        // Update theme
        setTheme(stations[index].theme);
    }
    
    // ==========================================================================
    // Audio Playback
    // ==========================================================================
    
    function updatePlayButton(playing) {
        if (elements.playBtn) {
            if (playing) {
                elements.playBtn.classList.add('playing');
            } else {
                elements.playBtn.classList.remove('playing');
            }
        }
    }
    
    function loadStation(index) {
        if (index < 0 || index >= stations.length) return;
        
        // Stop current stream if playing
        if (audioElement) {
            stopStream();
        }
        
        // Update current station
        currentStationIndex = index;
        updateActiveState(index);
        
        // Create and configure audio
        audioElement = new Audio();
        audioElement.preload = 'none';
        
        // Event handlers
        audioElement.addEventListener('playing', function() {
            isPlaying = true;
            updatePlayButton(true);
        });
        
        audioElement.addEventListener('pause', function() {
            isPlaying = false;
            updatePlayButton(false);
        });
        
        audioElement.addEventListener('error', function(e) {
            console.warn('Stream error:', e);
            isPlaying = false;
            updatePlayButton(false);
        });
        
        audioElement.addEventListener('stalled', function() {
            console.warn('Stream stalled...');
        });
        
        // Load and play
        audioElement.src = stations[index].url;
        
        var playPromise = audioElement.play();
        if (playPromise !== undefined) {
            playPromise.then(function() {
                isPlaying = true;
                updatePlayButton(true);
            }).catch(function(error) {
                console.warn('Autoplay prevented:', error);
                isPlaying = false;
                updatePlayButton(false);
            });
        }
    }
    
    function stopStream() {
        if (audioElement) {
            audioElement.pause();
            audioElement.src = '';
            audioElement.load();
            audioElement = null;
        }
        isPlaying = false;
        updatePlayButton(false);
    }
    
    function togglePlayback() {
        if (isPlaying) {
            stopStream();
        } else {
            loadStation(currentStationIndex);
        }
    }
    
    // ==========================================================================
    // Event Handlers
    // ==========================================================================
    
    function handleFloppyClick(e) {
        var floppy = e.target.closest('.floppy');
        if (!floppy) return;
        
        var streamIndex = parseInt(floppy.dataset.stream, 10);
        if (!isNaN(streamIndex)) {
            loadStation(streamIndex);
        }
    }
    
    function handlePlayButtonClick(e) {
        e.preventDefault();
        togglePlayback();
    }
    
    function handleKeyDown(e) {
        // Space bar to toggle playback (only if not in input)
        if (e.code === 'Space' && !e.target.matches('input, textarea, button')) {
            e.preventDefault();
            togglePlayback();
        }
        
        // Arrow keys to navigate stations
        if (e.code === 'ArrowRight' || e.code === 'ArrowDown') {
            e.preventDefault();
            var nextIndex = (currentStationIndex + 1) % stations.length;
            loadStation(nextIndex);
        }
        
        if (e.code === 'ArrowLeft' || e.code === 'ArrowUp') {
            e.preventDefault();
            var prevIndex = (currentStationIndex - 1 + stations.length) % stations.length;
            loadStation(prevIndex);
        }
        
        // Number keys 1-5 for direct station selection
        var num = parseInt(e.key, 10);
        if (num >= 1 && num <= 5) {
            loadStation(num - 1);
        }
    }
    
    // ==========================================================================
    // Initialization
    // ==========================================================================
    
    function cacheElements() {
        elements.playBtn = document.getElementById('playbackButton');
        elements.stationName = document.getElementById('stationName');
        elements.floppyDisks = Array.from(document.querySelectorAll('.floppy'));
        elements.html = document.documentElement;
    }
    
    function bindEvents() {
        // Floppy disk clicks
        document.addEventListener('click', function(e) {
            // Check for floppy click
            if (e.target.closest('.floppy')) {
                handleFloppyClick(e);
                return;
            }
            
            // Check for play button click
            if (e.target.closest('#playbackButton')) {
                handlePlayButtonClick(e);
                return;
            }
        });
        
        // Keyboard controls
        document.addEventListener('keydown', handleKeyDown);
    }
    
    function init() {
        cacheElements();
        bindEvents();
        
        // Set initial state (don't autoplay, just set visual state)
        updateActiveState(currentStationIndex);
        updatePlayButton(false);
    }
    
    // ==========================================================================
    // Bootstrap
    // ==========================================================================
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // Expose API for external use if needed
    window.vicetream = {
        loadStation: loadStation,
        togglePlayback: togglePlayback,
        getCurrentStation: function() { return currentStationIndex; },
        isPlaying: function() { return isPlaying; }
    };
    
})();
