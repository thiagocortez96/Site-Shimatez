document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('menu-btn');
    const menu = document.getElementById('mobile-menu');
    const backdrop = document.getElementById('menu-backdrop');
    const path = document.getElementById('menu-path');
    const links = document.querySelectorAll('.mobile-link');

    // Se os elementos não existirem, não faz nada (evita erro em outras páginas)
    if (!btn || !menu) return;

    // Estado inicial forçado para garantir que o JS saiba onde o menu está
    menu.style.transform = "translateX(100%)";

    function toggleMenu() {
        // Verifica se o menu está visível checando o transform
        const isClosed = menu.style.transform === "translateX(100%)";

        if (isClosed) {
            // AÇÃO DE ABRIR
            menu.style.transform = "translateX(0%)";
            if (backdrop) backdrop.style.display = "block"; 
            if (path) path.setAttribute('d', 'M6 18L18 6M6 6l12 12'); // Transforma em X
            document.body.style.overflow = 'hidden'; // Trava a página
        } else {
            // AÇÃO DE FECHAR
            menu.style.transform = "translateX(100%)";
            if (backdrop) backdrop.style.display = "none";
            if (path) path.setAttribute('d', 'M4 6h16M4 12h16M4 18h16'); // Volta Hambúrguer
            document.body.style.overflow = 'auto'; // Libera a página
        }
    }

    // Evento do botão principal
    btn.onclick = (e) => {
        e.preventDefault();
        toggleMenu();
    };

    // Fechar ao clicar no fundo escuro
    if (backdrop) {
        backdrop.onclick = toggleMenu;
    }

    // FECHAMENTO AUTOMÁTICO: Ao clicar em qualquer link
    links.forEach(link => {
        link.onclick = () => {
            // Só fecha se estiver aberto
            if (menu.style.transform === "translateX(0%)") {
                toggleMenu();
            }
        };
    });
});