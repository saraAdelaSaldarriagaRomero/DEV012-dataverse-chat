
import { navigateTo } from "../router.js"; 

export const renderItems = (dataset) => {
  const ul = document.createElement("ul");

  dataset.forEach((element) => {
    const li = document.createElement("li");
    li.setAttribute("itemscope", "");
    li.setAttribute("itemtype", "");
    li.classList.add("targeta");
    li.innerHTML = `
      <h2 itemprop="name">${element.name}</h2>
      <img src="${element.imageUrl}" alt="${element.id}">
      <p class="descripcion" itemprop="descripcion">${element.shortDescription}</p>
      <h4 class="añoDeNacimiento" itemprop="año de nacimiento">${element.facts.yearOfBirth}</h4>
      `;

      const apiSaved = localStorage.getItem("apiKey");

      li.addEventListener("click", (e) => {
        e.preventDefault();
  
        if (apiSaved === null) {
          navigateTo("/api-key");
        } else {
          navigateTo(`/detalle-${element.id}`, element);
        }
      });
  
      ul.appendChild(li);
    });
  
  
    const rootElement = document.getElementById("root");
    rootElement.appendChild(ul);


   return ul;

};



