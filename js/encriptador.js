// Seleccion de elementos //
const btnEncriptar = document.querySelector(".btn-encriptar");
const txtEncriptar = document.querySelector(".encriptar");
const aviso = document.querySelector(".texto-aviso");
const respuesta = document.querySelector(".evaluar");
const contenido = document.querySelector(".tarjeta-contenedor");
const btnCopiar = document.querySelector(".btn-copiar");
const btnDesencriptar = document.querySelector(".btn-desencriptar");

// Funcion para validar el texto //

function validarTexto(texto) {
  if (texto === "") {
    mostrarAviso("El campo de texto no debe estar vacio");
    return false;
  }

  if (/[^a-z\s]/i.test(texto)) {
    mostrarAviso("No debe tener acentos y caracteres especiales");
    return false;
  }

  if (texto !== texto.toLowerCase()) {
    mostrarAviso("El texto debe ser todo en minúscula");
    return false;
  }

  return true;
}

// Funcion para mostrar el aviso //

function mostrarAviso(mensaje) {
  aviso.style.background = "#0A3871";
  aviso.style.color = "#FFFF";
  aviso.style.fontWeight = "800";
  aviso.textContent = mensaje;

  setTimeout(() => {
    aviso.removeAttribute("style");
  }, 1500);
}

// Funcion para encriptar el texto //

function encriptarTexto(texto) {
  texto = texto.replace(/e/mg, "enter");
  texto = texto.replace(/i/mg, "imes");
  texto = texto.replace(/a/mg, "ai");
  texto = texto.replace(/o/mg, "ober");
  texto = texto.replace(/u/mg, "ufat");
  return texto;
}

// Funcion para desencriptar el texto //

function desencriptarTexto(texto) {
  texto = texto.replace(/enter/mg, "e");
  texto = texto.replace(/imes/mg, "i");
  texto = texto.replace(/ai/mg, "a");
  texto = texto.replace(/ober/mg, "o");
  texto = texto.replace(/ufat/mg, "u");
  return texto;
}

// Boton de encriptar //

btnEncriptar.addEventListener("click", e => {
  e.preventDefault();
  let texto = txtEncriptar.value;

  if (validarTexto(texto)) {
    texto = encriptarTexto(texto);
    respuesta.innerHTML = texto;
    btnCopiar.style.visibility = "inherit";
    contenido.remove();
  }
});

// Boton de desencriptar //

btnDesencriptar.addEventListener("click", e => {
  e.preventDefault();
  let texto = txtEncriptar.value;

  if (validarTexto(texto)) {
    texto = desencriptarTexto(texto);
    respuesta.innerHTML = texto;
    btnCopiar
  }
})

// Boton de copiar
btnCopiar.addEventListener("click", e=>{
    e.preventDefault();
    let copiar = respuesta;
    copiar.select();
    document.execCommand("copy"); 
});