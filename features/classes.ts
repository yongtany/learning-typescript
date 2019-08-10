class Vehicle {
  drive(): void {
    console.log('brung brung');
  }

  honk(): void {
    console.log('beep');
  }
}

const vehicle = new Vehicle();
vehicle.drive();
vehicle.honk();
