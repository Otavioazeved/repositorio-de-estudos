const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')

let lista = []




function ceu() {
    lista.push(input.value)
    input.value = ''
    mostrarTarefas()

}

function mostrarTarefas() {
    let novaLi = ''

    lista.forEach((tarefa, posicao) => {
        novaLi =novaLi + `  <li class="task">
                        <img src="img/checked.png" alt="checked na tarefa">
                        <p>${tarefa}</p>
                      <img src="img/trash.png" alt="tarefa-trash" onclick="deletarItem(${posicao})">
                    </li>`

    })
    listaCompleta.innerHTML = novaLi

}

function deletarItem(posicao) {
    lista.splice(posicao, 1 )
    console.log(posicao)
    mostrarTarefas()

}






button.addEventListener('click', ceu)