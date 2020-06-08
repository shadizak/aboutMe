// guessing game  
'use strict';

var gistName = prompt(
    'hello, welcome to my profile, could you please tell me your name?'
);
// if the user insert invaled or number value, while, do and parseInt will solve the problem
while (!isNaN(parseInt(gistName))) {
    gistName = prompt(' please use letters.');
}
// // console.log(gistName);
alert(' Welcome' + ' ' + gistName + ' ' + 'to my profile');


//first question
var firstQ = prompt('Do you think  my name Shadi or Shado?').toUpperCase();
while (
    firstQ !== 'N' &&
    firstQ !== 'NO' &&
    firstQ !== 'YES' &&
    firstQ !== 'Y'
) {
    firstQ = prompt('Remember its a YES or NO question').toUpperCase();
}

switch (firstQ) {
    case 'Y':
    case 'YES':
        alert('thats correct,' + '  ' + gistName + 'my name is Shadi :) ');
        break;
    case 'N':
    case 'NO':
        alert('Hmmm :(, No My name is Shadi');
}

// // second question
var hostHoppy = prompt(
    gistName + ' ' + 'Do I like to watch Sports matches?! (yes/no)'
).toLowerCase();
// if the user insert number value, while, do and parseInt will solve the problem
while (
    hostHoppy !== 'y' &&
    hostHoppy !== 'yes' &&
    hostHoppy !== 'n' &&
    hostHoppy !== 'no'
) {
   
    hostHoppy = prompt('Remember its a Yes/No question').toLowerCase();
}

// // points counter (to count how many correct answers the user do)
var yourPoints = 0;
// // define the yes/y as possitive answer and no/n as negative answer
switch (hostHoppy) {
    case true:
    case 'y':
    case 'yes':
    
        alert('yes I do');
        alert('Congrats');
        yourPoints += 1;
        break;
    case false:
    case 'no':
    case 'n':
    
        alert(
            'Sooooo sorry, but I like to watch Sports matches'
        );
        break;
    default:
        alert('yes I like watching Sports matches');
}

// -------------------------------------------------------------------------------------------------------------
// in this section of the game I used the If statment, for loops, functions and arrays.
//third question 4 oppertonities

function yesNo() {
    for (let Age = 0; Age < 4; Age++) {
        var hostAge = parseInt(
            prompt(gistName + ' ' + 'Could you please guess my age')
        );
        while (isNaN(hostAge)) {
            hostAge = parseInt(prompt('Enter my age here'));
        }
        if (hostAge <= 10) {
            alert('ya reeeeet ');
        } else if (hostAge === 29) {
            alert('right');
            yourPoints += 1;
            break;
        } else if (hostAge >= 30) {
            alert('NO NO NO NO , tooooo old, ahahahhaha  :');
        } else if (25 < hostAge < 30) {
            alert('gitting close, keep rying');
        }
    }

    alert('I am 29 years old');
    // console.log(hostAge);
}
yesNo();

// arrays
var questions = [
    'You Think I\'m like a sea food? (yes/no)',
    'You Think I\'m like a pet (yes/no)',
 
];
var answers = ['yes I am', 'No Im not'];

for (let i = 0; i < questions.length; i++) {
    var getQuestions = questions[i];

    var questionShown = prompt(gistName + ' ' + getQuestions);

    // if the user insert number value, while, do and parseInt will solve the problem
    while (
        questionShown !== 'y' &&
        questionShown !== 'yes' &&
        questionShown !== 'n' &&
        questionShown !== 'no' 
     
    ) {
        questionShown = prompt('Answer by (yes / no) :) ');
    }
    var gistAnswer_3 = questionShown.toUpperCase();
    console.log(gistAnswer_3);
    switch (gistAnswer_3) {
        case 'Y':
        case 'YES':
      
            alert('great answer' + ' ' + answers[0]);
            alert('You have got a point, congrats');
            yourPoints += 1;
            break;
        case 'N':
        case 'NO':
 
            alert('sorry, but yes I do' + ' ' + answers[1]);
            break;
        default:
            alert('Hmmm You don\'t know me !!!!!!! WAYYYY..');
    }
}

var likeCar = [
    'BMW',
    'BMW',
    'BMW',
    
];

function favCar() {
    for (let i = 0; i < 2; i++) {
        var gistAnswer = prompt(
            'What is My favourite Car brand?' + ' BMW, BMW, BMW'
        ).toLowerCase();
        var attemptNum = 0;
        for (var j = 0; j < likeCar.length; j++) {
            if (gistAnswer === likeCar[j]) {
                alert('yes, I like this brand');
                alert(
                    'My fav car brands are BMW, BMW, BMW, BMW, BMW, but each car diff. Color ha ha ha ha'
                );
                yourPoints += 1;
                break;
            } else {
                attemptNum = attemptNum + 1;
            }
        }

        if (attemptNum > 5) {
            alert('wrong answer, sorry');
        } else {
            break;
        }
    }
}
favCar();
alert('you have owned ' + ' ' + yourPoints + ' ' + 'out of 5 Congrats !!!');