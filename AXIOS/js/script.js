// Axios

/*
axios é uma biblioteca js que facilita a requisição HTTP,
GET, POST, PUT, DELETE a partir do front end. 
*/

// primeiro Request  (Request é requisição)
// recomendado usar try catch para identificar erros, e usar tbm async functios

// const getData = async() => {
//     try{

//         const response = await axios.get("https://jsonplaceholder.typicode.com/users")

//         console.log(response)
//         return response.data 

//     } catch(error){
//         console.log(error)
//     }
// }

// getData()


// imprimindo dados da APi 
/*
após o request é comum exibir os dados na tela,
podemos fazer isso juntando a resposta da chamada com os conhecimentos em DOM,
criar elementos baseados no que veio na requisição.
*/

// const container = document.querySelector("#user-container")

// const printData = async() =>{
//     const data = await getData()

//     console.log(data)

//     data.forEach((user) => {
//         const div = document.createElement("div")

//         const nameElement = document.createElement("h2")

//         nameElement.textContent = user.name
        
//         div.appendChild(nameElement)

//         container.appendChild(div)
        

//         const emailElement = document.createElement("p")

//         emailElement.textContent = user.email

//         div.appendChild(emailElement)
    
//     })
// }

// printData();

// como consumir um api c axios e js puro.


const nameusuarioo =  document.querySelector("#nomeUsuario")
function trazerRepositorios(){
    axios
    .get(`https:/api.github.com/users/${nomeUsuario.value}/repos`)
    .then((response) =>{
        const repos = response.data
        console.log(repos)
        const lista = document.querySelector("#repos");
        for(i in repos){
            console.log(repos[i])
            const elemento = document.querySelector("#li")
            elemento.innerHTML = JSON.stringify(repos[i].url)

            lista.appendChild(elemento)
            .catch((error) => console.error(error))
        }
    })
}

// crud, create, read, update e delete
// que significam;
// criação, consulta, atualização e criação de dados

// aprendendo dnv a imprimir dados de uma api



const container = querySelector("#user-container")








