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
const benelli = new Motos(
  "Benelli 300 TNT",
  `${url}/motos_nuevas/benelli1.jpg`,
  `${url}/motos_nuevas/benelli2.jpg`,
  `${url}/motos_nuevas/benelli3.jpg`,
  `La TNT 300 es una atractiva naked . Dueña de una estética musculosa y agresiva. 
  El faro principal es una doble parábola superpuesta, que aloja en sus esquinas
   superiores las luces de posición. El faro es de tecnología halógena, 
   pero de correcto desempeño.`,
  `La Benelli TNT 300 cuenta con un bicilíndrico en línea de 4 válvulas por cilindro,
   refrigeración líquida y alimentado por inyección electrónica. Declara una potencia
   máxima de 38 CV a 12.000 rpm y un torque de 2,75 kgm a 9.000 revoluciones por
   minuto lo que refleja que es una moto que se pone divertida en lo alto del cuentavueltas.`,
  `Los frenos son buenos, y siempre y cuando esté calzada con buenas 
  cubiertas, la potencia de frenado es excelente, siendo la única en su segmento 
  con doble freno delantero a disco con cálipers de 4 pistones.`,
  "botonbenelli"
);

const gx1 = new Motos(
  "Gilera Gx-1 2019",
  `${url}/motos_nuevas/gileragx1.jpg`,
  `${url}/motos_nuevas/gileragx2.jpg`,
  `${url}/motos_nuevas/gileragx3.jpg`,
  `La GX-1 porta un motor monocilíndrico de 125 cc  refrigerado por aceite,
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

const xtz = new Motos(
  "Yamaha XTZ 125",
  `${url}/motos_nuevas/xtz1.jpg`,
  `${url}/motos_nuevas/xtz2.jpg`,
  `${url}/motos_nuevas/xtz3.jpg`,
  `La XTZ 125, con el diseño y confort que sólo puede entregarte una moto de verdad,
   tiene encendido eléctrico para una mayor comodidad y confianza. Sus gráficos y colores la 
   hacen más deportiva.`,
  `Con motor 4 tiempos, balanceador de cigüeñal, el cual evita vibraciones en el 
  motor y SOHC que genera menor ruido y es más eficiente. Suspensión trasera 
  monocross para mayor confort en terrenos destapados.`,
  `La Honda CB500F es una excelente opción dentro 
  del mercado de motos naked para el carnet A-2, una moto ligera y de estética 
  deportiva dotada de un motor de dos cilindros con una potencia de 35 kW (47 CV)`,
  "botonxtz"
);

const ceccato = new Motos(
  "Zanella Ceccato R150",
  `${url}/motos_nuevas/ceccato1.jpg`,
  `${url}/motos_nuevas/ceccato2.jpg`,
  `${url}/motos_nuevas/ceccato3.jpg`,
  `A 60 años del nacimiento de la moto que revolucionó la industria nacional en 1957,
   la compañía presenta su evolución renovando el espíritu Café Racer y la calidad de 
   una larga tradición de diseño italiano`,
  `la Ceccato R150 incorpora un motor de 150 cc con tecnología de árbol de levas a la
   cabeza de 15HP logrando una aceleración de 0 a 60 km/h en tan sólo 4,6 segundos y 
   una velocidad final de 140 km/h.`,
  ` Esta moto posee manubrio y óptica estilo Café Racer,
    llantas de 72 rayos con diseño helicoidal, asiento tipo slammer con tratamiento 
    antideslizante y acabado mate, y escape de diseño vintage.También incluye 
    velocímetro clásico y puerto USB que permite la carga de teléfonos celulares
     y GPS durante el viaje. `,
  "botonceccato"
);

const vc = new Motos(
  "Gilera VC250 Prova",
  `${url}/motos_nuevas/vc1.jpg`,
  `${url}/motos_nuevas/vc2.jpg`,
  `${url}/motos_nuevas/vc3.jpg`,
  `Líneas modernas y agresivas que encuentran su inspiración en una saga deportiva de Hamamatsu. 
  El frente está gobernado en su totalidad por un gran faro de correcto desempeño que incorpora
   tecnología halógena y una tira led superior para la luz de conducción diurna.`,
  `Monocilindrico de 223 cc, bastante cuadrado en las dimensiones del cilindro, OHC, carburado, 
  arranque solo eléctrico y refrigerado por aceite. Con 18 CV de potencia y 17 Nm de torque a 
  6.000 rpm despliega lo mejor de sí en el final del cuentavueltas, con una respuesta para nada
   despreciable en bajos y medios.`,
  `La VC250 Prova resultará cómoda para pilotos de hasta talla media. La buena percepción de
   calidad también se hace presente al ponernos a sus mandos, con una robusta tija superior 
   que soporta los semimanillares a una altura que no recarga de peso las muñecas, siendo 
   otro punto a favor a la hora de darle un uso cotidiano.`,
  "botongileravc"
);

const titan = new Motos(
  "Honda CG 150 Titan",
  `${url}/motos_nuevas/titan1.jpg`,
  `${url}/motos_nuevas/titan2.jpg`,
  `${url}/motos_nuevas/titan3.jpg`,
  `Cuenta con un motos monocilíndrico de 149,2 cc, 4 tiempos, árbol de levas a la cabeza y refrigerado
   por aire. El peso de la moto disminuyó algunos kilos, lo que implica que si bien
   la potencia no aumentó y sigue entregando 12,9 CV a 8.000 rpm.`,
  `La CG siempre fue apta para cualquier talla de piloto y eso no ha cambiado, con una altura de 
  asiento de 792 mm. Cuenta tanto con pie de apoyo lateral como con caballete central,
  ambos de sencillo accionamiento. El instrumental es completamente nuevo y digital y
  consta de una pantalla LCD.`,
  `Es el primer modelo de la marca que se desarrolla exclusivamente para nuestro mercado 
  y que actualmente integra un 15% de piezas nacionales. Cuenta con luces alogenas pero de buen rendimiento`,
  "botontitan"
);

const motoneta = new Motos(
  "Zanella Motoneta",
  `${url}/motos_nuevas/zanellamotoneta1.jpg`,
  `${url}/motos_nuevas/zanellamotoneta2.jpg`,
  `${url}/motos_nuevas/zanellamotoneta3.jpg`,
  `Bajo el slogan “Convertite en un Vintage Victim”, Zanella, la empresa fabricante de motos con sello
   nacional, presenta su nuevo modelo MOTONETA. Perteneciente a la gama CUBS, este vehículo c
   ombina el diseño retro con la última tecnología.`,
  `Su transmisión es semi-automática (porque el accionamiento del embrague es a través del pedal
   de cambios) lo que la convierte en una moto liviana y de fácil conducción: no posee el
   clásico embrague centrífugo, sino q u e tiene uno del tipo húmedo multidisco.`,
  `Lo más atractivo de esta nueva Motoneta está en el diseño, que mantiene aquella línea que 
  la hizo popular y suma un aggiornamento acorde a los tiempos que corren. El modelo cuenta
   con un tablero de estilo retro con agujas y ópticas traseras y delanteras en composé.`,
  "botonmotoneta"
);

const sahel = new Motos(
  "Gilera Sahel 150",
  `${url}/motos_nuevas/sahel1.jpg`,
  `${url}/motos_nuevas/sahel2.jpg`,
  `${url}/motos_nuevas/sahel3.jpg`,
  `La Gilera Sahel 150 es una moto tipo enduro de la marca Gilera, cuenta con un motor 
  monocilindrico de 150cm3, refrigerado por aire. Entrega una potencia máxima de 11cv a 8.500 rpm.
  Esta equipada con encendido electronico y la caja es de 4 velocidades.`,
  `En la suspensión delantera, cuenta con Barrales telescópica hidráulica, y en la trasera, 
   con un Monoamortiguador hidráulico. La capacidad del tanque es de 8,6 Lts y tiene frenos a 
   disco adelante y a tambor atras. Los faros son alógenos y
  es muy economica en temas de consumo de combustible`,
  `Una de las cosas mas destacables de la moto es su estetica. Tiene una capacidad de carga de 
  hasta 150kg, y la moto pesa 110kg. El arranque es electrico y a patada..`,
  "botonsahel"
);

const biz = new Motos(
  "Honda Biz 125",
  `${url}/motos_nuevas/biz1.jpg`,
  `${url}/motos_nuevas/biz2.jpg`,
  `${url}/motos_nuevas/biz3.jpg`,
  `La Honda Biz 125 es una motocicleta tipo Cub con motor de 4 tiempos, con un solo cilindro horizontal de 125cc
  , alimentado por carburador, con sistema de ignición por descarga capacitiva (CDI) y avance electrónico.`,
  `Como detalles característicos vamos a citar un tablero con indicador de nivel de combustible y velocímetro 
  analógicos, un asiento rebatible con cerradura que oculta la tapa del tanque de nafta y el baúl, en el que puede 
  guardarse un casco integral.`,
  `Además tiene sistema antirrobo Shutter Key de Honda para evitar robos o roturas de la cerradura y 
  tecnología Tuff-up en la rueda trasera, que ofrece mayor seguridad y estabilidad ante posibles pinchaduras.`,
  "botonbiz"
);

const ax100 = new Motos(
  "Suzuki Ax-100",
  `${url}/motos_nuevas/ax1.jpg`,
  `${url}/motos_nuevas/ax2.jpg`,
  `${url}/motos_nuevas/ax3.jpg`,
  `Es una moto liviana, maniobrable y ante todo muy confiable. Tiene un diseño 
  dinámico en el cual tanto el conductor como el pasajero viajan con comodidad, 
  sobre todo gracias a un amplio asiento de dos niveles. Supera cualquier obstáculo,
   es robusta y resistente.`,
  `Dispone de un motor de dos tiempos de 98 cc, y viene con una caja de cuatro
   velocidades. Puede dar hasta 12 HP a 7 800 rpm, lo que la convierte en la
   moto de 100 cc más potente del mercado. La velocidad máxima, según pruebas,
   frisa los 100,km/h (98) y el tanque de combustible tiene 12 L con una reserva de 2.`,
  `La suspensión hidráulica asegura la estabilidad. Los frenos son a fricción,
   de tambor, la transmisión por cadena y el arranque por palanca (patada) transistorizado.`,
  "botonax"
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
//-----Benelli
const $botonbenelli = document.querySelector(".botonbenelli");
$botonbenelli.addEventListener("click", () => showModal(benelli));

//-----Gilera Gx-1
const $botongx1 = document.querySelector(".botongx1");
$botongx1.addEventListener("click", () => showModal(gx1));

//-----Yamaha XTZ
const $botonxtz = document.querySelector(".botonxtz");
$botonxtz.addEventListener("click", () => showModal(xtz));

//-----Zanella Ceccato R150
const $botonceccato = document.querySelector(".botonceccato");
$botonceccato.addEventListener("click", () => showModal(ceccato));

//-----Gilera VC250 Prova
const $botongileravc = document.querySelector(".botongileravc");
$botongileravc.addEventListener("click", () => showModal(vc));

//-----Honda Cg Titan
const $botontitan = document.querySelector(".botontitan");
$botontitan.addEventListener("click", () => showModal(titan));

//-----Zanella Motoneta
const $botonmotoneta = document.querySelector(".botonmotoneta");
$botonmotoneta.addEventListener("click", () => showModal(motoneta));

//-----Gilera Sahel 150
const $botonsahel = document.querySelector(".botonsahel");
$botonsahel.addEventListener("click", () => showModal(sahel));

//-----Honda Biz 125
const $botonbiz = document.querySelector(".botonbiz");
$botonbiz.addEventListener("click", () => showModal(biz));

//-----Suzuki Ax-100
const $botonax = document.querySelector(".botonax");
$botonax.addEventListener("click", () => showModal(ax100));

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
