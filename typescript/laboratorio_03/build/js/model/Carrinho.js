"use strict";
class List {
    get data() {
        return this._data;
    }
    getList() {
        return this._data;
    }
    addItem(item) {
        if (Array.isArray(this._data)) {
            this.data.push(item);
        }
    }
    removeItemList(id) {
        if (Array.isArray(this._data)) {
            this.data.slice(id, 0);
        }
    }
    getSizeList() {
        if (Array.isArray(this.data)) {
            return this.data.length;
        }
        return 0;
    }
}
