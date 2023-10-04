"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
exports.default = Aluno;
