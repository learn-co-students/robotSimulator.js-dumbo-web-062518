class Robot {

  // let coordinates = [0, 0];
  // let currentDirection = 0

  constructor() {
    this.coordinates = [0, 0];
    this.directionArray = ["north", "east", "south", "west"];
    this.bearing = "north";

  }

  setCoordinates(int1, int2) {
    this.coordinates = [int1, int2]
  }

  setBearing(string) {
    if (this.directionArray.includes(string)) {
      this.bearing = string;
    } else {
      throw new 'Invalid Robot Bearing'
    }
  }

  place(location) {
    this.setCoordinates(location.x, location.y)
    this.setBearing(location.direction)
  }

  turnRight() {
    switch (this.bearing) {
        case 'north':
          this.bearing = 'east';
          break;
        case 'east':
          this.bearing = 'south';
          break;
        case 'south':
          this.bearing = 'west';
          break;
        case 'west':
          this.bearing = 'north';
          break;
        default:
          break;
      }
  }

  turnLeft() {
    switch (this.bearing) {
        case 'north':
          this.bearing = 'west';
          break;
        case 'east':
          this.bearing = 'north';
          break;
        case 'south':
          this.bearing = 'east';
          break;
        case 'west':
          this.bearing = 'south';
          break;
        default:
          break;
      }
  }

  advance() {
    switch (this.bearing) {
      case 'north':
        this.coordinates[1]++
        break;
      case 'east':
        this.coordinates[0]++
        break;
      case 'south':
        this.coordinates[1]--
        break;
      case 'west':
        this.coordinates[0]--
        break;
        default:
          break;
      }
  }

  translateInstructions(command) {
    let commandArray = command.split('')

    for (const item of commandArray) {
      switch (item) {
        case 'R':
          this.turnRight();
          break;
        case 'L':
          this.turnLeft();
          break;
        case 'A':
          this.advance();
          break;
        default:
          break;
      }
  }
}

  //

  // currentDirection = Math.abs((currentDirection + quantity) % directionArray.length)
  // return currentDirection

  // function turnLeft(quantity=1) {
  //   currentDirection = Math.abs((currentDirection - quantity) % directionArray.length)
  //   return currentDirection
  // }
  //
  // function advance(quantity=1) {
  //   switch (currentDirection) {
  //     case 0:
  //       coordinates[1]++
  //       break;
  //     case 1:
  //       coordinates[0]++
  //       break;
  //     case 2:
  //       coordinates[1]--
  //       break;
  //     case 3:
  //       coordinates[0]--
  //       break;
  //     default:
  //       break;
  //   }
  // }

}
