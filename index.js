//A function that accepts a string as input and swaps the case of each character.

// set a const for the sentence , and call a function called swap.
const line = "The Quick Brown Fox";

function swap(sentence) {
  // split the sentenece into words and use an array to collect modified words
  let words = sentence.split(" ");
  let mixedSentence = [];

  //  use iteration for every character in the sentence and convert sentence to lowercase

  for (let i = 0; i < words.length; i++) {
    let word = words[i].toLowerCase();
    //Generate an empty string to use for the mixed-case
    let mixedWord = "";
    //use iteration for every character again and test if the integer is even or odd
    for (let t = 0; t < word.length; t++) {
      if (t % 2 === 0) {
        // Put lowercase if the character is even and uppercase if its odd
        mixedWord += word[t].toLowerCase();
      } else {
        mixedWord += word[t].toUpperCase();
      }
    }
    //Push the new mixed case into the array
    mixedSentence.push(mixedWord);
  }
  //Join the new array in one string and give it space between
  return mixedSentence.join(" ");
}


