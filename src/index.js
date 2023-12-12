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
import { onURLChange, setRootElement, setRoutes } from "./router.js";
import { error } from "./views/error.js";

const routes = {
  "/home": renderHome,
  "/error": error,
  "/conocenos": renderTargetas,
  "/chat-grupal": renderChatGrupal,
  "/api-key": renderApiKey,

};


const rootRender = document.querySelector("#root");
setRoutes(routes);
setRootElement(rootRender);

document.addEventListener("DOMContentLoaded", (event) => {
  
  onURLChange(event.target.location.pathname);
});
