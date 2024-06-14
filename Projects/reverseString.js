// A function that takes a string as an input and reverses the string as output

function reverseString(inputString) {
    let reversedString = "";
    // Start the loop from the last character index to the first character index
    for (let i = inputString.length - 1; i >= 0; i--) {
        // Concatenate each character to the reversedString
        reversedString += inputString[i];
    }
    return reversedString;
}

// Example usage:
console.log(reverseString("hello")); // Output: "olleh"

