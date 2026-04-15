document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const backdrop = document.getElementById('menu-backdrop');
    const menuPath = document.getElementById('menu-path');
    const links = document.querySelectorAll('.mobile-link');

    // Função única para fechar o menu
    function closeMenu() {
        mobileMenu.classList.remove('active');
        backdrop.classList.add('hidden');
        menuPath.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
        document.body.style.overflow = 'auto';
    }

    // Função única para abrir o menu
    function openMenu() {
        mobileMenu.classList.add('active');
        backdrop.classList.remove('hidden');
        menuPath.setAttribute('d', 'M6 18L18 6M6 6l12 12');
        document.body.style.overflow = 'hidden';
    }

    // Evento do botão (Alternar entre abrir e fechar)
    menuBtn.addEventListener('click', (e) => {
        e.preventDefault();
        if (mobileMenu.classList.contains('active')) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    // Fechar ao clicar no fundo escuro
    backdrop.addEventListener('click', closeMenu);

    // Fechar ao clicar em qualquer link do menu
    links.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    // Fechar se a tela for redimensionada para desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            closeMenu();
        }
    });
});