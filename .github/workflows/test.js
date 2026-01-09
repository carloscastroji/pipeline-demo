// ------------------------------------------------------
// Archivo: test.js
// Propósito: Ejecutar una prueba automatizada de app.js
// ------------------------------------------------------
 
// Importamos la función a probar
const { greetUser } = require("./app");
 
// Creamos una función que actúa como nuestro "test"
function testGreeting() {
  const expected = "Hola Pepito, el pipeline está funcionando correctamente 🚀"; // Resultado esperado
  const result = greetUser("Pepito"); // Resultado real
 
  // Comparamos los resultados
  if (result === expected) {
    console.log("✅ Test passed: Greeting message is correct.");
    process.exit(0); // Salida exitosa (0 = sin error)
  } else {
    console.error("❌ Test failed: Unexpected output.");
    console.error(`Expected: ${expected}`);
    console.error(`Received: ${result}`);
    process.exit(1); // Salida con error (1 = fallo)
  }
}
 
// Ejecutamos la función de prueba
testGreeting();
