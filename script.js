const camisetas = [
  // XS
  { nombre: "Verde AzulCo", talla: "XS", carpeta: "XS/Verde-AzulCo" },

  // S
  { nombre: "Azul Turqui 100 Algodon", talla: "S", carpeta: "S/Azul-Turqui-100-Algodon" },
  { nombre: "Azul Turqui Urb 100 Algodon", talla: "S", carpeta: "S/Azul-Turqui-Urb-100-Algodon" },
  { nombre: "Coral AzulCo", talla: "S", carpeta: "S/Coral-AzulCo" },
  { nombre: "Mandarina People 100 Algodon", talla: "S", carpeta: "S/Mandarina-People-100-Algodon" },
  { nombre: "Negro Wild Turkey 50 50 Cotton", talla: "S", carpeta: "S/Negro-Wild-Turkey-50-50-Cotton" },
  { nombre: "Ocre BlueCo", talla: "S", carpeta: "S/Ocre-BlueCo" },
  { nombre: "Rosada AzulCo 65 Poliester 35 Algodon", talla: "S", carpeta: "S/Rosada-AzulCo-65-Algodon-35-Poliester" },
  { nombre: "Terracota AzulCo", talla: "S", carpeta: "S/Terracota-AzulCo" },

  // M
  { nombre: "Azul Facol", talla: "M", carpeta: "M/Azul-Facol" },
  { nombre: "Azul Bronzini 100 Algodon", talla: "M", carpeta: "M/Azul-Bronzini-100-Algodon" },
  { nombre: "Azul Facol 2", talla: "M", carpeta: "M/Azul-Facol-2" },
  { nombre: "Azul Plomo Colore 100 Algodonn", talla: "M", carpeta: "M/Azul-Plomo-Colore-100-Algodonn" },
  { nombre: "Blanca Fratta 100 Algodon", talla: "M", carpeta: "M/Blanca-Fratta-100-Algodon" },
  { nombre: "Blanca Urb 100 Algodon", talla: "M", carpeta: "M/Blanca-Urb-100-Algodon" },
  { nombre: "Gris AzulCo", talla: "M", carpeta: "M/Gris-AzulCo" },
  { nombre: "Gris Fratta Sport 50 50 Algodon", talla: "M", carpeta: "M/Gris-Fratta-Sport-50-50-Algodon" },
  { nombre: "Mostaza AzulCo 100 Algodon", talla: "M", carpeta: "M/Mostaza-AzulCo-100-Algodon" },
  { nombre: "Negra Pajaro AzulCo 65 Poliester 35 Algodon", talla: "M", carpeta: "M/Negra-Pajaro-AzulCo-65-Poliester-35-Algodon" },
  { nombre: "Negro AzulCo", talla: "M", carpeta: "M/Negro-AzulCo" },
  { nombre: "Negro Dakota Men 100 Algodon", talla: "M", carpeta: "M/Negro-Dakota-Men-100-Algodon" },
  { nombre: "Negro Urb 100 Algodon", talla: "M", carpeta: "M/Negro-Urb-100-Algodon" },
  { nombre: "Roja People 100 Algodon", talla: "M", carpeta: "M/Roja-People-100-Algodon" },
  { nombre: "Verde Menta AzulCo", talla: "M", carpeta: "M/Verde-Menta-AzulCo" },
  { nombre: "Verde Militar AzulCo", talla: "M", carpeta: "M/Verde-Militar-AzulCo" },
  { nombre: "Verde Tropical AzulCo 65 Algodon 35 Poliester", talla: "M", carpeta: "M/Verde-Tropical-AzulCo-65-Algodon-35-Poliester" },
  { nombre: "Vinotinto Dakota Men 100 Algodon", talla: "M", carpeta: "M/Vinotinto-Dakota-Men-100-Algodon" },

  // L
  { nombre: "Azul Rey AzulCo 35 Algodon 65 Poliester", talla: "L", carpeta: "L/Azul-Rey-AzulCo-35-Algodon-65-Poliester" },
  { nombre: "Azul Turqui AzulCo 35 Algodon 65 Poliester", talla: "L", carpeta: "L/Azul-Turqui-AzulCo-35-Algodon-65-Poliester" },
  { nombre: "Blanca Urb 100 Algodon", talla: "L", carpeta: "L/Blanca-Urb-100-Algodon" },
  { nombre: "Gris Azorti 100 Algodon", talla: "L", carpeta: "L/Gris-Azorti-100-Algodon" },
  { nombre: "Gris AzulCo 100 Algodon", talla: "L", carpeta: "L/Gris-AzulCo-100-Algodon" },
  { nombre: "Naranja AzulCo 65 Poliester 35 Algodon", talla: "L", carpeta: "L/Naranja-AzulCo-65-Poliester-35-Algodon" },
  { nombre: "Negro AzulCo Easy As", talla: "L", carpeta: "L/Negro-AzulCo-Easy-As" },
  { nombre: "Rojo Ladrillo Southern Shirt 50 50 Algodon", talla: "L", carpeta: "L/Rojo-Ladrillo-Southern-Shirt-50-50-Algodon" },
  { nombre: "Rosado AzulCo", talla: "L", carpeta: "L/Rosado-AzulCo" },
  { nombre: "Verde AzulCo 65 Poliester 35 Algodon", talla: "L", carpeta: "L/Verde-AzulCo-65-Poliester-35-Algodon" },
  { nombre: "Verde Dakota Men 100 Algodon", talla: "L", carpeta: "L/Verde-Dakota-Men-100-Algodon" },
  { nombre: "Verde Menta Southern Shirt 100 Algodon", talla: "L", carpeta: "L/Verde-Menta-Southern-Shirt-100-Algodon" },

  // XL
  { nombre: "Amarillo AzulCo 100 Algodon", talla: "XL", carpeta: "XL/Amarillo-AzulCo-100-Algodon" },
  { nombre: "Azul Turqui 100 Algodon", talla: "XL", carpeta: "XL/Azul-Turqui-100-Algodon" },
  { nombre: "Azul Speedo 100 Algodon", talla: "XL", carpeta: "XL/Azul-Speedo-100-Algodon" },
  { nombre: "Blanca People 100 Algodon", talla: "XL", carpeta: "XL/Blanca-People-100-Algodon" },
  { nombre: "Gris AzulCo", talla: "XL", carpeta: "XL/Gris-AzulCo" },
  { nombre: "Gris Whisky AzulCo", talla: "XL", carpeta: "XL/Gris-Whisky-AzulCo" },
  { nombre: "Negra Speedo 100 Algodon", talla: "XL", carpeta: "XL/Negra-Speedo-100-Algodon" },
  { nombre: "Negro Pajaro AzulCo", talla: "XL", carpeta: "XL/Negro-Pajaro-AzulCo" }
];

function mostrarCamisetas(talla) {
  const galeria = document.getElementById("galeria");
  galeria.innerHTML = "";

  const filtradas = camisetas.filter(c => !talla || c.talla === talla);

  filtradas.forEach(camiseta => {
    const div = document.createElement("div");
    div.className = "card";
    div.innerHTML = `
      <img src="img/${camiseta.carpeta}/frente.jpg" alt="${camiseta.nombre}">
      <h3>${camiseta.nombre}</h3>
    `;
    div.onclick = () => {
      window.location.href = `detalle.html?nombre=${encodeURIComponent(camiseta.nombre)}&carpeta=${encodeURIComponent(camiseta.carpeta)}&talla=${camiseta.talla}`;
    };
    galeria.appendChild(div);
  });
}

function filtrarPorTalla(talla) {
  mostrarCamisetas(talla);
}

mostrarCamisetas();