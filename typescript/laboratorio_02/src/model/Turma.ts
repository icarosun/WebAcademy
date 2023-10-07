import { Aluno } from "./Aluno";

interface List {
    // load(): void,
    // save(): void,
    clearList(): void,
    addItem(itemObj: Aluno): void,
    removeItem(id: string): void
}

export default class Turma implements List {
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

    getNumAlunos(): number {
        return this.list.length;
    }

    getMediaIdades(): number {
        let sumIdade: number = 0;

        for (let i = 0; i < this.list.length; i++) {
            sumIdade += this.list[i].getIdade();
        }
        
        if (this.getNumAlunos() === 0 || sumIdade === 0) {
            return sumIdade;
        }

        return sumIdade / this.getNumAlunos();
    }

    getMediaAlturas(): number {
        let sumAlturas: number = 0;

        let numAlunos: number = this.getNumAlunos();

        if (numAlunos === 0) 
        return 0;

        const initialValue: number = 0;
        sumAlturas = this.list.reduce((accumulator, currentValue) => accumulator + currentValue.getAltura(), initialValue);

        return sumAlturas / numAlunos;
    }

    getMediaPesos(): number {
        let sumPesos: number = 0;

        let numAlunos: number = this.getNumAlunos();

        if (numAlunos === 0) 
        return 0;

        const initialValue: number = 0;
        sumPesos = this.list.reduce((accumulator, currentValue) => accumulator + currentValue.getPeso(), initialValue);

        return sumPesos / numAlunos;
    }
}