"use strict";
// import Turma from "./model/Turma";
// import Aluno from "./model/Aluno";
Object.defineProperty(exports, "__esModule", { value: true });
//model/aluno.ts
class Aluno {
    constructor(nome, id = "", idade = 0, altura = 0, peso = 0) {
        this.nome = nome;
        this.id = id;
        this.idade = idade;
        this.altura = altura;
        this.peso = peso;
        this.setNome(nome);
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
    constructor(list = []) {
        this.list = list;
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
exports.default = Turma;
const aluno = new Aluno("icaro");
const turma = new Turma();
