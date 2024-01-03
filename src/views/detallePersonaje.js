import { renderHeader } from "../components/header.js";
import { renderFilter } from "../components/filtrar.js";
import { renderFooter } from "../components/footer.js";
import { renderChat } from "../components/chat.js";
import dataset from "../data/dataset.js";


export const renderCharacters = () => {

    const section= document.createElement("section");

    const id= window.location.pathname.replace("/detalle-", "");
    const element= dataset.find((personaje)=>personaje.id===id);
    const chat= renderChat(element);
    const header = renderHeader()
    const filter = renderFilter();
    const footer = renderFooter();
    const sectionChat= document.createElement("section");
    sectionChat.classList.add("chat");
    
   sectionChat.innerHTML+=`
    <div class="card">
  <div class="card-container">
    <img class="img-chat" src="${element.imageUrl}" alt="${element.name}">
    <h3 class="infoChatName" itemprop="name">${element.name}</h3>
    <h5 class="infoChat"> "${element.description}"</h5>
    <h5 class="infoChat">Año: ${element.facts.yearOfBirth}</h5>
    <h5 class="infoChat">Ciudad: ${element.facts.birthPlace}</h5>
    <h5 class="infoChat">Campo de Accion: ${element.facts.mainField}</h5>
  </div>
</div>`

    
    const divFilters= filter.querySelector(".div-filtros");
    divFilters.style.display="none";
    
    
      
    section.appendChild(header);
    sectionChat.appendChild(chat);
    section.appendChild(sectionChat);  
    section.appendChild(footer);
  
    return section;
  };