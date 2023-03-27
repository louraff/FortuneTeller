let userName = 'Louise';

userName === 'Louise' ? console.log('Hello Louise!') 
: console.log('Hello!'); // This is a terary expression

let userQuestion = 'Will my neighbour get laid tonight?';

console.log(`${userName}, you have asked Fupa the Fortune Teller: ${userQuestion}`);

let randomNumber = Math.floor(Math.random() * 8);
// random number x 8 and rounded down to the nearest whole number.

let eightBall = '';

switch (randomNumber){
    case 0:
    eightBall = 'Stop bothering me.'
    break;
    case 1:
    eightBall = 'It is certain.';
    break;
    case 2:
    eightBall = 'It is decidedly so.';
    break;
    case 3:
    eightBall = 'Reply hazy try again,';
    break;
    case 4:
    eightBall ='Cannot predict now.';
    break;
    case 5:
    eightBall = 'Do not count on it.';
    break;
    case 6:
    eightBall = 'My sources say no.';
    break;
    case 7:
    eightBall = 'Outlook not so good.';
    break;
    case 8:
    eightBall = 'Signs point to yes.';
    break;
    default:
    eightBall = 'You made a stinky spin, try again.';
    break;
}

console.log(`Fupa the Fortune Teller says: ${eightBall}`);