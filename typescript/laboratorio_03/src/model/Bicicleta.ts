class Bicicleta implements Readonly<Produto> {
  constructor(
    readonly modelo: string,
    readonly fabricante: string,
    readonly valor: number,
    private _tamAro: number
  ) {}

  set tamAro(tamAro: number) {
    this._tamAro = tamAro;
  }

  get tamAro(): number {
    return this._tamAro;
  }
}
