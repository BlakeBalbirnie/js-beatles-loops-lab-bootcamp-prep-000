'use strict';

function theBeatlesPlay(arrayOfMusicians, arrayOfInstruments) {
  var membersInstruments = [];
  for (var i = 0; i < arrayOfMusicians.length; i++) {
    membersInstruments.push(arrayOfMusicians[i] + " plays " + arrayOfMusicians[i]);
  }
  return membersInstruments;
}

function johnLennonFacts() {
  var facts = ["He was the last Beatle to learn to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var exclamationFacts = [];
  while (facts != '') {
    exclamationFacts.push(facts[0] + "!!!");
    facts.shift();
  }
return exclamationFacts;
}

function iLoveTheBeatles(num) {
  var newArray = [];
  do {
    newArray.push("I love the Beatles!");
    num++;
  } while (num < 15);
  return newArray;
}
