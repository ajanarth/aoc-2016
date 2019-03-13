var input = "L4, L1, R4, R1, R1, L3, R5, L5, L2, L3, R2, R1, L4, R5, R4, L2, R1, R3, L5, R1, L3, L2, R5, L4, L5, R1, R2, L1, R5, L3, R2, R2, L1, R5, R2, L1, L1, R2, L1, R1, L2, L2, R4, R3, R2, L3, L188, L3, R2, R54, R1, R1, L2, L4, L3, L2, R3, L1, L1, R3, R5, L1, R5, L1, L1, R2, R4, R4, L5, L4, L1, R2, R4, R5, L2, L3, R5, L5, R1, R5, L2, R4, L2, L1, R4, R3, R4, L4, R3, L4, R78, R2, L3, R188, R2, R3, L2, R2, R3, R1, R5, R1, L1, L1, R4, R2, R1, R5, L1, R4, L4, R2, R5, L2, L5, R4, L3, L2, R1, R1, L5, L4, R1, L5, L1, L5, L1, L4, L3, L5, R4, R5, R2, L5, R5, R5, R4, R2, L1, L2, R3, R5, R5, R5, L2, L1, R4, R3, R1, L4, L2, L3, R2, L3, L5, L2, L2, L1, L2, R5, L2, L2, L3, L1, R1, L4, R2, L4, R3, R5, R3, R4, R1, R5, L3, L5, L5, L3, L2, L1, R3, L4, R3, R2, L1, R3, R1, L2, R4, L3, L3, L3, L1, L2";
//var input = "R5, L5, R5, R3";
var directions = input.split(/[ ,]+/);

var position = [0,0];
var startXDirection = 0;
var startYDirection = 0;
var directionNorth = [0,1];
var directionSouth = [0,-1];
var directionEast = [1,0];
var directionWest = [-1,0];
var currentDirection = null;

for(var i = 0; i < directions.length; i++) {
    // directions = 'L4'
    var rotate = directions[i][0];
    var move = parseInt(directions[i].substr(1),10);
    if(currentDirection == null) {
        switch(rotate) {
            case 'L':
                currentDirection = directionWest;
                break;
            case 'R':
                currentDirection = directionEast;
                break;
        }
    } else {
        switch(rotate) {
            case 'L':
                if(currentDirection == directionNorth) {
                    currentDirection = directionWest;
                }else if(currentDirection == directionWest) {
                    currentDirection = directionSouth;
                }else if(currentDirection == directionSouth) {
                    currentDirection = directionEast;
                }else if (currentDirection == directionEast) {
                    currentDirection = directionNorth;
                }
                break;
            case 'R':
                if(currentDirection == directionNorth) {
                    currentDirection = directionEast;
                }else if(currentDirection == directionEast) {
                    currentDirection = directionSouth;
                }else if(currentDirection == directionSouth) {
                    currentDirection = directionWest;
                }else if (currentDirection == directionWest) {
                    currentDirection = directionNorth;
                }
                break;
        }
    }
    console.log(currentDirection);
    position[0] = position[0] + (move * currentDirection[0]);
    position[1] = position[1] + (move * currentDirection[1]);
    console.log('will move ' + rotate + ' ' + move + ' spaces');
    console.log('new position is ');
    console.log(position);
}