// // // const lista = [1, 2, 3, 4, 5]
// // console.log(lista);


// // var itens = ["otavio", "maria meu amor", 2, 2.45]

// // console.log(itens);

// //  mais sobre arrays

// // const array = ["a", "b", "c", "d"];

// // console.log(array[2]);

// // console.log(array);

// //  propriedades 

// // const numbers = [1, 2, 3]

// // console.log(numbers);

// // console.log(numbers.length);

// // console.log(numbers["length"]);

// // const myName = "otavio"

// // console.log(myName.length)


// // metodos

// // const numbers = [1, 2, 3];

// // const allnumbers = numbers.concat(numbers);

// // console.log(allnumbers);


// //  const times = ["flamengo", "vasco", "santos"];

// // const numbers = [1, 2, 3];

// // const timbers = times.concat(numbers)

// // console.log(timbers)





// // const text = "algum texto"

// // console.log(text.toLocaleUpperCase())


// // const arr = ["a", "b", "c"];

// // console.log(arr[2])

// // console.log(arr);
// // objetos 


// // const person = {
// //     name: "otávio",
// //     age: 22,
// //     work: "programador"
// // }

// // console.log(person)
// // console.log(person.age)
// // console.log(person.work)


// // const car = {
// //     engine: 2.0,
// //     brand: "vw",
// //     model: "tiguan", 
// //     km:2000 

// // }


// // console.log(car)

// // car.portas = 3

// // console.log(car)

// //  mais sobre obj

// //  const obj = {
// //      a: "teste",
// //      b: true
// //  }
// //  console.log(obj instanceof Object);

// //  const obj2 = {
// //      c: []
// //  }

// //  Object.assign(obj2, obj);

// //  console.log(obj2)

// // console.log(obj)

// // // conhecendo melhor os objetos ...


// // console.log(object.keys(obj));
// // console.log(object.keys(obj2));


// let num = [1, 2, 3, 4, 5]


// num[5]= 6

// console.log(num)
// num.push(9)
// console.log(num)
// console.log(num.length)
// console.log(num.sort)
// console.log(num[3])
// console.log(`o primeiro elemento é ${num [0]}`)



// //  mutação 

// const a = {
//     name: "otavio"

// }

// const b = a;
// console.log(a);
// console.log(b)

// a.age = 22

// console.log(a)

// const users = ["otavio", "maria", "daniela", "isaque"];

// for(let i = 0; i < users.length; i++) {
//     console.log(`listando o usuario; ${users[i]} `)
// }


// let bora = [3, 6, 4, 7, 10]
//  for(let pos=0; pos < bora.length; pos++) {
//     console.log(`a posição ${pos} tem o valor ${bora[pos]}`)
//  }

// let pos = bora.indexOf(4)
// console.log(`o valor 4 esta na posição ${pos}`)

// bora.sort()
// console.log(bora)



//  shift e unshift



//  const letters = ["a", "b", "c", "d"]

//  console.log(letters)

// const letter = letters.shift();

// console.log(letter);

//  console.log(letters);

//  letters.unshift("e", "f")

//  console.log(letters)


// letters.unshift("e", "f")

//  console.log(letters)



// last e indexOf


// const elements = ["morango", "maça", "pera"]

// console.log(elements)

// console.log(elements.indexOf("morango"));

// console.log(elements.indexOf("pera"))

// console.log(elements[2])

// SLICE

// const betters = ["joão,", "pedro", "jorge", "bruninho", "lucas"]

// console.log(betters);

// const beter = betters.slice(1,3 + 1)

// console.log(beter);


//  forEach 

// const nums = [1, 2, 3, 4, 5]

// nums.forEach((numero) => {
//     console.log(`o numero é ${numero}`)

// })



//  const posts = [
//      {tittle: "primeiro post", category: "php"},
// //     {tittle: "primeiro post", category: "javascript"},

    


// // const titulos = ["flamengo", "vasco", "santos", "santo andré"];

// // console.log(titulos.includes("flamengo"));

// // if(titulos.includes("vasco")) {
// //     console.log("esse time existe, porém é bem fraquinho escolha outro ")
// }


// const cursos = ["ciencia da compu", "ads", "eng. de soft", "eng. da computa"]

// if(cursos.includes("ciencia da compu")) {
//     console.log("esse é um excelente curso com boas recomendações, ele pega bastante na area de mat")
//  }else {
//     console.log("não escolha esse")
 

// reverse


// const ReverseTeste = [1, 2, 3, 4, 5]

// console.log(ReverseTeste);

// ReverseTeste.reverse();

// console.log(ReverseTeste);

// const amigo = {nome: 'jose'
// , idade: '22',
// peso:'59.6',
// engordar(p=0){
//    console.log("engordei 12kg")
//    this.peso += p
// }}
// amigo.engordar(2)

// console.log(`${amigo.nome} pesa ${amigo.peso}kg`)

  

// trim 
const trimTeste  = "   testando \n   "
const trimTeste2 = "   testando \n   "

console.log(trimTeste);

console.log(trimTeste.trim());

console.log(trimTeste2);

console.log(trimTeste2.trim())

