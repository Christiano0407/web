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

/* console.log(`Hola soy ${this.nameTwo}`); */