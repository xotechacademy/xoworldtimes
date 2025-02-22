function toggleMenu(event) {
        document.getElementById('menu').classList.toggle('open');
        event.stopPropagation(); // Empêche la propagation de l'événement vers le document
    }

    // Ferme le menu si on clique en dehors
    document.addEventListener('click', function(event) {
        var menu = document.getElementById('menu');
        var burgerMenu = document.querySelector('.burger-menu');
        if (!menu.contains(event.target) && !burgerMenu.contains(event.target)) {
            menu.classList.remove('open');
        }
    });