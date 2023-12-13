

export const renderHeader = () => {
  const header = document.createElement("header");
  header.classList.add("header");

  const nav = document.createElement("nav");

  // Enlace con el logo de inicio
  const inicioLink = document.createElement("a");
  inicioLink.href = "/"; 
  inicioLink.textContent = "Inicio";
  nav.appendChild(inicioLink);

  // Enlaces de navegación
  const conocenosLink = document.createElement("a");
  conocenosLink.href = "/conocenos";
  conocenosLink.textContent = "Conócenos";
  nav.appendChild(conocenosLink);

  const chatGrupalLink = document.createElement("a");
  chatGrupalLink.href = "/chat-grupal";
  chatGrupalLink.textContent = "Chat Grupal";
  nav.appendChild(chatGrupalLink);

  const loginLink = document.createElement("a");
  loginLink.href = "#login";
  loginLink.textContent = "Login";
  nav.appendChild(loginLink);

  header.appendChild(nav);

  return header;
};