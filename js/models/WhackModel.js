class WhackModel {
  constructor() {
    this.counter = 0;
    this.durationMS = 1000;
  }

  getCounter = () => this.counter;
  incrementCounter = () => this.counter++;
}
