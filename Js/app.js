'use strict' ;

let username = prompt('what is your name?');
alert ('welcome to my website dear ' + username);


let q1 = prompt('my first name is Rand,right?').toLowerCase();
switch(q1) {
    case 'yes':
    case 'y' :
        // console.log('yes');
        alert('yes!That is right!');
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
        break ;
}
let q3 = prompt('am i a civil engineer?').toLowerCase();
switch(q3) {
    case 'yes':
    case 'y' :
        // console.log('yes');
        alert('yes! i am');
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
        break ;
}

alert ('Hope you enjoyed  ' + username + '  stay safe ^_^');