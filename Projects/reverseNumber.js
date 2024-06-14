//A function that reverses an array of numbers
function reverseNumber(array){
    let reversedNumber = array[0];
    //Going into the iteration
    for(let i = array.length - 1; i >= 0; i--)
    {
        reversedNumber = array[i];

    }
    return reversedNumber;

}
const numbers = [2, 4, 6, 8];
console.log(reverseNumber(numbers));