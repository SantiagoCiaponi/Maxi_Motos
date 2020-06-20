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

const rumi = new Motos(
  "Rumi Formichino",
  `${url}/motos_usadas/rumy1.jpg`,
  `${url}/motos_usadas/rumy2.jpg`,
  `${url}/motos_usadas/rumy3.jpg`,
  `Moto solo de exposición. `,
  ``,
  ``,
  "botonrumi"
);

const rouser = new Motos(
  "Bajaj Rouser AS 200",
  `${url}/motos_usadas/rouseras1.jpg`,
  `${url}/motos_usadas/rouseras2.jpg`,
  `${url}/motos_usadas/rouseras3.jpg`,
  `La Rouser AS 200 cuenta con un motor monocilíndrico de 199,5 cc que eroga 23,5 CV a 9.500 rpm, 
  con refrigeración líquida, sistema de triple bujía (mejor combustión y eficiencia en el consumo de combustible) y 4 válvulas. `,
  `El chasis perimetral que monta está construido en acero estampado a presión y permite un preciso y ágil control a 
  alta velocidad así como también estabilidad en curvas. En este tipo de terreno muestra una parte ciclo de las más 
  equilibradas`,
  `La posición de manejo invita a pasar largas horas a bordo de la AS.
  La AS ofrece una postura relajada, con los codos levemente flexionados, la espalda erguida y una flexión de piernas confortable.`,
  "botonrouser"
);

const ltz = new Motos(
  "Suzuki LTZ 400",
  `${url}/motos_usadas/quadsport1.jpg`,
  `${url}/motos_usadas/quadsport2.jpg`,
  `${url}/motos_usadas/quadsport3.jpg`,
  `El Suzuki LTZ 400 cuenta con un motor monocilindrico de 500 cm3, 4 tiempos enfriado por aire, OHC 1 árbol de levas, y 17 CV de potencia.
   La transmisión es de 5 velocidades mas la marcha atras.`,
  `Su peso es de 183kg. El freno delantero es de doble disco de 160 mm. El trasero de tambor.
   La suspensión delantera es Independiente, doble horquilla, amortiguador hidráulico con resortes, la trasera, Basculante con amortiguador sencillo`,
  `La posición de manejo invita a pasar largas horas a bordo de la AS.
  La AS ofrece una postura relajada, con los codos levemente flexionados, la espalda erguida y una flexión de piernas confortable.`,
  "botonltz"
);

const cbx = new Motos(
  "Honda CBX250 Twister",
  `${url}/motos_usadas/hondacbx1.jpg`,
  `${url}/motos_usadas/hondacbx2.jpg`,
  `${url}/motos_usadas/hondacbx3.jpg`,
  `La Honda CBX250 Twister cuenta con un motor Monocilindrico 4 tiempos de 249 cm3. Su sistema de arranque es electrico y 
   su potencia máxima es de 23.66 HP a 8000 rpm. Su transmisión es de 6 velocidades.`,
  `La horquilla telescópica delantera sirve como estructura del chasis del vehículo y como medio para mover el vehículo.
   La suspensión trasera es mono-amortiguada.  El amortiguador está ubicado debajo del asiento y está dispuesto de tal 
   manera que la llanta trasera se encuentre siempre en contacto con el suelo.`,
  `Carburador tipo CV con el cual se permite que el funcionamiento del cable del acelerador actúe en la válvula de 
  aceleración tipo mariposa, separadamente del venturí.`,
  "botoncbx"
);

const cryptonusada = new Motos(
  "Yamaha Crypton",
  `${url}/motos_usadas/crypton1.jpg`,
  `${url}/motos_usadas/crypton2.jpg`,
  `${url}/motos_usadas/crypton3.jpg`,
  `Con un andar cómodo y sencillo, es una excelente opción para la movilidad urbana diaria. Posee un motor 4 tiempos de
   100 cm3 que llega a una potencia máxima de 8 hp a 7.500 rpm, y una velocidad máxima da 80 km/h.`,
  `Por su estética y dimensiones es un vehículo versátil y fácil de conducir en trayectos cortos y medianos.
   Además posee un completo tablero, caballete central y lateral así como baúl portaobjetos bajo el asiento.`,
  `El arranque de esta moto es electrico y a pedal, cuenta con caja de 4 velocidades y la capacidad del tanque es de 
   5,2 Lts. Es una moto muy económica, y por eso es una muy buena opción para una moto urbana.`,
  "botoncrypton"
);

const cb = new Motos(
  "Honda CB1 ",
  `${url}/motos_usadas/hondacb1.jpg`,
  `${url}/motos_usadas/hondacb2.jpg`,
  `${url}/motos_usadas/hondacb3.jpg`,
  `La CB1 es una moto que ante todo es una herramienta de trabajo. 
  Por esto su diseño es básico y a la vez completamente dirigido a la funcionalidad. 
  Cuenta con una estructura fuerte y resistente que permite un manejo cómodo dirigido a la ergonomía.`,
  `La CB1 es una moto sin sofisticaciones, pero con fortaleza y características mecánicas para trabajar.
   El equipo de Honda la probó arduamente en todo el territorio colombiano antes de su lanzamiento para 
   asegurar que cumple con las expectativas de los consumidores a quienes se dirige.`,
  `Cuenta con un motor cuatro tiempos de 124,8 cc, la cb1 entrega 8.5 HP a 7.500rpm.
  E s de encendido por patada y cuenta con frenos de tambor en las dos ruedas.`,
  "botoncb"
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

//-----Rumi Sport
const $botonrumi = document.querySelector(".botonrumi");
$botonrumi.addEventListener("click", () => showModal(rumi));

//-----Bajaj Rouser AS 200
const $botonrouser = document.querySelector(".botonrouser");
$botonrouser.addEventListener("click", () => showModal(rouser));

//-----Suzuki LTZ 400
const $botonltz = document.querySelector(".botonltz");
$botonltz.addEventListener("click", () => showModal(ltz));

//-----Honda CBX250 Twister
const $botoncbx = document.querySelector(".botoncbx");
$botoncbx.addEventListener("click", () => showModal(cbx));

//-----Yamaha Crypton
const $botoncrypton = document.querySelector(".botoncrypton");
$botoncrypton.addEventListener("click", () => showModal(cryptonusada));

//-----Honda CB1
const $botoncb = document.querySelector(".botoncb");
$botoncb.addEventListener("click", () => showModal(cb));

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
