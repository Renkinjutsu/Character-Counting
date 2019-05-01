function countLetters(phrase) {
  let output = {}
  let lettersThatHaveAppeared = [];
  phrase = phrase.toLowerCase();
  for (let i = 0; i < phrase.length; i++) {
    if (phrase[i] == " ") {
    }
    else if (!lettersThatHaveAppeared.includes(phrase[i])) {
      output[phrase[i]] = [i];
      lettersThatHaveAppeared.push(phrase[i]);
    } else {
      output[phrase[i]].push(i);
    }
  }
  return output;
}
console.log(countLetters("Lighthouse in the house"));
