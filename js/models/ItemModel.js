// item.model.ts
class ItemModel {
  constructor() {
    this.items = []; // Initial list of items
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    this.items.push(item);
  }
}
