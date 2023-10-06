// import Turma from "./model/Turma";
// import Aluno from "./model/Aluno";

//model/aluno.ts
class Aluno {
    constructor(
        private id: string,
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
    removeItem(id: string): void,
    getItem(id: number): Aluno
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

    getItem(id: number): Aluno {
        return this.list[id];
    }

    updateItem(id: number, newItemObj: Aluno): void {
        this.list[id] = newItemObj;
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
    render(turma: Turma, form: FormTemplate): void
}

class ListTemplateTBody implements TableList {
    tbody: HTMLTableSectionElement;

    constructor() {
        this.tbody = document.querySelector("tbody") as HTMLTableSectionElement;
    }

    clear(): void {
        this.tbody.innerHTML = "";
    }

    // addClickInButtons(form: FormTemplate, turma: Turma) {
    //     const buttons: NodeListOf<HTMLButtonElement> = this.tbody.querySelectorAll("button");
    //     const btnDelete: NodeListOf<HTMLButtonElement> = this.tbody.querySelectorAll(".btnDel");

    //     buttons.forEach((btn: HTMLButtonElement) => {
    //         if (btn.classList.contains("btnEdit")) {
    //             btn.addEventListener("click", function (this: HTMLElement, event: Event) {
    //                 const tdElement: HTMLTableCellElement = this.parentElement as HTMLTableCellElement;
    //                 const trElement: HTMLTableRowElement = tdElement.parentElement as HTMLTableRowElement;
    
    //                 form.setValuesInView(turma.getItem(parseInt(trElement.id)));
    //             })
    //         } 

    //         if (btn.classList.contains("btnDel")) {
    //             btn.addEventListener("click", function (this: HTMLElement, event: Event) {
    //                 const tdElement: HTMLTableCellElement = this.parentElement as HTMLTableCellElement;
    //                 const trElement: HTMLTableRowElement = tdElement.parentElement as HTMLTableRowElement;
    
    //                 console.log("DEL", trElement.id);
    //             })
    //         }
    //     })
    // }

    render(turma: Turma): void {
        this.clear();

        turma.getList().forEach((aluno, id: number) => {
            this.tbody.appendChild(this.createLineinTableElement(aluno, id.toString(), turma));
        });

        // this.addClickInButtons(form, turma);
    }

    createLineinTableElement(itemAluno: Aluno, id: string, turma: Turma) {
        const trElement: HTMLTableRowElement = document.createElement("tr");
      
        // const tdElementId: HTMLTableCellElement = document.createElement("td");
        const tdElementNome: HTMLTableCellElement = document.createElement("td");
        const tdElementIdade:  HTMLTableCellElement = document.createElement("td");
        const tdElementAltura: HTMLTableCellElement = document.createElement("td");
        const tdElementPeso: HTMLTableCellElement = document.createElement("td");

        // tdElementId.textContent = itemAluno.getId();
        tdElementNome.textContent = itemAluno.getNome();
        tdElementIdade.textContent = itemAluno.getIdade().toString();
        tdElementAltura.textContent = itemAluno.getAltura().toString();
        tdElementPeso.textContent = itemAluno.getPeso().toString();

        // trElement.appendChild(tdElementId);
        trElement.appendChild(tdElementNome);
        trElement.appendChild(tdElementIdade);
        trElement.appendChild(tdElementAltura);
        trElement.appendChild(tdElementPeso);

        const tdElementActions: HTMLElement = document.createElement("td");
      
        const btnEditElement: HTMLButtonElement = document.createElement("button");
        const btnDeleteElement: HTMLButtonElement = document.createElement("button");
      
        trElement.setAttribute("id", id.toString());
      
        btnEditElement.setAttribute("type", "button");
        btnEditElement.textContent = "Editar";
        btnEditElement.classList.add("btn");
        btnEditElement.classList.add("btn-secondary");
        btnEditElement.classList.add("btnEdit");

        btnEditElement.addEventListener("click", () => {

        });

        btnDeleteElement.textContent = "Excluir";
        btnDeleteElement.classList.add("btn");
        btnDeleteElement.classList.add("btn-outline-secondary");
        btnDeleteElement.classList.add("btnDel");
        btnDeleteElement.classList.add("mx-1");

        btnDeleteElement.addEventListener("click", () => {
            console.log("DELETE", id);
            turma.removeItem(id);
            this.render(turma);
        });
      
        tdElementActions.appendChild(btnEditElement);
        tdElementActions.appendChild(btnDeleteElement);
      
        trElement.appendChild(tdElementActions);
      
        return trElement;
    }
}

interface Form {
    submitValues(): void,
}

type alunoView = [string, number, number, number];

type inputsHTML = [boolean, boolean, boolean, boolean];

class FormTemplate implements Form {
    btnSubmit: HTMLButtonElement;
    btnUtils: HTMLButtonElement;
    form: HTMLFormElement;
    inputs: NodeListOf<HTMLInputElement>;
    private isToUpdate: boolean = false;

    constructor(
        controller: Controller
    ) {
        this.form = document.querySelector("form") as HTMLFormElement;
        this.btnSubmit = document.querySelector("#btnConfirm") as HTMLButtonElement;
        this.btnUtils = document.querySelector("#btnUtils") as HTMLButtonElement;
        this.inputs = document.querySelectorAll("input") as NodeListOf<HTMLInputElement>;
        this.submitValues();
        this.setClickButtonUtils();
    }

    verifyValueNome(nome: string) {
        return nome.trim() ? true : false; 
    }

    verifyValueIdade(idade: string) {
        return isNaN(parseInt(idade)) || idade === undefined  ? false : true;
    }

    verifyValueFloat(value: string) {
        return isNaN(parseFloat(value)) || value === undefined ? false : true;
    }

    clearInputs() {
        this.inputs.forEach((input) => input.value = "");
    }

    setIsToUpdatee(isToUpdate: boolean) {
        this.isToUpdate = isToUpdate;
    }

    getIsToUpdate() {
        return this.isToUpdate;
    }

    removeValidatedClass() {
        if (this.form.classList.contains("was-validated")) {
            this.form.classList.remove("was-validated");
        }
    }

    setValidatedClass() {
        this.form.classList.add("was-validated");
    }

    setValuesInView(item: Aluno) {
        this.removeValidatedClass();

        this.inputs[0].value = item.getNome();
        this.inputs[1].value = item.getIdade().toString();
        this.inputs[2].value = item.getAltura().toString();
        this.inputs[3].value = item.getPeso().toString();

        this.setButtonsToUpdate();
    }

    setButtons() {
        this.btnSubmit.textContent = "Novo Aluno";
        this.btnSubmit.classList.replace("btn-primary", "btn-success");

        this.btnUtils.textContent = "Limpar";
        this.setClickButtonUtils();
    }

    setButtonsToUpdate() {
        this.btnSubmit.textContent = "Atualizar dados"; 
        this.btnSubmit.classList.replace("btn-success", "btn-primary");

        this.btnUtils.textContent = "Cancelar atualização";
        this.btnUtils.addEventListener("click", () => {
            this.setButtons();
            this.clearInputs();

           this.removeValidatedClass();
        });
    }

    setClickButtonUtils() {
        this.btnUtils.addEventListener("click", () => this.clearInputs());
    }

    submitValues(): void {
        this.form.addEventListener("submit", (event: SubmitEvent) => {
            event.preventDefault();

            let values: string[] = [];

            this.inputs.forEach((input, id) => {
                values[id] = input.value as string;
            })

            const verifyInputs: inputsHTML = [
                this.verifyValueNome(values[0]),
                this.verifyValueIdade(values[1]),
                this.verifyValueFloat(values[2]),
                this.verifyValueFloat(values[3])
            ];

            if (verifyInputs[0] === false) {
                this.inputs[0].value = "";
                this.setValidatedClass();
            } else if (verifyInputs[1] === false) {
                this.inputs[1].value = "";
                this.setValidatedClass();
            } else if (verifyInputs[2] === false) {
                this.inputs[2].value = "";
                this.setValidatedClass();
            } else if (verifyInputs[3] === false) {
                this.inputs[3].value = "";
                this.setValidatedClass();
            } else {
                const aluno: Aluno = new Aluno("0", values[0], parseInt(values[1]), parseFloat(values[2]), parseFloat(values[3]));

                if(this.getIsToUpdate()) {
                    // controller.putAluno(aluno);
                    this.setIsToUpdatee(false);
                } else {
                    controller.postAluno(aluno);
                }

                this.removeValidatedClass();
                this.clearInputs();
            }

        
            // if(this.verifyValueNome(this.inputs[0].value)) {
            //     const nome: string = this.inputs[0].value;
            //     const idade: number = parseInt(this.inputs[1].value);
            //     const altura: number = parseFloat(this.inputs[2].value);
            //     const peso: number = parseFloat(this.inputs[3].value);                
        
            //     if (this.getFlagUpdate()) {
            //         const id: number = this.getIdUpdate();

            //         const updateAluno = new Aluno(id.toString(), nome, idade, altura, peso);
            //         // turma.updateItem(id, updateAluno);

            //         this.setFlagUpdate(false);
            //         this.setIdUpdate(0);

            //         this.setButtons();
            //     } else {
            //         // const itemId: number = turma.getNumAlunos();
            //         const newAluno = new Aluno(this.getIdUpdate().toString(), nome, idade, altura, peso);

            //         // turma.addItem(newAluno);
            //     }

            //     // listTemplateTBody.render(turma);

            //     this.clearInputs();
            //     this.removeValidatedClass();
            // } else {
            //     this.inputs[0].value = "";
            //     this.form.classList.add("was-validated");
            // }
        });
    }
}

//controller
class Controller {
    private listTemplateTBody: ListTemplateTBody = new ListTemplateTBody();
    private turma: Turma;

    constructor(
        nomeDisciplina: string,
        idTurma: string
    ) {
        this.turma = new Turma(idTurma, nomeDisciplina);
        this.listTemplateTBody.render(this.turma);
    }
    
    postAluno(newAluno: Aluno) {
        let id: number = this.turma.getList.length > 0 ? this.turma.getList.length - 1 : 1;

        newAluno.setId(id.toString());

        this.addAluno(newAluno);
    }

    addAluno(newAluno: Aluno) {
        this.turma.addItem(newAluno);
        this.listTemplateTBody.render(this.turma);
    }
}

const controller: Controller = new Controller("Educação Física", "123");
const form: FormTemplate = new FormTemplate(controller);

const aluno: Aluno = new Aluno("0", "João", 15, 180, 60);
const alunoA: Aluno = new Aluno("1", "Joana", 15, 180, 60);
const alunoB: Aluno = new Aluno("2", "Joca", 15, 180, 60);

controller.addAluno(aluno);
controller.addAluno(alunoA);
controller.addAluno(alunoB);

// const edFisica: Turma = new Turma("123", "Educação Física");
// const showHtml: ListTemplateTBody = new ListTemplateTBody();
// // const formHtml: FormTemplate = new FormTemplate(edFisica, showHtml);



// const aluno: Aluno = new Aluno("0", "João", 15, 180, 60);
// const alunoA: Aluno = new Aluno("1", "Joana", 15, 180, 60);
// const alunoB: Aluno = new Aluno("2", "Joca", 15, 180, 60);

// console.log(aluno.getNome());
// console.log(alunoA.getNome());
// console.log(alunoB.getNome());

// edFisica.addItem(aluno);
// edFisica.addItem(alunoA);
// edFisica.addItem(alunoB);

// console.log(edFisica.getNumAlunos());

// showHtml.render(edFisica);



