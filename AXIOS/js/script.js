// Axios

/*
axios é uma biblioteca js que facilita a requisição HTTP,
GET, POST, PUT, DELETE a partir do front end. 
*/

// primeiro Request  (Request é requisição)
// recomendado usar try catch para identificar erros, e usar tbm async functios

const getData = async() => {
    try{

        const response = await axios.get("https://jsonplaceholder.typicode.com/users")

        console.log(response)
        return response.data 

    } catch(error){
        console.log(error)
    }
}

getData()


// imprimindo dados da APi 



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

// imprimindo dados na tela

const container = document.querySelector("#user-container")

const printData = async() =>{

    const data = await getData()

    console.log(data)


data.forEach((user) => {

    const div = document.createElement("div")
    div
    
});
}


printData()





// async e await duvidas e desvendando de vez
// forma de chamar as promises

//coloca async dps await, PRA Poder USAR O AWAIT TEM QUE COLOCAR O ASYNC ANTES
// exercicios

delay = (ms) => {
    return new Promise(resolve =>setTimeout (resolve, ms)) 
    

}


delay(2000).then (() => console.log("resolvido apos 2 segundo"))