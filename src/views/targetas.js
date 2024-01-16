 import { renderHeader } from "../components/header.js";
 import { renderFooter } from "../components/footer.js";

 import { filterData } from "../lib/dataFunctions.js";
 import { sortData } from "../lib/dataFunctions.js";
 import { computeStats } from "../lib/dataFunctions.js";
 import { renderItems } from "../components/item.js";
 import dataset from "../data/dataset.js";
 import { renderFilter } from "../components/filtrar.js";



export const renderTargetas= () => {
    const section = document.createElement("section");
    section.classList.add("section");
    section.id = "conocenos";

    const statistics = document.createElement("div");
    section.classList.add("statistics");
    section.id = "statistics";



    const header = renderHeader();
    const filter = renderFilter ();
    const items = renderItems (dataset);
    const footer = renderFooter();

  
   
   section.appendChild(header);
   section.appendChild(filter);
   section.appendChild(statistics);
   section.appendChild(items);
   section.appendChild(footer);

  // el método querySelector para seleccionar elementos del DOM (Document Object Model) mediante consultas de selectores CSS. 
   const filterMainField = filter.querySelector('[data-testid="select-mainField"]');
   const sortName = filter.querySelector('[data-testid="select-sort"]');
   const resetButton = filter.querySelector('[data-testid="button-clear"]');
   

   let data = dataset;

   const stat = computeStats(data);

   const totalItemsElement = document.createElement("h3");
   totalItemsElement.textContent = `Total Items: ${stat.totalItems}`;
   statistics.appendChild(totalItemsElement);

   

   filterMainField .addEventListener("change", (e) => {
    e.preventDefault();
    const value = filterMainField.value;
    const filterByMainField = filterData(dataset, "mainField", value);
    items.innerHTML = "";

    const filterByList = renderItems(filterByMainField);
    items.appendChild(filterByList);
    

    // Recalculate stats and update total items
    const newStat = computeStats(filterByMainField);
    totalItemsElement.textContent = `Total Items: ${newStat.totalItems}`;
    
    data = filterByMainField;
  });

  sortName.addEventListener("change", (e) => {
    e.preventDefault();
    const sortOrder = sortName.value;
    const sortedName = sortData(data, "name", sortOrder);
    items.innerHTML = "";
    const sortedList = renderItems(sortedName);
    items.appendChild(sortedList);
  });


  
    resetButton.addEventListener("click", (e) => {
    e.preventDefault();
    filterMainField.value = "";
    
    sortName.value = "";
    items.innerHTML = "";
    items.appendChild(renderItems(dataset));
    
    // Recalculate stats and update total items
    const newStat = computeStats(dataset);
    totalItemsElement.textContent = `Total Items: ${newStat.totalItems}`;
    
    data = dataset;
  });

  

  





 









    
  return section;
 

}





















