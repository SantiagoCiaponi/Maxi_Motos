const $wrapper = document.querySelector(".principal");
const $modal = document.querySelector(".modal");

function Motos(nombre, foto1, foto2, foto3, descripcion, boton, moto) {
  (this.nombre = nombre),
    (this.foto1 = foto1),
    (this.foto2 = foto2),
    (this.foto3 = foto3),
    (this.descripcion = descripcion),
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
  "botoncb500"
);

const ax100 = new Motos(
  "Honda Cb500 2019",
  "images/honda_cb500.png",
  "honda_cb5002.jpg",
  "honda_cb5003.jpg",
  `La Honda CB500F es una excelente opción dentro 
  del mercado de motos naked para el carnet A-2, una moto ligera y de estética 
  deportiva dotada de un motor de dos cilindros con una potencia de 35 kW (47 CV)`,
  "botonax100"
);

const ax1002 = new Motos(
  "Honda Cb500 2019",
  "images/honda_cb500.png",
  "honda_cb5002.jpg",
  "honda_cb5003.jpg",
  `La Honda CB500F es una excelente opción dentro 
  del mercado de motos naked para el carnet A-2, una moto ligera y de estética 
  deportiva dotada de un motor de dos cilindros con una potencia de 35 kW (47 CV)`,
  "botoncb500"
);

const ax1300 = new Motos(
  "Honda Cb500 2019",
  "images/honda_cb500.png",
  "honda_cb5002.jpg",
  "honda_cb5003.jpg",
  `La Honda CB500F es una excelente opción dentro 
  del mercado de motos naked para el carnet A-2, una moto ligera y de estética 
  deportiva dotada de un motor de dos cilindros con una potencia de 35 kW (47 CV)`,
  "botoncb500"
);

function printMoto(moto) {
  const template = NewTemplate(moto);
  const html = document.implementation.createHTMLDocument();
  html.body.innerHTML = template;
  console.log(moto);
  $wrapper.append(html.body.children[0]);
}

function NewTemplate(moto) {
  return ` <article  class="product">
        <figure>
        <img src="${moto.foto1}" alt="Honda cb500" class="product__image">
        </figure>
        <div>
        <h2 class="product__title">${moto.nombre}</h2>
        <p class="product__description">${moto.descripcion}</p>
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

const $botoncb500 = document.querySelector(".botoncb500");
$botoncb500.addEventListener("click", () => createTemplate(cb500));
const $botonax100 = document.querySelector(".botonax100");
$botonax100.addEventListener("click", () => createTemplate(ax100));

function createTemplate(moto) {
  if (moto.boton == "botoncb500") {
    showModal(cb500);
  } else if (moto.boton == "botonax100") {
    showModal(ax100);
  }
}

function ModalTemplate(moto) {
  return `<div class="modal__info1">
            <figure class="modal__image">
              <img src="images/${moto.foto1}" alt="">
            </figure>
            <div class="modal__content">
              <h2 class="modal__title">${moto.nombre}</h2>
              <p class="modal__descripcion">${moto.descripcion}</p>
            </div>  
          </div>
          <div class="modal__info2">
           <div class="modal__content">
              <h2 class="modal__title">${moto.nombre}</h2>
              <p class="modal__descripcion">${moto.descripcion}</p>
            </div>   
              <figure class="modal__image">
                <img src="images/${moto.foto2}" alt="">
              </figure>
          </div>
          <div class="modal__info3">
            <figure class="modal__image">
              <img src="images/${moto.foto3}" alt="">
            </figure>
            <div class="modal__content">
              <h2 class="modal__title">${moto.nombre}</h2>
              <p class="modal__descripcion">${moto.descripcion}</p>
            </div> 
          </div>
          `;
}

async function showModal(moto) {
  $modal.style.animation = "modalIn .8s forwards";
  $modal.classList.add("active");

  $modal__image.setAttribute("src", moto.foto1);
  $modal__title.textContent = moto.nombre;
  $modal__descripcion.textContent = moto.descripcion;

  $modal__image2.setAttribute("src", moto.foto2);
  $modal__title2.textContent = moto.nombre;
  $modal__descripcion2.textContent = moto.descripcion;

  $modal__image3.setAttribute("src", moto.foto3);
  $modal__title3.textContent = moto.nombre;
  $modal__descripcion3.textContent = moto.descripcion;

  const $modalboton = document.querySelector(".modal__button");
  $modalboton.addEventListener("click", () =>
    $modal.classList.remove("active")
  );
}
