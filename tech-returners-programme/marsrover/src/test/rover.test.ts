import { Rover } from "../rover";
import { Plateau } from "../plateau";
import { Command } from "../command";
import { Coordinate } from "../coordinate";
import { Direction } from "../direction";
import { State } from "../state";

describe("Moving rover", () => {
  test("should  rover start from a given initial point", () => {
    let plateau = new Plateau(5, 5);
    let rover = new Rover(
      new State(new Coordinate(0, 0), Direction.N),
      plateau
    );
    let command = new Command(rover);
    expect(command.Execute("")).toStrictEqual(
      new State(new Coordinate(0, 0), Direction.N)
    );
  });

  test("Move rover on the plateau for given co-ordinates and direction", () => {
    let plateau = new Plateau(5, 5);

    let rover = new Rover(
      new State(new Coordinate(1, 2), Direction.N),
      plateau
    );

    let command = new Command(rover);

    expect(command.Execute("LMLMLMLMM")).toStrictEqual(
      new State(new Coordinate(1, 3), Direction.N)
    );
  });

  test("Move rover on the plateau", () => {
    let plateau = new Plateau(5, 5);

    let rover = new Rover(
      new State(new Coordinate(3, 3), Direction.E),
      plateau
    );

    let command = new Command(rover);

    expect(command.Execute("MMRMMRMRRM")).toStrictEqual(
      new State(new Coordinate(5, 1), Direction.E)
    );
  });

  test("Move rover on the plateau", () => {
    let plateau = new Plateau(10, 10);

    let rover = new Rover(
      new State(new Coordinate(1, 2), Direction.N),
      plateau
    );

    let command = new Command(rover);

    expect(command.Execute("LMLMLMLMMMMM")).toStrictEqual(
      new State(new Coordinate(1, 6), Direction.N)
    );
  });
});
