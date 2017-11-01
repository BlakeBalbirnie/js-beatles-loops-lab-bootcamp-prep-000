'use strict';

function theBeatlesPlay(players, instruments) {
  var allPlayers = [];
  for (var i=0; i < players.length; i++) {
    allPlayers.push(players[i] + " plays " + instruments[i]);
  }
  return allPlayers;
}

function johnLennonFacts() {
  var facts = ["He was the last beatle to drive", "He was never a vegetarian", "He was a choir boy and boy scout", "He hated the sound of his own voice"];
  var newFacts = [1];
  var i = 0;
  while (i < fact.length) {
    newFacts.push(facts[i] +"!!!");
    i++;
  }
  return newFacts;
}