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

    const directionArray = ['north', 'east', 'south', 'west']
      for (let i=0; i<directionArray.length; i++){
      if (directionArray[i] === this.bearing){
        this.bearing = directionArray[++i]
        }
      }
      if (this.bearing === undefined){
        this.bearing = 'north'
      }  // console.log(this)
  }

  turnLeft(){

    const directionArray = ['north', 'east', 'south', 'west']
      for (let i=0; i<directionArray.length; i++){
      if (directionArray[i] === this.bearing){
        this.bearing = directionArray[--i]
        }
      }
      if (this.bearing === undefined){
        this.bearing = 'west'
      }  // console.log(this)
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
      const newString = string.toUpperCase()
      for(let i=0; i < newString.length; i++){
        switch(newString.charAt(i)){
          case 'L':
          this.turnLeft()
          break;
          case 'R':
          this.turnRight()
          break;
          case 'A':
          this.advance()
          break;

        }
      }
    }

  }
