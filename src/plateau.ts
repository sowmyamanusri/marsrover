import { PlateauInterface } from "./plateau.interface";
export class Plateau implements PlateauInterface {
  m: number;
  n: number;
  constructor(m: number, n: number) {
    this.m = m;
    this.n = n;
  }
}