class Celular implements Readonly<Produto> {
  constructor(
    readonly modelo: string,
    readonly fabricante: string,
    readonly valor: number,
    private _memoria: number = 1
  ) {}

  set memoria(memoria: number) {
    this._memoria = memoria;
  }

  get memoria(): number {
    return this._memoria;
  }

  get memoriaGB(): string {
    return `${this.memoria.toString()} GB`;
  }
}
