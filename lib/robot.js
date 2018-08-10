class Robot {
  constructor(bearing = 'north', coordinates = [0,0]){
    this.bearing = bearing
    this.coordinates = coordinates
  }

  setCoordinates(x,y){
    return this.coordinates = [x,y]
  }

  setBearing(direction){
    if(['north', 'south', 'east', 'west'].includes(direction)){
      this.bearing = direction
    }
    else{
    throw 'Invalid Robot Bearing );'
    }
  }

  place(obj){
    this.setCoordinates(obj.x, obj.y)
    this.setBearing(obj.direction)
  }

  turnRight(){
    const directionObject = {north: 'east', east: 'south', south: 'west', west: 'north'}
    this.bearing = directionObject[this.bearing]
  }

  turnLeft(){
    const directionObject = {north: 'west', east: 'north', south: 'east', west: 'south'}
    this.bearing = directionObject[this.bearing]
  }

  advance(){
    switch(this.bearing){
      case 'north':
        ++this.coordinates[1]
        break;
      case 'south':
        --this.coordinates[1]
        break;
      case 'west':
        --this.coordinates[0]
        break;
      case 'east':
        ++this.coordinates[0]
        break;
    }
  }

  translateInstructions(string){
    for(let i=0; i < string.length; i++){
      switch(string[i].toUpperCase()){
        case 'L':
          console.log('Beep boop, turning left!')
          this.turnLeft()
          break;
        case 'R':
          console.log('Beep boop, turning right!')
          this.turnRight()
          break;
        case 'A':
          console.log('Beep boop, advancing!')
          this.advance()
          break;
      }
    }
    console.log(`Beep Boop, I'm facing ${this.bearing} at coordinates ${this.coordinates}`)
  }

}
