import { navigateTo } from "../router.js";

export const renderFilter = () => {
    // Crear el contenedor principal para el filtro
    const filter = document.createElement("div");
    filter.classList.add("filterDiv");
  
    // Añadir contenido al contenedor
    filter.innerHTML = `
      <div class="div-filtros">
        <label for="campoPrincipal">Filter:</label>
        <select id="campoPrincipal" name="campoPrincipal" data-testid="select-mainField">
          <option disabled selected value="">Select </option>
          <option value="Ciencia de la Computación">Ciencia de la Computación</option>
          <option value="Matemáticas">Matemáticas</option>
          <option value="Física">Física</option>
          <option value="Astronomia">Astronomia</option>
          <option value="Química">Química</option>
        </select>
  
        <label for="a-to-z">Sort:</label>
        <select id="a-to-z" name="a-to-z" data-testid="select-sort">
          <option disabled selected value="">Select Order</option>
          <option value="asc">A-Z</option>
          <option value="desc">Z-A</option>
        </select>
  
        <button data-testid="button-clear" class="button">Clear</button>
      </div>
    `;

    return filter;
  
  }

  