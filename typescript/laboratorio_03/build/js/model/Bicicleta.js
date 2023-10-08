"use strict";
class Bicicleta {
    constructor(modelo, fabricante, valor, _tamAro) {
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.valor = valor;
        this._tamAro = _tamAro;
    }
    set tamAro(tamAro) {
        this._tamAro = tamAro;
    }
    get tamAro() {
        return this._tamAro;
    }
}
