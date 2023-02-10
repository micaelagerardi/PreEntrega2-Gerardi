// pre entrega 2

// Construyo base de datos de usuarios registrados:

// construyo class Persona

class Persona {
  constructor(nombre, telefono, email) {
    this.nombre = nombre;
    this.telefono = telefono;
    this.email = email;
  }
}

const arrayPersonas = [];

// construyo a 4 personas para base de datos

const persona1 = new Persona("Ramiro", 1162359653, "ramiro@gmail.com");
const persona2 = new Persona("Silvana", 1145783659, "silvina@gmail.com");
const persona3 = new Persona("Candela", 1126354856, "candela@gamil.com");
const persona4 = new Persona("Julieta", 1123658954, "julieta@gmail.com");

// pusheo a un array global los combos creados

arrayPersonas.push(persona1, persona2, persona3, persona4);

// muestro los combos en la consola

//console.log(Personas);

// construyo a 4 personas para base de datos

// le doy la bienvenida al usuario

const saludo = prompt("Bienvenido!");

// le pregunto al usuario si esta registrado

const pregunta1 = prompt("¿Esta registrado?");

// contesta que si, le pido al usuario que ingrese su nombre para verificar si esta o no registrado

/* const nombreUsuario = prompt("Ingrese su nombre:");

// busco al usuario en la base de datos que constui

const usuarioEncontrado = Persona.find(
 (persona) => persona.nombre === nombreUsuario);

// muestro los datos del usuario encontrado en la consola

console.log(usuarioEncontrado.nombre);
console.log(usuarioEncontrado.telefono);
console.log(usuarioEncontrado.email);
*/
// construyo class Comida para base de datos

class Comida {
  constructor(nombre, precio, categoria) {
    this.nombre = nombre;
    this.precio = precio;
    this.categoria = categoria;
  }
}

// construyo los distintos articulos de Comida

const comida1 = new Comida("Sandwich", 80, "Almuerzo");
const comida2 = new Comida("Empanada", 50, "Almuerzo");
const comida3 = new Comida("Alfajor", 35, "Desayuno");
const comida4 = new Comida("Medialuna", 20, "Desayuno");
const comida5 = new Comida("Cafe", 40, "Desayuno");
const comida6 = new Comida("Chocolatada", 50, "Desayuno");
const comida7 = new Comida("Coca", 40, "Almuerzo");
const comida8 = new Comida("Jugo", 35, "Almuerzo");

// construyo class Combos

class Combo {
  constructor(item, categoria, precio) {
    this.item = item;
    this.categoria = categoria;
    this.precio = precio;
  }
}

// construyo array global

const arrayGlobal = [];

// construyo variables de los distintos combos

const combo1 = new Combo("2 Medialunas + 1 Cafe", "Desayuno", 80);
const combo2 = new Combo("1 Alfajor + 1 Chocolatada", "Desayuno", 85);
const combo3 = new Combo("2 Empanadas + 1 Jugo", "Almuerzo", 135);
const combo4 = new Combo("1 Sandwcich + 1 Coca-Cola", "Almuerzo", 120);

// pusheo a un array global los combos creados

arrayGlobal.push(combo1, combo2, combo3, combo4);

// muestro los combos en la consola

console.log(arrayGlobal);

// operaciones de los combos
const combos = prompt(
  "Elija uno de nuestros combos para desayuno o almuerzo: Combo 1 - Combo 2 - Combo 3 - Combo 4"
);

let precioCombo = 0;

switch (combos) {
  case "Combo 1":
    alert((precioCombo = "2 Empanadas + 1 Jugo = $135 "));
    alert("Gracias por su compra");
    break;

  case "Combo 2":
    alert((precioCombo = "1 Sandwich + 1 Coca-Cola = $120"));
    alert("Gracias por su compra");
    break;

  case "Combo 3":
    alert((precioCombo = "2 Medialunas + 1 Cafe = $80"));
    alert("Gracias por su compra");
    break;

  case "Combo 4":
    alert((precioCombo = "1 Alfajor + 1 Chocolatada = $85"));
    alert("Gracias por su compra");
    break;

  default:
    alert(
      (precioCombo =
        "si quiere otro tipo de combo, puede comunicarse con nosotros para un valor personalizado")
    );
}
