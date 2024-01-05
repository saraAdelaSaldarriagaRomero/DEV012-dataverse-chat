
import { renderHeader } from "../components/header.js";
import { renderFooter } from "../components/footer.js";
import { navigateTo } from "../router.js";
import { openIAapiIndividual } from "../lib/chatApi.js";

export const renderApiKey = () => {
  
  const header = renderHeader();
  const footer = renderFooter();

  const section = document.createElement("section");
  const apiContainer = document.createElement("div");
  apiContainer.classList.add("apiContainer");
  const label = document.createElement("label");
  label.innerHTML = "";
  label.classList.add("apiLabel");
  const input = document.createElement("input");
  input.type = "password";
  input.placeholder = "Ingresa la clave";
  input.id = "inputApiKey";
  input.style.display = "block"
  const divApiButtons = document.createElement("div");
  divApiButtons.classList.add("divApiButtons");
  const apiKeyButton = document.createElement("button");
  apiKeyButton.id = "apiKeyButton";
  apiKeyButton.classList.add("buttonKey");
  apiKeyButton.innerHTML = "Guardar";
  const apiKeyButtonClear = document.createElement("button");
  apiKeyButtonClear.id = "apiKeyButtonClear";
  apiKeyButtonClear.classList.add("buttonKey");
  apiKeyButtonClear.innerHTML = "Borrar";
  apiKeyButton.addEventListener("click", (element) => {
    localStorage.setItem("apiKey", input.value);
    const mensajeInput = "hola";
    openIAapiIndividual(element.name, mensajeInput)
      .then((response) => {
        if (response.status === 401 || response.status === 403) {
          console.error("Error en la solicitud:");
          alert("Authentication error: invalid or missing token.");
        } else { navigateTo("/") }
        response.json()
      })
  })
    
  apiKeyButtonClear.addEventListener("click", () => {
    localStorage.removeItem("apiKey");
    input.value = "";
  });
  section.appendChild(header);
  apiContainer.appendChild(label);
  apiContainer.appendChild(input);
  divApiButtons.appendChild(apiKeyButton);
  divApiButtons.appendChild(apiKeyButtonClear);
  apiContainer.appendChild(divApiButtons);
  section.appendChild(apiContainer);
  section.appendChild(footer);
 
  return section;
};