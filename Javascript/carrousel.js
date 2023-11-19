// var swiper = new Swiper(".mySwiper", {
//     slidesPerView: 3,
//     spaceBetween: 30,
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//   });
  
 
//   function selectAvatar(avatarNumber) {
//     const avatarImage = document.getElementById('selected-avatar');
//     avatarImage.src = `imagenes/Diseño sin título (${avatarNumber}).gif`;
//     avatarImage.alt = `Avatar ${avatarNumber} seleccionado`;
//   }
  
// Obtiene todos los `subCategorias` elementos.
const subCategorias = document.querySelectorAll(".subCategorias");

// Agrega un evento click a cada `subCategorias` elemento.
subCategorias.forEach((subCategoria) => {
  subCategoria.addEventListener("click", (e) => {
    // Obtiene el valor del `data-id` atributo del `subCategoria` elemento.
    const id = e.target.dataset.id;

    // Llama a la función `mostrarCardsDeSubcategoria()` para mostrar las tarjetas de curso de la subcategoría seleccionada.
    mostrarCardsDeSubcategoria(id);
  });
});

// Función para mostrar las tarjetas de curso de la subcategoría seleccionada.
function mostrarCardsDeSubcategoria(id) {
  // Obtiene todos los `curso-contenedor` elementos con el `data-id` especificado.
  const cards = document.querySelectorAll(`.curso-contenedor[data-id="${id}"]`);

  // Muestra todos los `cards`.
  cards.forEach((card) => {
    card.style.display = "block";
  });
}

  