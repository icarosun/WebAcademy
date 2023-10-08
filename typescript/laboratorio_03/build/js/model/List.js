"use strict";
class List {
    constructor() {
        this._data = [];
    }
    get data() {
        return this._data;
    }
    getList() {
        return this.data;
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItemList(id) {
        this.data.slice(id, 0);
    }
    getSizeList() {
        return this.data.length;
    }
    emptyList() {
        this._data = [];
    }
}
