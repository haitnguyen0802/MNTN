console.log('Hello CFD Circle');

// Mobile Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    // Elements
    const burgerBtn = document.querySelector('.header__burger');
    const headerNav = document.querySelector('.header__nav');
    const header = document.querySelector('.header');
    const body = document.body;
    
    // Create overlay element
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    body.appendChild(overlay);
    
    // Toggle mobile menu
    if (burgerBtn) {
        burgerBtn.addEventListener('click', function() {
            headerNav.classList.toggle('active');
            header.classList.toggle('menu-open');
            overlay.classList.toggle('active');
            body.classList.toggle('no-scroll');
        });
    }
    
    // Close menu when clicking overlay
    overlay.addEventListener('click', function() {
        headerNav.classList.remove('active');
        header.classList.remove('menu-open');
        overlay.classList.remove('active');
        body.classList.remove('no-scroll');
    });
    
    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.header__nav') && !e.target.closest('.header__burger')) {
            headerNav.classList.remove('active');
            header.classList.remove('menu-open');
            overlay.classList.remove('active');
            body.classList.remove('no-scroll');
        }
    });
    
    // Add smooth scrolling to anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Close mobile menu if open
            headerNav.classList.remove('active');
            header.classList.remove('menu-open');
            overlay.classList.remove('active');
            body.classList.remove('no-scroll');
            
            // Scroll to target
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 100,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});

// Parallax effect for hero images
window.addEventListener('scroll', function() {
    const scrollPosition = window.pageYOffset;
    const heroSection = document.querySelector('.hero');
    
    if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        const scrollRatio = Math.min(scrollPosition / (heroHeight * 0.5), 1);
        
        // Lấy các layer
        const layerBg = document.querySelector('.hero__layer--bg img');
        const layerBottom = document.querySelector('.hero__layer--bottom img');
        const layerMiddle = document.querySelector('.hero__layer--middle img');
        const layerTop = document.querySelector('.hero__layer--top img');
        const layerPerson = document.querySelector('.hero__layer--person img');
        
        // Layer bg stays fixed
        if (layerBg) {
            layerBg.style.transform = 'translateY(0)';
        }
        
        // Bottom layer moves slowly
        if (layerBottom) {
            layerBottom.style.transform = `translateY(${Math.max(0, 30 - scrollRatio * 30)}px)`;
        }
        
        // Middle layer moves at medium speed
        if (layerMiddle) {
            layerMiddle.style.transform = `translateY(${Math.max(0, 60 - scrollRatio * 60)}px)`;
        }
        
        // Top layer moves faster
        if (layerTop) {
            layerTop.style.transform = `translateY(${Math.max(0, 90 - scrollRatio * 90)}px)`;
        }
        
        // Person layer fades in and moves up as scroll increases
        if (layerPerson) {
            const personOpacity = Math.min(scrollRatio * 2, 1);
            const personTranslate = Math.max(0, 120 - scrollRatio * 120);
            layerPerson.style.opacity = personOpacity;
            layerPerson.style.transform = `translateY(${personTranslate}px)`;
        }
        
        // Adjust text position based on scroll
        const heroText = document.querySelector('.hero__text');
        if (heroText) {
            const textTranslate = Math.min(scrollRatio * 50, 50);
            heroText.style.transform = `translateX(-50%) translateY(${textTranslate}px)`;
        }
    }
});

// Animate elements on scroll
document.addEventListener('DOMContentLoaded', function() {
    const animateOnScroll = function() {
        const elements = document.querySelectorAll(
            '.get-started__content, .get-started__image, ' +
            '.essentials__content, .essentials__image, ' +
            '.explore__content, .explore__image, ' +
            '.services__header, .services__item'
        );
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('fade-in');
            }
        });
    };
    
    // Run once on page load
    animateOnScroll();
    
    // Run on scroll
    window.addEventListener('scroll', animateOnScroll);
});