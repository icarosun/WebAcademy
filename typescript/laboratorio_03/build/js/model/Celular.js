"use strict";
class Celular {
    constructor(modelo, fabricante, valor, _memoria = 1) {
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.valor = valor;
        this._memoria = _memoria;
    }
    set memoria(memoria) {
        this._memoria = memoria;
    }
    get memoria() {
        return this._memoria;
    }
    get memoriaGB() {
        return `${this.memoria.toString()} GB`;
    }
}
