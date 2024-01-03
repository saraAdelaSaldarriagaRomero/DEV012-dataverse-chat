
import { renderHeader } from "../components/header.js";
import { renderFooter } from "../components/footer.js";

export const renderApiKey = () => {
    const section = document.createElement("section");

    const divClaveModule = document.createElement("div");
    divClaveModule.classList.add("claveModule");

    const claveInput = document.createElement("input");
    claveInput.type = "password";
    claveInput.placeholder = "Ingresa tu clave...";

    const botonEnviar = document.createElement("button");
    botonEnviar.type = "button";
    botonEnviar.textContent = "Enviar";
    botonEnviar.addEventListener("click", enviarMensaje);

    function enviarMensaje() {
        const clave = claveInput.value.trim();
        if (clave !== "") {
            // Lógica para enviar la clave (puedes emitir un evento o llamar a una función, por ejemplo)
            console.log("Clave ingresada:", clave);
            claveInput.value = "";
        }
    }

    divClaveModule.appendChild(claveInput);
    divClaveModule.appendChild(botonEnviar);

    const header = renderHeader();
    const footer = renderFooter();

    section.appendChild(header);
    section.appendChild(divClaveModule); // Agregar divClaveModule en lugar de claveInput directamente
    section.appendChild(footer);

    return section;
}
