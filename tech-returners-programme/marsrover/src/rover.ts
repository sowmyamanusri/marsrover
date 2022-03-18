import { State } from "./state";

export class Rover {
    state : State;
constructor(state:State){
    this.state = state;
}

export function Move() {
    
}

export function Turn(angle:string):void{
//let x = this.state.coordinate.x;
//let y = this.state.coordinate.y;
//let direction = this.state.direction;


    switch (angle) {
        case "L": {
            switch (this.state.direction) {
                case "E": 
                this.state.direction = "N";
                    break;
                case "W":                  
                this.statedirection = "S";
                    break;
                case "N":                
                this.statedirection = "W";  
                    break;
                case "S":                
                this.statedirection = "E";  
                    break;          
                default:
                    break;
            }
        }
            break;            
        case "R":   {
        switch (direction) {
            case "E": 
            this.statedirection = "S";
                break;
            case "W":                  
            this.statedirection = "N";
                break;
            case "N":                
            this.statedirection = "E";  
                break;
            case "S":                
            this.statedirection = "W";  
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