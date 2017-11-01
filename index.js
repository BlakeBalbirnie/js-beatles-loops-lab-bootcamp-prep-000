function theBeatlesPlay(arrayOfMusicians, arrayOfInstruments) {
  var membersInstruments = [];
  for (var i = 0; i < arrayOfMusicians.length; i++) {
    membersInstruments.push(arrayOfMusicians[i] + " plays " + arrayOfMusicians[i]);
  }
  return membersInstruments;
}

function johnLennonFacts(facts) {
  var arr = []
  let i = facts.length
  let j = 0
  while (i != 0) {
    arr.push('${facts[j]}' + "!!!")
    --i
    ++j
  }
  return arr
}

function iLoveTheBeatles(num) {
  var newArray = [];
  do {
    newArray.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return newArray;
}
