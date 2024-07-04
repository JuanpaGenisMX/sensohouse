let display = 0;

function DisplayMenu() {
    if (display === 0) {
        document.querySelector('.header .side-menu').style.left = '0';
        document.querySelector('.header .side-menu').style.backgroundColor = 'var(--alt)';
        document.querySelector('.header .nav-bar .menu-container .menu .menu-text').textContent = "Cerrar";
        document.querySelector('.header .menu-container .menu .fix').style.display = 'none';
        document.querySelector('.header .separation').style.left = '0';
        document.querySelector('.header .separation').style.backgroundColor = 'var(--bg)';
        document.querySelector('.header .fix-slide-menu').style.left = '0';
        document.querySelector('.header .fix-slide-menu').style.backgroundColor = 'var(--alt)';
        document.querySelector('.header .side-menu .fix-side-footer').style.left = '0';
        document.querySelector('.header .side-menu .fix-side-footer').style.backgroundColor = 'var(--alt)';
        document.querySelector('.header .side-menu .side-footer-separation').style.left = '0';
        document.querySelector('.header .side-menu .side-footer-separation').style.backgroundColor = 'var(--bg)';
        document.querySelector('.header .side-footer').style.left = '0';
        barsToXmark()
        display = 1;
    } else if (display === 1) {
        document.querySelector('.header .side-menu').style.left = '-100%';
        document.querySelector('.header .side-menu').style.backgroundColor = 'transparent';
        document.querySelector('.header .nav-bar .menu-container .menu .menu-text').textContent = "Menú";
        document.querySelector('.header .menu-container .menu .fix').style.display = 'block';
        document.querySelector('.header .separation').style.left = '-100%';
        document.querySelector('.header .separation').style.backgroundColor = 'transparent';
        document.querySelector('.header .fix-slide-menu').style.left = '-100%';
        document.querySelector('.header .fix-slide-menu').style.backgroundColor = 'transparent';
        document.querySelector('.header .side-menu .fix-side-footer').style.left = '-100%';
        document.querySelector('.header .side-menu .fix-side-footer').style.backgroundColor = 'transparent';
        document.querySelector('.header .side-menu .side-footer-separation').style.left = '-100%';
        document.querySelector('.header .side-menu .side-footer-separation').style.backgroundColor = 'transparent';
        document.querySelector('.header .side-footer').style.left = '-100%';
        barsToXmark()
        display = 0;
    }
}

function barsToXmark () {
    if (display === 0) {
        document.querySelector('.header .menu-container .bars div:first-child').style.transform = 'rotate(45deg)';
        document.querySelector('.header .menu-container .bars div:nth-child(2)').style.opacity = '0';
        document.querySelector('.header .menu-container .bars div:last-child').style.transform = 'rotate(-45deg)';
        document.querySelector('.header .menu-container .bars').style.gap = '5.6px';
        document.querySelector('.header .menu-container .bars').style.marginTop = '8px';
    } else if (display === 1) {
        document.querySelector('.header .menu-container .bars div:first-child').style.transform = 'rotate(0deg)';
        document.querySelector('.header .menu-container .bars div:nth-child(2)').style.opacity = '1';
        document.querySelector('.header .menu-container .bars div:last-child').style.transform = 'rotate(0deg)';
        document.querySelector('.header .menu-container .bars').style.gap = '5px';
        document.querySelector('.header .menu-container .bars').style.marginTop = '8px';
    }
}

window.addEventListener('scroll', function () {
    if (window.scrollY > document.querySelector('.header .nav-bar').offsetHeight) {
        document.querySelector('.header .nav-bar').classList.add('scroll');
        document.querySelector('.header .side-menu').classList.add('scroll');
        document.querySelector('.header .fix-slide-menu').classList.add('scroll');
        document.querySelector('.header .separation').classList.add('scroll');
    } else {
        document.querySelector('.header .nav-bar').classList.remove('scroll');
        document.querySelector('.header .side-menu').classList.remove('scroll');
        document.querySelector('.header .fix-slide-menu').classList.remove('scroll');
        document.querySelector('.header .separation').classList.remove('scroll');
    }
});