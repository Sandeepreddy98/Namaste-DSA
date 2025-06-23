//Star Pattern - square
console.log("------ Star Pattern - square ---------");

function starSquare(n) {
  let pattern = "";
  for (let i = 0; i < n; i++) {
    row = "";
    for (let j = 0; j < n; j++) {
      row += "*";
    }
    pattern = pattern + row + (i !== n - 1 ? "\n" : "");
  }
  return pattern;
}

console.log(starSquare(4));

//Star Pattern - Right Angled Triangle
console.log("------ Star Pattern - Right Angled Triangle ---------");

function rightTrianglePattern(n) {
  let pattern = "";
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += "*";
    }
    pattern += row + (i !== n - 1 ? "\n" : "");
  }
  return pattern;
}

console.log(rightTrianglePattern(4));

// Number Pattern - Right Angled Increment
console.log("------ Number Pattern - Right Angled Increment ---------");

function rightAngledNumberIncrement(n) {
  let pattern = "";
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += j;
    }
    pattern += row + (i !== n ? "\n" : "");
  }
  return pattern;
}

console.log(rightAngledNumberIncrement(4));

// Number Pattern - Right Angled Increment
console.log(
  "------ Number Pattern - Right Angled Incremental Y-axis ---------"
);

function rightAngledIncrementYAxis(n) {
  let pattern = "";
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= i; j++) {
      row += i;
    }
    pattern += row + (i !== n ? "\n" : "");
  }
  return pattern;
}

console.log(rightAngledIncrementYAxis(4));

// Number Pattern - Right Angled Increment - Inverted
console.log(
  "------ Number Pattern - Right Angled Increment - Inverted ---------"
);

function rightAngledNumberIncrementInverted(n) {
  let pattern = "";
  for (let i = 1; i <= n; i++) {
    let row = "";
    for (let j = 1; j <= n - i + 1; j++) {
      row += j;
    }
    pattern += row + (i !== n ? "\n" : "");
  }
  return pattern;
}

console.log(rightAngledNumberIncrementInverted(4));

//Star Pattern - Right Angled Triangle - Inverted
console.log("------ Star Pattern - Right Angled Triangle- Inverted ---------");

function rightTrianglePatternInverted(n) {
  let pattern = "";
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n - i; j++) {
      row += "*";
    }
    pattern += row + (i !== n - 1 ? "\n" : "");
  }
  return pattern;
}

console.log(rightTrianglePatternInverted(4));

//Star Pattern - Right Angled Triangle - Mirrored
console.log("------ Star Pattern - Right Angled Triangle - Mirrored ---------");

function rightAngledTriangleMirrored(n) {
  let pattern = "";
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j < n; j++) {
      row += j < n - 1 - i ? " " : "*";
    }
    pattern += row + (i !== n - 1 ? "\n" : "");
  }
  return pattern;
}
console.log(rightAngledTriangleMirrored(4));

//Star Pattern - Star Pattern - Right Angled Triangle - (1-0)
console.log("------ Star Pattern - Right Angled Triangle - (1-0) ---------");

function rightTrianglePatternOneZero(n) {
  let pattern = "";
  for (let i = 0; i < n; i++) {
    let row = "";
    for (let j = 0; j <= i; j++) {
      row += j % 2 === 0 ? 1 : 0;
    }
    pattern += row + (i !== n - 1 ? "\n" : "");
  }
  return pattern;
}

console.log(rightTrianglePatternOneZero(4));

//Star Pattern - Star Pattern - Right Angled Triangle - (1-0) bi-alternative
console.log(
  "------ Star Pattern - Right Angled Triangle - (1-0) bi-alternative ---------"
);

function rightTrianglePatternOneZeroBiAlternative(n) {
  let pattern = "";
  for (let i = 0; i < n; i++) {
    let row = "";
    // Determine the starting digit
    let start = i % 4 === 0 || i % 4 === 3 ? 1 : 0;

    for (let j = 0; j <= i; j++) {
      row += (start + j) % 2; // Alternate digits
    }

    pattern += row + (i !== n - 1 ? "\n" : "");
  }
  return pattern;
}

console.log(rightTrianglePatternOneZeroBiAlternative(10));
