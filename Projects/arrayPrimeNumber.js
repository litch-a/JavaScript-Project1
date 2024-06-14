//A function that checks an array of numbers and returns those which are prime

function findPrimeNumber(array)
{
    //Initialize an empty array to store the prime Nubers which will return them
    const primeNumbers = [];
    //Iterating through each number "num" in the input array
    for (let num of array)
    {
        //Check if num is less than two to continue
        if (num < 2)
        {
            continue;//will skip numbers les than 2
        }
        //Initializing a boolean variable isPrime to true
        let isPrime = true;
        //Iteratingthrough upto the math square root
        for (let i = 2; i<= Math.sqrt(num); i++)
        {
            //Check if "num" is evenly divisible
            if (num % i == 0)
            {
                isPrime = false;
                break;//breaking through the loop
            }
        }
        if (isPrime)
        {
            primeNumbers.push(num);
        }
    }
    return primeNumbers;
}
const numbers = [11,1,1234,345,39,3,213,2,8,7];
console.log(findPrimeNumber(numbers));