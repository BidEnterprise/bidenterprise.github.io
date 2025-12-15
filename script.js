document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('main-header');

    // 1. Initial Pop-out Header Animation
    // This makes the header slide down into view after the page loads.
    setTimeout(() => {
        header.classList.add('active');
    }, 100); // Small delay to ensure CSS is parsed

    // 2. Scroll-Based Header Visibility/Style Change (Optional enhancement)
    // This could be used to change the header background on scroll
    // to give it a further 'popout' effect against the page content.
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        } else {
            header.style.backgroundColor = 'white';
        }
    });

    // 3. Smooth Scrolling for Navigation Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            // Check if it's the login link (which shouldn't scroll)
            if (this.classList.contains('cta-link')) {
                return; 
            }
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = header.offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });
});