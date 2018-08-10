
class Robot {
   constructor(){
      this.coordinates = [0, 0]
      this.bearing = "north"
      // this.setCoordinates = setCoordinates(x, y)
    }


   setCoordinates(x, y){
    this.coordinates[0] = x
    this.coordinates[1] = y
  }

   setBearing(direction){
    const directions = ["north", "south", "east", "west"]
     if (directions.includes(direction)) {
        this.bearing = direction
      } else {
       throw new Error(/Invalid Robot Bearing/i)}
  }

   place(commandObj){
    this.coordinates[0] = commandObj.x
    this.coordinates[1] = commandObj.y
    this.bearing = commandObj.direction
  }

   turnRight(){
    switch (this.bearing) {
      case "north":
        this.bearing = "east"
        break;
      case "east":
        this.bearing = "south"
        break;
      case "south":
        this.bearing = "west"
        break;
      case "west":
        this.bearing = "north"
        break;
    }
  }

   turnLeft(){
    switch (this.bearing) {
      case "north":
        this.bearing = "west"
        break;
      case "west":
        this.bearing = "south"
        break;
      case "south":
        this.bearing = "east"
        break;
      case "east":
        this.bearing = "north"
        break;
    }
  }

   advance(){
    switch (this.bearing) {
      case "north":
        this.coordinates[1] += 1
        break;
      case "west":
        this.coordinates[0] -= 1
        break;
      case "south":
        this.coordinates[1] -= 1
        break;
      case "east":
        this.coordinates[0] += 1
        break;
    }
  }

   translateInstructions(commandString){

     for(let i = 0; i < commandString.length; i++){
      if (commandString[i] === "A"){
         this.advance()
      } else if (commandString[i] === "L") {
         this.turnLeft()
      } else if (commandString[i] === "R"){
         this.turnRight()
      } else {
        return "Invalid Robot Bearing!!!"
      }
    }
  }
}
