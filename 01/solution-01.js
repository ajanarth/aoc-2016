var input = "L4, L1, R4, R1, R1, L3, R5, L5, L2, L3, R2, R1, L4, R5, R4, L2, R1, R3, L5, R1, L3, L2, R5, L4, L5, R1, R2, L1, R5, L3, R2, R2, L1, R5, R2, L1, L1, R2, L1, R1, L2, L2, R4, R3, R2, L3, L188, L3, R2, R54, R1, R1, L2, L4, L3, L2, R3, L1, L1, R3, R5, L1, R5, L1, L1, R2, R4, R4, L5, L4, L1, R2, R4, R5, L2, L3, R5, L5, R1, R5, L2, R4, L2, L1, R4, R3, R4, L4, R3, L4, R78, R2, L3, R188, R2, R3, L2, R2, R3, R1, R5, R1, L1, L1, R4, R2, R1, R5, L1, R4, L4, R2, R5, L2, L5, R4, L3, L2, R1, R1, L5, L4, R1, L5, L1, L5, L1, L4, L3, L5, R4, R5, R2, L5, R5, R5, R4, R2, L1, L2, R3, R5, R5, R5, L2, L1, R4, R3, R1, L4, L2, L3, R2, L3, L5, L2, L2, L1, L2, R5, L2, L2, L3, L1, R1, L4, R2, L4, R3, R5, R3, R4, R1, R5, L3, L5, L5, L3, L2, L1, R3, L4, R3, R2, L1, R3, R1, L2, R4, L3, L3, L3, L1, L2";
var instructions = input.split(/[ ,]+/);

var position = [0,0];

// Quadrants: https://www.youtube.com/watch?time_continue=33&v=LELFkaTtLXk
// Here, we're representing direction as an angle.
var currentDirection = 90;

// Mapping degrees to respective influence along their axis
// in each quadrant (x, y)
var directions = {
    0: [1,0],
    90: [0,1],
    180: [-1,0],
    270: [0,-1]
}

console.log('------------------------------------');
console.log(' ');
console.log('   Starting Position: x0, y0');
console.log('  Starting Direction: ' + currentDirection + ' degrees');
console.log(' ');
console.log('------------------------------------');

for(var i = 0; i < instructions.length; i++) {
    // example - instructions = 'L432'
    var rotate = instructions[i][0];
    var move = parseInt(instructions[i].substr(1),10);
    
    // If rotating left (counter clockwise), we rotate positively around
    // the center point of the quadrants. Else, right, negatively.
    var operator = rotate == 'L' ? '+' : '-';
    console.log('Instruction ' + instructions[i] + ' will move ' + rotate + ' (' + operator +'90 degrees) ' + move + ' spaces');
    currentDirection = eval('currentDirection ' + operator + ' 90');
    
    // Normalize angles that go out of bounds
    if(currentDirection < 0) {
        currentDirection = 360 + currentDirection;
    }
    if(currentDirection >= 360) {
        currentDirection = currentDirection - 360;
    }

    // Get the x and y vectors for the quadrant we're in
    var direction = directions[currentDirection];

    // Apply the distance along the axis vectors to our current position
    position[0] = position[0] + (move * direction[0]);
    position[1] = position[1] + (move * direction[1]);

    console.log('  | New position is ' + position[0] + ',' + position[1]);
}

if(position[0] < 0) {
    position[0] = -1 * position[0];
}
if(position[1] < 0) {
    position[1] = -1 * position[1];
}

console.log('------------------------------------');
console.log(' ');
console.log('Shortest Path: ' + (position[0] + position[1]));
console.log(' ');
console.log('------------------------------------');