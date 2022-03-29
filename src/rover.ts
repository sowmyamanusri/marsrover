import { Direction } from "./direction";
import { Plateau } from "./plateau";
import { State } from "./state";
import { Coordinate } from "./coordinate";

export class Rover {
  state: State;
  plateau: Plateau;
  static roverPositions: Array<Coordinate> = [];

  constructor(state: State, plateau: Plateau) {
    State.id++;
    if (
      Rover.roverPositions.find(
        (r) => r.x == state.coordinate.x && r.y == state.coordinate.y
      )
    ) {
      throw new Error("Can't place the new rover in that position");
    } else {
      Rover.roverPositions.push(state.coordinate);
    }

    this.state = state;
    this.plateau = plateau;
  }

  move(): void {
    if (
      this.state.coordinate.y > this.plateau.n ||
      this.state.coordinate.x > this.plateau.m ||
      this.state.coordinate.y < 0 ||
      this.state.coordinate.x < 0
    ) {
      throw new Error("Obstacles , can't move");
    }
    switch (this.state.direction) {
      case "N":
        {
          if (
            Rover.roverPositions.find(
              (r) =>
                r.x == this.state.coordinate.x &&
                r.y == this.state.coordinate.y + 1
            )
          ) {
            throw new Error("Obstacles! other rover is already there");
          } else {
            this.state.coordinate.y++;
          }
        }
        break;
      case "W":
        {
          if (
            Rover.roverPositions.find(
              (r) =>
                r.x == this.state.coordinate.x - 1 &&
                r.y == this.state.coordinate.y
            )
          ) {
            throw new Error("Obstacles! other rover is already there");
          } else {
            this.state.coordinate.x--;
          }
        }
        break;
      case "E":
        {
          if (
            Rover.roverPositions.find(
              (r) =>
                r.x == this.state.coordinate.x + 1 &&
                r.y == this.state.coordinate.y
            )
          ) {
            throw new Error("Obstacles! other rover is already there");
          } else {
            this.state.coordinate.x++;
          }
        }
        break;
      case "S":
        {
          if (
            Rover.roverPositions.find(
              (r) =>
                r.x == this.state.coordinate.x &&
                r.y == this.state.coordinate.y - 1
            )
          ) {
            throw new Error("Obstacles! other rover is already there");
          } else {
            this.state.coordinate.y--;
          }
        }
        break;
    }
  }

  turn(turnCommand: string): void {
    switch (turnCommand) {
      case "L":
        {
          switch (this.state.direction) {
            case "E":
              this.state.direction = "N";
              break;
            case "W":
              this.state.direction = "S";
              break;
            case "N":
              this.state.direction = "W";
              break;
            case "S":
              this.state.direction = "E";
              break;
          }
        }
        break;
      case "R": {
        switch (this.state.direction) {
          case "E":
            this.state.direction = "S";
            break;
          case "W":
            this.state.direction = "N";
            break;
          case "N":
            this.state.direction = "E";
            break;
          case "S":
            this.state.direction = "W";
            break;
        }
      }
    }
  }
}
