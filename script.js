document.getElementById('ordenarBtn').addEventListener('click', function () {
    ordenarItems();
});

function ordenarItems() {
    var contenedor = document.getElementById('contenedor');
    var items = Array.from(contenedor.getElementsByClassName('item'));

    items.sort(function (a, b) {
        // Cambia esta lógica según tus necesidades de ordenación
        var textA = a.textContent.trim().toLowerCase();
        var textB = b.textContent.trim().toLowerCase();
        return textA.localeCompare(textB);
    });

    // Limpia el contenedor
    contenedor.innerHTML = '';

    // Vuelve a agregar los elementos ordenados
    items.forEach(function (item) {
        contenedor.appendChild(item);
    });
}
