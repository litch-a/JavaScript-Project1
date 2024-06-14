//A function that checks if an array of numbers if they are prime numbers

function isPrimeNumber(num)
{
    //Check first if the number is less than 2 to know if it is prime number
    if (num < 2)
    {
        return false;
    }
    //Iterate through the for loop till the squareroot of thr num
    for (let i = 2; i <= Math.sqrt(num); i++)
    {
        //Check if the number is divisble by any number
        if (num % i == 0)
        {
            return false;
        }
    }
    return true;
}

console.log(isPrimeNumber(2));
console.log(isPrimeNumber(26));
console.log(isPrimeNumber(97));