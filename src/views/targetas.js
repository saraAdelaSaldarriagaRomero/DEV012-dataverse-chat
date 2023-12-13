 import { renderHeader } from "../components/header.js";
 import { renderFooter } from "../components/footer.js";

 
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
    
  return section;
 

}





















