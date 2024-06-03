const caixa1 = document.querySelector("#caixa1")
const caixa2 = document.querySelector("#caixa2")
const btn = document.querySelector("#btn_copiar")
const todosCursos =[... document.querySelectorAll(".curso")]
const voltar = document.querySelector("#btn_back")

todosCursos.map((el) =>{
    el.addEventListener("click",(evt) => {
        const curso=evt.target
        curso.classList.toggle("selecionado")    

// toggle: ao ser pressionado pelo usuario ele mostra visualmente que foi pressionado, e ao ser clicado dnv ele visualmente mostra que desativado.
    })
})
 btn.addEventListener("click",() => {
    const CursosSelecionados =[...document.querySelectorAll(".selecionado")]
    CursosSelecionados.map((el)=> {
        caixa2.appendChild(el)
    })

})


voltar.addEventListener("click", () => {
    const voltarCursos=[...document.querySelectorAll(".curso:not(.selecionado)")]
    voltarCursos.map((el) =>{
        caixa1.appendChild(el)

    })
})

// todo evento possui um ARGUMENTO ESPECIAL contendo infomações do mesmo, geralmente chamado de event ou e.
// argumento de evento
