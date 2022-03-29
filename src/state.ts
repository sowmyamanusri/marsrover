import { Coordinate } from "./coordinate";
import { Direction } from "./direction";

export class State {
  coordinate: Coordinate;
  direction: Direction;
  constructor(coordinate: Coordinate, direction: Direction) {
    this.coordinate = coordinate;
    this.direction = direction;
  }
}
