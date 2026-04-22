document.addEventListener('DOMContentLoaded', () => {
    // 1. Interactive Cursor Logic
    const cursorDot = document.querySelector('.cursor-dot');
    const cursorOutline = document.querySelector('.cursor-outline');
    
    if(cursorDot && cursorOutline) {
        window.addEventListener('mousemove', function(e) {
            const posX = e.clientX;
            const posY = e.clientY;
            
            // Dot follows exactly
            cursorDot.style.left = `${posX}px`;
            cursorDot.style.top = `${posY}px`;
            
            // Outline follows with slight delay logic via css transition or JS animate
            cursorOutline.animate({
                left: `${posX}px`,
                top: `${posY}px`
            }, { duration: 500, fill: "forwards" });
        });

        // Hover effect for links and buttons
        const interactives = document.querySelectorAll('a, button, .btn');
        interactives.forEach(el => {
            el.addEventListener('mouseenter', () => {
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1.5)';
                cursorOutline.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
            });
            el.addEventListener('mouseleave', () => {
                cursorOutline.style.transform = 'translate(-50%, -50%) scale(1)';
                cursorOutline.style.backgroundColor = 'transparent';
            });
        });
    }

    // 2. Header Scroll Effect
    const header = document.getElementById('main-header');
    if(header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });
    }

    // 3. Mobile Menu Toggle
    const mobileToggle = document.querySelector('.mobile-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (mobileToggle) {
        mobileToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            mobileToggle.classList.toggle('active');
        });
    }

    // 4. Scroll Reveal Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.animate-on-scroll, h1, h2, .glass-panel, p');
    animatedElements.forEach(el => {
        el.classList.add('animate-on-scroll');
        observer.observe(el);
    });

    // 5. Hide custom cursor on touch devices to improve mobile experience
    if (window.matchMedia("(pointer: coarse)").matches && cursorDot && cursorOutline) {
        cursorDot.style.display = 'none';
        cursorOutline.style.display = 'none';
    }

    // 6. Horizontal Scroll Controls (Services Page)
    const scrollLeftBtn = document.getElementById('scrollLeftBtn');
    const scrollRightBtn = document.getElementById('scrollRightBtn');
    const hScroll = document.querySelector('.h-scroll-container');
    
    if (scrollLeftBtn && scrollRightBtn && hScroll) {
        // Button Clicks
        scrollLeftBtn.addEventListener('click', () => {
            hScroll.scrollBy({ left: -window.innerWidth * 0.8, behavior: 'smooth' });
        });
        scrollRightBtn.addEventListener('click', () => {
            hScroll.scrollBy({ left: window.innerWidth * 0.8, behavior: 'smooth' });
        });

        // Mouse Drag to Scroll
        let isDown = false;
        let startX;
        let scrollLeft;

        hScroll.addEventListener('mousedown', (e) => {
            isDown = true;
            hScroll.style.cursor = 'grabbing';
            startX = e.pageX - hScroll.offsetLeft;
            scrollLeft = hScroll.scrollLeft;
        });
        hScroll.addEventListener('mouseleave', () => {
            isDown = false;
            hScroll.style.cursor = 'default';
        });
        hScroll.addEventListener('mouseup', () => {
            isDown = false;
            hScroll.style.cursor = 'default';
        });
        hScroll.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - hScroll.offsetLeft;
            const walk = (x - startX) * 2; // Scroll multiplier
            hScroll.scrollLeft = scrollLeft - walk;
        });
    }
});
