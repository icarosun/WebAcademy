"use strict";
// import Turma from "./model/Turma";
// import Aluno from "./model/Aluno";
//model/aluno.ts
class Aluno {
    constructor(id = "", nome, idade, altura, peso) {
        this.id = id;
        this.nome = nome;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
        this.setNome(nome);
        this.setIdade(idade);
        this.setAltura(altura);
        this.setPeso(peso);
    }
    getId() { return this.id; }
    setId(id) {
        this.id = id;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getIdade() {
        return this.idade;
    }
    setIdade(idade) {
        this.idade = idade;
    }
    getAltura() {
        return this.altura;
    }
    setAltura(altura) {
        this.altura = altura;
    }
    getPeso() {
        return this.peso;
    }
    setPeso(peso) {
        this.peso = peso;
    }
}
class Turma {
    constructor(id, nome, list = []) {
        this.id = id;
        this.nome = nome;
        this.list = list;
        this.setId(id);
        this.setNome(nome);
    }
    getId() {
        return this.id;
    }
    setId(id) {
        this.id = id;
    }
    getNome() {
        return this.nome;
    }
    setNome(nome) {
        this.nome = nome;
    }
    getList() {
        return this.list;
    }
    clearList() {
        this.list = [];
    }
    addItem(itemObj) {
        this.list.push(itemObj);
    }
    removeItem(id) {
        this.list = this.list.filter(item => item.getId() !== id);
    }
    getNumAlunos() {
        return this.list.length;
    }
    getMediaIdades() {
        let sumIdade = 0;
        for (let i = 0; i < this.list.length; i++) {
            sumIdade += this.list[i].getIdade();
        }
        if (this.getNumAlunos() === 0 || sumIdade === 0) {
            return sumIdade;
        }
        return sumIdade / this.getNumAlunos();
    }
    getMediaAlturas() {
        let sumAlturas = 0;
        let numAlunos = this.getNumAlunos();
        if (numAlunos === 0)
            return 0;
        const initialValue = 0;
        sumAlturas = this.list.reduce((accumulator, currentValue) => accumulator + currentValue.getAltura(), initialValue);
        return sumAlturas / numAlunos;
    }
    getMediaPesos() {
        let sumPesos = 0;
        let numAlunos = this.getNumAlunos();
        if (numAlunos === 0)
            return 0;
        const initialValue = 0;
        sumPesos = this.list.reduce((accumulator, currentValue) => accumulator + currentValue.getPeso(), initialValue);
        return sumPesos / numAlunos;
    }
}
class ListTemplateTBody {
    constructor() {
        this.tbody = document.querySelector("tbody");
    }
    clear() {
        this.tbody.innerHTML = "";
    }
    render(turma) {
        this.clear();
        turma.getList().forEach((aluno) => {
            this.tbody.appendChild(this.createLineinTableElement(aluno));
        });
    }
    createLineinTableElement(itemAluno) {
        const trElement = document.createElement("tr");
        const tdElementId = document.createElement("td");
        const tdElementNome = document.createElement("td");
        const tdElementIdade = document.createElement("td");
        const tdElementAltura = document.createElement("td");
        const tdElementPeso = document.createElement("td");
        tdElementId.textContent = itemAluno.getId();
        tdElementNome.textContent = itemAluno.getNome();
        tdElementIdade.textContent = itemAluno.getIdade().toString();
        tdElementAltura.textContent = itemAluno.getAltura().toString();
        tdElementPeso.textContent = itemAluno.getPeso().toString();
        trElement.appendChild(tdElementId);
        trElement.appendChild(tdElementNome);
        trElement.appendChild(tdElementIdade);
        trElement.appendChild(tdElementAltura);
        trElement.appendChild(tdElementPeso);
        const tdElementActions = document.createElement("td");
        const btnEditElement = document.createElement("button");
        const btnDeleteElement = document.createElement("button");
        let idElement = itemAluno.getId();
        btnEditElement.setAttribute("id", idElement);
        btnDeleteElement.setAttribute("id", idElement);
        btnEditElement.setAttribute("data-bs-toggle", "modal");
        btnEditElement.setAttribute("data-bs-target", "#editTaskModal");
        btnEditElement.setAttribute("type", "button");
        btnEditElement.textContent = "Editar";
        btnEditElement.classList.add("btn");
        btnEditElement.classList.add("btn-secondary");
        btnEditElement.classList.add("mx-1");
        // btnEditElement.addEventListener("click"
        btnDeleteElement.textContent = "Excluir";
        btnDeleteElement.classList.add("btn");
        btnDeleteElement.classList.add("btn-outline-secondary");
        btnDeleteElement.classList.add("mx-1");
        // btnDeleteElement.addEventListener("click", () => {});
        tdElementActions.appendChild(btnEditElement);
        tdElementActions.appendChild(btnDeleteElement);
        trElement.appendChild(tdElementActions);
        return trElement;
    }
}
const aluno = new Aluno("0", "Testa", 15, 180, 60);
const alunoA = new Aluno("1", "Testa1", 15, 180, 60);
const alunoB = new Aluno("0", "Testa2", 15, 180, 60);
const edFisica = new Turma("123", "Educação Física");
const showHtml = new ListTemplateTBody();
console.log(aluno.getNome());
console.log(alunoA.getNome());
console.log(alunoB.getNome());
edFisica.addItem(aluno);
edFisica.addItem(alunoA);
edFisica.addItem(alunoB);
console.log(edFisica.getNumAlunos());
showHtml.render(edFisica);
