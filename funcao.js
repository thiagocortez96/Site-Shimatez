document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');
    const backdrop = document.getElementById('menu-backdrop');
    const path = document.getElementById('menu-path');
    const links = document.querySelectorAll('.mobile-link');

    // Se o botão não existir nesta página, o script não roda e não dá erro
    if (!btn || !menu) return;

    let isOpen = false;

    function toggle() {
        isOpen = !isOpen;

        if (isOpen) {
            menu.style.transform = "translateX(0%)";
            backdrop.classList.remove('hidden');
            path.setAttribute('d', 'M6 18L18 6M6 6l12 12'); 
            document.body.style.overflow = 'hidden'; 
        } else {
            menu.style.transform = "translateX(100%)";
            backdrop.classList.add('hidden');
            path.setAttribute('d', 'M4 6h16M4 12h16M4 18h16'); 
            document.body.style.overflow = 'auto'; 
        }
    }

    btn.addEventListener('click', (e) => {
        e.preventDefault();
        toggle();
    });

    backdrop.addEventListener('click', toggle);

    links.forEach(link => {
        link.addEventListener('click', () => {
            if (isOpen) toggle();
        });
    });

    // Garante que o menu feche ao redimensionar a tela
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 768 && isOpen) {
            toggle();
        }
    });
});