const str = "Hello, World! xyz";

// substring examples
console.log(str.substring(0, 5)); // "Hello" (start=0, end=5)
console.log(str.substring(7));    // "World!" (start=7, end not provided)
console.log(str.substring(5, 0)); // "Hello" (start > end, indices swapped)
console.log(str.substring(-5, 5)); // "Hello" (negative start treated as 0)

// slice examples
console.log(str.slice(0, 5));     // "Hello" (start=0, end=5)
console.log(str.slice(7));        // "World!" (start=7, end not provided)
console.log(str.slice(5, 0));     // "" (start > end, returns empty string)
console.log(str.slice(-6, -1));   // "World" (negative indices count from end)
