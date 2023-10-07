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
    removeItem(id: number): void,
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

    setList(list: Aluno[]) {
        this.list = list;
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
        newItemObj.setId(this.getItem(id).getId());
        this.list[id] = newItemObj;
    }

    removeItem(id: number): void {
        this.list.splice(id, 1);
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
    render(turma: Turma, subject: Subject): void
}

class ListTemplateTBody implements TableList, Observer {
    tbody: HTMLTableSectionElement;

    constructor() {
        this.tbody = document.querySelector("tbody") as HTMLTableSectionElement;
    }

    clear(): void {
        this.tbody.innerHTML = "";
    }

    renderizer(subject: Subject): void {
        if (subject instanceof Controller) {
            this.render(subject.getTurma(), subject);
        }
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

    render(turma: Turma, subject: Controller): void {
        this.clear();

        turma.getList().forEach((aluno, id: number) => {
            this.tbody.appendChild(this.createLineinTableElement(aluno, id.toString(), subject));
        });
        // this.addClickInButtons(form, turma);
    }

    createLineinTableElement(itemAluno: Aluno, id: string, functionController: Controller) {
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
            functionController.editAluno(parseInt(id));
        });

        btnDeleteElement.textContent = "Excluir";
        btnDeleteElement.classList.add("btn");
        btnDeleteElement.classList.add("btn-outline-secondary");
        btnDeleteElement.classList.add("btnDel");
        btnDeleteElement.classList.add("mx-1");

        btnDeleteElement.addEventListener("click", () => {
            functionController.delAluno(parseInt(id));
        });
      
        tdElementActions.appendChild(btnEditElement);
        tdElementActions.appendChild(btnDeleteElement);
      
        trElement.appendChild(tdElementActions);
      
        return trElement;
    }
}

interface Form {
    submitValues(controller: Controller): void,
}

type inputsHTML = [boolean, boolean, boolean, boolean];

class FormTemplate implements Form {
    btnSubmit: HTMLButtonElement;
    btnUtils: HTMLButtonElement;
    form: HTMLFormElement;
    inputs: NodeListOf<HTMLInputElement>;
    private isToUpdate: boolean = false;

    constructor() {
        this.form = document.querySelector("form") as HTMLFormElement;
        this.btnSubmit = document.querySelector("#btnConfirm") as HTMLButtonElement;
        this.btnUtils = document.querySelector("#btnUtils") as HTMLButtonElement;
        this.inputs = document.querySelectorAll("input") as NodeListOf<HTMLInputElement>;
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

        this.setIsToUpdatee(true);
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
            this.clearInputs(); 
            this.removeValidatedClass();
            this.setButtons();
        });
    }

    setClickButtonUtils() {
        this.btnUtils.addEventListener("click", () => this.clearInputs());
    }

    submitValues(controller: Controller): void {
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
                    controller.putAluno(aluno);
                    this.setIsToUpdatee(false);
                    this.setButtons();
                } else {
                    controller.postAluno(aluno);
                }

                this.removeValidatedClass();
                this.clearInputs();
            }
        });
    }
}

class Info implements Observer {
    
    h1NameClass: HTMLHeadingElement = document.querySelector("h1") as HTMLHeadingElement;
    h1NumAlunos: HTMLHeadingElement = document.querySelector("#numAlunos") as HTMLHeadingElement;
    h1MeanYear: HTMLHeadingElement = document.querySelector("#meanYear") as HTMLHeadingElement;
    h1MeanHigh: HTMLHeadingElement = document.querySelector("#meanHigh") as HTMLHeadingElement;
    h1MeanWeigh: HTMLHeadingElement = document.querySelector("#meanWeigh") as HTMLHeadingElement;

    constructor() {}

    renderizer(subject: Subject): void {
        if (subject instanceof Controller) {
            this.h1NameClass.textContent = `Turma de ${subject.getNomeDisciplina()}, Sala - ${subject.getIdTurma()}`;

            const values = subject.getStaticsTurma();

            this.h1NumAlunos.textContent = values[0].toString();
            this.h1MeanYear.textContent = values[1].toString();
            
            this.h1MeanHigh.innerText = `${values[2].toString()} `;
            this.h1MeanHigh.appendChild(this.createSmallTag("m"));

            this.h1MeanWeigh.innerText = `${values[3].toString()} `;
            this.h1MeanWeigh.appendChild(this.createSmallTag("kg"));
        }
    }

    createSmallTag(value: string): HTMLElement {

        const smallElement: HTMLElement = document.createElement("small");

        smallElement.classList.add("text-body-secondary");
        smallElement.classList.add("fw-light");

        smallElement.textContent = value;

        return smallElement
    }
}


interface Subject {
    addView(observer: Observer): void,
    notify(): void
}

interface Observer {
    renderizer(subject: Subject): void
}

type Statics = [number, number, number, number];

//controller
class Controller implements Subject {
    private turma: Turma;
    private observers: Observer[] = [];
    private idUpdate: number = -1; 
    form: FormTemplate = new FormTemplate();

    constructor(
        private nomeDisciplina: string,
        private idTurma: string
    ) {
        this.turma = new Turma(idTurma, nomeDisciplina);
        this.form.submitValues(this);
    }
    
    setIdTurma(id: string) {
        this.idTurma = id;
    }

    getIdTurma() {
        return this.idTurma;
    }

    setNomeDisciplina(nomeDisciplina: string) {
        this.nomeDisciplina = nomeDisciplina;
    }

    getNomeDisciplina() {
        return this.nomeDisciplina;
    }

    postAluno(newAluno: Aluno) {
        let id: number = this.turma.getList.length > 0 ? this.turma.getList.length - 1 : 1;

        newAluno.setId(id.toString());

        this.addAluno(newAluno);
        this.notify();
    }

    putAluno(newAluno: Aluno) {
        this.updateAluno(newAluno);
        this.notify();
    }

    updateAluno(newAluno: Aluno) {
        this.turma.updateItem(this.getIdUpdate(), newAluno);
    }

    addAluno(newAluno: Aluno) {
        this.turma.addItem(newAluno);
    }

    editAluno(id: number) {
        this.setIdUpdate(id);
        this.form.setValuesInView(this.turma.getItem(id));
    }

    delAluno(id: number) {
        this.turma.removeItem(id);
        this.notify();
    }

    setIdUpdate(id: number) {
        this.idUpdate = id;
    }

    getIdUpdate() {
        return this.idUpdate;
    }

    getTurma(): Turma {
        return this.turma;
    }

    getStaticsTurma():  Statics{
        const statics: Statics = [
            this.turma.getNumAlunos(),
            this.turma.getMediaIdades(),
            this.turma.getMediaAlturas(),
            this.turma.getMediaPesos()
        ];

        return statics;
    }

    addView(observer: Observer) {
        this.observers.push(observer);
    }

    notify(): void {
        for(const observer of this.observers) {
            observer.renderizer(this);
        }
    }
}

const controllerHTML: Controller = new Controller("Educação Física", "123");

const listTemplateTBody: ListTemplateTBody = new ListTemplateTBody();

const aluno: Aluno = new Aluno("0", "João", 15, 180, 60);
const alunoA: Aluno = new Aluno("1", "Joana", 15, 180, 60);
const alunoB: Aluno = new Aluno("2", "Joca", 15, 180, 60);

controllerHTML.addAluno(aluno);
controllerHTML.addAluno(alunoA);
controllerHTML.addAluno(alunoB);

const info: Info = new Info();

controllerHTML.addView(listTemplateTBody);
controllerHTML.addView(info);

controllerHTML.notify();


