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



const letters = ["a", "b", "c", "d"]

console.log(letters)

const letter = letters.shift();

console.log(letter);

console.log(letters);