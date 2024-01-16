
import { filterData, sortData, computeStats } from '../src/lib/dataFunctions.js';
// import { mainField } from './data.js';
import dataset from '../src/data/dataset.js';

// Datos de prueba
const testData = [
  { facts: { mainField: 'Ciencia de la Computación' } },
  { facts: { mainField: 'Matemáticas' } },
  { facts: { mainField: 'Física' } },
  { facts: { mainField: 'Astronomia' } },
  { facts: { mainField: 'Química' } },
];

describe('Pruebas para la función filterData', () => {
  // Primera prueba: filtra correctamente cuando facts[filterBy] existe
  it('filtra los datos correctamente cuando facts[filterBy] existe', () => {
    const result = filterData(testData, 'mainField', 'Ciencia de la Computación');
    expect(result).toEqual([
      { facts: { mainField: 'Ciencia de la Computación' } },
    ]);
  });

  // Segunda prueba: no agrega elementos cuando facts[filterBy] no existe
  it('no agrega elementos cuando facts[filterBy] no existe', () => {
    const result = filterData(testData, 'nonexistentField', 'SomeValue');
    expect(result).toEqual([]);
  });
});



// Descripción de 'sortData':
describe('sortData', () => {
  // Datos de prueba
  const testData = [
    { name: 'C' },
    { name: 'A' },
    { name: 'B' },
  ];

  // Primera prueba: ordena alfabéticamente ascendente por nombre
  it('ordena los datos alfabéticamente ascendente por nombre', () => {
    const result = sortData(testData, 'name', 'asc');
    expect(result).toEqual([
      { name: 'A' },
      { name: 'B' },
      { name: 'C' },
    ]);
  });

  // Segunda prueba: ordena alfabéticamente descendente por nombre
  it('ordena los datos alfabéticamente descendente por nombre', () => {
    const result = sortData(testData, 'name', 'desc');
    expect(result).toEqual([
      { name: 'C' },
      { name: 'B' },
      { name: 'A' },
    ]);
  });

  // Tercera prueba: no modifica los datos al ordenar por un campo diferente
  it('no modifica los datos al ordenar por un campo diferente', () => {
    const result = sortData(testData, 'nonExistentField', 'asc');
    expect(result).toEqual(testData);
  });

  // Cuarta prueba: no modifica los datos cuando sortOrder no es ni asc ni desc
  it('no modifica los datos cuando sortOrder no es ni asc ni desc', () => {
    const result = sortData(testData, 'name', 'invalidOrder');
    expect(result).toEqual(testData);
  });
});

// Descripción de 'computeStats':
describe('calcula el total de targetas', () => {

  // Quinta prueba: calcula correctamente el total de elementos
  it('calcula correctamente el total de elementos', () => {
    const result = computeStats(dataset);
    expect(result.totalItems).toBe(dataset.length);
  });
});

