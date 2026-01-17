(function() {
    'use strict';
    
    // Pre-optimized image URLs (smaller size for faster loading)
    var images = [
        {"url": "https://images.unsplash.com/photo-553531384-cc64ac80f931?w=1920&q=75&fm=webp&fit=crop", "name": "Boxed Water Is Better", "author_url": "https://unsplash.com/@boxedwater"},
        {"url": "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=1920&q=75&fm=webp&fit=crop", "name": "Bailey Zindel", "author_url": "https://unsplash.com/@baileyzindel"},
        {"url": "https://images.unsplash.com/photo-1500964757637-c85e8a162699?w=1920&q=75&fm=webp&fit=crop", "name": "Simon Berger", "author_url": "https://unsplash.com/@8moments"},
        {"url": "https://images.unsplash.com/photo-1511576661531-b34d7da5d0bb?w=1920&q=75&fm=webp&fit=crop", "name": "Jeremy Bishop", "author_url": "https://unsplash.com/@jeremybishop"},
        {"url": "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=1920&q=75&fm=webp&fit=crop", "name": "Luca Bravo", "author_url": "https://unsplash.com/@lucabravo"},
        {"url": "https://images.unsplash.com/photo-1434725039720-aaad6dd32dfe?w=1920&q=75&fm=webp&fit=crop", "name": "Ales Krivec", "author_url": "https://unsplash.com/@aleskrivec"},
        {"url": "https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=1920&q=75&fm=webp&fit=crop", "name": "Mark Harpur", "author_url": "https://unsplash.com/@luckybeanz"},
        {"url": "https://images.unsplash.com/photo-1511884642898-4c92249e20b6?w=1920&q=75&fm=webp&fit=crop", "name": "pine watt", "author_url": "https://unsplash.com/@pinewatt"},
        {"url": "https://images.unsplash.com/photo-1587502537147-2ba64a62e3d3?w=1920&q=75&fm=webp&fit=crop", "name": "Boxed Water Is Better", "author_url": "https://unsplash.com/@boxedwater"},
        {"url": "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=1920&q=75&fm=webp&fit=crop", "name": "Pietro De Grandi", "author_url": "https://unsplash.com/@peter_mc_greats"},
        {"url": "https://images.unsplash.com/photo-1419064642531-e575728395f2?w=1920&q=75&fm=webp&fit=crop", "name": "Alberto Restifo", "author_url": "https://unsplash.com/@albertorestifo"},
        {"url": "https://images.unsplash.com/34/BA1yLjNnQCI1yisIZGEi_2013-07-16_1922_IMG_9873.jpg?w=1920&q=75&fm=webp&fit=crop", "name": "Ryan Schroeder", "author_url": "https://unsplash.com/@ryanschroeder"},
        {"url": "https://images.unsplash.com/photo-1433838552652-f9a46b332c40?w=1920&q=75&fm=webp&fit=crop", "name": "Daniela Cuevas", "author_url": "https://unsplash.com/@danielacuevas"},
        {"url": "https://images.unsplash.com/photo-1506260408121-e353d10b87c7?w=1920&q=75&fm=webp&fit=crop", "name": "Claudio Testa", "author_url": "https://unsplash.com/@claudiotesta"},
        {"url": "https://images.unsplash.com/photo-1418985227304-f32df7d84e39?w=1920&q=75&fm=webp&fit=crop", "name": "Alberto Restifo", "author_url": "https://unsplash.com/@albertorestifo"},
        {"url": "https://images.unsplash.com/photo-1524260855046-f743b3cdad07?w=1920&q=75&fm=webp&fit=crop", "name": "Dave Hoefler", "author_url": "https://unsplash.com/@johnwestrock"},
        {"url": "https://images.unsplash.com/flagged/photo-1564419188205-4a8e1bc1adc3?w=1920&q=75&fm=webp&fit=crop", "name": "Boxed Water Is Better", "author_url": "https://unsplash.com/@boxedwater"},
        {"url": "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?w=1920&q=75&fm=webp&fit=crop", "name": "Silas Baisch", "author_url": "https://unsplash.com/@silasbaisch"},
        {"url": "https://images.unsplash.com/photo-1518098268026-4e89f1a2cd8e?w=1920&q=75&fm=webp&fit=crop", "name": "Luca Micheli", "author_url": "https://unsplash.com/@lucamicheli"},
        {"url": "https://images.unsplash.com/photo-1469827160215-9d29e96e72f4?w=1920&q=75&fm=webp&fit=crop", "name": "Jeff King", "author_url": "https://unsplash.com/@jeffkingla"},
        {"url": "https://images.unsplash.com/photo-1459213599465-03ab6a4d5931?w=1920&q=75&fm=webp&fit=crop", "name": "Marcelo Quinan", "author_url": "https://unsplash.com/@marceloquinan"},
        {"url": "https://images.unsplash.com/photo-1523712999610-f77fbcfc3843?w=1920&q=75&fm=webp&fit=crop", "name": "Johannes Plenio", "author_url": "https://unsplash.com/@jplenio"},
        {"url": "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?w=1920&q=75&fm=webp&fit=crop", "name": "Ken Cheung", "author_url": "https://unsplash.com/@kencheungphoto"},
        {"url": "https://images.unsplash.com/photo-1502786129293-79981df4e689?w=1920&q=75&fm=webp&fit=crop", "name": "Danyu Wang", "author_url": "https://unsplash.com/@dandandan0101"},
        {"url": "https://images.unsplash.com/photo-1490604001847-b712b0c2f967?w=1920&q=75&fm=webp&fit=crop", "name": "Sergey Pesterev", "author_url": "https://unsplash.com/@sickle"},
        {"url": "https://images.unsplash.com/photo-1433477155337-9aea4e790195?w=1920&q=75&fm=webp&fit=crop", "name": "Jasper Boer", "author_url": "https://unsplash.com/@jasperboer"},
        {"url": "https://images.unsplash.com/uploads/1411400493228e06a6315/ad711a20?w=1920&q=75&fm=webp&fit=crop", "name": "Rodion Kutsaev", "author_url": "https://unsplash.com/@frostroomhead"},
        {"url": "https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1920&q=75&fm=webp&fit=crop", "name": "Robert Lukeman", "author_url": "https://unsplash.com/@robertlukeman"},
        {"url": "https://images.unsplash.com/photo-1501791330673-603715379ded?w=1920&q=75&fm=webp&fit=crop", "name": "Irene Dávila", "author_url": "https://unsplash.com/@irenedavila"},
        {"url": "https://images.unsplash.com/reserve/unsplash_524010c76b52a_1.JPG?w=1920&q=75&fm=webp&fit=crop", "name": "Matteo Minelli", "author_url": "https://unsplash.com/@matteominelli"}
    ];
    
    var currentIndex = 0;
    var imageHead = null;
    var authorNameEl = null;
    var nextImagePreloaded = null;
    var slideInterval = null;
    
    // Fisher-Yates shuffle for randomization
    function shuffleArray(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    }
    
    // Preload next image
    function preloadNext() {
        var nextIndex = (currentIndex + 1) % images.length;
        nextImagePreloaded = new Image();
        nextImagePreloaded.src = images[nextIndex].url;
    }
    
    // Change background image with smooth transition
    function changeImage() {
        if (!imageHead || !authorNameEl) return;
        
        var img = images[currentIndex];
        
        // Set background image
        imageHead.style.backgroundImage = 'url(' + img.url + ')';
        
        // Update author credit
        authorNameEl.textContent = img.name;
        authorNameEl.href = img.author_url;
        
        // Move to next image
        currentIndex = (currentIndex + 1) % images.length;
        
        // Preload the next image for smoother transitions
        preloadNext();
    }
    
    // Initialize slider
    function init() {
        imageHead = document.getElementById('bg');
        authorNameEl = document.getElementById('authorname');
        
        if (!imageHead || !authorNameEl) {
            console.warn('Background slider: Required elements not found');
            return;
        }
        
        // Shuffle images for variety
        shuffleArray(images);
        
        // Start with first image
        changeImage();
        
        // Change image every 15 seconds
        slideInterval = setInterval(changeImage, 15000);
        
        // Pause slideshow when tab is not visible (save bandwidth)
        document.addEventListener('visibilitychange', function() {
            if (document.hidden) {
                if (slideInterval) {
                    clearInterval(slideInterval);
                    slideInterval = null;
                }
            } else {
                if (!slideInterval) {
                    slideInterval = setInterval(changeImage, 15000);
                }
            }
        });
    }
    
    // Run init when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
