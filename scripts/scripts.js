$wrapper = document.querySelector(".principal");

function Motos(nombre, foto, descripcion, boton, moto) {
  (this.nombre = nombre),
    (this.foto = foto),
    (this.descripcion = descripcion),
    (this.boton = boton);
  return printMoto(this);
}

const cb500 = new Motos(
  "Honda Cb500 2019",
  "honda_cb500.png",
  `La Honda CB500F es una excelente opción dentro 
  del mercado de motos naked para el carnet A-2, una moto ligera y de estética 
  deportiva dotada de un motor de dos cilindros con una potencia de 35 kW (47 CV)`,
  "botoncb500"
);

const cb400 = new Motos(
  "Honda asdadCb500 2019",
  "honda_cb500.png",
  `La Honda CB500F es una excelente opción dentro 
  del mercado de motos naked para el carnet A-2, una moto ligera y de estética 
  deportiva dotada de un motor de dos cilindros con una potencia de 35 kW (47 CV)`,
  "botoncb500"
);
const cb300 = new Motos(
  "Honda asdadCb500 2019",
  "honda_cb500.png",
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
            <img src="images/${moto.foto}" alt="Honda cb500" class="product__image">
          </figure>
          <div>
            <h2 class="product__title">${moto.nombre}</h2>
            <p class="product__description">${moto.descripcion}</p>
               <input type="button" class="product__button ${moto.boton}" value="Ver Más!">
          </div>
        </article>  `;
}
