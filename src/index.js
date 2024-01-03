// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.

/*
import Example from './views/Example.js';

Ejemplo de definición de rutas:

const routes = {
    "/": Example,
    ...
}
*/

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/

// usageExample.js

import { renderHome } from "./views/home.js";
import { renderTargetas } from "./views/targetas.js";
import { renderChatGrupal} from "./views/chatGrupal.js";
import { renderApiKey} from "./views/apiKey.js";
import { renderCharacters } from "./views/detallePersonaje.js";
import { onURLChange, setRootElement, setRoutes } from "./router.js";
import { error } from "./views/error.js";
import dataset from "./data/dataset.js";

const routes = {
  "/": renderHome,
  "/error": error,
  "/conocenos": renderTargetas,
  "/chat-grupal": renderChatGrupal,
  "/api-key": renderApiKey,

};

dataset.forEach((element) => {
  routes[`/detalle-${element.id}`] = renderCharacters;
});


const rootRender = document.querySelector("#root");
setRoutes(routes);
setRootElement(rootRender);

document.addEventListener("DOMContentLoaded", (event) => {
  
  onURLChange(event.target.location.pathname);
});
