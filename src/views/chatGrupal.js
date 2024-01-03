
import { renderHeader } from "../components/header.js";
import { renderFooter } from "../components/footer.js";

export const renderChatGrupal = () => {
  const section = document.createElement("section");
  const header = renderHeader();
  const footer = renderFooter();

  const divContenedor = document.createElement("div");
  divContenedor.id = "contenedorChatGrupal";
  divContenedor.classList.add("contenedorChatGrupal");

  const divImagen = document.createElement("div");
  divImagen.classList.add("imagenChatGrupal");

  const divChatGrupal = document.createElement("div");
  divChatGrupal.classList.add("textoChatGrupal");

  const chatContainer = document.createElement("div");
  chatContainer.id = "chatContainer";
  chatContainer.classList.add("chatContainer");

  const img = document.createElement("img");
  img.src =
    "https://th.bing.com/th/id/OIG.Stpj71mgyb9l58tlGd.h?w=270&h=270&c=6&r=0&o=5&pid=ImgGn";
  img.alt = "programadora Ada";

  const mensajeInput = document.createElement("input");
  mensajeInput.type = "text";
  mensajeInput.placeholder = "¡Hola! Empieza a chatear aquí...";

  const botonEnviar = document.createElement("button");
  botonEnviar.type = "button"; // Añade este tipo para evitar el envío del formulario
  botonEnviar.textContent = "Enviar";
  botonEnviar.addEventListener("click", enviarMensaje);

  function enviarMensaje() {
    const mensaje = mensajeInput.value.trim();
    if (mensaje !== "") {
      agregarMensaje("Tú", mensaje);
      mensajeInput.value = "";
      chatContainer.scrollTop = chatContainer.scrollHeight;
    }
  }

  function agregarMensaje(sender, text) {
    const mensajeElement = document.createElement("div");
    mensajeElement.innerHTML = `<strong>${sender}:</strong> ${text}`;
    chatContainer.appendChild(mensajeElement);
  }

  section.appendChild(header);
  section.appendChild(divContenedor);
  divContenedor.appendChild(divImagen);
  divImagen.appendChild(img);
  divContenedor.appendChild(divChatGrupal);
  divChatGrupal.appendChild(chatContainer);
  divChatGrupal.appendChild(mensajeInput);
  divChatGrupal.appendChild(botonEnviar);

  section.appendChild(footer);

  return section;
};
