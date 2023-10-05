// import Turma from "./model/Turma";
// import Aluno from "./model/Aluno";

//model/aluno.ts
class Aluno {
    constructor(
        private id: string = "",
        private nome: string,
        private idade: number,
        private altura: number,
        private peso: number
    ) {
        this.setNome(nome);
        this.setIdade(idade);
        this.setAltura(altura);
        this.setPeso(peso);
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
    constructor(private id: string, private nome: string, private list: Aluno[] = []){
        this.setId(id);
        this.setNome(nome);
    }

    getId(): string {
        return this.id;
    }

    setId(id: string): void {
        this.id = id;
    }

    getNome(): string {
        return this.nome;
    }

    setNome(nome: string) {
        this.nome = nome;
    }

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

interface TableList {
    tbody: HTMLTableSectionElement, 
    clear(): void,
    render(turma: Turma): void
}

class ListTemplateTBody implements TableList {
    tbody: HTMLTableSectionElement;

    constructor() {
        this.tbody = document.querySelector("tbody") as HTMLTableSectionElement;
    }

    clear(): void {
        this.tbody.innerHTML = "";
    }

    render(turma: Turma): void {
        this.clear();

        turma.getList().forEach((aluno) => {
            this.tbody.appendChild(this.createLineinTableElement(aluno));
        });
    }

    createLineinTableElement(itemAluno: Aluno) {
        const trElement: HTMLTableRowElement = document.createElement("tr");
      
        const tdElementId: HTMLTableCellElement = document.createElement("td");
        const tdElementNome: HTMLTableCellElement = document.createElement("td");
        const tdElementIdade:  HTMLTableCellElement = document.createElement("td");
        const tdElementAltura: HTMLTableCellElement = document.createElement("td");
        const tdElementPeso: HTMLTableCellElement = document.createElement("td");

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

        const tdElementActions: HTMLElement = document.createElement("td");
      
        const btnEditElement: HTMLButtonElement = document.createElement("button");
        const btnDeleteElement: HTMLButtonElement = document.createElement("button");
      
        let idElement: string = itemAluno.getId();
      
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

const aluno: Aluno = new Aluno("0", "Testa", 15, 180, 60);
const alunoA: Aluno = new Aluno("1", "Testa1", 15, 180, 60);
const alunoB: Aluno = new Aluno("0", "Testa2", 15, 180, 60);

const edFisica: Turma = new Turma("123", "Educação Física");
const showHtml: ListTemplateTBody = new ListTemplateTBody();

console.log(aluno.getNome());
console.log(alunoA.getNome());
console.log(alunoB.getNome());

edFisica.addItem(aluno);
edFisica.addItem(alunoA);
edFisica.addItem(alunoB);

console.log(edFisica.getNumAlunos());

showHtml.render(edFisica);