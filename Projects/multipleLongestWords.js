//A function that returns words in a sentence which are the longest if icase they are multiple

function findLongestWord(sentence)
{
    //Splitting the sentence into array of words
    const words = sentence.split(' ');

    //Initializing the maximum length and longestWords array to be stored
    let maxLength = 0;
    let longestWords = [];

    //Iterate through the words in the array
    for (let word of words )
    {
        //Check if the current word length is greater than maxLength
        if (word.length > maxLength)
        {
            //Updating maxLength to be the length of current word
            maxLength = word.length;
            //Clear the longestWords array and add the current word to it
            longestWords = [word];
        }
        else if (word.length == maxLength)//checking if the current word length is equal to the maxLength
        //Add the current word to the longestWords array
        {
            longestWords.push(word);

        }
    }
    return longestWords;
}
console.log(findLongestWord("I am going to cook chapati"));
console.log(findLongestWord("Practicing to program Javascript"));
console.log(findLongestWord("I am dancing"));
console.log(findLongestWord("Playing netball"));