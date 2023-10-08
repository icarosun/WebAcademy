class List<Type> {
  private _data: Type[] = [];

  get data() {
    return this._data;
  }

  getList() {
    return this.data;
  }

  addItem(item: Type) {
    this.data.push(item);
  }

  removeItemList(id: number) {
    this.data.slice(id, 0);
  }

  getSizeList() {
    return this.data.length;
  }

  emptyList() {
    this._data = [];
  }
}
