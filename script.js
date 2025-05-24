document.addEventListener('DOMContentLoaded', function() {
    // Add animation to buttons on page load
    const buttons = document.querySelectorAll('.animated-btn');
    buttons.forEach(button => {
        button.style.animation = 'gradientShift 3s ease infinite';
    });
    
    // Form submission handler for contact page
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Here you would typically send the data to a server
            console.log('Form submitted:', { name, email, message });
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
    
    
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // Add hover effect to education timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach(item => {
        item.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
            this.style.boxShadow = '0 4px 15px rgba(156, 39, 176, 0.4)';
        });
        
        item.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
            this.style.boxShadow = 'none';
        });
    });
});
// Enhanced button click effects
document.addEventListener('DOMContentLoaded', function() {
    // Add ripple effect to all animated buttons
    const buttons = document.querySelectorAll('.animated-btn');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Remove any existing click class
            this.classList.remove('btn-clicked');
            
            // Get mouse position relative to button
            const rect = this.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Create pseudo-element at click position
            this.style.setProperty('--x', x + 'px');
            this.style.setProperty('--y', y + 'px');
            
            // Add click class to trigger animation
            this.classList.add('btn-clicked');
            
            // Remove class after animation completes
            setTimeout(() => {
                this.classList.remove('btn-clicked');
            }, 600);
        });
        
        // Continuous gradient animation on hover
        button.addEventListener('mouseenter', function() {
            this.style.animation = 'gradientShift 3s ease infinite';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.animation = '';
        });
    });
});




document.addEventListener('DOMContentLoaded', function() {
    const loadingPage = document.getElementById('loadingPage');
    const mainContent = document.getElementById('mainContent');
    let minLoadingTimeElapsed = false;
    let pageLoaded = false;

    // Minimum display time (4 seconds)
    setTimeout(() => {
        minLoadingTimeElapsed = true;
        checkPageLoad();
    }, 4000);

    // Check when page is fully loaded
    window.addEventListener('load', function() {
        pageLoaded = true;
        checkPageLoad();
    });

    function checkPageLoad() {
        if (minLoadingTimeElapsed && pageLoaded) {
            // Start fade out
            loadingPage.classList.add('fade-out');
            
            // Show main content after fade out completes
            setTimeout(() => {
                document.body.classList.add('loading-complete');
                loadingPage.style.display = 'none';
            }, 1500); // Match CSS transition duration
        }
    }

    // Fallback in case load event doesn't fire
    setTimeout(() => {
        if (!pageLoaded) {
            pageLoaded = true;
            checkPageLoad();
        }
    }, 8000); // Absolute maximum wait time
});






document.addEventListener('DOMContentLoaded', function() {
  const phrases = [
    "Welcome to My Portfolio",
    "I Build Beautiful Websites",
    "Front-End Developer",
    "UI/UX Enthusiast"
  ];
  const typewriterElement = document.getElementById('typewriter');
  let phraseIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  // Increased speed parameters
  let typingSpeed = 60; // Reduced from 100 (faster typing)
  let deletingSpeed = 30; // Reduced from 50 (faster deleting)
  let endPause = 1000; // Reduced from 1500 (shorter pause at end)
  let betweenPause = 300; // Reduced from 500 (shorter pause between phrases)

  function typeWriter() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
      typewriterElement.textContent = currentPhrase.substring(0, charIndex - 1);
      charIndex--;
      typingSpeed = deletingSpeed;
    } else {
      typewriterElement.textContent = currentPhrase.substring(0, charIndex + 1);
      charIndex++;
      typingSpeed = 60; // Consistent fast typing speed
    }

    if (!isDeleting && charIndex === currentPhrase.length) {
      typingSpeed = endPause;
      isDeleting = true;
    } 
    else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      typingSpeed = betweenPause;
    }

    setTimeout(typeWriter, typingSpeed);
  }

  setTimeout(typeWriter, 800); // Reduced initial delay from 1000
});

// Tilt effect for project cards
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.project-card');
    
    cards.forEach(card => {
        card.addEventListener('mousemove', handleTilt);
        card.addEventListener('mouseleave', resetTilt);
    });

    // Add audio player to the page
    createAudioPlayer();
});

function handleTilt(e) {
    const card = e.currentTarget;
    const cardRect = card.getBoundingClientRect();
    const x = e.clientX - cardRect.left;
    const y = e.clientY - cardRect.top;
    
    // Calculate angle based on mouse position
    const centerX = cardRect.width / 2;
    const centerY = cardRect.height / 2;
    const angleX = (y - centerY) / 20;
    const angleY = (centerX - x) / 20;
    
    // Only apply tilt if angle is less than 45 degrees
    const angle = Math.sqrt(angleX * angleX + angleY * angleY);
    if (angle < 45) {
        card.style.transform = `rotateX(${angleX}deg) rotateY(${angleY}deg)`;
        card.classList.add('tilt-effect');
    } else {
        resetTilt({ currentTarget: card });
    }
}

function resetTilt(e) {
    const card = e.currentTarget;
    card.style.transform = 'none';
    card.classList.remove('tilt-effect');
}

// Enhanced Audio player functionality
function createAudioPlayer() {
    const audioPlayer = document.createElement('div');
    audioPlayer.className = 'audio-player';
    
    // Create audio element
    const audio = document.createElement('audio');
    audio.src = 'music.mp3';
    audio.loop = true;
    
    // Create play button with gradient background
    const playButton = document.createElement('button');
    playButton.className = 'play-button';
    playButton.innerHTML = '▶';
    
    // Create sound wave animation
    const soundWave = document.createElement('div');
    soundWave.className = 'sound-wave';
    for(let i = 0; i < 4; i++) {
        const span = document.createElement('span');
        soundWave.appendChild(span);
    }
    
    // Add click handler
    playButton.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
            playButton.innerHTML = '⏸';
            audioPlayer.classList.add('playing');
        } else {
            audio.pause();
            playButton.innerHTML = '▶';
            audioPlayer.classList.remove('playing');
        }
    });
    
    // Add volume fade in/out
    audio.addEventListener('play', () => {
        audio.volume = 0;
        fadeInVolume(audio);
    });
    
    audio.addEventListener('pause', () => {
        fadeOutVolume(audio);
    });
    
    audioPlayer.appendChild(soundWave);
    audioPlayer.appendChild(playButton);
    audioPlayer.appendChild(audio);
    document.body.appendChild(audioPlayer);
}

// Volume fade functions
function fadeInVolume(audio) {
    let volume = 0;
    const fadeInterval = setInterval(() => {
        if (volume < 1) {
            volume += 0.1;
            audio.volume = volume;
        } else {
            clearInterval(fadeInterval);
        }
    }, 100);
}

function fadeOutVolume(audio) {
    let volume = audio.volume;
    const fadeInterval = setInterval(() => {
        if (volume > 0) {
            volume -= 0.1;
            audio.volume = volume;
        } else {
            clearInterval(fadeInterval);
        }
    }, 50);
}

// Handle audio autoplay restrictions
document.addEventListener('click', () => {
    const audio = document.querySelector('.audio-player audio');
    const audioPlayer = document.querySelector('.audio-player');
    const playButton = document.querySelector('.play-button');
    
    if (audio && audio.paused) {
        audio.play().then(() => {
            playButton.innerHTML = '⏸';
            audioPlayer.classList.add('playing');
        }).catch(() => {
            console.log('Autoplay prevented. User interaction required.');
        });
    }
});



