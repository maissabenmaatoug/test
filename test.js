function findLongestWord(phrase) {
    //  remove non alphabetic characters and split the phrase into words
    const words = phrase.replace(/[^a-zA-Z\s]/g, '').split(' ');

    let longestWord = '';
    let maxVowels = 0;

    // find the longest word and count vowels
    words.forEach(word => {
        const vowelCount = word.replace(/[^aeiouAEIOU]/g, '').length;
    // compare lengths and vowel counts to find the longest word with most number of vowels
        if (word.length > longestWord.length || (word.length === longestWord.length && vowelCount > maxVowels)) {
            longestWord = word;
            maxVowels = vowelCount;
        }
    });

    // return the longest word with the most number of vowels
    return longestWord;
}

//  input
const phrase = "Smart people learn from everything and everyone, average people from their experience, stupid people already, have all the answers (Socrates)";

// Output
console.log('The output is:',findLongestWord(phrase)); 

//You can test it with node test.js
