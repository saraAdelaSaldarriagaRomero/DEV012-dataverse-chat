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