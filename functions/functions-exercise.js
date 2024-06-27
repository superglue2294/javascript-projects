//! Rectangles

// makeLine(size) function

function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += '#';
    }

    return line;
}

console.log(makeLine(5));
console.log('');

// makeSquare(size) function

function makeSquare(size) {
    let row = makeLine(size);
    let square = '';

    for (let i = 0; i < size; i++) {
        square += row;

        if (i !== size - 1) {
            square += '\n';
        }
    }

    return square;
}

console.log(makeSquare(5));
console.log('');

// makeRectangle(width, height) function

function makeRectangle(width, height) {
    let row = makeLine(width);
    let n = height;
    let rectangle = '';

    for (let i = 0; i < n; i++) {
        rectangle += row;

        if (i !== n - 1) {
            rectangle += '\n';
        }
    }

    return rectangle;
}

console.log(makeRectangle(5, 3));
console.log('');

// Now, go back and rewrite makeSquare to use makeRectangle.

function makeSquare2(size) {
    return makeRectangle(size, size);
}

console.log(makeSquare2(5));
console.log('');

//! Triangles

// makeDownwardStairs(height) function

function makeDownwardStairs(height) {
    let stairs = '';

    for (let i = 1; i <= height; i++) {
        stairs += makeLine(i);
        
        if (i !== height) {
            stairs += '\n';
        }
    }

    return stairs;
}

console.log(makeDownwardStairs(5));
console.log('');

// makeSpaceLine(numSpaces, numChars) function

function makeSpaceLine(numSpaces, numChars) {
    let spaces = '';
    let lines = makeLine(numChars);

    for (let i = 0; i < numSpaces; i++) {
        spaces += ' ';
    }

    return spaces + lines + spaces;
}

console.log(makeSpaceLine(3, 5));
console.log('');

// makeIsoscelesTriangle(height) function

function makeIsoscelesTriangle(height) {
    let triangle = '';

    for (let i = 0; i < height; i++) {
        triangle += makeSpaceLine(height - i - 1, 2 * i + 1) + '\n';
    }

    return triangle.slice(0, -1);
}

console.log(makeIsoscelesTriangle(5));
console.log('');

//! Diamond

// makeDiamond(height) function

function makeDiamond(height) {
    return makeIsoscelesTriangle(height) + '\n' + makeIsoscelesTriangle(height).split('').reverse().join('');
}

console.log(makeDiamond(5));
console.log('');

//! Bonus Mission

// Refactor your functions so that they take a single character as a parameter, and draw the shapes with that character instead of always using '#'. Make the new parameter optional, with default value '#'.

function makeLineRefactor(size, char = '#') {
    let line = '';
    for (let i = 0; i < size; i++) {
        line += char;
    }

    return line;
}

console.log(makeLineRefactor(5, '*'));
console.log('');

function makeSquareRefactor(size, char = '#') {
    let row = makeLineRefactor(size, char);
    let square = '';

    for (let i = 0; i < size; i++) {
        square += row;

        if (i !== size - 1) {
            square += '\n';
        }
    }

    return square;
}

console.log(makeSquareRefactor(5, "@"));
console.log('');

function makeRectangleRefactor(width, height, char = '#') {
    let row = makeLineRefactor(width, char);
    let n = height;
    let rectangle = '';

    for (let i = 0; i < n; i++) {
        rectangle += row;

        if (i !== n - 1) {
            rectangle += '\n';
        }
    }

    return rectangle;
}

console.log(makeRectangleRefactor(5, 3, '$'));
console.log('');

function makeSquareRefactor2(size, char = '#') {
    return makeRectangleRefactor(size, size, char);
}

console.log(makeSquareRefactor2(5, '%'));
console.log('');

function makeDownwardStairsRefactor(height, char = '#') {
    let stairs = '';

    for (let i = 1; i <= height; i++) {
        stairs += makeLineRefactor(i, char);
        
        if (i !== height) {
            stairs += '\n';
        }
    }

    return stairs;
}

console.log(makeDownwardStairsRefactor(5, '&'));
console.log('');

function makeSpaceLineRefactor(numSpaces, numChars, char = '#') {
    let spaces = '';
    let lines = makeLineRefactor(numChars, char);

    for (let i = 0; i < numSpaces; i++) {
        spaces += ' ';
    }

    return spaces + lines + spaces;
}

console.log(makeSpaceLineRefactor(3, 5, '+'));
console.log('');

function makeIsoscelesTriangleRefactor(height, char = '#') {
    let triangle = '';

    for (let i = 0; i < height; i++) {
        triangle += makeSpaceLineRefactor(height - i - 1, 2 * i + 1, char) + '\n';
    }

    return triangle.slice(0, -1);
}

console.log(makeIsoscelesTriangleRefactor(5, '-'));
console.log('');

function makeDiamondRefactor(height, char = '#') {
    return makeIsoscelesTriangleRefactor(height, char) + '\n' + makeIsoscelesTriangleRefactor(height, char).split('').reverse().join('');
}

console.log(makeDiamondRefactor(5, '3'));