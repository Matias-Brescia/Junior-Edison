// script.js

// Ejemplo: manejo básico del formulario de la sección hero
const btnContactarHero = document.querySelector(".hero-form .btn-contactar");
btnContactarHero.addEventListener("click", () => {
  const nombre = document.getElementById("nombre").value.trim();
  const telefono = document.getElementById("telefono").value.trim();

  if (!nombre || !telefono) {
    alert("Por favor, completa ambos campos antes de enviar.");
    return;
  }
  alert(
    `¡Gracias, ${nombre}! Nos pondremos en contacto al número ${telefono}.`
  );
});

// Ejemplo: manejo básico del formulario de la sección contacto
const form = document.querySelector(".form-contacto form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombreContacto = document.getElementById("nombreContacto").value.trim();
  const telefonoContacto = document
    .getElementById("telefonoContacto")
    .value.trim();

  if (!nombreContacto || !telefonoContacto) {
    alert("Por favor, completa ambos campos antes de enviar.");
    return;
  }

  alert(
    `¡Gracias, ${nombreContacto}! Pronto te llamaremos al número ${telefonoContacto}.`
  );
  // Aquí podrías procesar o enviar la información a tu servidor.
});
