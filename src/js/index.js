import { Aluno } from '../js/class.js'

const inputNomeAluno = document.getElementById('nomeAluno')
const inputMatAluno = document.getElementById('matAluno')
const inputNota1Aluno = (document.getElementById('nota1'))
const inputNota2Aluno = document.getElementById('nota2')
const inputNota3Aluno = document.getElementById('nota3')
const formAluno = document.querySelector('form')
const tableInfoAluno = document.querySelector('table')
const btnDeleteAll = document.querySelector('.deleteAll')

let aluno = new Aluno()

function createAluno(objAluno) {
    objAluno.setNome(inputNomeAluno.value)
    objAluno.setMatricula(inputMatAluno.value)
    objAluno.setNota1(Number(inputNota1Aluno.value))
    objAluno.setNota2(Number(inputNota2Aluno.value))
    objAluno.setNota3(Number(inputNota3Aluno.value))

    if (objAluno.getNome() == '' || objAluno.getMatricula() == '' || objAluno.getNota1() == '' || objAluno.getNota2() == '' || objAluno.getNota3() == '') {
        alert('Preencha todos os campos.')
        return
    }

    tableInfoAluno.innerHTML += `
                                        <tr class='listItem'>
                                            <td id="nome">${objAluno.getNome()}</td>
                                            <td id="matAluno">${objAluno.getMatricula()}</td>
                                            <td id="nota1">${objAluno.getNota1()}</td>
                                            <td id="nota2">${objAluno.getNota2()}</td>
                                            <td id="nota3">${objAluno.getNota3()}</td>
                                            <td id="media">${objAluno.calculoMedia()}</td>
                                            <td><i class="fa-solid fa-trash delete" style="cursor: pointer;" title="Apagar aluno"></i></td>
                                        </tr>
                                    `
    deleteAluno()
}

function deleteAluno() {
    const deleteButtons = document.querySelectorAll('i.delete')
    deleteButtons.forEach(button => {
        button.addEventListener('click', () => {
            const elementToRemove = button.closest('tr')
            elementToRemove.remove()
        })
    })
}

function deleteAllAlunos() {
    document.querySelectorAll('table .listItem').forEach(item => {
        item.remove()
    })
}

//evento para adicionar aluno
formAluno.onsubmit = function (e) {
    e.preventDefault()

    createAluno(aluno)
}

//evento para remover todos os alunos
btnDeleteAll.onclick = function() {
    if(confirm('Deseja realmente apagar todos os alunos?')) {
        deleteAllAlunos()
    }
}