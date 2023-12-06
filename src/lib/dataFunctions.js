const data = require("./data/dataset.js");

// Función para filtrar por mainField
export const filterByMainField = function(dataset, value) {
  return dataset.filter(item => item.facts.mainField === value);
};

// Función para ordenar en orden ascendente (A-Z)
export const sortByAscOrder = function(dataset) {
  return dataset.slice().sort((a, b) => a.facts.mainField.localeCompare(b.facts.mainField));
};

// Función para ordenar en orden descendente (Z-A)
export const sortByDescOrder = function(dataset) {
  return dataset.slice().sort((a, b) => b.facts.mainField.localeCompare(a.facts.mainField));
}


// Imprimir el conjunto de datos original
console.log(data);



