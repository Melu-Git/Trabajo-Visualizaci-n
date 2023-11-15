function validarFormulario() {
  // Validar que todos los campos estén completos
  var nombre = document.querySelector("input[name='nombre']").value;
  var apellido = document.querySelector("input[name='apellido']").value;
  var edad = document.querySelector("input[name='edad']").value;
  var correo = document.querySelector("input[name='correo']").value;
  var contraseña = document.querySelector("input[name='contraseña']").value;

  if (nombre === "") {
    document.querySelector("input[name='nombre']").parentElement.appendChild(document.createTextNode("El campo nombre es obligatorio."));
    return false;
  }

  if (apellido === "") {
    document.querySelector("input[name='apellido']").parentElement.appendChild(document.createTextNode("El campo apellido es obligatorio."));
    return false;
  }

  if (edad === "") {
    document.querySelector("input[name='edad']").parentElement.appendChild(document.createTextNode("El campo edad es obligatorio."));
    return false;
  }

  if (edad !== "" && isNaN(edad)) {
    document.querySelector("input[name='edad']").parentElement.appendChild(document.createTextNode("El campo edad debe ser un número entero positivo."));
    return false;
  }

  if (correo === "") {
    document.querySelector("input[name='correo']").parentElement.appendChild(document.createTextNode("El campo correo es obligatorio."));
    return false;
  }

  if (correo !== "" && !/\w+@\w+\.\w+/.test(correo)) {
    document.querySelector("input[name='correo']").parentElement.appendChild(document.createTextNode("El correo electrónico no es válido."));
    return false;
  }

  if (contraseña === "") {
    document.querySelector("input[name='contraseña']").parentElement.appendChild(document.createTextNode("El campo contraseña es obligatorio."));
    return false;
  }

  if (contraseña !== "" && contraseña.length < 8) {
    document.querySelector("input[name='contraseña']").parentElement.appendChild(document.createTextNode("La contraseña debe tener al menos 8 caracteres."));
    return false;
  }

  // Enviar el formulario
  return true;
  window.location.href = "3metaDiaria.html"; 
}

document.querySelector("input[type='submit']").onclick = function (event) {
  event.preventDefault(); // Prevenir el envío predeterminado del formulario
  if (validarFormulario()) {
    document.querySelector("form").submit(); // Enviar el formulario si la validación es exitosa
  }
};

const boton = document.querySelector(".boton-ubi-derecha");

boton.addEventListener("click", function() {
  window.location.href = "6Loguearse.html";
});
