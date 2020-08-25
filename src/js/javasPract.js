/* const hello = document.querySelector(".hello"); */
console.log("Hola Mundo");
/* console.error("La aplicación ha fallado"); */

document.write("Soy Javascript");
document.write("<h1>Hello Saorse</h1>")
/* 
const name = {
    "One": `Javier`,
    "Two": "Natsha"
}

console.log(name); */

var person = {
    name: "Natasha",
    lastName: "Romanof",
    edad: 28
};
console.log(person);

const user = {
    name: `John`,
    age: 25
}
console.log(user.name);

var nameOne = `Luisa Morales`;
var nameTwo = `Natalia Velázquez`;

function names () {
    if(nameOne === nameTwo){
        console.log(`Vaya!`)
    }else {
        console.log(`Ni modo`)
    }

}
names();

let password1 = `Contraseña1`;
let password2 = `Contraseña1`;

let pass = password1 == password2;
console.log(pass);

var primero = 40;
var segundo = 50;

function force ()  {
 if (primero >= segundo) {
    console.log(`Son iguales`)
 }else if(primero <= segundo){
     console.log(`Es menor por 10`)
 } else {
     console.log(`Sólo 10`)
 }
}
force();