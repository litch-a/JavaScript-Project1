//A function that checks the inputstring if it is a palindrome, returns true if it is and viceversa

function isPalindrome(inputString)
{
    //Removing non-alphanumeric characters and converting the string to lowercase
    const palindromeString = inputString.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

    //Initializing pointers
    let left = 0;
    let right = palindromeString.length-1;

    //check if the string is palindrome
    while (left < right)
    {
        if (palindromeString[left] !== palindromeString[right])
        {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(isPalindrome("hello"));
console.log(isPalindrome("A man, a plan, a canal, Panama"));
console.log(isPalindrome("racecar"));
console.log(isPalindrome("A girl, a student"));