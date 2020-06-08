const $wrapper = document.querySelector(".principal");
const $modal = document.querySelector(".modal");
const url = "images/fotos";

//-----------Función constructora
function Motos(
  nombre,
  foto1,
  foto2,
  foto3,
  descripcion1,
  descripcion2,
  descripcion3,
  boton
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

//-------------------Motos

const piccola = new Motos(
  "Gilera Piccola",
  `${url}/motos_nuevas/piccola1.jpg`,
  `${url}/motos_nuevas/piccola2.jpg`,
  `${url}/motos_nuevas/piccola3.jpg`,
  `El clásico faro redondo, los apliques cromados, el delicado tapizado beige del asiento y su gran 
  capacidad de carga le otorgan al Piccola la cuota de elegancia que muchos usuarios buscan en este tipo de scooter. `,
  `Con respecto al motor, se impulsa por medio de un monocilíndrico de 150 cc, carburado y enfriado por aire,
   el cual cuenta con la potencia suficiente para moverse con agilidad por calles y avenidas. Con bajísimos
   registros de consumo, la autonomía es cercana a los 180 km.`,
  `La capacidad de carga está muy bien resuelta en el Piccola, con un hueco bajo asiento de buena 
   capacidad y una guantera con llave en la cual contamos con la mencionada toma de carga USB .`,
  "botonpiccola"
);

const crypton = new Motos(
  "Yamaha Crypton",
  `${url}/motos_nuevas/crypton1.jpg`,
  `${url}/motos_nuevas/crypton2.jpg`,
  `${url}/motos_nuevas/crypton3.jpg`,
  `Con un andar cómodo y sencillo, es una excelente opción para la movilidad urbana diaria. Posee un motor 4 tiempos de
   100 cm3 que llega a una potencia máxima de 8 hp a 7.500 rpm, y una velocidad máxima da 80 km/h.`,
  `Por su estética y dimensiones es un vehículo versátil y fácil de conducir en trayectos cortos y medianos.
   Además posee un completo tablero, caballete central y lateral así como baúl portaobjetos bajo el asiento.`,
  `El arranque de esta moto es electrico y a pedal, cuenta con caja de 4 velocidades y la capacidad del tanque es de 
   5,2 Lts. Es una moto muy económica, y por eso es una muy buena opción para una moto urbana.`,
  "botoncrypton"
);

const sapucai = new Motos(
  "Zanella Sapucai",
  `${url}/motos_nuevas/sapucai1.jpg`,
  `${url}/motos_nuevas/sapucai2.jpg`,
  `${url}/motos_nuevas/sapucai3.jpg`,
  `Motor monocilíndrico, con 149 centímetros cúbicos de cilindrada, 12 caballos de potencia,
   transmisión de cinco velocidades y refrigeración por aire. Zanella declara una velocidad 
   máxima de 110 km/h y un consumo de dos litros cada 100 kilómetros. `,
  `El diseño clásico, combina algunas ventajas de la tecnología actual, como el motor de cuatro tiempos y 
  el arranque eléctrico, que no estaban disponibles en la Sapucai original. Siendo una muy buena opción por
  su estetica y tecnología.`,
  `Viene de serie con llantas de rayos, suspensión delantera de horquilla telescópica hidráulica,
   suspensión trasera de doble amortiguador hidráulico, parrilla trasera portaequipaje y tablero analógico.`,
  "botonsapucai"
);

const wave = new Motos(
  "Honda Wave",
  `${url}/motos_nuevas/wave1.jpg`,
  `${url}/motos_nuevas/wave2.jpg`,
  `${url}/motos_nuevas/wave3.jpg`,
  `La Wave 110S cuenta con un motor monocilíndrico de 4 tiempos, OHC de 2 válvulas y refrigerado por aire. 
  Su cilindrada es de 110 cc, posee una transmisión de 4 velocidades, y su tanque de combustible almacena 
  una capacidad de 3.7 litros de nafta.`,
  `Su diseño es fresco y con tintes deportivos, su asiento ofrece más comodidad para sus pasajeros. 
  Además, dentro de su equipamiento encontramos un detallado tablero retroiluminado con medidor de 
  combustible y su correcta altura provee la capacidad de maniobrar con agilidad.`,
  `Esta moto cuenta con gran facilidad de manejo y maniobrabilidad, ofreciendo al conductor un andar
   suave y confortable en la ciudad. Ademas de tener una buena autonomia y ser economica.`,
  "botonwave"
);

const smashrr = new Motos(
  "Gilera Smash 125 RR",
  `${url}/motos_nuevas/gilerasmashrr1.jpg`,
  `${url}/motos_nuevas/gilerasmashrr2.jpg`,
  `${url}/motos_nuevas/gilerasmashrr3.jpg`,
  `La Gilera Smash 125 RR cuenta con un motor Monocilíndrico de 4 tiempos, 2 válvulas, OHV, refrigerado por aire de 110cm3.
  Llega a una potencia de 7,2 cv a 7.000 rpm. Tiene encendido por CDI y arranque electrico y a pedal.`,
  `Cuenta con un faro delantero alogeno. La suspensión delantera es con Horquilla telescópica, y la trasera cuenta con 
  doble amortiguador. Esta moto cuenta con frenos a disco en la rueda delantera, y frenops a tambor en la trasera.`,
  `Además tiene sistema antirrobo Shutter Key de Honda para evitar robos o roturas de la cerradura y 
  tecnología Tuff-up en la rueda trasera, que ofrece mayor seguridad y estabilidad ante posibles pinchaduras.`,
  "botonsmashrr"
);

const zr = new Motos(
  "Yamaha zr",
  `${url}/motos_nuevas/yamahazr1.jpg`,
  `${url}/motos_nuevas/yamahazr2.jpg`,
  `${url}/motos_nuevas/yamahazr3.jpg`,
  `La Yamaha Zr cuenta con un motor Monocilíndrico 4 tiempos de 113 cm3, SOHC, refrigerado por aire.
  Entrega una potencia de hasta 7,3 cv a 7.500 rpm y una velocidad máxima de 90 km/h. `,
  `Con un rendimiento destacado y diseño compacto, este modelo es la mejor opción para la
   movilidad diaria en la ciudad. Posee un motor 4 tiempos desarrollado bajo concepto Blue Core,
   que ofrece un óptimo consumo y una rápida respuesta en todo momento.`,
  `Ademas, cuenta con una gran capacidad de carga, de 150 kg y con un gran compartimento debajo 
  del asiento. Lo cual la convierte en una muy buena opción para uso diario.`,
  "botonzr"
);

const gilera70 = new Motos(
  "Gilera vc 70",
  `${url}/motos_nuevas/gilera701.jpg`,
  `${url}/motos_nuevas/gilera702.jpg`,
  `${url}/motos_nuevas/gilera703.jpg`,
  `La Gilera vc 70 cuenta con un Motor Monocilíndrico 4 tiempos de 70 cm3, 2 válvulas, OHC, refrigerado por aire.
  Entrega una potencia máxima de 4,9 cv a 8.500 rpm. Tiene arranque electrico y a patada y llega a 70 km/h.`,
  `Es una moto muy liviana, pesa solo 77 kg, lo que la hace una moto muy ligera y maniobrable. 
  su capacidad de carga es de 140kg, y el tanque de combustible carga hasta 2,5 Litros, más que suficiente 
  para andar siendo que es una moto muy económica.`,
  `Ambos frenos son a tambor, pero la moto de todas formas frena bien, ya que es muy liviana.
  Sus llantas son de aleación, y tiene hasta 4 velocidades.`,
  "botonvc70"
);

const guerrero = new Motos(
  "Guerrero G110 Trip Full",
  `${url}/motos_nuevas/guerrero1.jpg`,
  `${url}/motos_nuevas/guerrero2.jpg`,
  `${url}/motos_nuevas/guerrero3.jpg`,
  `La Guerrero G110 Trip Full Cuenta con un motor Monocilíndrico 4 tiempos de 108 cm3, 2 válvulas, OHC, refrigerado por aire.
  Entrega una potencia Máxima de 	7,3 cv a 7.500 rpm, y llega a velocidades de hasta 80 km/h.`,
  `Tiene una gran autonomia, de 160 km, tiene una capacidad de 4 Litros de combustible y gasta un Litro 
  cada 40 km. Lo que la hace una moto economica y una buena opción para la ciudad.`,
  `La moto pesa 100kg, y tiene una capacidad de carga de hasta 150kg. Cuenta con freno a disco en la rueda delantera 
  y a tambor en la trasera. Tiene arranque electrico y a patada.`,
  "botonguerrero"
);

const smash = new Motos(
  "Gilera Smash VS ",
  `${url}/motos_nuevas/gilerasmash1.jpg`,
  `${url}/motos_nuevas/gilerasmash2.jpg`,
  `${url}/motos_nuevas/gilerasmash3.jpg`,
  `La Gilera Smash vs cuenta con un motor Monocilíndrico 4 tiempos de 107 cm3, 2 válvulas, OHV, refrigerado por aire.
  Llega a una potencia de 7,2 cv a 7.000 rpm. Tiene encendido por CDI y arranque electrico y a pedal.`,
  `La moto es muy economica, ya que podemos andar 40km por cada Litro. Al tener 4,1 Litros de capacidad, nos
  da una autonomia de 160km. La transmisión es de 4 velocidades con embreague automático.`,
  `Ambos frenos son a tambor, pero de buena calidad. Pesa 100kg, y tiene una capacidad de carga de hasta 150kg.
   Tiene una buena estetica y es de comodo andar, por eso es muy recomendada para uso urbano.`,
  "botonsmash"
);

// Función poner motos
function printMoto(moto) {
  const template = NewTemplate(moto);
  const html = document.implementation.createHTMLDocument();
  html.body.innerHTML = template;
  console.log(moto.nombre);
  $wrapper.append(html.body.children[0]);
}

// Templates de crear motos
function NewTemplate(moto) {
  return `<article  class="product">
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

//------------Acá traigo los objetos de el DOM
const $modal__image = document.querySelector(".modal__image");
const $modal__title = document.querySelector(".modal__title");
const $modal__descripcion = document.querySelector(".modal__descripcion");

const $modal__image2 = document.querySelector(".modal__image2");
const $modal__title2 = document.querySelector(".modal__title2");
const $modal__descripcion2 = document.querySelector(".modal__descripcion2");

const $modal__image3 = document.querySelector(".modal__image3");
const $modal__title3 = document.querySelector(".modal__title3");
const $modal__descripcion3 = document.querySelector(".modal__descripcion3");

//--------------------------------------------------------

//----------Botones por motos

//-----Gilera Piccola
const $botonpiccola = document.querySelector(".botonpiccola");
$botonpiccola.addEventListener("click", () => showModal(piccola));

//-----Yamaha Crypton
const $botoncrypton = document.querySelector(".botoncrypton");
$botoncrypton.addEventListener("click", () => showModal(crypton));

//-----Zanella Sapucai
const $botonsapucai = document.querySelector(".botonsapucai");
$botonsapucai.addEventListener("click", () => showModal(sapucai));

//-----Honda Wave
const $botonwave = document.querySelector(".botonwave");
$botonwave.addEventListener("click", () => showModal(wave));

//-----Gilera Smash 125 RR
const $botonsmashrr = document.querySelector(".botonsmashrr");
$botonsmashrr.addEventListener("click", () => showModal(smashrr));

//-----Yamaha Zr
const $botonzr = document.querySelector(".botonzr");
$botonzr.addEventListener("click", () => showModal(zr));

//-----Gilera vc 70
const $botonvc70 = document.querySelector(".botonvc70");
$botonvc70.addEventListener("click", () => showModal(gilera70));

//-----Guerrero G110 Trip Full
const $botonguerrero = document.querySelector(".botonguerrero");
$botonguerrero.addEventListener("click", () => showModal(guerrero));

//-----Gilera Smash VS
const $botonsmash = document.querySelector(".botonsmash");
$botonsmash.addEventListener("click", () => showModal(smash));

//--------------------------------------------------------

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
  $modalboton.addEventListener("click", function () {
    $modal.classList.remove("active");
    $modal.style.animation = "modalOut .8s forwards";
  });
}
