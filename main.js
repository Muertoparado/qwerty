/* funcion callbacks() 

Un callback en JavaScript es una función que se pasa como argumento a otra función, y se ejecuta después de que se completa una acción. Los callbacks son una forma de manejar el flujo de ejecución y el asincronismo en JavaScript.
*/

function suma(a, b) {
    return a + b;
  }
  
  function resta(a, b) {
    return a - b;
  }
  
  function operacion(a, b, callback) {
    return callback(a, b);
  }
  
  console.log(operacion(5, 3, suma)); // 8
  console.log(operacion(5, 3, resta)); // 2