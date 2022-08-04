//variables

var a; //declaración
var b = 'b'; //declaración / asignación
b = 'bb'; //reasingando
var a = 'aa'; //redeclaración

//GLOBAL SCOPE
var fruit = 'apple';

function bestFruit(){
    console.log(fruit);
}

bestFruit();


function countries(){
    country = 'Mexico'; //asignación y declaración global automática
    console.log(country)
}

countries();
console.log(country);