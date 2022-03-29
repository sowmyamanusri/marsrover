import { IPlateau } from "./Iplateau";
export class Plateau implements IPlateau {
  m: number;
  n: number;
  constructor(m: number, n: number) {
    this.m = m;
    this.n = n;
  }
}
