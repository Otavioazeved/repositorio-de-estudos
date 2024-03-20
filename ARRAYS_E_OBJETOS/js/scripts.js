// destruturing em obejtos

const userDetails = {
  firstName: "otavio",
  lastName: "azevedo",
  Job:"programador",

};
const { firstName, lastName, Job} = userDetails;

console.log(firstName, lastName, Job);


// destructuring com arrays

const myList = ["aviao", "submarino", "carro", "bike"]

const [veiculoA, veiculoB, veiculoC] =  myList;

console.log(veiculoA, veiculoB, veiculoC);