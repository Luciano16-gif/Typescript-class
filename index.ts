/*
    agregar variables de forma explicita
    Esto es lo que agrega typescript
*/


//Esta variable es un
var elpepe = "i";

//Esta variable siempre sera un string
var eteSech : string = "i";

/*
    Lo siguiente dara error
    var eteSech = 25;
*/

/*
    Tipos de datos simples 
*/

let booleano : boolean = true;
let number : number = 25;
let texto : string = "Hola Mundo"

/*
    Tipos de datos especiales
*/

let cualquiera : any = "Hola";
let desconocido : unknown = 1;

let vari : string = cualquiera;

/*
    Lo siguiente dara error , porque nunca no debe tener una definición
    let nunca : never = true;
*/

let indefinido : undefined = undefined;
let nula : null = null;

/*
    ARRAYS
*/

let lista : string[] = ["hola"];
//Array de lectura
const names : readonly string[] = ["Elpepe"];
//Solo el tipo de dato que defini anteriormente
const numbers = [1, 2, 3]; //inferred to type numner

/*
    Objects
*/

const car: {type: string, model: string, year:number} = {
    type: "toyota",
    model: "corolla",
    year: 2009
};

//Parametros opcionales 

const carro: {type: string, mileage?: number} = {
    type: "Toyota"
};

carro.mileage = 2000;