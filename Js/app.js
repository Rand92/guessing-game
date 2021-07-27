'use strict';
let score = 0
let username = prompt('what is your name?');
alert('welcome to my website dear ' + username);


let q1 = prompt('my first name is Rand,right?').toLowerCase();
switch(q1) {
    case 'yes':
    case 'y' :
        // console.log('yes');
        alert('yes!That is right!');
        score++
        break ;
    case 'no' :
    case 'n' :
        // console.log('no');
        alert('Rand is my first name');
        break ;
}
let q2 = prompt('am i 30 year-old?').toLowerCase();
switch(q2) {
    case 'yes':
    case 'y' :
        // console.log('yes');
        alert('no! i am 28');
        break ;
    case 'no' :
    case 'n' :
        // console.log('no');
        alert('that is right ,i am 28');
        score++
        break ;
}
let q3 = prompt('am i a civil engineer?').toLowerCase();
switch(q3) {
    case 'yes':
    case 'y' :
        // console.log('yes');
        alert('yes! i am');
        score++
        break ;
    case 'no' :
    case 'n' :
        // console.log('no');
        alert('i am a civil engineer');
        break ;
}
let q4 = prompt("i've graduated from AAU ,is that right?").toLowerCase();
switch(q4) {
    case 'yes':
    case 'y' :
        // console.log('yes');
        alert('yes!');
        score++
        break ;
    case 'no' :
    case 'n' :
        // console.log('no');
        alert('yes! is the right answer');
        break ;
}
let q5 = prompt('i have a 5 years of work experience ,yes?').toLowerCase();
switch(q5) {
    case 'yes':
    case 'y' :
        // console.log('yes');
        alert('no, just 3 ');
        break ;
    case 'no' :
    case 'n' :
        // console.log('no');
        alert('i worked for 3 years');
        score++
        break ;
}
let correctNum = 20;
let q6 = parseInt(prompt('lets play a fun game!, guess a number?'));
let counter = 0
for (let i = 0; i < 3; i++) {
    if (q6 < correctNum) {
        alert('too low'); counter++
        q6 = parseInt(prompt('lets play a fun game!, guess a number?'));
    }
    else if (q6 > correctNum) {
        counter++
        alert('too high'); q6 = parseInt(prompt('lets play a fun game!, guess a number?'));
    }
    else if (q6 === correctNum) {
        alert('you guessed right!');
        score++
        break;
    }
}
 if (counter ==3) { alert('wrong guessing ,see you next time! the correct answer is  ' + correctNum) };

let favmovie = ['the vow', 'you and me', 'beautiful mind', 'the hunger game'];
let count = 6

for (let i = 0 ; i < 6; i++) {
    let q7 = prompt('guess one of my fav movies?[the vow, you and me, beautiful mind, the hunger game]').toLowerCase();
    document.write(q7)
    if (count == 0) {
        alert('good job'); count--
        break;
    }
    for (let b = 0; b < favmovie.length; b++) {
        if (q7 == favmovie[b]) {
            alert('correct answer')
        i = 6 ;
        score++
            break;
        }
        else if (b == favmovie.length - 1) { alert('incorrect answer') }

    }

}
alert ( 'the correct answers the vow, beautiful mind') ;


alert ('your score is  '+ score);


alert('Hope you enjoyed  ' + username + '  stay safe ^_^');