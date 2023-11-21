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



// ACORDEON
document.addEventListener("DOMContentLoaded", function() {
    const accordionItems = document.querySelectorAll(".contentBx");

    accordionItems.forEach(item => {
        const label = item.querySelector(".label");

        label.addEventListener("click", function() {
            item.classList.toggle("active");

            // Cerrar otros elementos del acordeón
            accordionItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains("active")) {
                    otherItem.classList.remove("active");
                }
            });
        });
    });
});
