export const renderChat = (element) => { // entre los parametros se debe agregar un argumento element que despues se ua en una funcion
  const section = document.createElement("section");
  

  const divContenedor = document.createElement("div");
  divContenedor.id = "contenedorChat";
  divContenedor.classList.add("contenedorChat");

  const divChat = document.createElement("div");
  divChat.classList.add("textoChat");

  const chatContainer = document.createElement("div");
  chatContainer.id = "chatContainer";
  chatContainer.classList.add("chatContainer");


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
  

  // section.appendChild(header);
  section.appendChild(divContenedor);
  divContenedor.appendChild(divChat);
  divChat.appendChild(chatContainer);
  divChat.appendChild(mensajeInput);
  divChat.appendChild(botonEnviar);

  // section.appendChild(footer);

  return section;
  };