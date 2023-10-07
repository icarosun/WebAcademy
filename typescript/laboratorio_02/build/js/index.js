"use strict";
// import Turma from "./model/Turma";
// import Aluno from "./model/Aluno";
//model/aluno.ts
class Aluno {
    constructor(id, nome, idade, altura, peso) {
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
    setList(list) {
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
    getItem(id) {
        return this.list[id];
    }
    updateItem(id, newItemObj) {
        newItemObj.setId(this.getItem(id).getId());
        this.list[id] = newItemObj;
    }
    removeItem(id) {
        this.list.splice(id, 1);
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
    renderizer(subject) {
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
    render(turma, subject) {
        this.clear();
        turma.getList().forEach((aluno, id) => {
            this.tbody.appendChild(this.createLineinTableElement(aluno, id.toString(), subject));
        });
        // this.addClickInButtons(form, turma);
    }
    createLineinTableElement(itemAluno, id, functionController) {
        const trElement = document.createElement("tr");
        // const tdElementId: HTMLTableCellElement = document.createElement("td");
        const tdElementNome = document.createElement("td");
        const tdElementIdade = document.createElement("td");
        const tdElementAltura = document.createElement("td");
        const tdElementPeso = document.createElement("td");
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
        const tdElementActions = document.createElement("td");
        const btnEditElement = document.createElement("button");
        const btnDeleteElement = document.createElement("button");
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
class FormTemplate {
    constructor() {
        this.isToUpdate = false;
        this.form = document.querySelector("form");
        this.btnSubmit = document.querySelector("#btnConfirm");
        this.btnUtils = document.querySelector("#btnUtils");
        this.inputs = document.querySelectorAll("input");
        this.setClickButtonUtils();
    }
    verifyValueNome(nome) {
        return nome.trim() ? true : false;
    }
    verifyValueIdade(idade) {
        return isNaN(parseInt(idade)) || idade === undefined ? false : true;
    }
    verifyValueFloat(value) {
        return isNaN(parseFloat(value)) || value === undefined ? false : true;
    }
    clearInputs() {
        this.inputs.forEach((input) => input.value = "");
    }
    setIsToUpdatee(isToUpdate) {
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
    setValuesInView(item) {
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
    submitValues(controller) {
        this.form.addEventListener("submit", (event) => {
            event.preventDefault();
            let values = [];
            this.inputs.forEach((input, id) => {
                values[id] = input.value;
            });
            const verifyInputs = [
                this.verifyValueNome(values[0]),
                this.verifyValueIdade(values[1]),
                this.verifyValueFloat(values[2]),
                this.verifyValueFloat(values[3])
            ];
            if (verifyInputs[0] === false) {
                this.inputs[0].value = "";
                this.setValidatedClass();
            }
            else if (verifyInputs[1] === false) {
                this.inputs[1].value = "";
                this.setValidatedClass();
            }
            else if (verifyInputs[2] === false) {
                this.inputs[2].value = "";
                this.setValidatedClass();
            }
            else if (verifyInputs[3] === false) {
                this.inputs[3].value = "";
                this.setValidatedClass();
            }
            else {
                const aluno = new Aluno("0", values[0], parseInt(values[1]), parseFloat(values[2]), parseFloat(values[3]));
                if (this.getIsToUpdate()) {
                    controller.putAluno(aluno);
                    this.setIsToUpdatee(false);
                    this.setButtons();
                }
                else {
                    controller.postAluno(aluno);
                }
                this.removeValidatedClass();
                this.clearInputs();
            }
        });
    }
}
class Info {
    constructor() {
        this.h1NameClass = document.querySelector("h1");
        this.h1NumAlunos = document.querySelector("#numAlunos");
        this.h1MeanYear = document.querySelector("#meanYear");
        this.h1MeanHigh = document.querySelector("#meanHigh");
        this.h1MeanWeigh = document.querySelector("#meanWeigh");
    }
    renderizer(subject) {
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
    createSmallTag(value) {
        const smallElement = document.createElement("small");
        smallElement.classList.add("text-body-secondary");
        smallElement.classList.add("fw-light");
        smallElement.textContent = value;
        return smallElement;
    }
}
//controller
class Controller {
    constructor(nomeDisciplina, idTurma) {
        this.nomeDisciplina = nomeDisciplina;
        this.idTurma = idTurma;
        this.observers = [];
        this.idUpdate = -1;
        this.form = new FormTemplate();
        this.turma = new Turma(idTurma, nomeDisciplina);
        this.form.submitValues(this);
    }
    setIdTurma(id) {
        this.idTurma = id;
    }
    getIdTurma() {
        return this.idTurma;
    }
    setNomeDisciplina(nomeDisciplina) {
        this.nomeDisciplina = nomeDisciplina;
    }
    getNomeDisciplina() {
        return this.nomeDisciplina;
    }
    postAluno(newAluno) {
        let id = this.turma.getList.length > 0 ? this.turma.getList.length - 1 : 1;
        newAluno.setId(id.toString());
        this.addAluno(newAluno);
        this.notify();
    }
    putAluno(newAluno) {
        this.updateAluno(newAluno);
        this.notify();
    }
    updateAluno(newAluno) {
        this.turma.updateItem(this.getIdUpdate(), newAluno);
    }
    addAluno(newAluno) {
        this.turma.addItem(newAluno);
    }
    editAluno(id) {
        this.setIdUpdate(id);
        this.form.setValuesInView(this.turma.getItem(id));
    }
    delAluno(id) {
        this.turma.removeItem(id);
        this.notify();
    }
    setIdUpdate(id) {
        this.idUpdate = id;
    }
    getIdUpdate() {
        return this.idUpdate;
    }
    getTurma() {
        return this.turma;
    }
    getStaticsTurma() {
        const statics = [
            this.turma.getNumAlunos(),
            this.turma.getMediaIdades(),
            this.turma.getMediaAlturas(),
            this.turma.getMediaPesos()
        ];
        return statics;
    }
    addView(observer) {
        this.observers.push(observer);
    }
    notify() {
        for (const observer of this.observers) {
            observer.renderizer(this);
        }
    }
}
const controllerHTML = new Controller("Educação Física", "123");
const listTemplateTBody = new ListTemplateTBody();
const aluno = new Aluno("0", "João", 15, 180, 60);
const alunoA = new Aluno("1", "Joana", 15, 180, 60);
const alunoB = new Aluno("2", "Joca", 15, 180, 60);
controllerHTML.addAluno(aluno);
controllerHTML.addAluno(alunoA);
controllerHTML.addAluno(alunoB);
const info = new Info();
controllerHTML.addView(listTemplateTBody);
controllerHTML.addView(info);
controllerHTML.notify();
