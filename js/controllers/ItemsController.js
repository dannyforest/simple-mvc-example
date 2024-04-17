class ItemController {
  constructor(model) {
    this.model = model;
  }

  addItem() {
    const input = document.getElementById('newItem');
    if (input.value) {
      this.model.addItem(input.value);
      input.value = ''; // Clear input
      this.updateView();
    }
  }

  updateView() {
    const items = this.model.getItems();
    const itemList = document.getElementById('itemList');
    itemList.innerHTML = ''; // Clear list
    items.forEach(item => {
      const li = document.createElement('li');
      li.textContent = item;
      itemList.appendChild(li);
    });
  }
}
