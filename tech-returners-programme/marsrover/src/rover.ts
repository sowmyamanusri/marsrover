import { Direction } from "./direction";
import { Plateau } from "./plateau";
import { State } from "./state";
import { Coordinate } from "./coordinate";

export class Rover {
  state: State;
  plateau: Plateau;

  constructor(state: State, plateau: Plateau) {
    this.state = state;
    this.plateau = plateau;
  }

  Move(): void {
    if (
      this.state.coordinate.y > this.plateau.n ||
      this.state.coordinate.x > this.plateau.m ||
      this.state.coordinate.y < 0 ||
      this.state.coordinate.x < 0
    ) {
      throw new Error("No path,can't move");
    }
    switch (this.state.direction) {
      case Direction.N:
        this.state.coordinate.y++;
        break;
      case Direction.W:
        this.state.coordinate.x--;
        break;
      case Direction.E:
        this.state.coordinate.x++;
        break;
      case Direction.S:
        this.state.coordinate.y--;
        break;
    }
  }

  Turn(angle: string): void {
    switch (angle) {
      case "L":
        {
          switch (this.state.direction) {
            case Direction.E:
              this.state.direction = Direction.N;
              break;
            case Direction.W:
              this.state.direction = Direction.S;
              break;
            case Direction.N:
              this.state.direction = Direction.W;
              break;
            case Direction.S:
              this.state.direction = Direction.E;
              break;
            default:
              break;
          }
        }
        break;
      case "R":
        {
          switch (this.state.direction) {
            case Direction.E:
              this.state.direction = Direction.S;
              break;
            case Direction.W:
              this.state.direction = Direction.N;
              break;
            case Direction.N:
              this.state.direction = Direction.E;
              break;
            case Direction.S:
              this.state.direction = Direction.W;
              break;
            default:
              break;
          }
        }
        break;
      default:
        break;
    }
  }
}
