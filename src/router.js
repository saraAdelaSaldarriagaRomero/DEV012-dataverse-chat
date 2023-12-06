//Objecto que mapeo la ruta de  uestro equipo
let ROUTES = {};
//referencia el elemento html donde vamos a dibujar el contenido de nuestros componenetes
let rootElement = "";
// Encapsular las varibles para que sean reconocidas en el exterior, tomando el valor que nos estan pasando y reaccinarlo.
export const setRootElement = (newRootElementValue) => {
  rootElement = newRootElementValue;
};

//Se exporta una función llamada setRoutes que permite establecer las rutas de la aplicación al asignar el objeto proporcionado como argumento al objeto ROUTES
export const setRoutes = (newRoutesValue) => {
  ROUTES = newRoutesValue;
};

//Se define una función renderView que toma una pathname (ruta) y un objeto props. Esta función renderiza la vista asociada a la ruta especificada en el elemento HTML rootElement. 
const renderView = (pathname, props = {}) => {
  const root = rootElement;
  root.innerHTML = "";

  if (ROUTES[pathname]) {
    const template = ROUTES[pathname](props);
    root.appendChild(template);
  } else {
    root.appendChild(ROUTES[`/error`](props)); //Si la ruta no existe en el objeto ROUTES, se renderiza la vista de error.
  }
};

//Se exporta una función llamada navigateTo que cambia la URL utilizando history.pushState y luego renderiza la vista asociada a la nueva ruta utilizando la función renderView.
export const navigateTo = (pathname, props = {}) => {
    
  const URLVisited = window.location.origin + pathname;
  history.pushState({}, "", URLVisited);
  
  renderView(pathname, props);
};
//Se exporta una función llamada onURLChange que obtiene la ruta actual desde la URL y utiliza la función renderView para renderizar la vista correspondiente.
export const onURLChange = () => {
  const pathname = window.location.pathname
  renderView(pathname);
};
//Se asigna la función onURLChange al evento onpopstate del objeto window. Esto garantiza que la vista se actualice cuando cambia la historia de navegación, como al utilizar los botones de retroceso y avanzar del navegador.
window.onpopstate = onURLChange;