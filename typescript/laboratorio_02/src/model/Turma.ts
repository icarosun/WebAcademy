import Aluno from "./Aluno";

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
}