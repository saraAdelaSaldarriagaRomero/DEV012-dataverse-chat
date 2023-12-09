
import { renderHeader } from "../components/header.js";
import { renderFooter } from "../components/footer.js";
// import { navigateTo } from "../router.js";

export const renderHome = () => {
  
  const section = document.createElement("section");
  section.classList.add("sectionHome");
  
  section.id = "sectionHome";
  const header = renderHeader();
  header.id = "headerHome";
  const footer = renderFooter();
  footer.id = "footerHome";
  
  const divContenedor = document.createElement("div");
  divContenedor.id = "contenedorHome";
  divContenedor.classList.add("contenedorHome");

  const divImagen = document.createElement("div");
  divImagen.classList.add("imagenHome");

  const divTexto = document.createElement("div");
  divTexto.classList.add("textoHome");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");

  img.src = "https://d2a5isokysfowx.cloudfront.net/wp-content/uploads/2021/02/mujeres-programadoras.jpeg";
  img.alt = "programadora Ada";
  h1.textContent = "Mujeres que contribuyeron a la ciencia y la tecnologia";
  p.textContent = "Si quieres chatear con una de nosotras has clic en conocenos, filtra por categoria y escoge con quien chatear.";

  // h1.innerHTML = "Mujeres que contribuyeron a la ciencia y la tecnologia"
  // p.innerHTML = "Si quieres chatear con una de nosotras haz clic en <a href='#conocenos'>conócenos</a>, filtra por categoría y elige con quién chatear.";



  section.appendChild(header);
  section.appendChild(divContenedor);
  divContenedor.appendChild(divTexto,divImagen);
  divImagen.appendChild(img);
  divTexto.appendChild(h1,p)


}