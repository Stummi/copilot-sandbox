// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Counter functionality
    let counter = 0;
    const counterDisplay = document.getElementById('counter');
    const incrementBtn = document.getElementById('increment-btn');
    const decrementBtn = document.getElementById('decrement-btn');
    const resetBtn = document.getElementById('reset-btn');
    
    // Update counter display
    function updateCounter() {
        counterDisplay.textContent = counter;
        // Add animation effect
        counterDisplay.style.transform = 'scale(1.2)';
        setTimeout(() => {
            counterDisplay.style.transform = 'scale(1)';
        }, 200);
    }
    
    // Counter event listeners
    incrementBtn.addEventListener('click', () => {
        counter++;
        updateCounter();
    });
    
    decrementBtn.addEventListener('click', () => {
        counter--;
        updateCounter();
    });
    
    resetBtn.addEventListener('click', () => {
        counter = 0;
        updateCounter();
    });
    
    // Welcome button functionality
    const welcomeBtn = document.getElementById('welcome-btn');
    welcomeBtn.addEventListener('click', () => {
        showWelcomeMessage();
    });
    
    function showWelcomeMessage() {
        const messages = [
            "Hello there! 👋",
            "Welcome to our demo site! 🎉",
            "Thanks for clicking! ✨",
            "Isn't this fun? 😄",
            "Keep exploring! 🚀"
        ];
        
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        
        // Create a temporary message element
        const messageEl = document.createElement('div');
        messageEl.textContent = randomMessage;
        messageEl.style.cssText = `
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            color: white;
            padding: 1rem 2rem;
            border-radius: 10px;
            font-size: 1.2rem;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
            z-index: 10000;
            animation: fadeInScale 0.3s ease-out;
        `;
        
        document.body.appendChild(messageEl);
        
        // Remove message after 2 seconds
        setTimeout(() => {
            messageEl.style.animation = 'fadeOutScale 0.3s ease-out';
            setTimeout(() => {
                document.body.removeChild(messageEl);
            }, 300);
        }, 2000);
    }
    
    // Color changer functionality
    const colorBox = document.getElementById('color-box');
    const changeColorBtn = document.getElementById('change-color-btn');
    
    const colors = [
        '#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4', '#FFEAA7',
        '#DDA0DD', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E9',
        '#F8C471', '#82E0AA', '#F1948A', '#85C1E9', '#D7BDE2'
    ];
    
    changeColorBtn.addEventListener('click', () => {
        const randomColor = colors[Math.floor(Math.random() * colors.length)];
        colorBox.style.backgroundColor = randomColor;
        
        // Add a ripple effect
        colorBox.style.transform = 'scale(1.1)';
        setTimeout(() => {
            colorBox.style.transform = 'scale(1)';
        }, 200);
    });
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add scroll effect to navigation
    let lastScrollTop = 0;
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', () => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
        
        // Add background opacity based on scroll
        const opacity = Math.min(scrollTop / 100, 0.95);
        header.style.background = `rgba(255, 255, 255, ${opacity})`;
    });
    
    // Add some interactive animations on scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all content sections for scroll animations
    const sections = document.querySelectorAll('.content-section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });
    
    // Add some fun keyboard shortcuts
    document.addEventListener('keydown', (e) => {
        // Press 'C' to change color
        if (e.key.toLowerCase() === 'c' && !e.ctrlKey && !e.altKey) {
            changeColorBtn.click();
        }
        
        // Press '+' to increment counter
        if (e.key === '+' || e.key === '=') {
            incrementBtn.click();
        }
        
        // Press '-' to decrement counter
        if (e.key === '-') {
            decrementBtn.click();
        }
        
        // Press 'R' to reset counter
        if (e.key.toLowerCase() === 'r' && !e.ctrlKey && !e.altKey) {
            resetBtn.click();
        }
    });
    
    // Add CSS for animations if not already present
    if (!document.querySelector('#dynamic-styles')) {
        const style = document.createElement('style');
        style.id = 'dynamic-styles';
        style.textContent = `
            @keyframes fadeInScale {
                from {
                    opacity: 0;
                    transform: translate(-50%, -50%) scale(0.8);
                }
                to {
                    opacity: 1;
                    transform: translate(-50%, -50%) scale(1);
                }
            }
            
            @keyframes fadeOutScale {
                from {
                    opacity: 1;
                    transform: translate(-50%, -50%) scale(1);
                }
                to {
                    opacity: 0;
                    transform: translate(-50%, -50%) scale(0.8);
                }
            }
            
            header {
                transition: transform 0.3s ease, background 0.3s ease;
            }
            
            #counter {
                transition: transform 0.2s ease;
            }
        `;
        document.head.appendChild(style);
    }
    
    // Add a console message for developers
    console.log(`
    🎉 Welcome to the Hello World Demo Page! 
    
    Try these keyboard shortcuts:
    - Press 'C' to change the color box
    - Press '+' to increment the counter  
    - Press '-' to decrement the counter
    - Press 'R' to reset the counter
    
    Enjoy exploring the interactive features!
    `);
    
});