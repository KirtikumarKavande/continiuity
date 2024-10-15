/**
 * @param {string} s
 * @return {string}
 */
var decodeString = function(s) {
    let stack = []; // Stack to store previous strings and numbers
    let currentString = ""; // Current decoded string
    let number = 0; // Number for repetition

    for (let i = 0; i < s.length; i++) {
        if (!isNaN(s[i])) {
            // Build the number (it can be more than 1 digit, e.g., "12[ab]")
            number = number * 10 + parseInt(s[i]);
        } else if (s[i] === '[') {
            // Push the current string and number onto the stack
            stack.push(currentString);
            stack.push(number);
            currentString = ""; // Reset current string for the new section
            number = 0; // Reset number after using
        } else if (s[i] === ']') {
            // Pop the number and previous string from the stack
            let repeatTimes = stack.pop();
            let previousString = stack.pop();
            
            // Repeat the current string and append to the previous string
            currentString = previousString + currentString.repeat(repeatTimes);
        } else {
            // Append current character to the current string
            currentString += s[i];
        }
    }

    return currentString;
};
