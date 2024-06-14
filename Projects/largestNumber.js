//A function that checks for the largest number in an array of numbers

function findLargestNumber(array)
{
    if (array.length == 0)//checking in the array if it is empty
    {
        return undefined;
    }
    let largestNumber = array[0];//initializing the nummber to take as the first element

    for (let i=1; i<array.length; i++)//iterating through the array with numbers
    {
        if (array[i] > largestNumber)//if the number is bigger than the largest number, he number becomes the largest number
        {
            largestNumber = array[i];
        }
    }
    return largestNumber;
}

const numbers = [2,87];
console.log(findLargestNumber(numbers));