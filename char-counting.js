function countLetters(phrase) {
  let output = {}
  let lettersThatHaveAppeared = [];
  phrase = phrase.toLowerCase();
  phrase = phrase.split(' ').join('');
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

console.log(countLetters('Lighthouse in the house'));

  /*
=======
console.log(countLetters('Finalllfffiinfiinfinallly'));
/*
>>>>>>> ee19e6a58dd7a82e5658f1e014747855b1259e2d
  for (let i = 0; i < phrase.length; i++) {
    output[phrase[i]] = phrase[i]["count"]
  }
// { p : "count"}

for (){
  output["phrase[i]"] =+ 1
}
}

output {
  a: 0
}
var Letter = function (letter) {
  return {
  count: 0,
  countNumber: function(count) {
    this.count += 1;
    }
  }
}
var a = new Letter;

console.log(a);
/* a {
count:0
counterNumber()
}

*/
