"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
