const nav = document.querySelector('.nav');
const menu_btn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const closeBtn = document.querySelector('.close-btn');

// Reducir size menu
window.addEventListener('scroll', function() {
    nav.classList.toggle('active', window.scrollY > 0);
});

// Evento para abrir o cerrar el menú al hacer clic en el botón de menú
menu_btn.addEventListener('click', () => {
    if (menu.classList.contains('active')) {
        menu.classList.remove('active');  // Cierra el menú si está abierto
        closeBtn.style.display = 'none';  // Oculta el botón de cerrar
    } else {
        menu.classList.add('active');     // Abre el menú si está cerrado
        closeBtn.style.display = 'flex';  // Muestra el botón de cerrar
    }
});

// Evento para cerrar el menú al hacer clic en el botón de cerrar
closeBtn.addEventListener('click', () => {
    menu.classList.remove('active');    // Cierra el menú
    closeBtn.style.display = 'none';    // Oculta el botón de cerrar
});


