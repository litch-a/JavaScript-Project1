//A function that checks for the smallest number in an array of numbers

function findSmallestNumber(array)
{
    //Check if the array of numbers is empty
    if (array == 0)
    {
        return undefined; //Return empty
    }
    let smallestNumber = array[0];//Initializing the smallest number to be the first element in the array

    //Iteration
    for (let i = 1; i < array.length; i++)
    {
     if (array[i] < smallestNumber)
     {
        smallestNumber = array[i];
     }
    }
    return smallestNumber;
}

const numbers = [19,20,98,90,67,5,44,1];
console.log(findSmallestNumber(numbers));