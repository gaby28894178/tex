//Tipos de Datos en Js Para los video q me mandaron de // Academlo
// Nombre Gabriel gabrielli 
//variables tipos de datos  y areglos utilisamos var 
// solo para  estos ejemplos 
//Datos numericos vems como enb este ejemplo 
// var  es la paalabra clave para declartar las varicables y usamos el operador de asignacion para poder guardar un dato en este caso  js reconose el dato como numero si lo pasamos con "" lo reconose coom string 

var precio1=22
var precio2=10
var total = precio1+precio2
//Usamos la funcion de imprimir por consola pasandole la variable a mostrar 
console.log(total)

// ejemplo con  string (CADENA DE CARACTER O ARRAY DE CARACTERES )

var n1 = "2"
var n2 = "4"
// en este caso al ser estring no lo suma los concatena 
console.log(n1 + n2) 

// arreglos []
var num = ["nombre",1,2,3,"Coleccion de dato"]
console.log(num[0])
console.log(num[4]);
// recorro el arreglo  dentrro de el for declaro una variable i q es mi iterador cuenta las vueltas de el lup
// la propiedad lenth  me  deja repetir el lup hasta llegar a la ultima propiedad de 0 a  el ultimo en este caso 4
for (var i = 0; i < num.length; i++){
    console.log(num[i])
}

var edades = [22, 2, 1, 4, 23, 23, 4, 44];
var suma = edades[0] + edades[1]
console.log(suma)

var coche = {
    nombre: "mercedez",
    color: "rojo",
    patente:"RGS2341",
}
var texto="El coche es de color"+coche.color+"es de marca "+coche.nombre
console.log(texto)

console.log(coche.color)

// arreglo de objetos
var users = [
  { nombre: "juan", correo: "admin1234@gmail.com" },
  { nombre: "jorge8888888888", correo: "admin1@gmail.com" },
];


console.log(users[1])

console.log(users[1].correo);

console.log(users[0].nombre);

//TAREA DADA DE EL  VIDEO DE INGRESO //////
/*
1.Crear un arreglo con 5 objetos, cada uno de estos objetos debe de tener las propiedades nombre, email y edad, con valores asignados por ti.
2. Crear un arreglo de nombre correos y guardar todos los correos que existan en el arreglo del primer paso(debes de acceder a los correos apoyandote en lo aprendido anteriormente).

3. Enviar tu ejercicio al correo tony.ospino@academlo.com

*/

var arreglo5 = [{ nombre: "pepe", email: "adminpepe@gmail.com", edad: 22, }, {
    nombre: "juan",email:"adminjuan@gmail.com", edad: 32, }, { nombre:"manuel", email:"adminmanuel@gmail.com",edad: 31,}, { nombre: "roberto", email: "adminroberto@gmail.com", edad: 45, }, {nombre:"soledad",
    email: "adminsole@gmail.com",edad: 82, },
];

var correo = []

for (var i = 0; i < arreglo5.length; i++){
    correo.push(arreglo5[i].email)
}
for (var j = 0; j < correo.length; j++){
    console.log(correo[j])
}