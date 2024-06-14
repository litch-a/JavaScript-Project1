//A function that checks for he longest word in a sentence and returns it
function findLongestWord(sentence)
{
    const words = sentence.split(' ');

    //Initializing the longestwords to an empty string
    let longestword = '';

    //Iterating through the sentence to check for longest word
    for (let word of words)
    {
        //checking the condition if the word is longest than the other one
        if(word.length > longestword.length)
        {
            longestword = word;
        }
    }
    return longestword;
}

console.log(findLongestWord("I am going to cook chapati"));
console.log(findLongestWord("Practicing to program Javascript"));
console.log(findLongestWord("I am dancing"));
console.log(findLongestWord("Playing netball"));