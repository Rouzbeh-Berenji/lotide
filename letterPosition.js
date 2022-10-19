const letterPositions = function(sentence){
  let result = {};
  sentence = sentence.toUpperCase()
  for (const letter of sentence) {
    console.log(letter);
    if (letter !== ' '){
      if (result[letter]) {
        result[letter].push(sentence.indexOf(letter));
      } else {
        result[letter] = [sentence.indexOf(letter)];
      }
    }
  }
  return result;
}
const phrase = "lighthouse in the house";
console.log(letterPositions(phrase));
