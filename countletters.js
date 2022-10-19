const countLetters = function(sentence){
  let result = {};
  sentence = sentence.toUpperCase()
  for (const letter of sentence) {
    console.log(letter);
    if (letter !== ' '){
      if (result[letter]) {
        result[letter]++;
      } else {
        result[letter] = 1;
      }
    }
  }
  return result;
}

const phrase = "lighthouse in the house";
console.log(countLetters(phrase));