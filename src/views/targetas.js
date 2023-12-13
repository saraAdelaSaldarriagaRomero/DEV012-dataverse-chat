 import { renderHeader } from "../components/header.js";
 import { renderFooter } from "../components/footer.js";

 import { filterData } from "../lib/dataFunctions.js";
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

   const filterMainField = filter.querySelector('[data-testid="select-mainField"]'
   );

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
 









    
  return section;
 

}





















