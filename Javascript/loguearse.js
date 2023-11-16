const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(event) {
  // Verifica que el correo electrónico sea un correo electrónico válido
  const correo = document.querySelector("input[name='correo']").value;
  if (!correo.match(/^[a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
    event.preventDefault();
    alert("El correo electrónico no es válido");
  }

  // Verifica que la contraseña tenga al menos 8 caracteres
  const contraseña = document.querySelector("input[name='contraseña']").value;
  if (contraseña.length < 8) {
    event.preventDefault();
    alert("La contraseña debe tener al menos 8 caracteres");
  }

  // Verifica que los campos no estén vacíos
  const campos = formulario.querySelectorAll("input[required]");
  for (const campo of campos) {
    if (campo.value === "") {
      event.preventDefault();
      alert("Todos los campos son obligatorios");
      break;
    }
  }

  // Si se cumplen todas las condiciones, redirige a la página siguiente
  if (event.defaultPrevented === false) {
    window.location.href = "0index.html";
  }
});


const boton = document.querySelector(".boton-ubi-derecha");
boton.addEventListener("click", function() {
    window.location.href = "2formulario1.html";
  });
  