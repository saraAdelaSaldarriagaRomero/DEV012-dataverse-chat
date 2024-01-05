
import { renderHeader } from "../components/header.js";
import { renderChat } from "../components/chat.js";
import { renderFooter } from "../components/footer.js";

export const renderChatGrupal = () => {
  const section = document.createElement("section");
  const header = renderHeader();
  const chat = renderChat();
  const footer = renderFooter();

  const divContenedor = document.createElement("div");
  divContenedor.id = "contenedorChatGrupal";
  divContenedor.classList.add("contenedorChatGrupal");

  const divImagen = document.createElement("div");
  divImagen.classList.add("imagenChatGrupal");

  const divChatGrupal = document.createElement("div");
  divChatGrupal.classList.add("textoChatGrupal");



  const img = document.createElement("img");
  img.src =
    "https://th.bing.com/th/id/OIG.Stpj71mgyb9l58tlGd.h?w=270&h=270&c=6&r=0&o=5&pid=ImgGn";
  img.alt = "programadora Ada";

  

  section.appendChild(header);
  section.appendChild(divContenedor);
  divContenedor.appendChild(divImagen);
  divImagen.appendChild(img);
  divContenedor.appendChild(divChatGrupal);
  divChatGrupal.appendChild(chat);
  

  section.appendChild(footer);

  return section;
};
