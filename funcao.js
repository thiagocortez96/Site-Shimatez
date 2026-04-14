document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const backdrop = document.getElementById('menu-backdrop');
    const menuPath = document.getElementById('menu-path');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    /**
     * Alterna o estado do menu (Aberto/Fechado)
     */
    function toggleMenu() {
        const isOpen = mobileMenu.classList.contains('active');
        
        if (isOpen) {
            // Fechar Menu
            mobileMenu.classList.remove('active');
            backdrop.classList.add('hidden');
            
            // Volta o ícone para Hambúrguer
            menuPath.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
            
            // Reabilita o scroll da página
            document.body.style.overflow = 'auto';
        } else {
            // Abrir Menu
            mobileMenu.classList.add('active');
            backdrop.classList.remove('hidden');
            
            // Muda o ícone para "X" (Close)
            menuPath.setAttribute('d', 'M6 18L18 6M6 6l12 12');
            
            // Trava o scroll da página para não rolar o fundo
            document.body.style.overflow = 'hidden';
        }
    }

    // Evento no botão hambúrguer
    if (menuBtn) {
        menuBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleMenu();
        });
    }

    // Fecha ao clicar no fundo (backdrop)
    if (backdrop) {
        backdrop.addEventListener('click', toggleMenu);
    }

    // Fecha o menu automaticamente ao clicar em qualquer link
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (mobileMenu.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Fecha o menu se a janela for redimensionada para Desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768 && mobileMenu.classList.contains('active')) {
            toggleMenu();
        }
    });
});