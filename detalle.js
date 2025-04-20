function obtenerParametro(nombre) {
  const params = new URLSearchParams(window.location.search);
  return params.get(nombre);
}

const nombre = obtenerParametro("nombre");
const carpeta = obtenerParametro("carpeta");
const talla = obtenerParametro("talla");

document.getElementById("titulo").textContent = nombre;
document.getElementById("info").textContent = `Talla: ${talla} - Material: Algodón / Poliéster`;

const galeria = document.getElementById("galeria");

['frente.jpg', 'atras.jpg'].forEach(imgName => {
  const img = document.createElement("img");
  img.src = `img/${carpeta}/${imgName}`;
  img.alt = nombre;
  img.onclick = () => abrirModal(img.src);
  galeria.appendChild(img);
});

function abrirModal(src) {
  const modal = document.getElementById("modal");
  const imagenModal = document.getElementById("imagenModal");
  imagenModal.src = src;
  modal.style.display = "flex";
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}
