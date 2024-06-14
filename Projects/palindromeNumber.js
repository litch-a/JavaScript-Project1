//A function that checks if an array of numbers is palindrome or viceversa

function isPalindrome(number)
{
    //Converting the number into a string
    const palindromeNumber = number.toString();

    //Initializing the pointers
    let left = 0;
    let right = palindromeNumber.length-1;

    //Check if the number is a palindrome
    while (left < right)
    {
        if (palindromeNumber[left] !== palindromeNumber[right])
        {
            return false;
        }
        left++;
        right--;
    }
    return true;
}

console.log(isPalindrome(1212121));
console.log(isPalindrome(90912345));
console.log(isPalindrome(23678456));
console.log(isPalindrome(343434343));