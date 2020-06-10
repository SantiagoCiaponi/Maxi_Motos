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
  "Rumi Sport",
  `${url}/motos_usadas/rumy1.jpg`,
  `${url}/motos_usadas/rumy2.jpg`,
  `${url}/motos_usadas/rumy3.jpg`,
  `La producción comenzó a finales de 1950, pero fue presentado al público en 1951.
   El motor se mejoró considerablemente al estar equipadas con pistón deflector, que sucesivamente 
   se montaron en todos los modelos posteriores de la firma. `,
  `C7.0 CV/6 000 rpm, relación de compresión 7.8:1, culatas de aluminio, carburador MB 22A, bastidor
   doble cuna, neumáticos D/T 2.50 x 19" (2.375 x 21" opcional), sillín biplaza, tanque de 14 L 
   (consumo 3.4 L/100 km), velocidad máxima 100 km/h y 90 kg de peso`,
  `En 1953, 1955 y 1956 fueron los años en los que se mejoró este modelo al hacer cambios en la carburación
   y en el bastidor así como de la suspensión trasera y montando llantas de hierro.`,
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
  `S u peso es de 183kg. El freno delantero es de doble disco de 160 mm. El trasero de tambor.
   La suspensión delantera es Independiente, doble horquilla, amortiguador hidráulico con resortes, la trasera, Basculante con amortiguador sencillo`,
  `La posición de manejo invita a pasar largas horas a bordo de la AS.
  La AS ofrece una postura relajada, con los codos levemente flexionados, la espalda erguida y una flexión de piernas confortable.`,
  "botonltz"
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
