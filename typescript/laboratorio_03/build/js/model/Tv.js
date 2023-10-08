"use strict";
class Tv {
    constructor(modelo, fabricante, valor, _resolucao, _tamPolegadas) {
        this.modelo = modelo;
        this.fabricante = fabricante;
        this.valor = valor;
        this._resolucao = _resolucao;
        this._tamPolegadas = _tamPolegadas;
        this.resolucao = _resolucao;
        this.tamPolegadas = _tamPolegadas;
    }
    set resolucao(resolucao) {
        this._resolucao = resolucao;
    }
    get resolucao() {
        return this._resolucao;
    }
    set tamPolegadas(tamPolegadas) {
        this._tamPolegadas = tamPolegadas;
    }
    get tamPolegadas() {
        return this._tamPolegadas;
    }
}
