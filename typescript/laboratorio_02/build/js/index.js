"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Turma_1 = __importDefault(require("./model/Turma"));
const Aluno_1 = __importDefault(require("./model/Aluno"));
//model/aluno
// class Aluno {
//     constructor(
//         private nome: string,
//         private id: string = "",
//         private idade: number = 0,
//         private altura: number = 0,
//         private peso: number = 0
//     ) {
//         this.setNome(nome);
//     }
//     getId() : string { return this.id; }
//     setId(id: string) : void {
//         this.id = id;
//     }
//     getNome() : string {
//         return this.nome;
//     }
//     setNome(nome: string) : void {
//         this.nome = nome;
//     } 
//     getIdade() : number {
//         return this.idade;
//     }
//     setIdade(idade: number) : void {
//         this.idade = idade;
//     }
//     getAltura() : number {
//         return this.altura;
//     }
//     setAltura(altura: number) : void {
//         this.altura = altura;
//     }
//     getPeso() : number {
//         return this.peso;
//     }
//     setPeso(peso: number) : void {
//         this.peso = peso;
//     }
// }
const aluno = new Aluno_1.default("icaro");
const turma = new Turma_1.default();
