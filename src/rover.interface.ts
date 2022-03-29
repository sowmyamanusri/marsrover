import { Direction } from "./direction";
import { Plateau } from "./plateau";
import { State } from "./state";
import { Coordinate } from "./coordinate";

export interface RoverInterface {
  state: State;
  plateau: Plateau;
  move(): void;
  turn(turnCommand: string): void;
}
