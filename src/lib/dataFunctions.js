export const filterData = (data, filterBy, value) => {
    return data.filter((object) => {
      //object es el parametro para la función filter.Si se elige un filterBy "mainField",  la función retorna los elementos que dentro del filterBy sean iguales que el valor seleccionado.
      if (object.facts[filterBy]) {
        return object.facts[filterBy] === value;
      }
      //si el elemento no coincide con el valor de value no se agrega al resultado del filtro.
      return false;
    });
  };

  export function sortData(data, sortBy, sortOrder) {
    // Hace una copia de los datos para no modificar el array original
    return data.slice().sort((a, b) => {
      // Si se está ordenando por "name"
      if (sortBy === "name") {
        // Ordenar alfabéticamente de manera ascendente
        if (sortOrder === "asc") {
          return a.name.localeCompare(b.name);
        }
        // Ordenar alfabéticamente de manera descendente
        else if (sortOrder === "desc") {
          return b.name.localeCompare(a.name);
        }
      }
      // Si no se está ordenando por "name", no se realiza ninguna modificación
      return 0;
    });
  }
  
  export function computeStats(data) {
    const totalItems = data.length;
    const totalDescriptionLength = data.reduce(
      // Suma la longitud de todas las descripciones en el conjunto de datos
      (sum, object) => sum + object.description.length,
      0
    );
  
    // Calcula la longitud promedio de las descripciones
    const avgDescriptionLength = totalDescriptionLength / totalItems;
  
    return {
      totalItems,
      avgDescriptionLength,
    };
  }