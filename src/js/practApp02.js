const one = document.querySelector(`.one`);

var hello = "hello";

function hellos () {
    console.log(hello);
}
hellos();

/*  let count = 10;

for( i = 0; i <= count; i++) {
  console.log(count);
}  */
let names = ["Chris", "Luisa", "Ana"];

for(let i = 0; i <= names.length; i++) {
    /* console.log(names[i]); */
    if(i === 0) {
        console.log("Yes")
    }else {
        console.log("Nou")
    }
    console.log(names[i]);
}