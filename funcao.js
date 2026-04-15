document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');
    const backdrop = document.getElementById('menu-backdrop');
    const path = document.getElementById('menu-path');
    const links = document.querySelectorAll('.mobile-link');

    // Verifica se os elementos existem na página atual
    if (!btn || !menu) return;

    // Função central para FECHAR o menu
    function closeMenu() {
        menu.style.transform = "translateX(100%)";
        if (backdrop) backdrop.classList.add('hidden');
        if (path) path.setAttribute('d', 'M4 6h16M4 12h16M4 18h16'); // Volta para Hambúrguer
        document.body.style.overflow = 'auto'; // Libera o scroll
    }

    // Função central para ABRIR o menu
    function openMenu() {
        menu.style.transform = "translateX(0%)";
        if (backdrop) backdrop.classList.remove('hidden');
        if (path) path.setAttribute('d', 'M6 18L18 6M6 6l12 12'); // Transforma em X
        document.body.style.overflow = 'hidden'; // Trava o scroll
    }

    // Evento do botão hambúrguer
    btn.addEventListener('click', (e) => {
        e.preventDefault();
        const isOpen = menu.style.transform === "translateX(0%)";
        isOpen ? closeMenu() : openMenu();
    });

    // FECHAMENTO AUTOMÁTICO: Ao clicar em qualquer link do menu
    links.forEach(link => {
        link.addEventListener('click', () => {
            // Pequeno delay opcional de 100ms para o usuário sentir o clique antes de fechar
            setTimeout(closeMenu, 100);
        });
    });

    // Fechar ao clicar no fundo escuro
    if (backdrop) {
        backdrop.addEventListener('click', closeMenu);
    }

    // Fechar automaticamente se a tela aumentar para desktop
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768) {
            closeMenu();
        }
    });
});