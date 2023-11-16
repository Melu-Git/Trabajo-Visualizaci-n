var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  
 
  function selectAvatar(avatarNumber) {
    const avatarImage = document.getElementById('selected-avatar');
    avatarImage.src = `imagenes/Diseño sin título (${avatarNumber}).gif`;
    avatarImage.alt = `Avatar ${avatarNumber} seleccionado`;
  }
  