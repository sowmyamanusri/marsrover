import { Rover } from "../rover";
import { Plateau } from "../plateau";
import { Command } from "../command";
import { Coordinate } from "../coordinate";
import { Direction } from "../direction";
import { State } from "../state";

describe("CommandMoving rover", () => {
  let plateau = new Plateau(10, 10);
  test.each`
    x    | y    | direction1 | m    | n    | direction2 | expectedOutput
    ${7} | ${1} | ${"N"}     | ${7} | ${1} | ${"N"}     | ${"Can't place the new rover in that position"}
  `(
    "Rover already exist on ${x} ${y} ${direction1} ,new Rover can't be placed on ${m}  ${n} ${direction2} and ${expectedOutput}",
    ({ x, y, direction1, m, n, direction2, expectedOutput }) => {
      expect(() => {
        let rover = new Rover(
          new State(new Coordinate(x, y), direction1),
          plateau
        );
        let rover2 = new Rover(
          new State(new Coordinate(m, n), direction2),
          plateau
        );
      }).toThrow(expectedOutput);
    }
  );

  test.each`
    x    | y    | direction | instruction      | expectedOutput
    ${0} | ${0} | ${"N"}    | ${" "}           | ${new State(new Coordinate(0, 0), "N")}
    ${1} | ${2} | ${"N"}    | ${"LMLMLMLMM "}  | ${new State(new Coordinate(1, 3), "N")}
    ${3} | ${3} | ${"E"}    | ${"MMRMMRMRRM "} | ${new State(new Coordinate(5, 1), "E")}
    ${4} | ${4} | ${"W"}    | ${"LM"}          | ${new State(new Coordinate(4, 3), "S")}
  `(
    "Move rover on the plateau for given $x ,$y, $direction,$instruction to $expectedOutput",
    ({ x, y, direction, instruction, expectedOutput }) => {
      let rover = new Rover(
        new State(new Coordinate(x, y), direction),
        plateau
      );
      let command = new Command(rover);
      expect(command.execute(instruction)).toStrictEqual(expectedOutput);
    }
  );

  test.each`
    x    | y    | direction1 | m    | n    | direction2 | instruction | expectedOutput
    ${8} | ${2} | ${"N"}     | ${8} | ${1} | ${"N"}     | ${"M"}      | ${"Obstacles! other rover is already there"}
  `(
    "Obstacles!! existed Rover on the ${x} ,{y} ,${direction1} so, next Rover can't move on position ${m},${n} ,${direction2},${instruction} and ${expectedOutput}",
    ({ x, y, direction1, m, n, direction2, instruction, expectedOutput }) => {
      let rover3 = new Rover(
        new State(new Coordinate(x, y), direction1),
        plateau
      );
      let rover4 = new Rover(
        new State(new Coordinate(m, n), direction2),
        plateau
      );

      let command = new Command(rover4);
      expect(() => {
        command.execute(instruction);
      }).toThrow(expectedOutput);
    }
  );
});
