// import Turma from "./model/Turma";
// import Aluno from "./model/Aluno";

//model/aluno.ts
class Aluno {
    constructor(
        private nome: string,
        private id: string = "",
        private idade: number = 0,
        private altura: number = 0,
        private peso: number = 0
    ) {
        this.setNome(nome);
    }

    getId() : string { return this.id; }

    setId(id: string) : void {
        this.id = id;
    }

    getNome() : string {
        return this.nome;
    }

    setNome(nome: string) : void {
        this.nome = nome;
    } 

    getIdade() : number {
        return this.idade;
    }

    setIdade(idade: number) : void {
        this.idade = idade;
    }

    getAltura() : number {
        return this.altura;
    }

    setAltura(altura: number) : void {
        this.altura = altura;
    }

    getPeso() : number {
        return this.peso;
    }

    setPeso(peso: number) : void {
        this.peso = peso;
    }
}

//model/Turma.ts
interface List {
    // load(): void,
    // save(): void,
    clearList(): void,
    addItem(itemObj: Aluno): void,
    removeItem(id: string): void
}

class Turma implements List {
    constructor(private list: Aluno[] = []){}

    getList(): Aluno[] {
        return this.list;
    }

    clearList(): void {
        this.list = [];
    }

    addItem(itemObj: Aluno): void {
        this.list.push(itemObj);
    }

    removeItem(id: string): void {
        this.list = this.list.filter(item => item.getId() !== id);
    }
}

const aluno: Aluno = new Aluno("icaro");

const turma: Turma = new Turma();