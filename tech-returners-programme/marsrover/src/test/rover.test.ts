import { Rover } from "../rover";
import { Plateau } from "../plateau";
import { Command } from "../command";
import { Coordinate } from "../coordinate";
import { Direction } from "../direction";
import { State } from "../state";

describe("Moving rover", () => {
  test("Move rover on the plateau", () => {
    let plataue = new Plateau(5, 5);

    let rover = new Rover(
      new State(new Coordinate(1, 2), Direction.N),
      plataue
    );

    let command = new Command(rover);

    expect(command.exceute("LMLMLMLMM")).toStrictEqual(
      new State(new Coordinate(1, 3), Direction.N)
    );
  });

  test("Move rover on the plateau", () => {
    let plataue = new Plateau(5, 5);

    let rover = new Rover(
      new State(new Coordinate(3, 3), Direction.E),
      plataue
    );

    let command = new Command(rover);

    expect(command.exceute("MMRMMRMRRM")).toStrictEqual(
      new State(new Coordinate(5, 1), Direction.E)
    );
  });

  test("Move rover on the plateau", () => {
    let plataue = new Plateau(10, 10);

    let rover = new Rover(
      new State(new Coordinate(1, 2), Direction.N),
      plataue
    );

    let command = new Command(rover);

    expect(command.exceute("LMLMLMLMMMMM")).toStrictEqual(
      new State(new Coordinate(1, 6), Direction.N)
    );
  });

  test("Move rover on the plateau", () => {
    let plataue = new Plateau(10, 10);

    let rover = new Rover(
      new State(new Coordinate(1, 2), Direction.N),
      plataue
    );

    let command = new Command(rover);

    expect(command.exceute("LMLMLMLMMMMMLL")).toStrictEqual(
      new State(new Coordinate(1, 6), Direction.S)
    );
  });
});
