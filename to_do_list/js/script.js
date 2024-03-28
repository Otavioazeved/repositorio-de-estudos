const button = document.querySelector('.button-add-task')
const input = document.querySelector('.input-task')
const listaCompleta = document.querySelector('.list-task')

let lista = []




function ceu() {
    lista.push({
        tarefa: input.value,
        concluida: false

    })
    input.value = ''
    mostrarTarefas()

}

function mostrarTarefas() {
    let novaLi = ''

    lista.forEach((item, posicao) => {
        novaLi =novaLi + `  <li class="task class ="${item.concluida && "done"}" >
                        <img src="img/checked.png" alt="checked na tarefa" onclick="concluirTarefa(${posicao})">
                        <p>${item.tarefa}</p>
                      <img src="img/trash.png" alt="tarefa-trash" onclick="deletarItem(${posicao})">
                    </li>`

    })
    listaCompleta.innerHTML = novaLi

}

function concluirTarefa (posicao) {
    lista[posicao]. concluida = !lista[posicao].concluida
    mostrarTarefas()

    
}

function deletarItem(posicao) {
    lista.splice(posicao, 1 )
    console.log(posicao)
    mostrarTarefas()

}






button.addEventListener('click', ceu)