// guessing game
  
'use strict';
var yourPoints = 0;

var gistName = prompt(
    'hello, welcome to my profile, could you please tell me your name?'
);
// if the user insert invaled or number value, while, do and parseInt will solve the problem
while (!isNaN(parseInt(gistName))) {
    gistName = prompt(' please use letters.Could you please tell me your name?');
}
 // console.log(gistName);
alert(' Welcome' + ' ' + gistName + ' ' + 'to my profile');



//first question

function firstQuestion(){
    var firstQ = prompt('Do you think  my name Shadi or Shado?').toUpperCase();
    while (
        firstQ !== 'N' &&
        firstQ !== 'NO' &&
        firstQ !== 'YES' &&
        firstQ !== 'Y'
    ) {
        firstQ = prompt('Remember its a YES or NO question \n Question -> Do you think  my name Shadi or Shado?').toUpperCase();
    }
    
    switch (firstQ) {
        case 'Y':
        case 'YES':
            alert('that\'s correct,' + '  ' + gistName + ' '+ 'my name is Shadi :) ');
            break;
        case 'N':
        case 'NO':
            alert('Hmmm :(, No My name is Shadi or Shadooo');
    }
}
firstQuestion();

function secondQuestion(){
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
       
        hostHoppy = prompt('Remember its a Yes/No question\nQuestion - > Do I like to watch Sports matches?!').toLowerCase();
    }
    
    // // points counter (to count how many correct answers the user do)
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
}
secondQuestion();



function thirdQuestion() {
    for (var Age = 0; Age < 6; Age++) {
        var hostAge = parseInt(
            prompt(gistName + ' ' + 'Could you please guess my age')
        );
        while (isNaN(hostAge)) {
            hostAge = parseInt(prompt('Enter my age here'));
        }
        if (hostAge <= 10) {
            alert('ya reeeeet walla :) Akbr bkteeeer ha ha ha :) ');
        } else if (hostAge === 29) {
            alert('WoW -> Right');
            yourPoints += 1;
            break;
        } else if (hostAge >= 30) {
            alert('NO NO NO NO , tooooo old ya rajel :) , Try Try');
        } else if (25 < hostAge < 30) {
            alert('gitting close, keep rying');
        }
    }
    alert('I am 29 years old');
    // console.log(hostAge);
}
thirdQuestion();

function fourthQuestion(){
    var questions = [
        'You Think I\'m like a sea food? (yes/no)',
        'You Think I\'m like a pet (yes/no)',
     
    ];
    var answers = ['yes I am', 'No Im not'];
    
    for (var i = 0; i < questions.length; i++) {
        var getQuestions = questions[i];
    
        var questionShown = prompt(gistName + ' ' + getQuestions);
    
        // if the user insert number value, while, do and parseInt will solve the problem
        while (
            questionShown !== 'y' &&
            questionShown !== 'yes' &&
            questionShown !== 'n' &&
            questionShown !== 'no'
         
        ) {
            questionShown = prompt('Answer by (yes / no) :),Questions - > +'+getQuestions);
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
     
                alert('sorry, but yes' + ' ' + answers[1]);
                break;
            default:
                alert('Hmmm You don\'t know me !!!!!!! WAYYYY..');
        }
    }
}
fourthQuestion();



var likeCar = [
    'bmw',
    'mincoper',
    'suparo',
    
];

function favCar() {
    for (var i = 0; i < 2; i++) {
        var gistAnswer = prompt(
            'What is My favourite Car brand?' + ' BMW, Mincoper, Suparo'
        ).toLowerCase();
        var attemptNum = 0;
        for (var j = 0; j < likeCar.length; j++) {
            if (gistAnswer === likeCar[j]) {
                alert('yes, I like this brand');
                alert(
                    'My fav car brands are BMW, Mincoper, Suparo'
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

function sixthQuestion(){
// Q -> 6
var sixQ = prompt('After all my skills on the site, do you think I am a professional programmer?').toUpperCase();
while (
    sixQ !== 'N' &&
    sixQ !== 'NO' &&
    sixQ !== 'YES' &&
    sixQ !== 'Y'
) {
    sixQ = prompt('Remember its a YES or NO question \n Question -> After all my skills on the site, do you think I am a professional programmer?').toUpperCase();
}

switch (sixQ) {
    case 'Y':
    case 'YES':
        alert('that\'s correct,' + '  ' + gistName + ' '+ 'i\'m professional programmer withh JS) ');
        yourPoints += 1;
        break;
    case 'N':
    case 'NO':
        alert('Hmmm :( WHY!!!!! , But i\'m professional programmer withh JS :)');
}
}
sixthQuestion();

function seventhQuestion(){
    var sevenQ = prompt(
        gistName + ' ' + 'Do you think I am comfortable working with a team of different cultures??! (yes/no)'
    ).toLowerCase();
    // if the user insert number value, while, do and parseInt will solve the problem
    while (
        sevenQ !== 'y' &&
        sevenQ !== 'yes' &&
        sevenQ !== 'n' &&
        sevenQ !== 'no'
    ) {
       
        sevenQ = prompt('Remember its a Yes/No question\nQuestion - > Do you think I am comfortable working with a team of different cultures?').toLowerCase();
    }
    switch (sevenQ) {
        case true:
        case 'y':
        case 'yes':
            alert('Yaaa , This is my dream to look at the beauty of a difference, the world around me');
            alert('Congrats');
            yourPoints += 1;
            break;
        case false:
        case 'no':
        case 'n':
        
            alert(
                'Sooooo sorry, but I like to work with different cultures?'
            );
            break;
        default:
            alert('Yaaa , This is my dream to look at the beauty of a difference, the world around me');
    }
}
seventhQuestion();

alert('you have owned ' + ' ' + yourPoints + ' ' + 'out of 7 Congrats !!!');