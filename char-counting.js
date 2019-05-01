function countLetters(phrase) {
  let output = {}
  let lettersThatHaveAppeared = [];
  phrase = phrase.split(' ').join('').toLowerCase();
  for (let i = 0; i < phrase.length; i++) {
    if (!lettersThatHaveAppeared.includes(phrase[i])) {
      output[phrase[i]] = 1
      lettersThatHaveAppeared.push(phrase[i]);
    } else {
      output[phrase[i]] += 1
    }
  }
  return output;
}
console.log(countLetters("Lighthouse in the house"));