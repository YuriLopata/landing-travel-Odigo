//Fixed header
(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.scrollY > 45) {
            header.classList.add('header_active');
        } else {
            header.classList.remove('header_active');
        }
    };
}());

// Burger handler
(function () {
    const burgerItem = document.querySelector('.burger');
    const menu = document.querySelector('.header-nav');
    const menuCloseItem = document.querySelector('.header-nav-close');
    const menuLinks = document.querySelectorAll('.header-link');
    burgerItem.addEventListener('click', () => {
        menu.classList.add('header-nav-active');
    });
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header-nav-active');
    });
    if (window.innerWidth <= 767) {
        for (let i = 0; i < menuLinks.length; i += 1) {
            menuLinks[i].addEventListener('click', () => {
                menu.classList.remove('header-nav-active');
            });
        }
    }
}());

// Scroll to anchors
(function () {
    const smoothScroll = (targetEl, duration) => {
        const headerElHeight =  document.querySelector('.header').clientHeight;
        let target = document.querySelector(targetEl);
        let targetPosition = target.getBoundingClientRect().top - headerElHeight;
        let startPosition = window.pageYOffset;
        let startTime = null;
    
        const ease = (t,b,c,d) => {
            t /= d / 2;
            if (t < 1) return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        };
    
        const animation = (currentTime) => {
            if (startTime === null) startTime = currentTime;
            const timeElapsed = currentTime - startTime;
            const run = ease(timeElapsed, startPosition, targetPosition, duration);
            window.scrollTo(0, run);
            if (timeElapsed < duration) requestAnimationFrame(animation);
        };
        requestAnimationFrame(animation);
    };

    const scrollTo = () => {
        const links = document.querySelectorAll('.js-scroll');
        links.forEach(each => {
            each.addEventListener('click', () => {
                const currentTarget = each.getAttribute('href');
                smoothScroll(currentTarget, 500);
            });
        });
    };
    scrollTo();
}());
