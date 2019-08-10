class Vehicle {
  protected honk(): void {
    console.log('beep');
  }
}

class MotoCycle extends Vehicle {
  private drive(): void {
    console.log('vroom');
  }

  startDrivingProcess(): void {
    this.drive();
    this.honk();
  }
}

const motoCycle = new MotoCycle();
motoCycle.startDrivingProcess();
