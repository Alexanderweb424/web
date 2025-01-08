// Animación del menú lateral
let listElements = document.querySelectorAll('.list__button--click');

listElements.forEach(listElement => {
    listElement.addEventListener('click', () => {
        listElement.classList.toggle('arrow');

        let height = 0;
        let menu = listElement.nextElementSibling;
        if (menu.clientHeight == "0") {
            height = menu.scrollHeight;
        }

        menu.style.height = `${height}px`;
    });
});

// Filtrado del stock desde el menú
const links = document.querySelectorAll('.nav__link--inside[data-filter]');
links.forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();
        const filter = link.getAttribute('data-filter');
        const frame = document.getElementById('stock-frame');
        frame.src = `stock.html?filter=${filter}`;
    });
});

// Filtrado dinámico dentro del stock.html
window.addEventListener('load', () => {
    const params = new URLSearchParams(window.location.search);
    const filter = params.get('filter');
    if (filter) {
        document.querySelectorAll('.item').forEach(item => {
            item.style.display = item.dataset.category === filter ? 'block' : 'none';
        });
    }
});

// Mostrar todas las playeras al presionar "Inicio"
document.getElementById('inicio-link').addEventListener('click', function (e) {
    e.preventDefault(); // Evitar comportamiento por defecto
    document.getElementById('stock-frame').src = 'stock.html'; // Recargar página de stock
});

// Mostrar mensaje de confirmación al enviar el formulario
document.getElementById('pedido-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Evitar recarga de la página
    alert('Pedido realizado con éxito');
    this.reset(); // Opcional: Reiniciar formulario
});
