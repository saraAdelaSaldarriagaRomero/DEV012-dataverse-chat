
 import { renderHeader } from "../components/header.js";
 import { renderFooter } from "../components/footer.js";

export const renderHome = () => {
  
  const section = document.createElement("section");
  section.classList.add("sectionHome");
  section.id = "sectionHome";

  const header = renderHeader();
  const footer = renderFooter();

  const divContenedor = document.createElement("div");
  divContenedor.id = "contenedorHome";
  divContenedor.classList.add("contenedorHome");

  const divImagen = document.createElement("div");
  divImagen.classList.add("imagenHome");

  const divTexto = document.createElement("div");
  divTexto.classList.add("textoHome");

  const h1 = document.createElement("h1");
  h1.innerHTML = "Mujeres que contribuyeron a la ciencia y la tecnologia";

  const p = document.createElement("p");
  p.innerHTML =
    "Si quieres chatear con una de nosotras haz clic en <a href='#conocenos'>conócenos</a>, filtra por categoría y elige con quién chatear.";

  const img = document.createElement("img");
  img.src =
    "https://th.bing.com/th/id/OIG.DoMIBsWKs1zwyNIFUarG?w=270&h=270&c=6&r=0&o=5&pid=ImgGn";
  img.alt = "programadora Ada";

  // Append elements to their respective parents
  section.appendChild(header);
  section.appendChild(divContenedor);
  divContenedor.appendChild(divTexto);
  divContenedor.appendChild(divImagen);
  divImagen.appendChild(img);
  divTexto.appendChild(h1);
  divTexto.appendChild(p);
  section.appendChild(footer);

  return section;

};