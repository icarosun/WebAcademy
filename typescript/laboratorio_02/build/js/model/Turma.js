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
}
exports.default = Turma;
