const $wrapper = document.querySelector(".principal");
const $modal = document.querySelector(".modal");

function Motos(
  nombre,
  foto1,
  foto2,
  foto3,
  descripcion1,
  descripcion2,
  descripcion3,
  boton,
  moto
) {
  (this.nombre = nombre),
    (this.foto1 = foto1),
    (this.foto2 = foto2),
    (this.foto3 = foto3),
    (this.descripcion1 = descripcion1),
    (this.descripcion2 = descripcion2),
    (this.descripcion3 = descripcion3),
    (this.boton = boton);
  return printMoto(this);
}

const cb500 = new Motos(
  "Honda Cb500 2019",
  "images/honda_cb500.png",
  "images/honda_cb5002.jpg",
  "images/honda_cb5003.jpg",
  `La Honda CB500F es una excelente opción dentro 
  del mercado de motos naked para el carnet A-2, una moto ligera y de estética 
  deportiva dotada de un motor de dos cilindros con una potencia de 35 kW (47 CV)`,
  `Esta es una moto de la conocidisima marca japonesa Honda.
  Los productos Honda, sobresalen del resto por su calidad y confianza, ademas de 
  el atractivo que tiene la moto y la onda deportiva que tiene, combinado con su
   motor dos cilindros.`,
  `La Honda CB500F es una excelente opción dentro 
  del mercado de motos naked para el carnet A-2, una moto ligera y de estética 
  deportiva dotada de un motor de dos cilindros con una potencia de 35 kW (47 CV)`,
  "botoncb500"
);

const ceccato = new Motos(
  "Zanella Ceccato R150",
  "images/ceccato1.jpg",
  "images/ceccato2.jpg",
  "images/ceccato3.jpg",
  `A 60 años del nacimiento de la moto que revolucionó la industria nacional en 1957,
   la compañía presenta su evolución renovando el espíritu Café Racer y la calidad de 
   una larga tradición de diseño italiano`,
  `la Ceccato R150 incorpora un motor de 150 cc con tecnología de árbol de levas a la
   cabeza de 15HP logrando una aceleración de 0 a 60 km/h en tan sólo 4,6 segundos y 
   una velocidad final de 140 km/h.`,
  ` Esta moto posee manubrio y óptica estilo Café Racer,
    llantas de 72 rayos con diseño helicoidal, asiento tipo slammer con tratamiento 
    antideslizante y acabado mate, y escape de diseño vintage. También incluye velocímetr
    o clásico y puerto USB que permite la carga de teléfonos celulares y GPS durante el viaje.`,
  "botonceccato"
);

const gx1 = new Motos(
  "Gilera Gx-1 2019",
  "images/gileragx-1.jpg",
  "images/gileragx-2.jpg",
  "images/gileragx-3.jpg",
  `La GX-1 porta un propulsor monocilíndrico de 125 cc  refrigerado por aceite,
   asociado a una caja de 4 velocidades. Es una propuesta deportiva y elegante 
   que goza de buena agilidad y maniobrabilidad.`,
  `Equipa en la suspension delantera una horquilla hidráulica invertida con gran 
  recorrido generando robustez como las motos grandes, lo que permite ser utilizada
   tanto para transito urbano como para el uso mas recreativo de sus usuarios.`,
  `Su chasis es tubular, también de vanguardia y posee llantas de 12 pulgadas. 
  Cuenta con una capacidad de 15 litros de combustible y encendido es electrónico.
   Ofrece un silenciador de 3 barrillas y asientos de estilo de «carreras»..`,
  "botongx1"
);

const ax1300 = new Motos(
  "Honda Cb500 2019",
  "images/honda_cb500.png",
  "honda_cb5002.jpg",
  "honda_cb5003.jpg",
  `A 60 años del nacimiento de la moto que revolucionó la industria nacional en 1957,
   la compañía presenta su evolución renovando el espíritu Café Racer y la calidad de 
   una larga tradición de diseño italiano`,
  `la Ceccato R150 incorpora un motor de 150 cc con tecnología de árbol de levas a la
   cabeza de 15HP logrando una aceleración de 0 a 60 km/h en tan sólo 4,6 segundos y 
   una velocidad final de 140 km/h. Esta moto posee manubrio y óptica estilo Café Racer,
    llantas de 72 rayos con diseño helicoidal, asiento tipo slammer con tratamiento 
    antideslizante y acabado mate, y escape de diseño vintage. También incluye velocímetr
    o clásico y puerto USB que permite la carga de teléfonos celulares y GPS durante el viaje.`,
  "botoncb500"
);

function printMoto(moto) {
  const template = NewTemplate(moto);
  const html = document.implementation.createHTMLDocument();
  html.body.innerHTML = template;
  console.log(moto.nombre);
  $wrapper.append(html.body.children[0]);
}

function NewTemplate(moto) {
  return ` <article  class="product">
        <figure>
        <img src="${moto.foto1}" alt="Honda cb500" class="product__image">
        </figure>
        <div>
        <h2 class="product__title">${moto.nombre}</h2>
        <p class="product__description">${moto.descripcion1}</p>
        <input type="button" class="product__button ${moto.boton}" value="Ver Más!">
        </div>
        </article>  `;
}

//const $botones = document.querySelectorAll(".product__button");
//$botones.addEventListener("click", () => showModal(this));
const $modal__image = document.querySelector(".modal__image");
const $modal__title = document.querySelector(".modal__title");
const $modal__descripcion = document.querySelector(".modal__descripcion");

const $modal__image2 = document.querySelector(".modal__image2");
const $modal__title2 = document.querySelector(".modal__title2");
const $modal__descripcion2 = document.querySelector(".modal__descripcion2");

const $modal__image3 = document.querySelector(".modal__image3");
const $modal__title3 = document.querySelector(".modal__title3");
const $modal__descripcion3 = document.querySelector(".modal__descripcion3");

//----------Botones por motos
const $botoncb500 = document.querySelector(".botoncb500");
$botoncb500.addEventListener("click", () => showModal(cb500));
const $botonceccato = document.querySelector(".botonceccato");
$botonceccato.addEventListener("click", () => showModal(ceccato));
const $botongx1 = document.querySelector(".botongx1");
$botongx1.addEventListener("click", () => showModal(gx1));

//No tocar nada de esto porque se va todo al carajo
async function showModal(moto) {
  $modal.style.animation = "modalIn .8s forwards";
  $modal.classList.add("active");

  $modal__image.setAttribute("src", moto.foto1);
  $modal__title.textContent = moto.nombre;
  $modal__descripcion.textContent = moto.descripcion1;

  $modal__image2.setAttribute("src", moto.foto2);
  $modal__title2.textContent = moto.nombre;
  $modal__descripcion2.textContent = moto.descripcion2;

  $modal__image3.setAttribute("src", moto.foto3);
  $modal__title3.textContent = moto.nombre;
  $modal__descripcion3.textContent = moto.descripcion3;

  const $modalboton = document.querySelector(".modal__button");
  $modalboton.addEventListener("click", () => {
    $modal.classList.remove("active");
  });
}
