class WhackController {
  constructor(model) {
    this.model = model;
  }

  displayObject = () => {
    const posX = Math.random() * 1000;
    const posY = Math.random() * 1000;
    const objectElement = document.getElementById('object');

    objectElement.style.top = `${posY}px`; // Add 'px' unit for top
    objectElement.style.left = `${posX}px`; // Add 'px' unit for left
    objectElement.className = "visible";

    setTimeout(() => {
      objectElement.className = "hidden";
    }, this.model.durationMS);
  }

  whack = () => {
    this.model.counter++;
    this.updateView();
  }

  reset = () => {
    this.model.counter = 0;
    this.updateView();
  }

  updateView = () => {
    document.getElementById('object').className = "hidden";
    document.getElementById('counter').innerText = "Success: " + this.model.counter.toString();
  }
}
