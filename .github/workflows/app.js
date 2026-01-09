// ------------------------------------------------------
// Archivo: app.js
// Propósito: Función simple para probar el pipeline CI/CD
// ------------------------------------------------------
 
// Definición de una función que genera un mensaje personalizado
function greetUser(name) {
  return `Hola ${name}, el pipeline está funcionando correctamente 🚀`;
}
 
// Imprime el resultado en consola (esto ayuda a ver la salida del programa)
console.log(greetUser("Pepito"));
 
// Exporta la función para que pueda ser usada en las pruebas
module.exports = { greetUser };
