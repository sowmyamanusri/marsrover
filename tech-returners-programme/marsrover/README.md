Pseduo Logic

Mars Rover Kata
By looking at the problem statement, as I understand that, the Plateau is represented in the form of square or rectangular grid.

                                                    N
    --------------------------------|               ^
    |                               |               |
    |                               |          -----|------->E
    |                               |               |
    |                               |               |
    |                               |               |
    |                               |
    ---------------------------------

Example of understanding

1. (0,0) represents the bottom left corner.
2. (5,5) represents the upper right
3. Rover position : 1,2,N
4. Direction of the movement : LMLMLMLMM
   a. L -> 1,2 W
   b. M -> 0,2 W
   c. L -> 0,2 S
   d. M -> 0,1 S
   e. L -> 0,1 E
   f. M -> 1,1 E
   g. L -> 1,1 N
   h. M -> 1,2 N
   i. M -> 1,3 N
   Pseudo Logic:
5. Define the Plateau into matrix ex: 5X5
6. Read the input of Rover position and direction ex:1,2 N
7. Read the input for Rover navigation ex: LMLMLMLMM
8. In a loop, read each character of rover navigation and find out the next position and direction by mapping the character to switch cases with below logic
   a. If the input is L or R, then change the existing direction accordingly
   b. If the input is M then increment or decrement the co-ordinates of X and Y by 1
   c. Once all the characters are read, then return the final position and direction as output
