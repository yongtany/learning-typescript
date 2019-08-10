class Vehicle {
  drive(): void {
    console.log('brung brung');
  }

  honk(): void {
    console.log('beep');
  }
}

class MotoCycle extends Vehicle {
  drive(): void {
    console.log('vroom');
  }
}

const motoCycle = new MotoCycle();
motoCycle.drive();
