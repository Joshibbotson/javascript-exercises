const ftoc = function(temp) {

const answer = (temp - 32) * 0.5556;
const deciimalAnswer = Number(answer.toFixed(1))
return deciimalAnswer;
};

ftoc(100)

const ctof = function(temp) {

const answer = (temp * 1.8) + 32;
const deciimalAnswer = Number(answer.toFixed(1))
return deciimalAnswer;
};


ctof (34)
// should return `37.8` and not `37.77777777777778`.
// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
