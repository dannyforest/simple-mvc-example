class CookieController {
  constructor(model) {
    this.model = model;
  }

  click() {
    this.model.incrementCounter();
    this.updateView();
  }

  reset() {
    this.model.counter = 0;
    this.updateView();
  }

  updateView() {
    document.getElementById('counter').innerText = "Clicks: " + this.model.counter.toString();
  }
}
