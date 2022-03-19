import { Plateau } from "./plateau";
import { Rover } from "./rover";
import { State } from "./state";

export class Command {
  rover: Rover;

  constructor(rover: Rover) {
    this.rover = rover;
  }

  exceute(instructions: string): State {
    instructions.split("").forEach((instruction) => {
      switch (instruction) {
        case "L":
        case "R":
          {
            this.rover.Turn(instruction);
          }
          break;
        case "M":
          this.rover.Move();
          break;
      }
    });
    return this.rover.state;
  }
}
