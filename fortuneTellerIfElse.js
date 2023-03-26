let userName = 'Louise';

userName === 'Louise' ? console.log('Hello Louise!') 
: console.log('Hello!'); // This is a terary expression

let userQuestion = 'Will my neighbour get laid tonight?';

console.log(`${userName}, you have asked Fupa the Fortune Teller: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);
// random number x 8 and rounded down to the nearest whole number.

let eightBall = '';

if (randomNumber === 0){
  eightBall = 'Stop bothering me.';
} else if (randomNumber === 1){
  eightBall = 'It is certain.';
} else if (randomNumber === 2){
  eightBall = 'It is for sure.';
}else if (randomNumber === 3){
  eightBall = 'It is dumb.';
}else if (randomNumber === 4){
  eightBall = 'It is no.';
}else if (randomNumber === 5){
  eightBall = 'It is yes';
}else if (randomNumber === 6){
  eightBall = 'It is up my bum.';
}else if (randomNumber === 7){
  eightBall = 'It is enough.';
}else if (randomNumber === 8){
  eightBall = 'It is boring.';
}else {
  eightBall = "I'm tired, go away.";
}

console.log(`Fupa the Fortune Teller says: ${eightBall}`);