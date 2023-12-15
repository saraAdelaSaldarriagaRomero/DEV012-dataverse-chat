 import { renderHeader } from "../components/header.js";
 import { renderFooter } from "../components/footer.js";

 import { filterData } from "../lib/dataFunctions.js";
 import { sortData } from "../lib/dataFunctions.js";
//  import { computeStats } from "../lib/dataFunctions.js";
 import { renderItems } from "../components/item.js";
 import dataset from "../data/dataset.js";
 import { navigateTo } from "../router.js";
import { renderFilter } from "../components/filtrar.js";



export const renderTargetas= () => {
    const section = document.createElement("section");
    section.classList.add("section");
    section.id = "conocenos";

    const header = renderHeader();
    const filter = renderFilter ();
    const items = renderItems (dataset);
    const footer = renderFooter();

   
   



   
   section.appendChild(header);
   section.appendChild(filter);
   section.appendChild(items);
   section.appendChild(footer);

   const filterMainField = filter.querySelector('[data-testid="select-mainField"]');
   const sortName = filter.querySelector('[data-testid="select-sort"]');
   const resetButton = filter.querySelector('[data-testid="button-clear"]');

   let data = dataset;
   filterMainField .addEventListener("change", (e) => {
    e.preventDefault();
    const value = filterMainField.value;
    const filterByMainField = filterData(dataset, "mainField", value);
    items.innerHTML = "";

    const filterByList = renderItems(filterByMainField);
    items.appendChild(filterByList);
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
    data = dataset;
  });


 









    
  return section;
 

}





















