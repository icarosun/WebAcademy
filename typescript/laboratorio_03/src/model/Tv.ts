class Tv implements Readonly<Produto> {
  constructor(
    readonly modelo: string,
    readonly fabricante: string,
    readonly valor: number,
    private _resolucao: string,
    private _tamPolegadas: number
  ) {
    this.resolucao = _resolucao;
    this.tamPolegadas = _tamPolegadas;
  }

  set resolucao(resolucao: string) {
    this._resolucao = resolucao;
  }

  get resolucao(): string {
    return this._resolucao;
  }

  set tamPolegadas(tamPolegadas: number) {
    this._tamPolegadas = tamPolegadas;
  }

  get tamPolegadas(): number {
    return this._tamPolegadas;
  }
}
